import HeroSection from './HeroSection/HeroSection';
import Featured from './Featured';
import Partners from './Partners';
import AccommodationGallery from './AccommodationGallery';
import BestDealButton from './BestDeal/BestDealButton';
import AboutUs from './AboutUs';
import Facilities from './Facilities';
import Offers from './Offers';
import Information from './Information';
import Maps from './Maps';
import Review from './Review';
import CTA from './CTA';

export default function HomePage() {
  return (
    <main className='relative'>
      <HeroSection />
      <AboutUs />
      <AccommodationGallery />
      <Featured />
      <Facilities />
      <Offers/>
      <Information/>
      <Maps/>
      <Review/>
      <CTA/>
      <Partners />
      <BestDealButton />
    </main>
  );
} 