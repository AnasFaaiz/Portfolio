import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/Blogs');

export function getSortedPostsData() {
   const fileNames = fs.readdirSync(postsDirectory);
   const allPostsData = fileNames.map((fileName) => {
	const slug = fileName.replace(/\.mdx$/, '');

	const fullPath = path.join(postsDirectory, fileName);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	
	const matterResult = matter(fileContents);

	return {
		slug,
		...matterResult.data,
		};
	});

	return allPostsData.sort((a, b) => {
		if(a.date < b.date){
			return 1;
		}else{
			return -1;
		}
	});
}

export async function getPostData(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Return all data, including the main content
  return {
    slug,
    ...matterResult.data,
    content: matterResult.content,
  };
}
