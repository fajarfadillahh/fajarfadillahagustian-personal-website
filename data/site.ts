import project1 from "@/assets/images/project-1.webp";
import project2 from "@/assets/images/project-2.webp";
import project3 from "@/assets/images/project-3.webp";
import project4 from "@/assets/images/project-4.webp";
import project5 from "@/assets/images/project-5.webp";
import project6 from "@/assets/images/project-6.webp";

import testimonial1 from "@/assets/images/testimonial-1.jpg";
import testimonial2 from "@/assets/images/testimonial-2.jpg";
import testimonial3 from "@/assets/images/testimonial-3.jpg";

export const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const projects = [
  {
    name: "Qosan.id Rent House Web",
    image: project1,
    href: "/",
  },
  {
    name: "RuangObat.id",
    image: project2,
    href: "https://ruangobat.id/",
  },
  {
    name: "Jakarta Pasti Sehat",
    image: project3,
    href: "https://jakartapastisehat.com/",
  },
  {
    name: "Pharma Metro City Group",
    image: project4,
    href: "https://pharma-metrocity-group.vercel.app/",
  },
  {
    name: "LuxSpace Shop",
    image: project5,
    href: "https://luxspacefadillah.netlify.app/",
  },
  {
    name: "Literasi Book Store",
    image: project6,
    href: "https://literasi-book-store.vercel.app/",
  },
];

export const faqs = [
  {
    question: "What kind of projects do you usually work on?",
    answer:
      "Mostly web-based stuff from creative landing pages to full-blown web apps. I love projects where I can mix design aesthetics with solid, clean code to create something that actually feels alive.",
  },
  {
    question: "Do you only work with businesses, or also personal projects?",
    answer:
      "Both! Whether it's helping a brand level up their online presence or building something experimental just for fun, I'm always down for projects that let me explore new creative or technical ideas.",
  },
  {
    question: "What's your approach to blending creativity and clean code?",
    answer:
      "I start from the experience first — how users should feel. Then I back it up with structure, performance, and clean code to make sure the creativity isn't just aesthetic, but functional too.",
  },
  {
    question: "Can you help improve my existing website?",
    answer:
      "For sure! I can help redesign, refactor, or even rebuild your site to make it faster, cleaner, and more engaging basically turning it into something that truly reflects your brand's vibe.",
  },
];

export const testimonials = [
  {
    name: "Gufronnaka Arif W.",
    company: "FG Labs Agency",
    role: "Founder & Developer",
    quote:
      "Building a digital agency with Fajar has been both a fun journey and a challenge that has made us stronger.",
    image: testimonial1,
    imagePositionY: 0.2,
  },
  {
    name: "Nico Samuel",
    company: "RuangObat.id",
    role: "Founder",
    quote:
      "I developed the RuangObat.id web application with Fajar, and as you can see the results are very impressive.",
    image: testimonial2,
    imagePositionY: 0.1,
  },
  {
    name: "Ayu Sundari",
    company: "RAGA Health",
    role: "Founder & Specialist",
    quote:
      "This collaboration gave me a lot of experience in terms of digitalization and also special connections.",
    image: testimonial3,
    imagePositionY: 0.55,
  },
];
