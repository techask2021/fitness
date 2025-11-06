import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // This will be populated when you add real blog posts
  return {
    title: "Blog Post | Fitness Friendly Recipes",
    description: "Read our latest health and wellness blog post",
  };
}

// Blog post content structure
interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  content: string;
  author?: string;
}

// Placeholder - replace with real data source (CMS, markdown files, etc.)
async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // This is a placeholder - you'll replace this with actual data fetching
  // when you provide the blog content
  return {
    slug,
    title: 'Blog Post Coming Soon',
    category: 'Health & Wellness',
    date: 'Coming Soon',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    content: `
      <p>This blog post is coming soon! We're working on creating valuable content for you.</p>
      <p>Check back later for expert health tips, nutrition guides, and wellness insights.</p>
    `,
    author: 'Fitness Friendly Recipes Team'
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-semibold mb-6 sm:mb-8 transition-colors group"
        >
          <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-xl overflow-hidden border-2 border-gray-200 dark:border-gray-700">
          {/* Featured Image */}
          <div className="relative h-64 sm:h-80 md:h-96 w-full">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="p-6 sm:p-8 md:p-12">
            {/* Category & Date */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6 flex-wrap">
              <span className="text-sm sm:text-base text-purple-600 dark:text-purple-400 font-semibold bg-purple-50 dark:bg-purple-900/30 px-3 sm:px-4 py-1 sm:py-2 rounded-full">
                {post.category}
              </span>
              <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                {post.date}
              </span>
              {post.author && (
                <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400">
                  by {post.author}
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-6 sm:mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:bg-gradient-to-r prose-headings:from-purple-600 prose-headings:via-pink-600 prose-headings:to-purple-600 prose-headings:bg-clip-text prose-headings:text-transparent
                prose-a:text-purple-600 prose-a:dark:text-purple-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-gray-900 prose-strong:dark:text-gray-100
                prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-p:leading-relaxed
                prose-ul:text-gray-700 prose-ul:dark:text-gray-300
                prose-ol:text-gray-700 prose-ol:dark:text-gray-300
                prose-li:text-gray-700 prose-li:dark:text-gray-300
                mb-8 sm:mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Coming Soon Notice */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 sm:p-8 border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start gap-4">
                <div className="text-4xl sm:text-5xl">📝</div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-purple-900 dark:text-purple-100 mb-2 sm:mb-3">
                    Content Coming Soon
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    This blog post is currently being prepared. We're working on creating valuable, well-researched content to help you on your health and wellness journey. Check back soon!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Navigation to Other Posts */}
        <div className="mt-8 sm:mt-12">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-850 rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-700 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Explore More Articles
            </h2>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View All Blog Posts
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

