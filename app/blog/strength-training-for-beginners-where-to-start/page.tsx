import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: "Strength Training for Beginners: Where to Start? | Fitness Friendly Recipes",
  description: "Learn how to start strength training as a beginner. Discover essential exercises, equipment, routines, and tips to build strength safely and effectively.",
  keywords: "strength training, beginner workout, weightlifting, fitness for beginners, resistance training, muscle building, home workout",
};

export default function StrengthTrainingForBeginnersWhereToStartPage() {
  const post = {
    title: 'Strength Training for Beginners: Where to Start?',
    category: 'Fitness',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Strength Training for Beginners.jpg',
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
                Walking into a gym for the first time can feel overwhelming. You see rows of equipment, people lifting weights with perfect form, and you're standing there wondering where you even begin. I get it—strength training for beginners isn't about having all the answers from day one. It's about taking that first step and building from there.
              </p>

              <p>
                Before we dive into the details, let me tell you what we're covering today. We'll talk about why strength training matters, how to start without injuring yourself, what equipment you actually need (spoiler: less than you think), and how to build a routine that sticks. We'll also answer the question everyone asks: How do I know if I'm doing this right?
              </p>

              <h2>Why Strength Training Matters More Than You Think</h2>

              <p>
                Here's something most people don't realize until they start: strength training isn't just about building muscle or looking good. It's about building a foundation for everything else in your life.
              </p>

              <p>
                Your bones get denser. Your metabolism fires up even when you're sitting on the couch. Your body becomes more efficient at burning fat. Studies from the American College of Sports Medicine show that strength training just twice a week can increase lean muscle mass by 3 pounds in 10 weeks.
              </p>

              <p>
                But here's what really matters—you feel different. Tasks that used to wear you out become easier. Carrying groceries, playing with your kids, moving furniture—these everyday moments become effortless. That's the real magic of strength training for beginners who stick with it.
              </p>

              <p>
                The mental shift hits different too. Watching yourself get stronger week after week builds confidence that spills into other areas of your life. You start believing you can do hard things because you're literally proving it to yourself every session.
              </p>

              <h2>Understanding the Basics Before You Start</h2>

              <p>
                Let me break this down simply. Strength training means working your muscles against resistance. That resistance could be dumbbells, barbells, resistance bands, machines, or just your body weight.
              </p>

              <p>
                Progressive overload is the secret sauce. Your muscles adapt to stress by getting stronger. Once they adapt, you need to increase the challenge. That could mean more weight, more reps, more sets, or less rest between exercises.
              </p>

              <p>
                Compound movements work multiple muscle groups at once. Squats hit your legs, core, and back. Push-ups work your chest, shoulders, triceps, and core. These exercises give you the most bang for your buck, especially when you're starting out.
              </p>

              <p>
                Recovery matters just as much as the workout itself. Your muscles don't grow during the workout—they grow during rest. Beginners often make the mistake of training the same muscles every day. That's a recipe for burnout and injury.
              </p>

              <h2>Setting Up Your Foundation</h2>

              <p>
                Starting with the right mindset separates people who quit after two weeks from those who transform their lives. Forget what you see on Instagram. Forget the person at the gym benching twice your body weight. Your only competition is yourself yesterday.
              </p>

              <p>
                Set realistic expectations from day one. You won't see dramatic changes in a week or even a month. Most beginners notice strength gains within 2-4 weeks. Visible muscle growth takes 8-12 weeks of consistent training. Fat loss depends on your nutrition, which we'll touch on later.
              </p>

              <p>
                Document your starting point. Take photos, measurements, and note how much weight you can lift for key exercises. Three months from now, you'll look back and be amazed at your progress.
              </p>

              <p>
                Find your "why" and write it down. Maybe you want to keep up with your kids. Maybe you're tired of feeling weak. Maybe your doctor said you need to build bone density. Whatever it is, that reason will pull you through days when motivation disappears.
              </p>

              <h2>Essential Equipment for Beginners</h2>

              <p>
                Good news—you don't need a fancy gym membership or thousands of dollars in equipment to start strength training. Your body weight provides plenty of resistance for the first few weeks or even months.
              </p>

              <p>
                If you're training at home, start with adjustable dumbbells (5-25 pounds for most beginners), a resistance band set, and a yoga mat. That setup costs less than $150 and covers most beginner exercises.
              </p>

              <p>
                Proper footwear matters more than you think. Skip the running shoes with thick, cushioned soles. You want flat, stable shoes that keep you grounded during exercises like squats and deadlifts. Chuck Taylors or dedicated lifting shoes work great.
              </p>

              <p>
                If you're joining a gym, look for one with free weights, not just machines. Machines have their place, but free weights teach your body to stabilize itself and work muscles more naturally. Most commercial gyms have everything you need: barbells, dumbbells, squat racks, and benches.
              </p>

              <h2>Your First Workout: The Full-Body Approach</h2>

              <p>
                Here's where strength training for beginners gets real. Your first few workouts should focus on learning proper form with lighter weights. Ego has no place here—nobody cares how much you're lifting except you.
              </p>

              <p>
                A basic full-body routine works best for beginners. Training your entire body 2-3 times per week builds strength faster than split routines that isolate muscle groups. Your workout should include a push exercise, a pull exercise, a leg exercise, and a core exercise.
              </p>

              <p>
                Start with bodyweight squats, push-ups (modified on your knees if needed), dumbbell rows, and planks. Master these movements before adding weight. Each exercise should feel challenging by the last few reps, but not impossible.
              </p>

              <p>
                Here's a simple framework: 3 sets of 8-12 reps for each exercise. Rest 60-90 seconds between sets. Your entire workout should take 30-45 minutes, including a 5-minute warm-up and cool-down.
              </p>

              <p>
                Listen to your body during and after workouts. Muscle fatigue and mild soreness are normal. Sharp pain or joint discomfort means stop immediately. There's a huge difference between discomfort and pain—learn to recognize it early.
              </p>

              <h2>Mastering the Big Five Exercises</h2>

              <p>
                Five exercises form the foundation of most strength training programs. Learning these movements with proper form sets you up for long-term success and prevents injuries.
              </p>

              <p>
                <strong>Squats</strong> teach you to use your legs, the body's largest muscle group. Stand with feet shoulder-width apart, toes slightly pointed out. Push your hips back like sitting in a chair, keeping your chest up and knees tracking over your toes. Drive through your heels to stand back up.
              </p>

              <p>
                <strong>Push-ups</strong> build upper body pressing strength. Start in a plank position with hands slightly wider than shoulders. Lower your body until your chest nearly touches the floor, keeping your core tight and body in a straight line. Push back up. If regular push-ups are too hard, elevate your hands on a bench or do them on your knees.
              </p>

              <p>
                <strong>Rows</strong> balance out all that pushing with pulling strength. Using dumbbells, hinge at your hips with a slight knee bend, keeping your back flat. Pull the weights to your sides, squeezing your shoulder blades together. Lower with control.
              </p>

              <p>
                <strong>Planks</strong> build core stability that protects your spine during all other exercises. Hold a push-up position on your forearms, keeping your body straight from head to heels. Don't let your hips sag or pike up. Start with 20-30 seconds and build up.
              </p>

              <p>
                <strong>Deadlifts</strong> teach you to pick things up safely, a movement you do every day. Start with light dumbbells or a kettlebell. Stand with feet hip-width apart, weights in front of your thighs. Hinge at your hips, keeping your back straight and core tight. Lower the weights to mid-shin, then drive through your heels to stand tall.
              </p>

              <h2>Creating Your Weekly Schedule</h2>

              <p>
                Consistency beats intensity every single time. Training three days per week with rest days in between works perfectly for beginners. Your muscles need time to recover and grow stronger.
              </p>

              <p>
                A sample week might look like Monday, Wednesday, Friday for training days. Some people prefer Monday, Thursday, Saturday. Pick what fits your schedule and stick to it for at least 8 weeks before changing anything.
              </p>

              <p>
                Each session follows the same structure: 5-minute warm-up (light cardio and dynamic stretching), 30-40 minutes of strength exercises, 5-minute cool-down (static stretching). The warm-up prepares your body for work and reduces injury risk. The cool-down helps with recovery.
              </p>

              <p>
                Track your workouts religiously. Write down exercises, sets, reps, and weights used. This data tells you when to increase weight and proves your progress. Apps like Strong or even a simple notebook work great.
              </p>

              <p>
                Progressive overload happens gradually. Once you can complete all sets and reps with good form, increase the weight by 5-10%. That might feel like nothing in the moment, but those small increases compound over months.
              </p>

              <h2>Avoiding Common Beginner Mistakes</h2>

              <p>
                The biggest mistake beginners make? Going too hard, too fast. Your enthusiasm is awesome, but your body needs time to adapt. Soreness that lasts more than 2-3 days means you overdid it.
              </p>

              <p>
                Skipping warm-ups seems like a time-saver until you pull a muscle. Those five minutes prepare your nervous system and increase blood flow to your muscles. Cold muscles are more prone to injury.
              </p>

              <p>
                Copying advanced lifters without understanding form leads to injuries and wasted effort. That guy doing exotic exercises with perfect form has years of experience. Stick to the basics until they become second nature.
              </p>

              <p>
                Ignoring nutrition sabotages your results. Your muscles need protein to repair and grow. Aim for 0.7-1 gram of protein per pound of body weight daily. You also need adequate calories—eating too little while strength training just makes you tired and weak.
              </p>

              <p>
                Training the same way for months without progression keeps you stuck. Your body adapts quickly. Keep challenging it by adding weight, reps, or decreasing rest time between sets.
              </p>

              <h2>Nutrition Basics That Support Strength Training</h2>

              <p>
                You can't out-train a bad diet. Strength training for beginners requires fuel—both for your workouts and recovery. Protein repairs and builds muscle tissue. Aim for a palm-sized portion with each meal.
              </p>

              <p>
                Carbohydrates provide energy for your training sessions. Don't fear them. Whole grains, fruits, and vegetables give you sustained energy and essential nutrients. Time your larger carb portions around your workouts for best results.
              </p>

              <p>
                Fats support hormone production and overall health. Include sources like nuts, avocados, olive oil, and fatty fish. They're calorie-dense, so watch portions, but don't eliminate them.
              </p>

              <p>
                Hydration affects everything from performance to recovery. Drink water throughout the day, not just during workouts. A good rule: half your body weight in ounces daily. Add more if you're sweating heavily.
              </p>

              <p>
                Timing matters less than consistency. Don't stress about the perfect post-workout meal window. Just eat quality protein and carbs within a few hours of training. Focus on hitting your daily totals first.
              </p>

              <h2>Tracking Progress Beyond the Scale</h2>

              <p>
                The scale tells you almost nothing about your strength training progress. Weight fluctuates daily based on water, food, stress, and sleep. Muscle weighs more than fat by volume, so you might gain weight while losing fat.
              </p>

              <p>
                Take progress photos every 4 weeks in the same lighting, clothing, and position. Visual changes show up before the scale moves. Measurements of your chest, waist, hips, arms, and thighs reveal body composition changes.
              </p>

              <p>
                Strength increases are the most reliable measure of progress. If you're lifting more weight or doing more reps than last month, you're winning. Keep detailed workout logs to track these improvements.
              </p>

              <p>
                How you feel matters more than any metric. Do you have more energy? Better sleep? Improved mood? Are everyday tasks easier? These quality-of-life improvements are why you started strength training for beginners in the first place.
              </p>

              <p>
                Clothing fit changes before scale numbers do. Your favorite jeans might fit looser while the scale stays the same or even goes up. Trust the process and focus on non-scale victories.
              </p>

              <h2>When to Level Up Your Training</h2>

              <p>
                After 8-12 weeks of consistent training, you'll notice your beginner gains slowing down. That's normal—your body adapted to the current stimulus. Time to add variety and complexity.
              </p>

              <p>
                Consider splitting your routine into upper and lower body days if you want to train 4 times per week. This allows more volume and intensity for each muscle group while maintaining adequate recovery.
              </p>

              <p>
                Add weight training accessories like wrist straps, a lifting belt, or knee sleeves if you're moving serious weight. These tools support your joints during heavy lifts but shouldn't become crutches that replace proper form.
              </p>

              <p>
                Work with a qualified personal trainer for a few sessions to fine-tune your form and learn new exercises. The investment pays off in better results and injury prevention. Look for trainers certified by NASM, ACE, or NSCA.
              </p>

              <p>
                Join a strength training community online or in person. Surrounding yourself with people on the same journey provides motivation, accountability, and knowledge sharing. Reddit's fitness communities, local gym groups, or CrossFit boxes all work.
              </p>

              <h2>Final Thoughts on Your Strength Training Journey</h2>

              <p>
                Starting strength training for beginners doesn't require perfection. It requires showing up consistently and focusing on gradual improvement. Every expert lifter was once standing exactly where you are now, wondering if they could do this.
              </p>

              <p>
                The first few weeks feel awkward and uncomfortable. Your muscles will be sore. You'll question your form constantly. You might feel intimidated by others in the gym. All of that is temporary.
              </p>

              <p>
                What's permanent is the strength you build—physical, mental, and emotional. Three months from now, you'll be amazed at how far you've come. Six months from now, strength training will be a non-negotiable part of your life. A year from now, you'll be the person others look to for advice.
              </p>

              <p>
                Start simple, focus on form, be consistent, and trust the process. Your future self will thank you for taking this first step into strength training. The best time to start was yesterday. The second best time is right now.
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

