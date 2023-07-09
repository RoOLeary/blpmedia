import Link from 'next/link'
import Image from 'next/image'

export default function CategorySidebarArticles({header, posts}) {
  return (
    <div className="w-full p-5 bg-gray-50 sm:p-8">
      <h3 className="pb-2.5 text-2xl font-medium text-gray-900 border-b border-gray-300/70 relative before:content-[''] before:left-0 before:w-24 before:h-px before:-bottom-px before:bg-red-600 before:absolute">{header}</h3>

      {/* Articles */}
      <div className="pt-6 space-y-6 sm:space-y-5 lg:space-y-6 xl:space-y-5">

        {posts.map((post, index) => (
          <article key={index} className="flex space-x-4 sm:space-x-6 lg:space-x-4">
            
            {/* Image */}
            <Link
              href={`/posts/${post.slug}`}
              className="relative z-10 w-24 h-24 overflow-hidden bg-gray-100 group sm:w-28 sm:h-28 lg:w-20 lg:h-20 xl:w-24 xl:h-24">

              <Image 
                className="object-cover object-center w-full h-full transition duration-300 ease-in-out group-hover:scale-110" 
                src={post.articleImageUrl} 
                alt={post.title}
                width={200}
                height={200}
              />

            </Link>
            
            {/* Content */}
            <div className="w-2/3">
              <div className="flex flex-col justify-center flex-1 w-full h-full">
                <div>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="font-medium leading-snug tracking-normal text-gray-900 transition duration-300 ease-in-out text-md hover:underline decoration-2 decoration-gray-800">

                    {post.title}

                  </Link>
                </div>

                {/* Author */}
                <div className="flex items-center justify-between mt-2">

                  {/* Author meta */}
                  {/* <div className="flex items-center justify-center">
                    <div className="text-sm">
                      <span className="text-gray-500">By </span>
                      <Link
                        href={`/authors/${post.frontmatter.author.replace(/ /g, '-').toLowerCase()}`}
                        className="font-medium text-gray-700 hover:underline">
                        {post.frontmatter.author}
                      </Link>
                    </div>
                  </div> */}

                </div>
                
              </div>
            </div>
            
          </article>
        ))}
        
      </div>

    </div>
  );
}