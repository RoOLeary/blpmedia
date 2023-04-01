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
// import { useScroll } from 'framer-motion';
import useScrollPosition from '../../hooks/useScrollPosition'


const PostPage = ({
  slug,
  content,
  frontmatter: post,
  authors,
  nextArticle,
  newsletter
}) => {

  const postref = useRef(null);
  const [scrolled, setScrolled] = useState(true);
  // const scrollYProgress = useScroll({ target: postref });
  const scrollPosition = useScrollPosition();

  let scroPos = Math.round(scrollPosition / 100 * 2);

  useEffect(() => {

    console.log(scroPos + '%');

    if(scrollPosition > 500){
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  })

  return (
    <Layout 
      metaTitle={post.title} 
      metaDescription={post.description} 
      ogImage={post.image}
    >
      <div id="prog_id" className={!scrolled ? `opacity-0` : `opacity-100 transition-all duration-300 ease-in-out`}>
        <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <circle cx="50" cy="50" r="30" pathLength="1" className="indicator" style={{ pathLength: scroPos + '%' }} />      
        </svg>  
      </div> 
      
      <Post post={post} postContent={content} authors={authors} />
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