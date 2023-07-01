
import Layout from '../../../components/layout/Layout';
import Post from '../../../components/posts/Post';
import NextArticle from '../../../components/posts/NextArticle'

async function getBlogPost(slug){
  const blogPost = await fetch(`https://craft-ezhk.frb.io/api/articles/${slug}.json`, { next: { revalidate: 10 } });
  if (!blogPost.ok) {
    throw new Error('Failed to fetch data');
  }
  return blogPost.json();
}

export default async function Page({ params }){
  let blogPost = await getBlogPost(params.slug);

  console.log(blogPost.articleImgUrl)

  return (
    <Layout>
      <Post post={blogPost} postContent={blogPost.articleContent} />
      <NextArticle post={blogPost} />
    </Layout>
  );
}