import Layout from '../components/layout/Layout'
import AboutHeader from '../components/about/AboutHeader'
import AboutContent from '../components/about/AboutContent'
import Partners from '../components/about/Partners'
import Team from '../components/about/Team'
import Careers from '../components/about/Careers'
import Newsletter from '../components/shared/Newsletter'
import { getAuthors } from '../libs/getAuthors'
import { getContentPage } from '../libs/getContentPage'

export default function About({about, authors, newsletter}) {
  return (
    <Layout 
      metaTitle={about.frontmatter.title} 
      metaDescription={about.frontmatter.description}
    >
      <AboutHeader header={about.frontmatter.header} />
      <AboutContent content={about.content} />
      {/* <Partners partnerSection={about.frontmatter.partner_section} /> */}
      <Team teamSection={about.frontmatter.team_section} authors={authors} />
      <Careers careers={about.frontmatter.careers} />
      <Newsletter newsletter={newsletter} />
    </Layout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      authors: getAuthors(),
      about: getContentPage('content/pages/about.md'),
      newsletter: getContentPage('content/shared/newsletter.md')
    },
  }
}
