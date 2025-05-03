import Comparison from '@/components/comparison';
import Cta from '@/components/cta';
import Features from '@/components/features';
import Footer from '@/components/footer';
import Hero from '@/components/hero';
import Pricing from '@/components/pricing';
import Testimonials from '@/components/testimonials';
import { Metadata } from '@/lib';
import RootLayout from '@/lib/layout';

export default function Landing() {
  const metadata: Metadata = {};

  return (
    <RootLayout metadata={metadata}>
      <Hero />
      <Features />
      <Comparison />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </RootLayout>
  );
}
