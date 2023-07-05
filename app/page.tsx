import Layout from '../components/layout/Layout'
import FeaturedArticles from '../components/home/FeaturedArticles'
import TwoColFeed from '../components/home/TwoColFeed'
import SingleColFeed from '../components/shared/SingleColFeed'
import SidebarArticles from '../components/sidebar/SidebarArticles'
import SidebarTags from '../components/home/SidebarTags'
import SidebarSocialLinks from '../components/sidebar/SidebarSocialLinks'
import SidebarInstagramFeed from '../components/sidebar/SidebarInstagramFeed'
import SidebarAd from '../components/sidebar/SidebarAd'
import Topics from '../components/home/Topics'
import BannerArticle from '../components/shared/BannerArticle'

import Newsletter from '../components/shared/Newsletter'
import { getArchivedPosts, getFeaturedPosts, getPopularPosts } from '../libs/getPosts'
import { getAuthors } from '../libs/getAuthors'
import { getCategories } from '../libs/getCategories'
import { getTags } from '../libs/getTags'
import { getInstagramFeed } from '../libs/getInstagramFeed'
import { getContentPage } from '../libs/getContentPage'


async function getFeatured() {
    
    return getFeaturedPosts();
}

async function getAllAuthors() {
    return getAuthors();
}

async function getAllCats() {
    return getCategories();
}

async function getAllTags() {
    return getTags();
}

async function getAllArchivePosts() {
    return getArchivedPosts();
}

async function getAllPopularPosts() {
    return getPopularPosts();
}

async function getAllInstas(){
    return getInstagramFeed(); 
}

async function getData(){
    const res = await fetch('https://craft-ezhk.frb.io/api/homepage.json', { next: { revalidate: 30 } });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

async function getArticles(){
    const res = await fetch('https://craft-ezhk.frb.io/api/articles.json', { next: { revalidate: 30 } });
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function Page() {
    const craftData = await getData(); 
    const featuredPosts = await getFeatured(); 
    const authors = await getAllAuthors(); 
    const categories = await getAllCats();
    const tags = await getAllTags();
    const popularPosts = await getAllPopularPosts(); 
    const archivedPosts = await getAllArchivePosts(); 
    const instagramFeed = await getAllInstas(); 
    const newsletter = getContentPage('content/shared/newsletter.md')

    const articles = await getArticles();

    return (
        <Layout>
            <FeaturedArticles featuredPosts={articles.data.slice(0,7)} authors={authors} />
            <Topics categories={categories} />
            
            <section className="relative max-w-screen-xl py-12 mx-auto md:py-16 lg:py-20 lg:px-8">
                <div className="w-full grid lg:gap-8 lg:grid-cols-3">
                    <TwoColFeed posts={archivedPosts.slice(0,6)} authors={authors} />
                    
                    {/* Sidebar */}
                    <div className="w-full max-w-xl px-4 mx-auto mt-12 space-y-8 sm:mt-16 lg:mt-0 md:max-w-3xl sm:px-6 md:px-8 lg:px-0 lg:col-span-1 lg:max-w-none">
                        <SidebarArticles posts={featuredPosts.slice(7,11)} header="Featured" />
                        <SidebarTags tags={tags.slice(0,10)} header="Popular tags" />
                        <SidebarSocialLinks />
                        <SidebarInstagramFeed feed={instagramFeed} />
                    </div>
                </div>
            </section>

            <BannerArticle post={featuredPosts[featuredPosts.length - 1]} authors={authors} />

            {/* Feed 2 */}
            <section className="relative max-w-xl px-4 py-12 mx-auto lg:max-w-screen-xl sm:py-16 lg:py-24 sm:px-12 md:max-w-3xl lg:px-8">
                <div className="w-full grid lg:gap-8 xl:gap-12 lg:grid-cols-3">
                    <div className="col-span-2">
                        <SingleColFeed posts={articles.data.slice(7,15)} authors={authors} />
                    </div>

                    {/* Sidebar */}
                    <div className="w-full mt-12 space-y-8 sm:mt-16 lg:mt-0 lg:col-span-1">
                        <SidebarAd />
                        <SidebarArticles posts={popularPosts} header="Most read" />
                    </div>
                </div>
            </section>
            <Newsletter newsletter={newsletter} />        
        </Layout>
    )
}
