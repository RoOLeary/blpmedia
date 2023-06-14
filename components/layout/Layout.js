import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import siteConfig from '../../config/site.config';

export default function Layout({
  metaTitle,
  metaDescription,
  metaAuthor,
  metaKeyword,
  ogImage,
  children,
}) {
  return (
    <>
      

      {children}

    </>
  );
}
