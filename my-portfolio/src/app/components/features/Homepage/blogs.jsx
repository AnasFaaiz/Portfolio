// add blogs section
'use client'
import Link from 'next/link';

const blogs = [
	{
	    title: "Why I chose Nextjs for my portfolio",
	    slug: "why-nextjs-portfolio",
	    date: "2025-04-15",
	    summary: "The reason I chose Nextjs is cuz of it's benefit like seo, performance"
	},
	{
	    title: "What work do CTO do?!",
	    slug: "CTO-work",
	    date: "2025-04-21",
	    summary: "CTO does..."
	},
	{
	    title: "Understanding Async/Await in Javascript",
	    slug: "Async/Await-in-javascript",
	    date: "2025-04-30",
	    summary: "Async/Await does work....",
	},
];

export default function BlogsLatest() {
  // Sort by date (newest first) and take top 2
  const latestBlogs = blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  return (
    <section className="text-center mt-12">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500">
         Latest Blogs 
	</span>
      </h2> 
      <div className="grid gap-6 md:grid-cols-2">
        {latestBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blog/${blog.slug}`}
            className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
          >
            <h3 className="text-xl font-semibold text-white">{blog.title}</h3>
            <p className="text-sm text-gray-300 mt-2">{blog.summary}</p>
            <p className="text-xs text-gray-400 mt-1">{blog.date}</p>
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <Link
          href="/projects"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
          <span>View All Blogs</span>
          
	  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

      </div>
    </section>
  );
}
