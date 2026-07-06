import Hero from "@/components/sections/Hero";
import MenuPreview from "@/components/sections/MenuPreview";
import AboutPreview from "@/components/sections/AboutPreview";
import Testimonials from "@/components/sections/Testimonials";
import Locations from "@/components/sections/Locations";
import CTABanner from "@/components/sections/CTABanner";
import ContactForm from "@/components/sections/ContactForm";
import Gallery from "@/components/sections/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <MenuPreview />
      <AboutPreview />
      <Testimonials />
      <Locations />
      <CTABanner />
      <ContactForm />
      <Gallery />
    </>
  );
}
