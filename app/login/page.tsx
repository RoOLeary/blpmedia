import Layout from './../../components/layout/Layout';
import { LoginForm } from "./form";

export default function LoginPage() {

    return (
      <Layout>
        <section className="bg-gray-50">
            <div className="max-w-7xl min-h-screen px-6 py-12 mx-auto flex flex-col sm:pt-16">
              <h2 className="mt-3 text-4xl font-medium tracking-normal text-red-800 uppercase md:tracking-tight lg:leading-tight md:text-5xl">Login In or Register</h2>
            </div>
        </section>
        <section className="bg-gray-50 min-h-screen pt-20">
            <div className="container mx-auto px-6 py-12 h-full flex justify-center items-center">
                <div className="md:w-8/12 lg:w-5/12 bg-white px-8 py-10">
                    <LoginForm />
                </div>
            </div>
        </section>
      </Layout>
  )
}