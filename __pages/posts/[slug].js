import { useEffect, useState, useRef } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../../components/layout/Layout'
import { getAuthors } from '../../libs/getAuthors'
import { getNextArticle } from '../../libs/getPosts'
import Post from '../../components/posts/Post'
import NextArticle from '../../components/posts/NextArticle'
import Newsletter from '../../components/shared/Newsletter'
import { getContentPage } from '../../libs/getContentPage'



export const CheckMark = () => {
  return (
    <svg viewBox="0 0 20 20" width="100px" height="100px" className="center-icon">
      <g fill="#f00">
        <rect y={10} width={2} height={2} />
        <rect x={2} y={12} width={2} height={2} />
        <rect x={4} y={14} width={2} height={2} />
        <rect x={6} y={16} width={2} height={2} />
        <rect x={8} y={14} width={2} height={2} />
        <rect x={10} y={12} width={2} height={2} />
        <rect x={12} y={10} width={2} height={2} />
        <rect x={14} y={8} width={2} height={2} />
        <rect x={16} y={6} width={2} height={2} />
        <rect x={18} y={4} width={2} height={2} />
      </g>
    </svg>
  );
};

export const Close = () => {
  return (
    <svg viewBox="0 0 20 20" width="20px" height="20px" className="center-icon">
      <path d="M0,2.9h2.9V0H0V2.9z M2.9,5.7h2.9V2.9H2.9V5.7z M5.7,8.6h2.9V5.7H5.7V8.6z M8.6,11.4h2.9V8.6H8.6V11.4z M5.7,14.3h2.9v-2.9H5.7V14.3z M2.9,17.1h2.9v-2.9H2.9V17.1z M0,20h2.9v-2.9H0V20z M11.4,14.3h2.9v-2.9h-2.9V14.3z M14.3,17.1h2.9v-2.9h-2.9V17.1zM17.1,20H20v-2.9h-2.9V20z M11.4,8.6h2.9V5.7h-2.9V8.6z M14.3,5.7h2.9V2.9h-2.9V5.7z M17.1,2.9H20V0h-2.9V2.9z" />
    </svg>
  );
};


const PostPage = ({
  slug,
  content,
  frontmatter: post,
  authors,
  nextArticle,
  newsletter,
  article
}) => {

  const articleRef = useRef();
  const [scrollValue, setScrollValue] = useState(0);  

  useEffect(() => {
    const onScroll = (e) => {
      const { height } = articleRef.current.getBoundingClientRect();
      setScrollValue(e.target.documentElement.scrollTop / (height - window.innerHeight));
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollValue]);

  const position = Math.max(1 - scrollValue, 0);
  const complete = position === 0;
  const notMoved = position === 1;

  return (
    <Layout 
      metaTitle={post.title} 
      metaDescription={post.description} 
      ogImage={post.image}
      keyword={post.tags.toString()}
    >
      <div id="prog_id" className={(scrollValue < 0.15) || (scrollValue >= 1.15) ? `opacity-0` : `opacity-100 transition-all duration-300 ease-in-out`}>
          <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <circle cx="50" cy="50" r="30" pathLength="1" className="indicator" strokeDashoffset="0px" strokeDasharray={`${scrollValue}px 1px`} />
          </svg>  
      </div> 
      <Post post={post} postContent={content} authors={authors} ref={articleRef}/>
      <NextArticle post={nextArticle} />
      <Newsletter newsletter={newsletter} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const postFiles = fs.readdirSync(path.join('content/posts'))

  const paths = postFiles.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileContents = fs.readFileSync(
    path.join('content/posts', slug + '.md'),
    'utf8'
  )

  // let remoteSlug = 'can-you-hack-productivity-with-pills';
  // let url = `https://craft-ezhk.frb.io/api/articles/${slug}.json`;
  // const res = await fetch(url)
  // const article = await res.json()
  

  const { data: frontmatter, content } = matter(fileContents)
  const nextArticle = getNextArticle({frontmatter, slug})
  
  return {
    props: {
      slug,
      frontmatter,
      content,
      authors: getAuthors(),
      nextArticle,
      newsletter: getContentPage('content/shared/newsletter.md')
      // article: article
    },
  }
}

export default PostPage