import Layout from '../../components/layout/Layout'
import { useSession, signIn, signOut } from "next-auth/react"

export default function Account() {
    
    const { data: session } = useSession()

  return (
    <Layout 
      metaTitle={'Your Account'}
    >
      HI! {session ? session.user.name : 'Do One'}
    </Layout>
  )
}
