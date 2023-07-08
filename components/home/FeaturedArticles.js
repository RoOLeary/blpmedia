import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '../../utils/formatDate'
import tw from 'tailwind-styled-components';

const Section = tw.section`
  pt-12 sm:pt-16 lg:pt-20 bg-gray-50
`;

const Container = tw.div`
  max-w-2xl px-4 mx-auto sm:px-6 lg:px-8 lg:max-w-screen-2xl lg:flex lg:items-start
`;

const FirstArticle = tw.article`
  relative lg:top-8 lg:w-1/2 lg:stick
`;

const RecentContainer = tw.div`
  mt-12 sm:mt-16 lg:mt-0 lg:ml-12 lg:w-1/2 xl:ml-12
`;

export default function FeaturedArticles({authors, featuredPosts}) {

  let cats = featuredPosts[0].articleCategories;
  cats = cats.map((cat, i) => {
    return cat.title;
  })

  
  
  return (
    <Section>
      <Container>
        
        {/* 1st Featured Article */}
        <FirstArticle>
         
          {/* Image */}
          
          <Link
            href={`/posts/${featuredPosts[0].slug}`}
            className="relative z-10 block overflow-hidden bg-gray-100 aspect-w-16 aspect-h-9 group">

            <Image 
              className="object-cover object-center transition duration-300 ease-in-out group-hover:scale-110" 
              src={`${featuredPosts[0].articleImageUrl}`} 
              alt={featuredPosts[0].title}
              layout="fill"
            />

          </Link>
        
          {/* Content */}
          <div className="mt-6 md:align-middle">
            <Link
              // href={`/posts/${featuredPosts[0].slug}`}
              href={`/categories/`}
              className="relative text-sm font-medium tracking-widest text-red-700 uppercase duration-300 ease-in-out transition-color hover:text-red-600">
              Category

            </Link>
            <Link href={`/posts/${featuredPosts[0].slug}`} className="block mt-3 group">

              <h2 className="text-3xl font-black tracking-normal text-gray-900 transition duration-300 ease-in-out decoration-gray-800 decoration-3 group-hover:underline md:tracking-tight lg:leading-tight lg:text-4xl">
                {featuredPosts[0].title}
              </h2>
              <div>
                <p className="mt-4 text-base leading-loose text-gray-600">
                  {featuredPosts[0].articleExcerpt}
                </p>
              </div>

            </Link>
            
            {/* Author */}
          
            
          </div>

        </FirstArticle>

        {/* Recent Article s*/}
        <RecentContainer>
          <h3 className="pb-2.5 text-2xl font-black text-gray-900 border-b border-gray-300/70 relative before:content-[''] before:left-0 before:w-24 before:h-px before:-bottom-px before:bg-red-600 before:absolute">Recent stories</h3>
          
          {/* Articles Container */}
          <div className="grid lg:grid-cols-2 xl:grid-cols-1 lg:gap-x-5">
          
            {featuredPosts.slice(1, 7).map((post, index) => (
              
              <article key={index} className={`py-8 sm:flex xl:items-center lg:flex-col xl:flex-row ${index > 0 ? 'border-t lg:border-t-0 xl:border-t border-gray-300/70' : ''}`}>
                {/* Image */}
                <Link
                  href={`/posts/${post.slug}`}
                  className="order-2 w-full sm:w-2/5 lg:w-full xl:w-2/5 lg:order-1">

                  <div className="relative z-10 overflow-hidden bg-gray-100 aspect-w-16 aspect-h-9 group">
                    <Image 
                      className="object-cover object-center transition duration-300 ease-in-out group-hover:scale-110" 
                      src={`${post.articleImageUrl}`} 
                      alt={post.title}
                      layout="fill"
                    />
                  </div>

                </Link>

                {/* Content */}
                <div className="order-1 w-full px-2 mt-5 sm:max-w-sm sm:pr-5 sm:pl-0 sm:mt-0 lg:mt-4 xl:mt-0 xl:ml-5 xl:flex-1 lg:order-2">

                  <Link
                    href={`/posts/${post.slug}`}
                    // href={`/categories/${featuredPosts[0].frontmatter.category.replace(/ /g, '-').toLowerCase()}`}
                    className="relative text-sm font-medium tracking-widest text-red-700 uppercase duration-300 ease-in-out transition-color hover:text-red-600">

                    {post.articleCategories.map(cat => {
                      
                      let title = cat.title ? cat.title : ''; 
                      return title;
                    }).filter((title) => title !== 'Sport')}

                  </Link>

                  <Link href={`/posts/${post.slug}`}>

                    <h3 className="mt-2 text-xl font-black leading-normal tracking-normal text-gray-900 transition duration-300 ease-in-out hover:underline decoration-2 decoration-gray-800">
                      {post.title}
                    </h3>

                  </Link>
                  
                  {/* Author */}
                  <div className="flex items-center justify-between mt-4">
                    
                    {/* Author meta */}
                    {/* <div className="flex items-center justify-center">
                      <Link
                        href={`/authors/${post.frontmatter.author.replace(/ /g, '-').toLowerCase()}`}
                        className="relative w-6 h-6 mr-3 bg-gray-100">

                        {authors.map((author, i) =>
                          post.frontmatter.author === author.frontmatter.name && (
                            <Image 
                              key={i}
                              className="flex-shrink-0 object-cover object-center w-6 h-6 transition duration-300 ease-in-out" 
                              src={author.frontmatter.image} 
                              alt={author.frontmatter.name}
                              layout="fill"
                            />
                          )
                        )}

                      </Link>

                      <div className="text-sm">
                        <span className="text-gray-500">By </span>
                        <Link
                          href={`/authors/${post.frontmatter.author.replace(/ /g, '-').toLowerCase()}`}
                          className="font-medium text-gray-700 hover:underline">

                          {post.frontmatter.author}

                        </Link>
                        
                        <span className="text-gray-500 lg:hidden xl:inline-block"> · {formatDate(post.frontmatter.date)}</span>
                      </div>
                    </div> */}

                  </div>

                </div>

              </article>
            ))}

          </div>

        </RecentContainer>

      </Container>
    </Section>
  );
}