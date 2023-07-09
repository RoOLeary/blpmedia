import Link from 'next/link'
import Image from 'next/image'


const slugify = (str) => {
  
  str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
  str = str.toLowerCase(); // convert string to lowercase
  str = str.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
           .replace(/\s+/g, '-') // replace spaces with hyphens
           .replace(/-+/g, '-'); // remove consecutive hyphens
  // console.log(str);
  return str;
}

export default function CategorySingleCol({posts}) {
  
  return <>   
    {posts.map((post, index) => (
      
      <article className="md:gap-8 md:grid md:grid-cols-4" key={index}>
        
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
          <div className={`box-border flex flex-col justify-between flex-1 w-full px-2 md:px-0 ${index != posts.length -1 ? 'pb-8 mb-8 border-b-2 border-gray-100' : ''}`}>
            <div>
              <Link
                href={`/categories/${post.articleCategories[1] ? post.articleCategories[1]['slug'] : '#'}`}
                className="relative z-10 font-medium tracking-widest text-red-700 uppercase duration-300 ease-in-out text-tiny transition-color hover:text-red-600">

                  {post.articleCategories[1] ? post.articleCategories[1]['title'] : null}

              </Link>
              <h3 className="mt-2.5 text-xl font-medium leading-tight text-gray-900 transition duration-300 ease-in-out lg:text-xl sm:text-2xl xl:text-2xl decoration-gray-800 decoration-2 hover:underline">
                <Link href={`/posts/${post.slug}`}>

                  <span className="absolute inset-0" aria-hidden="true" />
                  {post.title}

                </Link>
              </h3>
              <p className="block mt-3.5 text-base leading-relaxed text-gray-500">
                {post.articleExcerpt}
              </p>
            </div>

            {/* Article Footer Info */}
            <footer className="flex items-center mt-5 sm:mt-7">

                  <Link href="Linkuthor.html" className="relative mr-3 rounded-lg bg-gray-50">
                    <Image className="flex-shrink-0 object-cover object-center transition duration-300 ease-in-out rounded opacity-0 w-7 h-7 lg:w-8 lg:h-8 lazy entered loaded" alt="Author 01" width={150} height={150} src={"/images/authors/veronica-mars.jpeg"}/>
                  </Link>
                  
                  <div className="text-sm lg:text-[15px] flex items-center">
                    <span className="hidden text-gray-500 sm:inline-block">By&nbsp;</span>
                    <a className="relative font-medium text-gray-700 hover:underline" href="author.html">Syndi Cated</a>
                    
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] ml-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                      </svg>
                      <span className="ml-1 text-gray-500">July 9, 2023</span>
  
                      <span className="items-center hidden sm:flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] ml-2.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span className="ml-1 text-gray-500">15 min read</span>
                      </span>
                    
                  </div>
                </footer>

          </div>
        </div>

      </article>
    ))}
  </>;
}