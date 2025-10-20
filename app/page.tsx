import { BrandStory } from 'components/brand-story';
import { FeaturedCollections } from 'components/feature-collections';
import { ThreeItemGrid } from 'components/grid/three-items';
import { HeroSection } from 'components/hero-section';
import Footer from 'components/layout/footer';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

export default async function HomePage() {
  return (
    <>
      {/* <VideoHero/> */}
      <HeroSection />
      <div className='my-8'/>
      <ThreeItemGrid handle="new-arrival" />
      {/* <Carousel />
      <Hero/> */}
      {/* <ThreeItemGrid handle="hot-trending" /> */}
      {/* <CollectionsCarousel /> */}
      <FeaturedCollections />
      <BrandStory/>
      <Footer />
    </>
  );
}
