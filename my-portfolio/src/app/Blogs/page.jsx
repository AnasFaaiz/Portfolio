import { getSortedPostsData } from '@/lib/posts';
import { BlogCard } from '../components/features/Blogs/BlogCard.jsx';

export const metadata = {
	title: 'Blog | AnasFaaiz',
	description: 'A collection of my thoughts on technology and development.',
};

export default function BlogsPage(){
	const allBlogs = getSortedPostsData();

	return (
		<div className="bg-black">
		   <main className="relative max-w-6xl mx-auto px-4 py-20 text-white overflow-hidden">
		     <div className="absolute top-[-10rem] right-[-10rem] w-[25rem] h-[25rem] bg-purple-600/10 rounded-full blur-[120px] z-0" />
		     <div className="absolute bottom-[-15rem] left-[-5rem] w-[30rem] h-[30rem] bg-blue-600/10 rounded-full blur-[100px] z-0" />

		     <div className="relative z-10">
		        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
			   All Blog Posts
			</h1>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols3 gap-8">
			   {allBlogs.map(blog => (
			   	<BlogCard key={blog.slug} blog={blog} />
			   ))}
			</div>
		     </div>
		   </main>
		</div>
	);
}
