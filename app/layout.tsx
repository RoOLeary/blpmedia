import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import Footer from '../components/layout/Footer'
import Navbar from '../components/layout/Navbar'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
      <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Pundit Arena</title>
      </head>
      <body>
          <Navbar />
          <Layout>
          {children}
          </Layout>
          <Footer />
      </body>
    </html>
    )
  }