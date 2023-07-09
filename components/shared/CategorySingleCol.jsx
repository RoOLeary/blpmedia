import Link from 'next/link'
import Image from 'next/image'


export default function CategorySingleCol({posts}) {
  console.log(posts);
  return <>   
    {posts.map((post, index) => (
      
      <article className="md:gap-8 md:grid md:grid-cols-4" key={post.slug}>
        
        {/* Image */}
        <div className="md:col-span-1">
          <Link
            href={`/posts/${post.slug}`}
            className="relative z-10 block overflow-hidden md:aspect-w-1 md:aspect-h-1 aspect-w-16 aspect-h-9 group bg-gray-50">

            <Image 
              className="object-cover object-center transition duration-300 ease-in-out group-hover:scale-110" 
              src={post.articleImageUrl} 
              alt={post.title}
              width={150}
              height={150}
            />

          </Link>
        </div>

        {/* Content */}
        <div className="relative flex flex-col flex-wrap mt-6 md:mt-0 md:col-span-3">
          <div className={`box-border flex flex-col justify-between flex-1 w-full px-6 md:px-0 ${index != posts.length -1 ? 'pb-8 mb-8 border-b-2 border-gray-100' : ''}`}>
            <div>
              
              <h3 className="mt-2.5 text-xl font-medium leading-tight text-gray-900 transition duration-300 ease-in-out lg:text-xl sm:text-2xl xl:text-2xl decoration-gray-800 decoration-2 hover:underline">
                <Link href={`/posts/${post.slug}`}>

                  <span className="absolute inset-0" aria-hidden="true" />
                  {post.title}

                </Link>
              </h3>
              <p className="block mt-3.5 text-base leading-relaxed text-gray-500">
                {post.description}
              </p>
            </div>

            {/* Article Footer Info */}
            <footer className="flex items-center mt-5 sm:mt-7">
              
              {/* Author Image */}
              {/* <Link
                href={`/authors/${post.frontmatter.author.replace(/ /g, '-').toLowerCase()}`}
                className="relative mr-3 bg-gray-50 w-7 h-7 lg:w-8 lg:h-8">

                {authors.map((author) =>
                  post.frontmatter.author === author.frontmatter.name && (
                    <Image
                      key={author.frontmatter.image}
                      className="flex-shrink-0 object-cover object-center" 
                      src={author.frontmatter.image} 
                      alt={author.frontmatter.name}
                      layout="fill"
                    />
                  )
                )}

              </Link> */}

              {/* <div className="text-sm lg:text-[15px] flex items-center">
                <span className="hidden text-gray-500 sm:inline-block">By&nbsp;</span>
                <Link
                  href={`/authors/${post.frontmatter.author.replace(/ /g, '-').toLowerCase()}`}
                  className="relative font-medium text-gray-700 hover:underline">

                  {post.frontmatter.author}

                </Link>
                
                <CalendarIcon className="w-[18px] h-[18px] ml-2.5 text-gray-400" />
                <span className="ml-1 text-gray-500">{formatDate(post.frontmatter.date)}</span>
                <span className="items-center hidden sm:flex">
                  <ClockIcon className="w-[18px] h-[18px] ml-2.5 text-gray-400" />
                  <span className="ml-1 text-gray-500">{post.frontmatter.time_to_read_in_minutes} min read</span>
                </span>
              </div> */}
            </footer>

          </div>
        </div>

      </article>
    ))}
  </>;
}