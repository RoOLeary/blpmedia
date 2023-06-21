import Link from 'next/link'
import Image from 'next/image'
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

async function getData() {
    const res = await fetch('https://craft-ezhk.frb.io/api/homepage.json', { next: { revalidate: 30 } });
if (!res.ok) {
    throw new Error('Failed to fetch data');
}
return res.json();
}


export default async function Page({
  authors, 
  featuredPosts, 
  archivedPosts, 
  popularPosts, 
  categories, 
  tags, 
  instagramFeed, 
  newsletter
}) {

  const tabs = [
    {
      id: 1, 
      label: 'Tab 1',
      content: <p>Content for tab 1 goes here</p>,
    },
    {
      id: 2,
      label: 'Tab 2',
      content: <p>Content for tab 2 goes here</p>,
    },
    {
      id: 3,
      label: 'Tab 3',
      content: <p>Content for tab 3 goes here</p>,
    },
  ];

  return (
    <Layout>
      Page
    </Layout>
  )
}

// export async function getStaticProps() {
//   return {
//     props: {
//       authors: getAuthors(),
//       featuredPosts: getFeaturedPosts(),
//       categories: getCategories(),
//       tags: getTags(),
//       instagramFeed: getInstagramFeed(),
//       popularPosts: getPopularPosts(),
//       archivedPosts: getArchivedPosts(),
//       newsletter: getContentPage('content/shared/newsletter.md')
//     }
//   }
// }
