// app/blog/[slug]/page.jsx
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/blogs'));
  return files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));
}

export default async function BlogPage({ params }) {
  const filePath = path.join(process.cwd(), 'content/blogs', `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = fs.readFileSync(filePath, 'utf8');
  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-8">
      <MDXRemote source={fileContent} />
    </article>
  );
}

