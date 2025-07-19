// src/app/blogs/[slug]/page.jsx
import { getPostData, getSortedPostsData } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { CustomComponent } from '../../components/CustomComponent.jsx';

// This function tells Next.js which pages to build
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  
  console.log("Slugs being generated for pages:", posts.map(p => p.slug));

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// This function sets the page's title and description
export async function generateMetadata({ params: { slug } }) {
    const post = await getPostData(slug);
    if (!post) {
      return {
        title: 'Not Found',
      };
    }
    return {
      title: post.title,
      description: post.summary,
    };
}

export default async function BlogPostPage({ params: { slug } }) {
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  const components = {
		CustomComponent,
	}
  return (
    <div className="bg-black text-white min-h-screen">
      <main className="max-w-3xl mx-auto px-4 py-20">
        <div className="border-b border-neutral-800 pb-8 mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            {post.title}
          </h1>
          <p className="text-neutral-400">
            {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>

        <article className="prose prose-invert prose-lg max-w-none">
          <MDXRemote source={post.content} components={components} />
        </article>
      </main>
    </div>
  );
}
