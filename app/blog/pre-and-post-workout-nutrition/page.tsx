import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getBlogPostBySlug } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: "Pre and Post-Workout Nutrition: What to Eat and When | Fitness Friendly Recipes",
  description: "Learn everything about pre and post-workout nutrition—what actually works, when to eat it, and why it matters for your fitness goals.",
  keywords: "pre workout nutrition, post workout nutrition, workout meals, exercise nutrition, fitness nutrition, muscle recovery",
};

export default function PreAndPostWorkoutNutritionPage() {
  const post = {
    title: 'Pre and Post-Workout Nutrition: What to Eat and When',
    category: 'Nutrition Tips',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Workout Nutrition.jpg',
    author: 'Fitness Friendly Recipes Team'
  };

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
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
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
            <div className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:text-gray-900 prose-headings:dark:text-gray-100 prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4 prose-headings:scroll-mt-20
              prose-h2:text-2xl prose-h2:sm:text-3xl prose-h2:font-extrabold prose-h2:bg-gradient-to-r prose-h2:from-blue-600 prose-h2:via-green-600 prose-h2:to-blue-600 prose-h2:bg-clip-text prose-h2:text-transparent prose-h2:border-b prose-h2:border-gray-200 prose-h2:dark:border-gray-700 prose-h2:pb-2 prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-xl prose-h3:sm:text-2xl prose-h3:text-gray-900 prose-h3:dark:text-gray-100 prose-h3:mt-6 prose-h3:mb-4 prose-h3:font-bold
              prose-p:text-gray-700 prose-p:dark:text-gray-300 prose-p:leading-relaxed prose-p:mb-4 prose-p:text-base prose-p:sm:text-lg
              prose-a:text-blue-600 prose-a:dark:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
              prose-ul:text-gray-700 prose-ul:dark:text-gray-300 prose-ul:mb-4 prose-ul:pl-6 prose-ul:space-y-2
              prose-li:text-gray-700 prose-li:dark:text-gray-300 prose-li:mb-2 prose-li:text-base prose-li:leading-relaxed
              prose-strong:text-gray-900 prose-strong:dark:text-gray-100 prose-strong:font-bold
            ">
              <p>
                Before we jump into the specifics, let me tell you what we're covering today. We're breaking down everything about pre and post-workout nutrition—what actually works, when to eat it, and why it matters for your fitness goals. We'll tackle the most common questions people have about fueling their workouts and recovering properly.
              </p>

              <p>
                Whether you're hitting the gym at 5 AM or squeezing in an evening session after work, the food choices you make before and after can seriously impact your results. So let's get into it.
              </p>

              <h2>Why Pre and Post-Workout Nutrition Actually Matters</h2>

              <p>
                Here's the thing—your body is basically a high-performance machine. You wouldn't run your car on empty and expect it to perform, right? Same logic applies here.
              </p>

              <p>
                The food you eat before working out gives you the energy to push harder. The food you eat after helps your muscles recover and grow stronger. It's that straightforward.
              </p>

              <p>
                But timing matters just as much as what you're eating. Studies show that strategic nutrient timing can improve performance by up to 20% and speed up recovery significantly. That's not small change when you're putting in the work at the gym.
              </p>

              <h2>What to Eat Before Your Workout</h2>

              <p>
                The pre-workout meal is your fuel tank. You want easily digestible carbs for quick energy, some protein to prevent muscle breakdown, and minimal fat that won't slow you down.
              </p>

              <h3>Timing Your Pre-Workout Meal</h3>

              <p>
                <strong>2-3 Hours Before:</strong> This is your window for a full meal. Your body has time to digest everything properly without causing stomach issues during your workout.
              </p>

              <p>
                Try combining complex carbs with lean protein. Think grilled chicken with brown rice and vegetables, or salmon with sweet potato. These meals give you sustained energy that lasts through even the longest training sessions.
              </p>

              <p>
                <strong>30-60 Minutes Before:</strong> Going for a quick snack instead? Keep it light and carb-focused. A banana with a tablespoon of almond butter works perfectly. So does Greek yogurt with berries or a small smoothie with protein powder.
              </p>

              <h3>Best Pre-Workout Foods</h3>

              <p>
                Oatmeal stands out as one of the best pre-workout options. It releases energy slowly, keeping you fueled throughout your entire session. Add some sliced banana and a scoop of protein powder for the perfect combination.
              </p>

              <p>
                Whole grain toast with avocado and eggs gives you quality carbs, healthy fats, and protein. It's balanced, filling, and won't sit heavy in your stomach.
              </p>

              <p>
                For those early morning workouts when you can't stomach a full meal, dates or dried fruit provide quick-acting natural sugars. Your body converts these into energy almost immediately.
              </p>

              <h2>Hydration Before Exercise</h2>

              <p>
                Everyone talks about what to eat, but water is just as critical. Dehydration can tank your performance faster than anything else.
              </p>

              <p>
                Drink 16-20 ounces of water 2-3 hours before training. Then another 8-10 ounces 20-30 minutes before you start. Your muscles are about 75% water—keep them topped up.
              </p>

              <p>
                For workouts longer than an hour, especially in hot conditions, consider adding electrolytes. Coconut water or a sports drink helps replace sodium and potassium lost through sweat.
              </p>

              <h2>What to Eat After Your Workout</h2>

              <p>
                This is where the magic happens. Your post-workout meal determines how well you recover, how quickly your muscles repair, and how ready you'll be for your next session.
              </p>

              <p>
                The 30-60 minute window after training is prime time. Your muscles are like sponges, ready to absorb nutrients and start rebuilding. Don't miss this opportunity.
              </p>

              <h3>The Protein Priority</h3>

              <p>
                Protein after working out is non-negotiable. Your muscles have microscopic tears that need repair. Protein provides the amino acids to do exactly that.
              </p>

              <p>
                Aim for 20-40 grams of quality protein post-workout. Research published in the Journal of the International Society of Sports Nutrition shows this range optimizes muscle protein synthesis.
              </p>

              <p>
                Chicken breast, fish, eggs, Greek yogurt, cottage cheese, or a quality whey protein shake all work excellently. Pick what fits your schedule and preferences.
              </p>

              <h3>Carbs for Recovery</h3>

              <p>
                Here's something many people get wrong—you need carbs after training too. They replenish your glycogen stores (your body's energy reserves) and help shuttle protein into your muscles more effectively.
              </p>

              <p>
                The ratio depends on your workout type. Heavy strength training? Go for a 1:1 or 2:1 carb to protein ratio. Intense cardio or endurance work? You might need 3:1 or even 4:1 to fully restore glycogen.
              </p>

              <p>
                White rice, potatoes, quinoa, pasta, or fruit all work great. Don't stress about "clean" versus "dirty" carbs here. Your body needs quick fuel after intense exercise.
              </p>

              <h2>Perfect Post-Workout Meal Combinations</h2>

              <p>
                Grilled chicken with white rice and steamed vegetables hits all the right notes. You get lean protein, fast-digesting carbs, and micronutrients for recovery.
              </p>

              <p>
                A protein smoothie made with whey protein, banana, berries, spinach, and milk provides everything in one convenient package. Perfect when you're short on time or don't have much appetite right after training.
              </p>

              <p>
                Eggs (whole, not just whites) with whole grain toast and avocado give you protein, carbs, and healthy fats. The combination supports hormone production and reduces inflammation.
              </p>

              <p>
                Tuna or salmon with pasta and a light sauce works wonderfully after longer workouts. The omega-3 fatty acids in fish reduce muscle soreness and speed up recovery.
              </p>

              <h2>Common Mistakes People Make</h2>

              <p>
                Training fasted might sound hardcore, but research shows it usually hurts performance more than it helps. Unless you're specifically training for fat adaptation, eat something before your workout.
              </p>

              <p>
                Waiting too long to eat after training is another huge mistake. That 60-90 minute window matters. The longer you wait, the less effective your recovery nutrition becomes.
              </p>

              <p>
                Going too low on carbs is a trap many people fall into. Yes, protein is important, but carbs are your body's preferred fuel source. Cutting them too aggressively will hurt your performance and recovery.
              </p>

              <h2>Special Considerations for Different Goals</h2>

              <h3>Building Muscle</h3>

              <p>
                Focus on higher protein (1.6-2.2 grams per kilogram of body weight daily) and don't fear carbs. You need them to fuel the intense training required for muscle growth.
              </p>

              <p>
                Post-workout, aim for the higher end of the protein range (30-40 grams) with plenty of carbs. Your muscles need both to grow.
              </p>

              <h3>Losing Fat</h3>

              <p>
                You can reduce overall calories, but don't skip pre and post-workout nutrition entirely. Strategic timing helps preserve muscle while you're in a deficit.
              </p>

              <p>
                Keep protein high (it's the most satiating macronutrient and protects muscle mass). Reduce carbs slightly on rest days, but keep them adequate around training.
              </p>

              <h3>Endurance Training</h3>

              <p>
                Carbs become even more important for distance runners, cyclists, and endurance athletes. You're depleting glycogen stores significantly during long sessions.
              </p>

              <p>
                Consider adding carbs during workouts lasting over 90 minutes. Sports drinks, gels, or even gummy bears work when you need quick energy mid-session.
              </p>

              <h2>Supplements Worth Considering</h2>

              <p>
                Whey protein powder makes hitting your protein targets much easier. It's convenient, affordable, and backed by decades of research showing effectiveness.
              </p>

              <p>
                Creatine monohydrate is one of the most studied supplements ever. It improves strength, power output, and helps with muscle recovery. Take 3-5 grams daily, timing doesn't really matter.
              </p>

              <p>
                BCAAs get a lot of hype, but if you're eating enough protein, you probably don't need them. Save your money unless you train fasted regularly.
              </p>

              <h2>Practical Tips for Real Life</h2>

              <p>
                Meal prep on Sundays makes everything easier. Cook your proteins, portion your carbs, and you're set for the week. No excuses about not having the right food available.
              </p>

              <p>
                Keep portable snacks in your gym bag. Protein bars, trail mix, or even a peanut butter sandwich work when you can't get a full meal immediately after training.
              </p>

              <p>
                Listen to your body. Some people feel great training fasted, others need food. Some recover fine with less protein, others need more. The guidelines are starting points—adjust based on how you feel and your results.
              </p>

              <h2>The Bottom Line</h2>

              <p>
                Pre and post-workout nutrition isn't rocket science, but it does require some planning. Eat quality carbs and protein before training to fuel your workout. Eat protein and carbs after to recover properly and build muscle.
              </p>

              <p>
                Timing matters, but it's not as rigid as some people claim. The 30-60 minute post-workout window is ideal, but eating within 2-3 hours still works fine. Consistency over time beats perfect timing on any single day.
              </p>

              <p>
                Track what you're doing for a few weeks. Notice how different foods affect your energy, performance, and recovery. That real-world feedback is worth more than any generic advice.
              </p>

              <p>
                Your nutrition fuels your results. Get this part right, and everything else—your training, your recovery, your progress—gets easier. The effort you put into planning your meals pays off every single session.
              </p>
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

