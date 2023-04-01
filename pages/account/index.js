import Link from 'next/link'
import Layout from '../../components/layout/Layout'
import { useSession, signIn, signOut } from "next-auth/react"
import { ArrowSmRightIcon } from '@heroicons/react/solid'

export default function Account() {
  const { session, loading } = useSession()

  if (typeof window !== "undefined" && loading) return null

  if (session) {
    return (
    <Layout metaTitle="Protected Page">
        <h1>Protected Page</h1>
        <p>You can view this page because you are signed in.</p>
      </Layout>
    )
  }
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
              <Link href="/">
                <a onClick={() => signIn()} className="flex items-center mt-4 text-red-700 no-underline transition duration-300 ease-in-out sm:mt-5 hover:text-red-600 group">
                    Login
                  <ArrowSmRightIcon className="w-5 h-5 ml-2 transition duration-300 ease-in-out group-hover:text-red-700 group-hover:translate-x-1.5" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
    )
}
