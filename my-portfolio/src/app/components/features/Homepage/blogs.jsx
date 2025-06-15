'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogs } from '../../../data/blog'; // Adjust path if needed

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function BlogsLatest() {
  const latestBlogs = blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  return (
    <main className="relative px-4 py-8 bg-gradient-to-br from-gray-950 via-black to-gray-900 overflow-hidden flex items-center justify-center rounded-3xl">

{/* Glowing blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse z-0" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="relative z-10 w-full max-w-7xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-6 sm:p-10 md:p-14 space-y-12 text-white"
      >
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 drop-shadow-lg">
          Latest Blogs
        </h2>

        {/* Blog Cards */}
        <motion.div
          variants={fadeUp}
          className="grid gap-8 sm:grid-cols-2"
        >
          {latestBlogs.map((blog, idx) => (
            <motion.div
              key={blog.slug}
              variants={fadeUp}
              whileHover={{ scale: 1.02 }}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-blue-400/30 transition-all duration-300 flex flex-col p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-2 truncate" title={blog.title}>
                {blog.title}
              </h3>
              <p className="text-sm text-gray-400 line-clamp-3">{blog.summary}</p>
              <p className="text-xs text-gray-500 mt-2">{blog.date}</p>
              <Link
                href={`/blog/${blog.slug}`}
                className="text-blue-400 text-sm hover:underline inline-flex items-center gap-1 mt-4 transition-all"
              >
                Read more →
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            <span>View All Blogs</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}

