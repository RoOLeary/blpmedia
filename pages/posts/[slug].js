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

const PostPage = ({
  slug,
  content,
  frontmatter: post,
  authors,
  nextArticle,
  newsletter
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




  return (
    <Layout 
      metaTitle={post.title} 
      metaDescription={post.description} 
      ogImage={post.image}
    >
      <div id="prog_id" className={(scrollValue < 0.05 || scrollValue > 1.15)  ? `opacity-0` : `opacity-100 transition-all duration-300 ease-in-out`}>
        <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <circle cx="50" cy="50" r="30" pathLength="1" className="indicator" strokeDashoffset="0px" strokeDasharray={`${scrollValue}px 1px`} />      
          {/* <circle cx="50" cy="50" r="30" className="indicator" strokeDashoffset="0px" strokeDasharray={`${scrollValue}px 1px`} /> */}
        </svg>  
      </div> 
      



      <div ref={articleRef}>
      <Post post={post} postContent={content} authors={authors} />
      </div>
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
    },
  }
}

export default PostPage