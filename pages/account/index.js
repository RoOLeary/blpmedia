import Head from 'next/head'
import Layout from '../../components/layout/Layout'
import { useSession, getSession } from "next-auth/react";



export default function Account() {
    const { data: session, status } = useSession()

    const opts = {
        height: "560",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
    };

    const _onReady = (event) => {
        // event.target.pauseVideo();
    }

    const HeroText = {
        headline: 'Members',
    }

    // if (status === "loading") {
    //     return <p>Loading...</p>
    // }

    // if (status === "unauthenticated") {
    //     return <h1>Access Denied</h1>
    // }

    if (!session) {
        return (
            <Layout metaTitle="ACCESS DENIED">
            <section className="bg-gray-50">
              <div className="max-w-2xl min-h-screen px-4 py-12 mx-auto sm:px-6 lg:px-12 lg:max-w-screen-2xl lg:flex lg:items-center sm:pt-16 xl:py-20 ">
                
                {/* Page not found */}
                <div className="flex flex-col justify-center lg:w-1/2 xl:w-2/5">
                  <div className="max-w-md">
                    <h2 className="mt-3 text-4xl font-medium tracking-normal text-red-800 uppercase md:tracking-tight lg:leading-tight md:text-5xl">Access Denied</h2>
                    <div>
                      <p className="mt-4 text-base leading-loose text-gray-600">
                        To view this page, you must be logged in. 
                      </p>
                    </div>
                    <div className="inline-block">
                      
                        <a onClick={() => signIn()} className="flex items-center mt-4 text-red-700 no-underline transition duration-300 ease-in-out sm:mt-5 hover:text-red-600 group">
                            Login
                        </a>
                      
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </Layout>
        )
    }

    return (
        <Layout metaTitle="Your Acccount">
            <section className="bg-gray-50">
              <div className="max-w-2xl min-h-screen px-8 py-12 mx-auto sm:px-6 lg:px-12 lg:max-w-screen-2xl lg:flex flex-col sm:pt-16 xl:py-20 ">
                    <h1 className="text-5xl font-extrabold">Protected Page</h1>
                    <p>Hi {session.user.name}, how are you today?</p>
                </div>
            </section>
           
        </Layout>
  )
}



