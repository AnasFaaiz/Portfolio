'use client';

import { motion } from 'framer-motion';

// --- MOCK DATA ---
// It's best practice to move this to its own file, e.g., 'app/data/blogs.js'
// This array should contain the metadata for all your blog posts.
const allBlogs = [
  {
    slug: 'why-nextjs-portfolio',
    title: 'Why I Chose Next.js for My Portfolio',
    summary: 'A deep dive into the features of Next.js that make it the perfect choice for building a modern, high-performance developer portfolio.',
    date: '2024-06-20',
    tags: ['Next.js', 'React', 'Web Dev'],
  },
  {
    slug: 'mastering-react-hooks',
    title: 'A Deep Dive into Mastering React Hooks',
    summary: 'Explore the power of React Hooks and learn how to write cleaner, more efficient, and more maintainable functional components.',
    date: '2024-06-15',
    tags: ['React', 'JavaScript', 'Frontend'],
  },
  {
    slug: 'devops-for-beginners',
    title: 'The Modern DevOps Landscape for Beginners',
    summary: 'A comprehensive guide to understanding the modern DevOps culture, practices, and tools like Docker to streamline your workflow.',
    date: '2024-05-28',
    tags: ['DevOps', 'CI/CD', 'Docker'],
  },
    {
    slug: 'introduction-to-tailwind-css',
    title: 'Getting Started with Tailwind CSS',
    summary: 'Learn how the utility-first approach of Tailwind CSS can dramatically speed up your styling process and help you build consistent UIs.',
    date: '2024-04-10',
    tags: ['CSS', 'TailwindCSS', 'Frontend'],
  },
];

// --- Helper Data for Styling ---
const tagColors = {
    'Next.js': 'bg-gray-400/10 text-gray-300 ring-gray-400/20',
    React: 'bg-blue-400/10 text-blue-300 ring-blue-400/20',
    JavaScript: 'bg-yellow-400/10 text-yellow-300 ring-yellow-400/20',
    Frontend: 'bg-indigo-400/10 text-indigo-300 ring-indigo-400/20',
    DevOps: 'bg-orange-400/10 text-orange-300 ring-orange-400/20',
    Docker: 'bg-sky-400/10 text-sky-300 ring-sky-400/20',
    CSS: 'bg-pink-400/10 text-pink-300 ring-pink-400/20',
    TailwindCSS: 'bg-teal-400/10 text-teal-300 ring-teal-400/20',
};

// --- Sub-Component for Blog Cards ---
const BlogCard = ({ blog }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="border border-white/10 bg-white/5 rounded-xl p-6 hover:border-blue-400 hover:bg-white/10 transition-all duration-300 flex flex-col backdrop-blur-sm"
  >
    <div className="flex-grow">
      <p className="text-sm text-gray-400 mb-1">{new Date(blog.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
        {blog.title}
      </h3>
      <p className="text-gray-400 line-clamp-3 mb-4">{blog.summary}</p>
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      {blog.tags.map(tag => (
        <span key={tag} className={`text-xs px-2 py-1 rounded-full ring-1 ring-inset ${tagColors[tag] || 'bg-gray-400/10 text-gray-300 ring-gray-400/20'}`}>
          {tag}
        </span>
      ))}
    </div>
    <a href={`/blogs/${blog.slug}`} className="font-semibold text-blue-400 hover:text-blue-300 self-start">
      Read More &rarr;
    </a>
  </motion.div>
);


// --- Main Page Component ---
export default function BlogsPage() {
  const sortedBlogs = allBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="bg-black">
        <main className="relative max-w-6xl mx-auto px-4 py-20 text-white overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-[-10rem] right-[-10rem] w-[25rem] h-[25rem] bg-purple-600/10 rounded-full blur-[120px] z-0" />
            <div className="absolute bottom-[-15rem] left-[-5rem] w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[100px] z-0" />

            {/* Content Wrapper */}
            <div className="relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
                >
                    All Blog Posts
                </motion.h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sortedBlogs.map(blog => (
                    <BlogCard key={blog.slug} blog={blog} />
                    ))}
                </div>
            </div>
        </main>
    </div>
  );
}

