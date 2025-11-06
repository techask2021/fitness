import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { blogPosts } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: "Health & Wellness Blog | Fitness Friendly Recipes",
  description: "Expert health tips, nutrition guides, fitness insights, and wellness advice. Learn how to improve your health, make better food choices, and achieve your fitness goals.",
  keywords: "health blog, wellness blog, nutrition tips, fitness advice, healthy living, wellness articles, health guides",
  openGraph: {
    title: 'Health & Wellness Blog | Fitness Friendly Recipes',
    description: 'Expert health tips, nutrition guides, and fitness insights to support your wellness journey.',
    type: 'website',
  },
};

const categories = ['All', 'Health & Wellness', 'Nutrition Tips', 'Fitness'];
const POSTS_PER_PAGE = 6;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }> | { page?: string };
}) {
  const resolvedParams = searchParams instanceof Promise ? await searchParams : searchParams;
  const currentPage = Number(resolvedParams.page) || 1;
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const paginatedPosts = blogPosts.slice(startIndex, endIndex);
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100/30 via-pink-100/30 to-purple-100/30 dark:from-purple-900/10 dark:via-pink-900/10 dark:to-purple-900/10 rounded-3xl blur-3xl -z-10"></div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 bg-clip-text text-transparent mb-4 sm:mb-6 leading-tight px-2">
            Health & Wellness Blog
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed px-2">
            Expert tips, guides, and insights to support your fitness and wellness journey
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-2">
          {categories.map((category) => (
            <button
              key={category}
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-200 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 border-2 border-purple-200 dark:border-purple-700 hover:border-purple-400 dark:hover:border-purple-500 hover:shadow-lg transform hover:scale-105"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {paginatedPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-850 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transform hover:scale-[1.02]"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-2 sm:mb-3 flex-wrap">
                  <span className="text-xs sm:text-sm text-purple-600 dark:text-purple-400 font-semibold bg-purple-50 dark:bg-purple-900/30 px-2 sm:px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold text-sm sm:text-base">
                  Read More
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 sm:mb-12">
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Showing {startIndex + 1}-{Math.min(endIndex, blogPosts.length)} of {blogPosts.length} articles
            </div>
            <div className="flex items-center gap-2">
              {currentPage > 1 && (
                <Link
                  href={`/blog${currentPage === 2 ? '' : `?page=${currentPage - 1}`}`}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border-2 border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all shadow-md hover:shadow-lg"
                >
                  ← Previous
                </Link>
              )}
              <div className="flex items-center gap-1 sm:gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <Link
                        key={page}
                        href={`/blog${page === 1 ? '' : `?page=${page}`}`}
                        className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base min-w-[40px] text-center transition-all ${
                          page === currentPage
                            ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                            : 'bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border-2 border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/30 shadow-md hover:shadow-lg'
                        }`}
                      >
                        {page}
                      </Link>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return (
                      <span
                        key={page}
                        className="px-2 text-gray-400 dark:text-gray-600"
                      >
                        ...
                      </span>
                    );
                  }
                  return null;
                })}
              </div>
              {currentPage < totalPages && (
                <Link
                  href={`/blog?page=${currentPage + 1}`}
                  className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 border-2 border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all shadow-md hover:shadow-lg"
                >
                  Next →
                </Link>
              )}
            </div>
          </div>
        )}


        {/* Newsletter Signup (Optional) */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
            Stay Updated
          </h2>
          <p className="text-base sm:text-lg text-blue-50 mb-4 sm:mb-6 max-w-2xl mx-auto">
            Get notified when we publish new articles and health guides.
          </p>
          <p className="text-sm sm:text-base text-blue-100">
            Newsletter coming soon!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

