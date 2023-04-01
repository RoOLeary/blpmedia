import Layout from '../../components/layout/Layout'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router' 

export default function Account() {
    
    const router = useRouter();
    const { data: session } = useSession()

    if(session){
        return (
            <Layout 
              metaTitle={'Your Account'}
            >
              HI! {session ? session.user.name : 'Do One'}
            </Layout>
        )
    } else {
        router.push('http://localhost:3000/api/auth/signin')
    }

    return null;
}
