import { getSortedPostsData, getPostData } from "@/lib/posts";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getSortedPostsData();

  return posts.map(post => ({
    slug: post.slug,
  }));
}

export default async function BlogPage({ params }) {
  const post = getPostData(params.slug);

  if (!post) notFound();

  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-16">
      <h1>{post.title}</h1>
      <p className="text-gray-400">{post.date}</p>
      <div>{post.content}</div>
    </article>
  );
}

