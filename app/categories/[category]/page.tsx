import Link from 'next/link';
import Layout from './../../../components/layout/Layout'
import CategoryHeader from './../../../components/headers/CategoryHeader'
import CategorySingleCol from './../../../components/shared/CategorySingleCol'
import SidebarArticles from './../../../components/sidebar/SidebarArticles'
import SidebarAd from './../../../components/sidebar/SidebarAd'
import BannerArticle from './../../../components/shared/BannerArticle'
import { getPopularPosts } from './../../../libs/getPosts'
import { getAuthors } from './../../../libs/getAuthors'

async function getCats(slug){
    const cats = await fetch(`https://craft-ezhk.frb.io/api/category/${slug}.json`);
    if (!cats.ok) {
      throw new Error('Failed to fetch data');
    }
    return cats.json();
  }


export default async function Page({ params }) {
    const category = params.category
    const techPosts = await getCats(category); 
    const postsinCat = techPosts.data[0].entries;
    const popularPosts = await getPopularPosts();
    const authors = await getAuthors(); 
    
    return (
        <Layout>
            <CategoryHeader category={params.category} />
          
            {/* Feed 2 */}
            <section className="relative max-w-xl px-4 py-12 mx-auto lg:max-w-screen-xl sm:py-16 lg:py-24 sm:px-12 md:max-w-3xl lg:px-8">
                <div className="w-full grid lg:gap-8 xl:gap-12 lg:grid-cols-3">
                    <div className="col-span-2">
                       <CategorySingleCol posts={postsinCat} />
                    </div>
                    {/* Sidebar */}
                    <div className="w-full mt-12 space-y-8 sm:mt-16 lg:mt-0 lg:col-span-1">
                        <SidebarAd /> 
                        {/* <SidebarArticles posts={popularPosts} header="Most read" /> */}
                    </div>
                </div>
            </section>

            {postsinCat.length >= 8 && (
              <>
                <BannerArticle post={postsinCat[6]} authors={authors} />
                
                <section className="relative max-w-xl px-5 py-12 mx-auto lg:max-w-4xl sm:py-16 lg:py-24 md:max-w-3xl lg:px-8">
                  
                  {/* Articles */}
                  <div className="pb-8 mb-6 border-b-2 border-gray-100 sm:pb-10 sm:mb-10">
                    {/* <CategorySingleCol posts={postsinCat.slice(7,13)} /> */}
                  </div>
{/* 
                  <Pagination /> */}
                  
                </section>
              </>
            )}
        </Layout>
    );
}