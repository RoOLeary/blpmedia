import '../styles/globals.css'
import { SessionProvider } from "next-auth/react"

export default function BLPMedia({
  Component, pageProps: { session, ...pageProps }
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}