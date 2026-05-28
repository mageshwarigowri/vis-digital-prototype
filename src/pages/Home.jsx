import Hero from '../components/Hero';
import TrustedLogos from '../components/TrustedLogos';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import PortfolioPreview from '../components/Portfolio'; // Renamed to avoid confusion with the Portfolio page
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedLogos />
      <Services />
      <WhyChooseUs />
      <PortfolioPreview />
      <Testimonial />
      <CTA />
    </>
  );
}