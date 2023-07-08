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
            
        </Layout>
    );
}