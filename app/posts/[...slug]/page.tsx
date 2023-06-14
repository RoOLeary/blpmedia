"use client"; 

import { useRef, useState, useEffect } from 'react'; 
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '../../../components/layout/Layout'
import { getAuthors } from '../../../libs/getAuthors'
import { getNextArticle } from '../../../libs/getPosts'
import Post from '../../../components/posts/Post'
import NextArticle from '../../../components/posts/NextArticle'
// import Newsletter from '../../components/shared/Newsletter'
import { getContentPage } from '../../../libs/getContentPage'



async function getPosts(sl) {
  const postFiles = fs.readdirSync(path.join('content/posts'))

  const paths = postFiles.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))
  const posts = postFiles.filter(post => post != sl);
  console.log(posts);

  return posts
}



export default async function Page({ params }) {
  // Fetch data directly in a Server Component
  const recentPosts = await getPosts(params.slug) 
  console.log(recentPosts);
  // Forward fetched data to your Client Component
  return (
    <>

        <h1>TESTING</h1>
          <div id="prog_id" className={(scrollValue < 0.15) || (scrollValue >= 1.15) ? `opacity-0` : `opacity-100 transition-all duration-300 ease-in-out`}>
              <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                <circle cx="50" cy="50" r="30" pathLength="1" className="indicator" strokeDashoffset="0px" strokeDasharray={`${scrollValue}px 1px`} />
              </svg>  
          </div> 
          <h1>TESTING</h1>
  

    </>
  )
}



// export default async function Page({ params }) {
//   const posts = await getPosts(); 
//   console.log(params)
//   const articleRef = useRef();
//   const [scrollValue, setScrollValue] = useState(0);  

//   useEffect(() => {
//     const onScroll = (e) => {
//       const { height } = articleRef.current.getBoundingClientRect();
//       setScrollValue(e.target.documentElement.scrollTop / (height - window.innerHeight));
      
//     };

//     window.addEventListener('scroll', onScroll);

//     return () => window.removeEventListener('scroll', onScroll);
//   }, [scrollValue]);

//   const position = Math.max(1 - scrollValue, 0);
//   const complete = position === 0;
//   const notMoved = position === 1;

//   return (
//    <>
//     <h1>TESTING</h1>
//       <div id="prog_id" className={(scrollValue < 0.15) || (scrollValue >= 1.15) ? `opacity-0` : `opacity-100 transition-all duration-300 ease-in-out`}>
//           <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
//             <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
//             <circle cx="50" cy="50" r="30" pathLength="1" className="indicator" strokeDashoffset="0px" strokeDasharray={`${scrollValue}px 1px`} />
//           </svg>  
//       </div> 
//       <h1>TESTING</h1>
  
//     </>
//   )
// }

