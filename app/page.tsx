import { generateMetadata } from "@/lib/metadata";
import SectionHeader from "@/sections/Header";
import SectionHero from "@/sections/Hero";
import SectionIntro from "@/sections/Intro";

export const metadata = generateMetadata({
  title: "Personal Website ✨",
  description: "Selamat datang di officialy website Fajar Fadillah Agustian 🌱",
});

export default function HomePage() {
  return (
    <>
      <SectionHeader />
      <SectionHero />
      <SectionIntro />
    </>
  );
}
