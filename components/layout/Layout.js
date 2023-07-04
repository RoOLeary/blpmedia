import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
import AnimationWrapper from '../shared/AnimationWrapper'
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
      <Navbar />
      <AnimationWrapper>
      {children}
      </AnimationWrapper>
      <Footer />
    </>
  );
}

Layout.defaultProps = {
  metaTitle: siteConfig.metaData.title,
  metaDescription: siteConfig.metaData.description,
  metaAuthor: siteConfig.metaData.author,
  metaKeyword: siteConfig.metaData.keyword,
  ogImage: siteConfig.metaData.ogImage,
}
