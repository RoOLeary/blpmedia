import Layout from './../../components/layout/Layout';
import { getServerSession } from "next-auth";
import { AuthOptions } from '../../utils/AuthOptions';

export default async function Page() {

    const session = await getServerSession(AuthOptions)
    console.log(session ? session.user : 'nada');

    return (
      <Layout>
        <section className="bg-gray-50">
          <div className="max-w-7xl min-h-screen px-6 py-12 mx-auto flex flex-col sm:pt-16">
              <h2 className="mt-3 text-4xl font-medium tracking-normal text-red-800 uppercase md:tracking-tight lg:leading-tight md:text-5xl">Account Dashboard</h2>
              <p>Hi {session ? session.user.name : 'buddy'}, how are you today?</p>
            </div>
        </section>
      </Layout>
  )
}



