import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/Blogs");

/* ============================
   GET ALL BLOG METADATA
============================ */
export function getSortedPostsData() {
  const fileNames = fs
    .readdirSync(postsDirectory)
    .filter(file => file.endsWith(".mdx")); // ✅ IMPORTANT

  const allPostsData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "");

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      slug, // ✅ always defined
      title: data.title ?? slug.replace(/-/g, " "),
      date: data.date ?? "",
      description: data.description ?? "",
    };
  });

  return allPostsData.sort((a, b) =>
    a.date < b.date ? 1 : -1
  );
}

/* ============================
   GET SINGLE BLOG CONTENT
============================ */
export function getPostData(slug) {
  if (!slug) return null; // ✅ safety

  const fullPath = path.join(postsDirectory, `${slug}.mdx`);

  if (!fs.existsSync(fullPath)) {
    return null; // ✅ prevents undefined.mdx crash
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title ?? slug.replace(/-/g, " "),
    date: data.date ?? "",
    description: data.description ?? "",
    content,
  };
}

