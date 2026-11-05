import Nav from "@/components/Nav";
import ScrollProgress from "@/components/ScrollProgress";
import PropertyTabs from "@/components/PropertyTabs";
import PropertyContent from "@/components/PropertyContent";
import Stats from "@/components/Stats";
import Marquee from "@/components/Marquee";
import HouseSection from "@/components/HouseSection";
import RoomsGallery from "@/components/RoomsGallery";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import GoodToKnow from "@/components/GoodToKnow";
import Testimonials from "@/components/Testimonials";
import FlatAbout from "@/components/FlatAbout";
import FlatLocation from "@/components/FlatLocation";
import Comparison from "@/components/Comparison";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import {
  hero,
  stats,
  rooms,
  roomCards,
  roomFilters,
  amenities,
  fullAmenities,
  flatHero,
  flatStats,
  flatRooms,
  flatRoomCards,
  flatAmenities,
} from "@/lib/content";

export default function Home() {
  const apartmentContent = (
    <>
      <HouseSection />
      <Stats stats={stats} tagline={hero.tagline} />
      <Marquee />
      <RoomsGallery id="rooms" eyebrow={rooms.eyebrow} title={rooms.title} cards={roomCards} filters={roomFilters} />
      <Amenities id="amenities" eyebrow={amenities.eyebrow} title={amenities.title} items={amenities.items} details={fullAmenities} />
      <Location />
      <GoodToKnow />
      <Testimonials />
    </>
  );

  const flatContent = (
    <>
      <FlatAbout />
      <Stats stats={flatStats} tagline={flatHero.tagline} />
      <RoomsGallery id="flat-rooms" eyebrow={flatRooms.eyebrow} title={flatRooms.title} cards={flatRoomCards} filters={roomFilters} />
      <Amenities id="flat-amenities" eyebrow={flatAmenities.eyebrow} title={flatAmenities.title} items={flatAmenities.items} />
      <FlatLocation />
    </>
  );

  return (
    <>
      <ScrollProgress />
      <Nav />
      <div id="top" />
      <PropertyTabs />
      <main>
        <PropertyContent apartment={apartmentContent} flat={flatContent} />

        <Comparison />

        <Contact />
      </main>
      <Footer />
    </>
  );
}
