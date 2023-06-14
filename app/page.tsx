import Newsletter from '../components/shared/Newsletter'
import FeaturedArticles from '../components/home/FeaturedArticles'
import { getArchivedPosts, getFeaturedPosts, getPopularPosts } from '../libs/getPosts'
import { getAuthors } from '../libs/getAuthors'
import { getCategories } from '../libs/getCategories'
import { getTags } from '../libs/getTags'
import { getInstagramFeed } from '../libs/getInstagramFeed'
import { getContentPage } from '../libs/getContentPage'
 

async function getPosts() {
    const res = await getFeaturedPosts();
    const posts = await res;
    return posts
}


export default async function Page() {
  
    const data = await getPosts();


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
      <div>
        <FeaturedArticles featuredPosts={data.slice(0,7)} />
         
        {/* Feed */}
        {/* <section className="relative max-w-screen-xl py-12 mx-auto md:py-16 lg:py-20 lg:px-8">
          <div className="w-full lg:grid lg:gap-8 lg:grid-cols-3">
            <TwoColFeed posts={archivedPosts.slice(0,6)} authors={authors} />
            
            {/* Sidebar 
            <div className="w-full max-w-xl px-4 mx-auto mt-12 space-y-8 sm:mt-16 lg:mt-0 md:max-w-3xl sm:px-6 md:px-8 lg:px-0 lg:col-span-1 lg:max-w-none">
              
              <SidebarArticles posts={featuredPosts.slice(7,11)} header="Featured" />
              <SidebarTags tags={tags.slice(0,10)} header="Popular tags" />
              <SidebarSocialLinks />
              <SidebarInstagramFeed feed={instagramFeed} />
            </div>
  
          </div>
        </section> */}
        SOMETHING HERE. FROM PAGE
        
        {/* Feed 2
        <section className="relative max-w-xl px-4 py-12 mx-auto lg:max-w-screen-xl sm:py-16 lg:py-24 sm:px-12 md:max-w-3xl lg:px-8">
          <div className="w-full lg:grid lg:gap-8 xl:gap-12 lg:grid-cols-3">
  
            <div className="col-span-2">
              <SingleColFeed posts={archivedPosts.slice(6,13)} authors={authors} />
            </div>
  
            {/* Sidebar */}
            {/* <div className="w-full mt-12 space-y-8 sm:mt-16 lg:mt-0 lg:col-span-1">
              <SidebarAd />
              <SidebarArticles posts={popularPosts} header="Most read" />
            </div> 
  
          </div>
        </section> */}
  
        
        {/* <Newsletter newsletter={newsletter} /> */}
       {/* <TestimonialSlider testimonials={testimonials} />
       <Tabs tabs={tabs} /> */}
      </div>
    )
  }
  