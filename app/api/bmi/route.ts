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

    const url = `https://${apiHost}/api/bmi?${queryParams.toString()}`;

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
      try {
        const errorData = JSON.parse(responseText);
        errorMessage = errorData.message || errorData.error || errorMessage;
        console.error('BMI API error response:', {
          status: response.status,
          statusText: response.statusText,
          errorData,
          url
        });
      } catch {
        errorMessage = responseText || errorMessage;
        console.error('BMI API error (text):', {
          status: response.status,
          statusText: response.statusText,
          errorText: responseText,
          url
        });
      }
      return NextResponse.json(
        { error: errorMessage },
        { status: response.status }
      );
    }

    // Parse successful response
    try {
      const data = JSON.parse(responseText);
      return NextResponse.json(data);
    } catch (parseError) {
      console.error('Failed to parse BMI API response:', {
        responseText,
        parseError,
        url
      });
      return NextResponse.json(
        { error: 'Invalid response format from API' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('BMI API error:', error);
    
    if (error instanceof Error && error.name === 'AbortError') {
      return NextResponse.json(
        { error: 'Request timeout. Please try again.' },
        { status: 408 }
      );
    }

    return NextResponse.json(
      { error: 'Failed to fetch BMI data. Please try again later.' },
      { status: 500 }
    );
  }
}

