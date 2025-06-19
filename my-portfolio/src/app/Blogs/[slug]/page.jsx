import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

// --- IMPORTANT: Define or import your custom components here ---
// You need to replace this with your actual component.
// For example: import CustomComponent from '@/app/components/ui/CustomComponent';

const CustomComponent = (props) => {
  // This is a placeholder component.
  return (
    <div style={{
        border: '1px solid #38bdf8',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        padding: '1rem',
        margin: '1.5rem 0',
        borderRadius: '8px'
      }}
    >
      <p className="font-bold text-sky-400">This is a Custom Component!</p>
      <p className="text-sm">It was rendered from your MDX file.</p>
    </div>
  );
};

// --- Create a components map ---
// This tells MDXRemote what to render when it sees a component name.
const components = {
  CustomComponent,
  // If you have other custom components, add them here:
  // AnotherComponent,
};


export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/blogs'));
  return files.map((filename) => ({
    slug: filename.replace('.mdx', ''),
  }));
}

export default async function BlogPage({ params }) {
  const filePath = path.join(process.cwd(), 'content/blogs', `${params.slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return notFound();
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <article className="prose prose-invert max-w-3xl mx-auto py-8">
      {/* Pass the components map to MDXRemote */}
      <MDXRemote source={fileContent} components={components} />
    </article>
  );
}

