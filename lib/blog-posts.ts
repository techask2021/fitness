// Blog posts data
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  image: string;
  slug: string;
  content?: string;
  author?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Pre and Post-Workout Nutrition: What to Eat and When',
    excerpt: 'Learn everything about pre and post-workout nutrition—what actually works, when to eat it, and why it matters for your fitness goals.',
    category: 'Nutrition Tips',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Workout Nutrition.jpg',
    slug: 'pre-and-post-workout-nutrition',
    author: 'Fitness Friendly Recipes Team'
  },
  {
    id: '2',
    title: 'The Role of Sleep in Weight Management: Why Your Bedroom Matters as Much as Your Gym',
    excerpt: 'Discover how sleep affects your weight, from hunger hormones to metabolism. Learn why your bedroom matters as much as your gym for weight management.',
    category: 'Health & Wellness',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Sleep in Weight Management.jpg',
    slug: 'sleep-in-weight-management',
    author: 'Fitness Friendly Recipes Team'
  },
  {
    id: '3',
    title: '10 Simple Ways to Improve Your Daily Nutrition',
    excerpt: 'Practical, doable changes that actually stick. Learn straightforward strategies to improve your daily nutrition without overhauling your entire life.',
    category: 'Nutrition Tips',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Improve Your Daily Nutrition.jpg',
    slug: '10-simple-ways-improve-daily-nutrition',
    author: 'Fitness Friendly Recipes Team'
  },
  {
    id: '4',
    title: 'Understanding Your BMI: A Complete Guide',
    excerpt: 'Learn what BMI really is, how to calculate it, what the numbers mean for your health, and whether you should actually trust it or not.',
    category: 'Health & Wellness',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Understanding Your BMI.jpg',
    slug: 'understanding-your-bmi-complete-guide',
    author: 'Fitness Friendly Recipes Team'
  },
  {
    id: '5',
    title: "Life Insurance Rates for Different BMI Categories: What You'll Pay",
    excerpt: "Your BMI directly impacts how much you'll pay for life insurance. Learn exactly what you'll pay based on your BMI category and what you can do to save money.",
    category: 'Health & Wellness',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Life Insurance Rates for Different BMI Categories.jpg',
    slug: 'life-insurance-rates-different-bmi-categories',
    author: 'Fitness Friendly Recipes Team'
  },
  {
    id: '6',
    title: 'Best Home Gym Equipment for Small Spaces Under $500: Your Complete Guide',
    excerpt: 'Build a killer home gym in a small space without breaking the bank. Essential equipment that delivers real results, all under $500.',
    category: 'Fitness',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Home Gym Equipment for Small Spaces.jpg',
    slug: 'best-home-gym-equipment-small-spaces-under-500',
    author: 'Fitness Friendly Recipes Team'
  },
  {
    id: '7',
    title: 'Personal Trainer Certification Programs: Complete Cost & Requirements Guide',
    excerpt: 'Everything you need to know about becoming a certified personal trainer. Compare costs, requirements, and programs to find the right certification for you.',
    category: 'Fitness',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Personal Trainer Certification Programs.jpg',
    slug: 'personal-trainer-certification-programs-complete-guide',
    author: 'Fitness Friendly Recipes Team'
  },
  {
    id: '8',
    title: 'Best Fitness Trackers with Nutrition Tracking Features 2025',
    excerpt: 'Find the right fitness tracker that helps you monitor nutrition. Top devices that integrate calorie tracking, macronutrient monitoring, and hydration reminders.',
    category: 'Fitness',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Fitness Trackers with Nutrition Tracking.jpg',
    slug: 'best-fitness-trackers-nutrition-tracking-2025',
    author: 'Fitness Friendly Recipes Team'
  },
  {
    id: '9',
    title: 'Meal Kit Delivery Services for Weight Loss: Reviews & Pricing 2025',
    excerpt: 'Compare the best meal kit delivery services for weight loss. Reviews, pricing, and features to help you find the right portion-controlled meal service for your goals.',
    category: 'Nutrition Tips',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Meal Kit Delivery Services for Weight Loss.jpg',
    slug: 'meal-kit-delivery-services-weight-loss-reviews-pricing-2025',
    author: 'Fitness Friendly Recipes Team'
  },
  {
    id: '10',
    title: 'Online Nutrition Degree Programs: Accredited Schools & Career Outlook',
    excerpt: 'Explore accredited online nutrition degree programs. Learn about degree types, accreditation, top schools, career paths, and whether an online nutrition degree is worth it.',
    category: 'Nutrition Tips',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Online Nutrition Degree Programs.jpg',
    slug: 'online-nutrition-degree-programs-accredited-schools-career-outlook',
    author: 'Fitness Friendly Recipes Team'
  },
  {
    id: '11',
    title: 'Health Insurance Plans That Cover Nutrition Counseling: 2025 Guide',
    excerpt: "Find out if your health insurance covers nutrition counseling. Learn which plans cover it, what conditions qualify, how to get referrals, and what you'll actually pay.",
    category: 'Health & Wellness',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Health Insurance Plans That Cover Nutrition.jpg',
    slug: 'health-insurance-plans-cover-nutrition-counseling-2025-guide',
    author: 'Fitness Friendly Recipes Team'
  },
  {
    id: '12',
    title: "Best Protein Powders for Weight Loss: Complete Buyer's Guide 2025",
    excerpt: 'Find the best protein powder for weight loss. Compare types, ingredients, and brands to choose the right protein supplement for your weight loss goals.',
    category: 'Nutrition Tips',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Protein Powders for Weight Loss.jpg',
    slug: 'best-protein-powders-weight-loss-complete-buyers-guide-2025',
    author: 'Fitness Friendly Recipes Team'
  },
  {
    id: '13',
    title: 'The Truth About Carbohydrates: Good vs Bad Carbs',
    excerpt: 'Learn the truth about carbohydrates. Understand the difference between good and bad carbs, how they affect your body, and how to make better carbohydrate choices for your health.',
    category: 'Nutrition Tips',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/carbohydrates-good-vs-bad-carbs.jpg',
    slug: 'truth-about-carbohydrates-good-vs-bad-carbs',
    author: 'Fitness Friendly Recipes Team'
  },
  {
    id: '14',
    title: 'Strength Training for Beginners: Where to Start?',
    excerpt: 'Learn how to start strength training as a beginner. Discover essential exercises, equipment, routines, and tips to build strength safely and effectively.',
    category: 'Fitness',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Strength Training for Beginners.jpg',
    slug: 'strength-training-for-beginners-where-to-start',
    author: 'Fitness Friendly Recipes Team'
  },
  {
    id: '15',
    title: 'Intermittent Fasting: Is It Right for You?',
    excerpt: 'Discover if intermittent fasting is right for you. Learn about different methods, benefits, side effects, and who should or shouldn\'t try this eating pattern.',
    category: 'Nutrition Tips',
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    image: '/Fitness/Intermittent Fasting.jpg',
    slug: 'intermittent-fasting-is-it-right-for-you',
    author: 'Fitness Friendly Recipes Team'
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

