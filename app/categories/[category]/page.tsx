import Link from 'next/link';
import Layout from './../../../components/layout/Layout'
import CategoryHeader from './../../../components/headers/CategoryHeader'
import Newsletter from './../../../components/shared/Newsletter'
import SingleColFeed from './../../../components/shared/SingleColFeed'
import SidebarAd from './../../../components/sidebar/SidebarAd'
import SidebarArticles from './../../../components/sidebar/SidebarArticles'
import SidebarSocialLinks from './../../../components/sidebar/SidebarSocialLinks'
import BannerArticle from './../../../components/shared/BannerArticle'
import Pagination from './../../../components/shared/Pagination'
import { getContentPage } from './../../../libs/getContentPage'
import { getPostsInCategory, getPopularPostsInCategory } from './../../../libs/getPosts'
import { getAuthors } from './../../../libs/getAuthors'


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
    const postsinCat = techPosts.data[0].entries;
    const authors = await getAuthors();
    const newsletter = await getContentPage('content/shared/newsletter.md');
    const popularPosts = await getPopularPostsInCategory(category);
    const posts = postsinCat.map((post) => post);

    // console.log(techPosts.data[0].entries[1]);
    return (
        <Layout>
            <CategoryHeader category={params.category} />
            
            {/* Feed with Sidebar */}
            <section className="relative max-w-xl px-4 py-12 mx-auto lg:max-w-screen-xl sm:py-16 lg:py-24 sm:px-12 md:max-w-3xl lg:px-8">
                <div className="w-full lg:grid lg:gap-8 xl:gap-12 lg:grid-cols-3">
                    <div className="col-span-2">
                        <SingleColFeed posts={techPosts.data[0].entries.slice(0,6)} authors={authors} />
                    </div>

                    {/* Sidebar */}
                    <div className="w-full mt-12 space-y-8 sm:mt-16 lg:mt-0 lg:col-span-1">
                        <SidebarArticles posts={popularPosts} header={`Most read in ${category.toUpperCase()}`} />
                        <SidebarSocialLinks />
                        <SidebarAd />
                    </div>
                </div>
            </section>
            <BannerArticle post={techPosts.data[0].entries[5]} authors={authors} />
            {posts.length >= 8 && (
                <>
                <section className="relative max-w-xl px-5 py-12 mx-auto lg:max-w-4xl sm:py-16 lg:py-24 md:max-w-3xl lg:px-8">
                    
                    {/* Articles */}
                    <div className="pb-8 mb-6 border-b-2 border-gray-100 sm:pb-10 sm:mb-10">
                    <SingleColFeed posts={techPosts.data[0].entries.slice(7,13)} authors={authors} />
                    </div>

                    <Pagination />
                    
                </section>
                </>
            )}
            <Newsletter newsletter={newsletter} />
        </Layout>
    );
}