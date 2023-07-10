import { NextAuthProvider } from "../providers/Providers";
import { Metadata } from 'next';
import '../styles/globals.css'

export const metadata: Metadata = {
  title: "BLIP | SPORTS",
  description: "All the latest sports news",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
