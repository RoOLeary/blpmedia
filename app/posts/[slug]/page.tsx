
import Layout from '../../../components/layout/Layout';
import Post from '../../../components/posts/Post';
import NextArticle from '../../../components/posts/NextArticle';

export const CheckMark = () => {
  return (
    <svg viewBox="0 0 20 20" width="100px" height="100px" className="center-icon">
      <g fill="#f00">
        <rect y={10} width={2} height={2} />
        <rect x={2} y={12} width={2} height={2} />
        <rect x={4} y={14} width={2} height={2} />
        <rect x={6} y={16} width={2} height={2} />
        <rect x={8} y={14} width={2} height={2} />
        <rect x={10} y={12} width={2} height={2} />
        <rect x={12} y={10} width={2} height={2} />
        <rect x={14} y={8} width={2} height={2} />
        <rect x={16} y={6} width={2} height={2} />
        <rect x={18} y={4} width={2} height={2} />
      </g>
    </svg>
  );
};

export const Close = () => {
  return (
    <svg viewBox="0 0 20 20" width="20px" height="20px" className="center-icon">
      <path d="M0,2.9h2.9V0H0V2.9z M2.9,5.7h2.9V2.9H2.9V5.7z M5.7,8.6h2.9V5.7H5.7V8.6z M8.6,11.4h2.9V8.6H8.6V11.4z M5.7,14.3h2.9v-2.9H5.7V14.3z M2.9,17.1h2.9v-2.9H2.9V17.1z M0,20h2.9v-2.9H0V20z M11.4,14.3h2.9v-2.9h-2.9V14.3z M14.3,17.1h2.9v-2.9h-2.9V17.1zM17.1,20H20v-2.9h-2.9V20z M11.4,8.6h2.9V5.7h-2.9V8.6z M14.3,5.7h2.9V2.9h-2.9V5.7z M17.1,2.9H20V0h-2.9V2.9z" />
    </svg>
  );
};




async function getRemotePost(){

  const remotepost = await fetch(`https://content.api.pressassociation.io/v1/item`, {  
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "apikey": "2wmhpxengxmes4d9xfdk4a79"
    },
  })
  .then(response => response.json())

  return remotepost;
}


const Placeholder = (data) => {
  
  return(
    <div className={'p-4'}>
      <h2 className={"font-bold my-2"}>{data.title}</h2>
      <p>{data.excerpt}</p>  
    </div>

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
    const output = Object.entries(post[1]).map((p, i) => <Placeholder title={p[1].headline} content={p[1].body_text} excerpt={p[1].description_text} />)
    return output;
  });

  return (
    <Layout>
     
      <Post post={blogPost} postContent={blogPost.articleContent} />
      
        {remoteData}
      <NextArticle post={blogPost} />
    </Layout>
  );
}