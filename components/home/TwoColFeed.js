import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '../../utils/formatDate'

export default function TwoColFeed({posts, authors}) {
  return (
    <div className="col-span-2">
      
      {/* Advertisement Banner */}
      <a href="#" className="relative block w-full max-w-xl px-4 mx-auto  sm:px-6 md:px-8 lg:px-0 md:max-w-3xl lg:max-w-none bg-gray-50">
        <Image 
          className="object-cover w-full h-auto " 
          src="/images/ads/banner.jpeg" 
          alt="Banner Ad"
          width={960}
          height={240}
          layout="responsive"
        />
      </a>
      
      {/* Articles */}
      <div className="grid max-w-xl gap-6 px-4 mx-auto mt-8 sm:px-6 md:px-8 lg:px-0 md:max-w-3xl lg:max-w-none md:grid-cols-2">
        
        {posts.map((post, index) => (
          <article key={index} className="relative flex flex-col flex-wrap transition duration-300 ease-in-out group hover:shadow-xl">
            
            {/* Image */}
            <div className="relative z-10 w-full overflow-hidden aspect-w-2 aspect-h-1 bg-gray-50">
              <Link href={`/posts/${post.slug}`}>

                <Image 
                  className="absolute inset-0 object-cover object-center w-full h-full transition duration-300 ease-in-out group-hover:scale-110" 
                  src={post.frontmatter.image} 
                  alt={post.frontmatter.title}
                  layout="fill"
                />

              </Link>
            </div>
          
            {/* Content */}
            <div className="box-border flex flex-col justify-between flex-1 w-full p-6 transition duration-300 ease-in-out bg-white border-b-2 border-l-2 border-r-2 border-gray-100 xl:p-7 group-hover:border-transparent">
              <div>

                <Link
                  href={`/categories/${post.frontmatter.category.replace(/ /g, '-').toLowerCase()}`}
                  className="relative z-10 font-medium tracking-widest text-red-700 uppercase duration-300 ease-in-out text-tiny transition-color hover:text-red-600">

                  {post.frontmatter.category}

                </Link>
                
                <h3 className="mt-3 text-xl font-medium leading-tight text-gray-900 transition duration-300 ease-in-out lg:text-xl sm:text-2xl xl:text-2xl decoration-gray-800 decoration-2 hover:underline">

                  <Link href={`/posts/${post.slug}`}>

                    <span className="absolute inset-0" aria-hidden="true" />
                    {post.frontmatter.title}

                  </Link>
                  
                </h3>

                <p className="block mt-4 text-base leading-relaxed text-gray-500">
                  {post.frontmatter.description}
                </p>
                
              </div>

              {/* Author */}
              <div className="flex items-center mt-5 sm:mt-6">

                <Link
                  href={`/authors/${post.frontmatter.author.replace(/ /g, '-').toLowerCase()}`}
                  className="relative w-10 h-10  bg-gray-50">

                  {authors.map((author) =>
                    post.frontmatter.author === author.frontmatter.name && (
                      <Image 
                        key={author.frontmatter.name}
                        className="object-cover object-center w-full h-full transition duration-300 ease-in-out " 
                        src={author.frontmatter.image} 
                        alt={author.frontmatter.name}
                        layout="fill"
                      />
                    )
                  )}

                </Link>

                <div className="ml-3">
                  
                  <Link
                    href={`/authors/${post.frontmatter.author.replace(/ /g, '-').toLowerCase()}`}
                    className="relative text-sm font-medium text-gray-700 hover:underline">

                    {post.frontmatter.author}

                  </Link>
              
                  <p className="text-sm text-gray-500">
                    <span>{formatDate(post.frontmatter.date)}</span>
                    <span aria-hidden="true"> · </span>
                    <span> {post.frontmatter.time_to_read_in_minutes} min read </span>
                  </p>
                  
                </div>
              </div>

            </div>

          </article>
        ))}
        
      </div>

    </div>
  );
}