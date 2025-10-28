import { generateMetadata } from "@/lib/metadata";
import SectionFAQs from "@/sections/FAQs";
import SectionFooter from "@/sections/Footer";
import SectionHeader from "@/sections/Header";
import SectionHero from "@/sections/Hero";
import SectionIntro from "@/sections/Intro";
import SectionProjects from "@/sections/Projects";
import SectionTestimonials from "@/sections/Testimonials";

export const metadata = generateMetadata();

export default function HomePage() {
  return (
    <>
      <SectionHeader />
      <SectionHero />
      <SectionIntro />
      <SectionProjects />
      <SectionTestimonials />
      <SectionFAQs />
      <SectionFooter />
    </>
  );
}
