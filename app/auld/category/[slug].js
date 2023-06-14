import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import Layout from '../../components/layout/Layout'
import Newsletter from '../../components/shared/Newsletter'
import CategoryHeader from '../../components/headers/CategoryHeader'
import SingleColFeed from '../../components/shared/SingleColFeed'
import SidebarAd from '../../components/sidebar/SidebarAd'
import SidebarArticles from '../../components/sidebar/SidebarArticles'
import SidebarSocialLinks from '../../components/sidebar/SidebarSocialLinks'
import BannerArticle from '../../components/shared/BannerArticle'
import Pagination from '../../components/shared/Pagination'
import { getContentPage } from '../../libs/getContentPage'
import { getPostsInCategory, getPopularPostsInCategory } from '../../libs/getPosts'
import { getAuthors } from '../../libs/getAuthors'

export default function CategoryPage({
  slug,
  frontmatter: category,
  authors,
  newsletter,
  posts,
  popularPosts
}) {
  return (
    <Layout metaTitle={`Posts in ${category.name}`}>
      <CategoryHeader category={category} />

      {/* Feed with Sidebar */}
      <section className="relative max-w-xl px-4 py-12 mx-auto lg:max-w-screen-xl sm:py-16 lg:py-24 sm:px-12 md:max-w-3xl lg:px-8">
        <div className="w-full lg:grid lg:gap-8 xl:gap-12 lg:grid-cols-3">
          
          <div className="col-span-2">
            <SingleColFeed posts={posts.slice(0,6)} authors={authors} />
          </div>

          {/* Sidebar */}
          <div className="w-full mt-12 space-y-8 sm:mt-16 lg:mt-0 lg:col-span-1">
            <SidebarArticles posts={popularPosts} header={`Most read in ${category.name}`} />
            <SidebarSocialLinks />
            <SidebarAd />
          </div>

        </div>
      </section>

      {posts.length >= 8 && (
        <>
          <BannerArticle post={posts[6]} authors={authors} />
          
          <section className="relative max-w-xl px-5 py-12 mx-auto lg:max-w-4xl sm:py-16 lg:py-24 md:max-w-3xl lg:px-8">
            
            {/* Articles */}
            <div className="pb-8 mb-6 border-b-2 border-gray-100 sm:pb-10 sm:mb-10">
              <SingleColFeed posts={posts.slice(7,13)} authors={authors} />
            </div>

            <Pagination />
            
          </section>
        </>
      )}


      <Newsletter newsletter={newsletter} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const categoryFiles = fs.readdirSync(path.join('content/categories'))

  const paths = categoryFiles.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileContents = fs.readFileSync(
    path.join('content/categories', slug + '.md'),
    'utf8'
  )

  const { data: frontmatter } = matter(fileContents)

  return {
    props: {
      slug,
      frontmatter,
      authors: getAuthors(),
      newsletter: getContentPage('content/shared/newsletter.md'),
      popularPosts: getPopularPostsInCategory(frontmatter.name),
      posts: getPostsInCategory(frontmatter.name)
    },
  };
}