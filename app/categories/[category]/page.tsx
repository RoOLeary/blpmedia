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
    const newsletter = await getContentPage('content/shared/newsletter.md');
    const posts = postsinCat.map((post) => post);

    console.log(posts);
    return (
        <Layout>
            <CategoryHeader category={params.category} />
            
            {/* Feed with Sidebar */}
            <section className="relative max-w-xl px-4 py-12 mx-auto lg:max-w-screen-xl sm:py-16 lg:py-24 sm:px-12 md:max-w-3xl lg:px-8">
                <div className="w-full lg:grid lg:gap-8 xl:gap-12 lg:grid-cols-3">
                    <div className="col-span-2">
                        STUFF HERE
                    </div>

                </div>
            </section>
           
            <Newsletter newsletter={newsletter} />
        </Layout>
    );
}