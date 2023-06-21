import '../styles/globals.css'


export default function Layout({ children }) {
    return (
      <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Busy Little Pixels | Media </title>
            <meta property="og:title" content="Busy Little Pixels | Media" />
            <meta property="og:description" content="Experts in everything goddamnit!" />
       </head>
        <body>
            {children}
        </body>
      </html>
    );
}