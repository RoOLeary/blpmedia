"use client";

import { useState, useEffect, useRef } from 'react';
import Layout from '../../../components/layout/Layout'
import Post from '../../../components/posts/Post'

async function getData(slug) {
    console.log('slug: ', slug);
    const res = await fetch(`https://craft-ezhk.frb.io/api/articles/${slug}.json`, { next: { revalidate: 30 } });
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }
    return res.json();
  }

export default async function Page({ params }) {
    
    const postData = await getData(params.post); 

    // const articleRef = useRef();
    // const [scrollValue, setScrollValue] = useState(0);  

    // useEffect(() => {
    //     const onScroll = (e) => {
    //     const { height } = articleRef.current.getBoundingClientRect();
    //     setScrollValue(e.target.documentElement.scrollTop / (height - window.innerHeight));
    //     };

    //     window.addEventListener('scroll', onScroll);

    //     return () => window.removeEventListener('scroll', onScroll);
    // }, [scrollValue]);

    // const position = Math.max(1 - scrollValue, 0);
    // const complete = position === 0;
    // const notMoved = position === 1;


    return (
        <Layout 
        metaTitle={postData.title} 
        metaDescription={postData.articleExcerpt} 
        ogImage={postData.articleImageUrl}
        // keyword={post.tags.toString()}
      >
        {/* <div id="prog_id" className={(scrollValue < 0.15) || (scrollValue >= 1.15) ? `opacity-0` : `opacity-100 transition-all duration-300 ease-in-out`}>
            <svg id="progress" width="50" height="50" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
              <circle cx="50" cy="50" r="30" pathLength="1" className="indicator" strokeDashoffset="0px" strokeDasharray={`${scrollValue}px 1px`} />
            </svg>  
    </div> */}
        {/* @ts-ignore */}
        <Post post={postData} postContent={postData.articleContent} /> 
        {/*<NextArticle post={nextArticle} /> */}
      </Layout>
    );
}