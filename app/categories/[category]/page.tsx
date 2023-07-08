import Layout from './../../../components/layout/Layout'
import CategoryHeader from './../../../components/headers/CategoryHeader'

async function getCats(slug){
    const cats = await fetch(`https://craft-ezhk.frb.io/api/category/${slug}.json`, { next: { revalidate: 10 } });
    if (!cats.ok) {
      throw new Error('Failed to fetch data');
    }
    return cats.json();
  }


export default async function Page({ params }) {
    const category = params.category
    const techPosts = await getCats(category); 
    console.log(techPosts);
    // const postsinCat = techPosts.data[0].entries;
    // const newsletter = await getContentPage('content/shared/newsletter.md');
    // const posts = postsinCat.map((post) => post);

    // console.log(posts);
    return (
        <Layout>
            <CategoryHeader category={params.category} />
            
        </Layout>
    );
}