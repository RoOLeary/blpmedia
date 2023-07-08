import Layout from './../../../components/layout/Layout'
import CategoryHeader from './../../../components/headers/CategoryHeader'
import SidebarAd from './../../../components/sidebar/SidebarAd'
import SidebarArticles from './../../../components/sidebar/SidebarArticles'
import SidebarSocialLinks from './../../../components/sidebar/SidebarSocialLinks'
import CategorySingleCol from './../../../components/shared/CategorySingleCol'
import { getPopularPosts } from './../../../libs/getPosts'
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
    // sconsole.log(techPosts);
    const postsinCat = techPosts.data[0].entries;
    // const newsletter = await getContentPage('content/shared/newsletter.md');
    const posts = postsinCat.map(post => post);
    const popularPosts = await getPopularPosts(); 

    // console.log(posts);
    return (
        <Layout>
            <CategoryHeader category={params.category} />
            
            <section className="relative max-w-xl px-4 py-12 mx-auto lg:max-w-screen-xl sm:py-16 lg:py-24 sm:px-12 md:max-w-3xl lg:px-8">
                <div className="w-full grid lg:gap-8 xl:gap-12 lg:grid-cols-3">
                    <div className="col-span-2">
                        <CategorySingleCol posts={posts} />
                    </div>
                    {/* Sidebar */}
                  <div className="w-full mt-12 space-y-8 sm:mt-16 lg:mt-0 lg:col-span-1">
                    <SidebarArticles posts={popularPosts} header={`Most read in ${category.slug}`} />
                    <SidebarSocialLinks />
                    <SidebarAd />
                  </div>
                </div>
            </section>
        </Layout>
    );
}