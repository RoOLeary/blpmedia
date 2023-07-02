
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../../../components/layout/Layout';
import Post from '../../../components/posts/Post';
import NextArticle from '../../../components/posts/NextArticle';


async function getRemotePost(){

  const remotepost = await fetch(`https://content.api.pressassociation.io/v1/item`, {  
    method: 'GET',
    headers: {
      "Accept": "application/json",
      "apikey": "2wmhpxengxmes4d9xfdk4a79"
    },
  })
  .then(response => response.json())

  return remotepost;
}

const slugify = (str) => {
  
  str = str.replace(/^\s+|\s+$/g, ''); // trim leading/trailing white space
  str = str.toLowerCase(); // convert string to lowercase
  str = str.replace(/[^a-z0-9 -]/g, '') // remove any non-alphanumeric characters
           .replace(/\s+/g, '-') // replace spaces with hyphens
           .replace(/-+/g, '-'); // remove consecutive hyphens
  console.log(str);
  return str;
}

const RemotePost = ({ post }) => {
  // console.log(post);
  const { headline, uri, description_text } = post;
  // console.log(slugify(headline)); 
  return(
    // <div className={'p-4'}>
    //   <Link href={`${uri}`}><h2 className={"font-bold my-2"}>{headline}</h2></Link>
    //   <p>{description_text}</p>  
    // </div>
    <article key={uri} className="flex space-x-4 sm:space-x-6 lg:space-x-4 mt-4 mb-4">
            
    {/* Image */}
    <Link
      href={`/posts/${slugify(headline)}`}
      className="relative z-10 w-24 h-24 overflow-hidden bg-gray-100 group sm:w-28 sm:h-28 lg:w-20 lg:h-20 xl:w-24 xl:h-24">
        

    </Link>
    
    {/* Content */}
    <div className="w-2/3">
      <div className="flex flex-col justify-center flex-1 w-full h-full">
        <div>
          <Link
            href={`/posts/${slugify(headline)}`}
            className="font-black leading-snug tracking-normal text-gray-900 transition duration-300 ease-in-out text-md hover:underline decoration-2 decoration-gray-800">

            {headline}

          </Link>
        </div>

        {/* Author */}
        <div className="flex items-center justify-between mt-2">
        {description_text}

        
          
        </div>
        
      </div>
    </div>
    
  </article>
    

  )
}

async function getBlogPost(slug){
  const blogPost = await fetch(`https://craft-ezhk.frb.io/api/articles/${slug}.json`, { next: { revalidate: 10 } });
  if (!blogPost.ok) {
    throw new Error('Failed to fetch data');
  }
  return blogPost.json();
}

export default async function Page({ params }){
  let blogPost = await getBlogPost(params.slug);

  let remoteposts = await getRemotePost(); 
  const remoteData = Object.entries(remoteposts).map((post, i) => {
    const output = Object.entries(post[1]).map((p, i) => <RemotePost key={i} post={p[1]} />).slice(1,19) //title={p[1].headline} content={p[1].body_text} excerpt={p[1].description_text} />)
    return output;
  });

  return (
    <Layout>
     
      <Post post={blogPost} postContent={blogPost.articleContent} />
      
        {/* {remoteData} */}
      <NextArticle post={blogPost} />
    </Layout>
  );
}