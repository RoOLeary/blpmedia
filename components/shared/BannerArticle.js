import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '../../utils/formatDate'
import { CalendarIcon, ClockIcon } from '@heroicons/react/outline'

export default function BannerArticle({post, authors}) {
  return (
    <section className="relative w-full mb-52 lg:mb-40">
      
      {/* Image */}
      <Link href={`/posts/${post.slug}`}>

        <div className="aspect-w-5 aspect-h-2 bg-gray-50">
          <Image 
            className="object-cover object-center" 
            src={post.frontmatter.image} 
            alt={post.frontmatter.title}
            layout="fill"
          />
        </div>

      </Link>

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 w-full max-w-3xl px-4 mx-auto translate-y-4/5 sm:translate-y-3/4 lg:translate-y-1/2 sm:px-6">
        <div className="flex items-center justify-center px-5 py-8 shadow-md sm:shadow-lg sm:p-10 md:p-12 bg-white/90 backdrop-blur-md lg:p-14 rounded-2xl ">
          <div className="flex flex-col items-center text-center">
            <Link
              href={`/categories/${post.frontmatter.category.replace(/ /g, '-').toLowerCase()}`}
              className="relative text-sm font-medium tracking-widest text-red-700 uppercase duration-300 ease-in-out transition-color hover:text-red-600">
              {post.frontmatter.category}
            </Link>
            <Link href={`/posts/${post.slug}`} className="block mt-3 group">

              <h2 className="text-2xl font-medium tracking-normal text-gray-900 transition duration-300 ease-in-out sm:text-3xl decoration-gray-800 decoration-2 sm:decoration-3 group-hover:underline md:tracking-tight lg:leading-tight lg:text-4xl">{post.frontmatter.title}</h2>

            </Link>
            
            {/* Article Footer Info */}
            <footer className="flex items-center justify-between mt-5 sm:mt-7">
              <div className="flex items-center justify-center">
                
                <Link
                  href={`/authors/${post.frontmatter.author.replace(/ /g, '-').toLowerCase()}`}
                  className="relative mr-3 rounded-lg bg-gray-50 w-7 h-7 lg:w-8 lg:h-8">

                  {authors.map((author) =>
                    post.frontmatter.author === author.frontmatter.name && (
                      <Image
                        key={author.frontmatter.name}
                        className="flex-shrink-0 object-cover object-center rounded-lg" 
                        src={author.frontmatter.image} 
                        alt={author.frontmatter.name}
                        layout="fill"
                      />
                    )
                  )}

                </Link>
                
                <div className="text-sm lg:text-[15px] flex items-center">
                  <span className="hidden text-gray-500 sm:inline-block">By&nbsp;</span>
                  <Link
                    href={`/authors/${post.frontmatter.author.replace(/ /g, '-').toLowerCase()}`}
                    className="font-medium text-gray-700 hover:underline">
                    {post.frontmatter.author}
                  </Link>
            
                  <CalendarIcon className="w-[18px] h-[18px] ml-2.5 text-gray-400" />
                  <span className="ml-1 text-gray-500">{formatDate(post.frontmatter.date)}</span>
                  <span className="items-center hidden sm:flex">
                    <ClockIcon className="w-[18px] h-[18px] ml-2.5 text-gray-400" />
                    <span className="ml-1 text-gray-500">{post.frontmatter.time_to_read_in_minutes} min read</span>
                  </span>
                </div>
              </div>
            </footer>
            
          </div>
        </div>
      </div>
      
    </section>
  );
}