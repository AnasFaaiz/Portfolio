'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const tagColors = {
  'Next.js': 'bg-gray-400/10 text-gray-300 ring-gray-400/20',
  React: 'bg-blue-400/10 text-blue-300 ring-blue-400/20',
  JavaScript: 'bg-yellow-400/10 text-yellow-300 ring-yellow-400/20',
  Frontend: 'bg-indigo-400/10 text-indigo-300 ring-indigo-400/20',
  'Web Dev': 'bg-purple-400/10 text-purple-300 ring-purple-400/20',
};

export const BlogCard = ({ blog }) => {
	return (
	  <motion.div
	    initial={{ opacity: 0, y: 20}}
	    whileInView={{ opacity: 1, y: 0}}
	    viewport={{ once: true }}
	    transition={{ duration: 0.5 }}
	    className="border border-neutral-800 bg-neutral-900/50 rounded-xl p-6 hover:border-blue-500 transition-all duration-300 flex flex-col backdrop-blur-sm"
	    >
	    	<div className="flex-grow">
		  <p className="text-sm text-neutral-400 mb-1">
		    {new Date(blog.date).toLocaleDateString('en-US', {
		      year: 'numeric',
		      month: 'long',
		      day: 'numeric',
		    })}
		  </p>
		  <h3 className="text-xl font-bold text-neutral-100 mb-2">{blog.title}</h3>
		  <p className="text-neutral-400 line-clamp-3 mb-4">{blog.summary}</p>
		</div>
		<div className="flex flex-wrap gap-2 mb-4">
		  {blog.tags.map(tag => (
		    <span
		      key={tag}
		      className={`text-xs px-2 py-1 rounded-full ring-1 ring-inset ${
              		tagColors[tag] || 'bg-neutral-400/10 text-neutral-300 ring-neutral-400/20'
            		}`}
          		>
            			{tag}
          	    </span>
		  ))}
		</div>
		<Link
			href={`/Blogs/${blog.slug}`}
			className="font-semibold text-blue-400 hover:text-blue-300 self-start"
		>
			Read More &rarr;
		</Link>
	    </motion.div>
	);
};
