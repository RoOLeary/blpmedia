"use client"; 
import Link from 'next/link'
import Image from 'next/image'
import { useState, forwardRef, useRef } from 'react'
import { CalendarIcon, ClockIcon } from '@heroicons/react/outline'
// import { marked } from 'marked'
// import { formatDate } from '../../utils/formatDate'
import { getSocialIconComponent } from '../../utils/getSocialIconComponent'
import siteConfig from '../../config/site.config.js';
// import { useSession, signIn } from "next-auth/react";

const Post = forwardRef(({ post, postContent, authors }, ref) => {

  let pageUrl = `${siteConfig.baseURL.replace(/\/$|$/, '/')}posts/${post.slug}`
  // const { data: session, status, loading } = useSession()

  const [isLiked, setIsLiked] = useState(false);

  const addToFaves = (e) => setIsLiked(!isLiked);
  
  return (
    <article className="pb-12 sm:pb-16 lg:pb-24 bg-gray-50" ref={ref}>
      
      {/* Post Header */}
      <header>
       
        {/* Image */}
        <div className="w-full bg-gray-100 aspect-w-3 aspect-h-2 sm:aspect-h-1">
          <Image 
            className="object-cover object-center" 
            src={post.articleImageUrl} 
            alt={post.articleImageAlt}
            layout="fill"
          />
        </div>

        {/* Post Header Content */}
        <div className="px-5 lg:px-0">
          
          {/* Article Information */}
          <div className="pt-10 pb-8 mx-auto mb-8 text-lg border-b max-w-prose border-gray-300/70 sm:pt-16">
            {/* <Link
              href={`/categories/${post.category.replace(/ /g, '-').toLowerCase()}`}
              className="relative text-sm font-medium tracking-widest text-red-700 uppercase duration-300 ease-in-out transition-color hover:text-red-600">
              {post.category}
            </Link> */}
            <h2 className="mt-3.5 text-4xl font-medium tracking-normal text-gray-900 transition duration-300 ease-in-out sm:mt-5 decoration-red-300 decoration-3 group-hover:underline md:tracking-tight sm:leading-tight sm:text-5xl lg:text-6xl">{post.title}
            </h2>
            <div>
              <p className="mt-4 text-base leading-loose text-gray-600">
                {post.description}
              </p>
            </div>

            {/* Author meta */}
            <div className="flex items-center mt-6 sm:mt-8">
              {/* <Link
                href={`/authors/${post.author.replace(/ /g, '-').toLowerCase()}`}
                className="flex-shrink-0 mr-3">

                <div className="relative w-8 h-8 bg-gray-100 rounded-xl sm:w-9 sm:h-9">
                  {authors.map((author) =>
                    post.author === author.frontmatter.name && (
                      <Image
                        key={author.frontmatter.name}
                        className="object-cover object-center rounded-xl" 
                        src={author.frontmatter.image} 
                        alt={author.frontmatter.name}
                        layout="fill"
                      />
                    )
                  )}
                  <span className="absolute inset-0 shadow-inner rounded-xl" aria-hidden="true" />
                </div>

              </Link> */}
              <div className="text-sm lg:text-[15px] flex items-center">
                <span className="hidden text-gray-500 sm:inline-block">By&nbsp;</span>
                {/* <Link
                  href={`/authors/${post.author.replace(/ /g, '-').toLowerCase()}`}
                  className="font-medium text-gray-700 hover:underline">

                  {post.author}

                </Link> */}
                <CalendarIcon className="w-[18px] h-[18px] ml-4 text-gray-400" />
                {/* <span className="ml-1 text-gray-500">{formatDate(post.date)}</span> */}
                
                <span className="items-center hidden sm:flex">
                  <ClockIcon className="w-[18px] h-[18px] ml-3 text-gray-400" />
                  <span className="ml-1 text-gray-500">{post.time_to_read_in_minutes} min read</span>
                </span>
                {/* {session ?
                <span className="items-center hidden sm:flex ml-2">
                  <button onClick={(e) => addToFaves(e)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill={isLiked ? '#f00' :"none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke={isLiked ? '#f00' :"#c0c2c9"} className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </button>
                  <span className="ml-1 text-gray-500">{!isLiked ? 'add to' : "remove from "} favourites</span>
                </span> : null} */}
              </div>
            </div>
            
          </div>

        </div>
        
      </header>

      <div className="px-5 lg:px-0">
        
        {/* Post Content */}
        {/* Uses the official Tailwind CSS Typography plugin */}
        <div className="mx-auto prose sm:prose-lg hover:prose-a:text-red-700 prose-a:duration-300 prose-a:ease-in-out prose-a:transition  first-letter:text-4xl first-letter:font-bold first-letter:tracking-[.15em]" dangerouslySetInnerHTML={{ __html: postContent }}>
        </div>

        {/* Post Footer */}
        <footer className="mx-auto text-lg mt-12 max-w-prose">
         
          {/* Tags */}
          <ul className="flex flex-wrap justify-start pb-8 -m-1 sm:pb-10">
            {/* {post.tags.map((tag) => (
              <li key={tag}>
                <Link href={`/tags/${tag.replace(/ /g, '-').toLowerCase()}`}>

                  <span className="inline-flex items-center px-4 py-1 m-1 text-sm font-medium text-gray-800 transition duration-300 ease-in-out bg-transparent border rounded-full sm:px-6 sm:py-2 border-gray-300/70 hover:text-red-700">
                    {tag}
                  </span>

                </Link>
              </li>
            ))} */}
          </ul>

          {/* Social Share Buttons */}
          <div className="py-8 sm:py-10">
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-gray-900">
                Share
              </span>

              {/* Social Links */}
              <ul className="flex items-center space-x-3">
               
                {/* Twitter */}
                <li>
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${post.title}&url=${pageUrl}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out bg-transparent border rounded-full border-gray-300/70 sm:w-12 sm:h-12 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700 transition duration-300 ease-in-out transform group-hover:text-red-700 group-hover:scale-110" viewBox="0 0 512 512" fill="currentColor">
                      <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
                    </svg>
                  </a>
                </li>
                
                {/* Facebook */}
                <li>
                  <a 
                    href={`https://www.facebook.com/sharer.php?u=${pageUrl}&quote=${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out bg-transparent border rounded-full border-gray-300/70 sm:w-12 sm:h-12 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700 transition duration-300 ease-in-out transform group-hover:text-red-700 group-hover:scale-110" viewBox="0 0 512 512" fill="currentColor">
                      <path xmlns="http://www.w3.org/2000/svg" d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z" fillRule="evenodd" />
                    </svg>
                  </a>
                </li>
               
                {/* Linkedin */}
                <li>
                  <a 
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center justify-center w-10 h-10 transition duration-300 ease-in-out bg-transparent border rounded-full border-gray-300/70 sm:w-12 sm:h-12 group"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-700 transition duration-300 ease-in-out transform group-hover:text-red-700 group-hover:scale-110" viewBox="0 0 512 512" fill="currentColor">
                      <path xmlns="http://www.w3.org/2000/svg" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z" />
                    </svg>
                  </a>
                </li>
                
              </ul>
              
            </div>
          </div>


        </footer>
        
      </div>
    </article>
  );
});

Post.displayName = 'Post';

export default Post;