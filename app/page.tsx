import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import HouseSection from "@/components/HouseSection";
import RoomsGallery from "@/components/RoomsGallery";
import PullQuote from "@/components/PullQuote";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import GoodToKnow from "@/components/GoodToKnow";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <Stats />
        <Marquee />
        <HouseSection />
        <RoomsGallery />
        <PullQuote />
        <Amenities />
        <Location />
        <GoodToKnow />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
