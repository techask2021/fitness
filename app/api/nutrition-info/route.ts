import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // Build query string from search params
    const queryParams = new URLSearchParams();
    searchParams.forEach((value, key) => {
      queryParams.append(key, value);
    });

    const apiKey = process.env.RAPIDAPI_KEY;
    const apiHost = process.env.RAPIDAPI_HOST || 'nutrition-calculator.p.rapidapi.com';

    if (!apiKey) {
      return NextResponse.json(
        { error: 'API key is not configured' },
        { status: 500 }
      );
    }

    const url = `https://${apiHost}/api/nutrition-info?${queryParams.toString()}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost,
      },
      // Add timeout
      signal: AbortSignal.timeout(10000), // 10 seconds
    });

    // Read response text first, then parse as JSON
    const responseText = await response.text();
    
    if (!response.ok) {
      let errorMessage = `API request failed: ${response.statusText}`;
      
      // Check if response is HTML (error pages often return HTML)
      if (responseText.trim().startsWith('<!') || responseText.includes('<html')) {
        // Extract meaningful error from HTML if possible
        const titleMatch = responseText.match(/<title>(.*?)<\/title>/i);
        const h1Match = responseText.match(/<h1>(.*?)<\/h1>/i);
        const pMatch = responseText.match(/<p>(.*?)<\/p>/i);
        
        if (titleMatch) errorMessage = titleMatch[1];
        else if (h1Match) errorMessage = h1Match[1];
        else if (pMatch) errorMessage = pMatch[1];
        else errorMessage = `Server error: ${response.statusText}`;
        
        console.error('Nutrition API HTML error response:', {
          status: response.status,
          statusText: response.statusText,
          errorMessage,
          url
        });
      } else {
        // Try to parse as JSON
        try {
          const errorData = JSON.parse(responseText);
          errorMessage = errorData.message || errorData.error || errorMessage;
          console.error('Nutrition API error response:', {
            status: response.status,
            statusText: response.statusText,
            errorData,
            url
          });
        } catch {
          // Use raw text if not JSON and not HTML
          errorMessage = responseText || errorMessage;
          console.error('Nutrition API error (text):', {
            status: response.status,
            statusText: response.statusText,
            errorText: responseText.substring(0, 200),
            url
          });
        }
      }
      
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    // Parse successful response
    try {
      const data = JSON.parse(responseText);
      console.log('Nutrition API successful response:', {
        hasCalories: !!data.calories,
        hasProtein: !!data.protein,
        hasCarbs: !!data.carbohydrates,
        hasFats: !!data.fats,
        dataKeys: Object.keys(data)
      });
      return NextResponse.json(data);
    } catch (parseError) {
      console.error('Failed to parse nutrition API response:', {
        responseText: responseText.substring(0, 500), // Log first 500 chars
        parseError,
        url
      });
      return NextResponse.json(
        { error: 'Invalid response format from API' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Nutrition Info API error:', error);
    
    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Request timeout. Please try again.' },
        { status: 408 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to fetch nutrition data. Please try again later.' },
      { status: 500 }
    );
  }
}

