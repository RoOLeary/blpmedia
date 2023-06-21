import Layout from '../components/layout/Layout'
import SimpleHeader from '../components/headers/SimpleHeader'
import SidebarSocialLinks from '../components/sidebar/SidebarSocialLinks'
import SidebarInstagramFeed from '../components/sidebar/SidebarInstagramFeed'
import SidebarArticles from '../components/sidebar/SidebarArticles'
import Newsletter from '../components/shared/Newsletter'
import { getContentPage } from '../libs/getContentPage'
import { getInstagramFeed } from '../libs/getInstagramFeed'
import { getPopularPosts } from '../libs/getPosts'
import { marked } from 'marked'

export default function About({privacy, newsletter, instagramFeed, popularPosts}) {
  return (
    <Layout
      metaTitle={privacy.frontmatter.title}
      metaDescription={privacy.frontmatter.description}
    >
      <SimpleHeader header={privacy.frontmatter.header} />

      {/* Main Content */}
      <section className="max-w-screen-xl py-12 mx-auto md:py-16 lg:py-20 lg:px-8">
        <div className="w-full lg:space-x-8 lg:flex">
         
          {/* Page Content */}
          <div className="lg:w-2/3">

            {/* Uses the official Tailwind CSS Typography plugin */}
            <div className="px-5 sm:px-6 md:px-8 lg:px-0 mx-auto lg:mx-0 prose sm:prose-lg hover:prose-a:text-red-700 prose-a:duration-300 prose-a:ease-in-out prose-a:transition  first-letter:text-4xl first-letter:font-bold first-letter:tracking-[.15em]" dangerouslySetInnerHTML={{ __html: marked.parse(privacy.content) }}></div>

          </div>

          {/* Sidebar */}
          <div className="w-full max-w-xl px-4 mx-auto mt-12 space-y-8 sm:mt-16 lg:mt-0 md:max-w-2xl sm:px-6 md:px-8 lg:px-0 lg:w-1/3 lg:max-w-none">
            <SidebarArticles posts={popularPosts} header="Most read articles" />
            <SidebarSocialLinks />
            <SidebarInstagramFeed feed={instagramFeed} />
          </div>
          
        </div>
      </section>

      <Newsletter newsletter={newsletter} />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      privacy: getContentPage('content/pages/privacy.md'),
      instagramFeed: getInstagramFeed(),
      popularPosts: getPopularPosts().slice(0,4),
      newsletter: getContentPage('content/shared/newsletter.md')
    },
  }
}