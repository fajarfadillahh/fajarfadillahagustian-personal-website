import type { Metadata } from "next";

const siteConfig = {
  name: "Fajar Fadillah Agustian",
  title:
    "Fajar Fadillah Agustian | Frontend Developer Enthusiast & Creative Technologist 🚀",
  description:
    "Portfolio dan personal website Fajar Fadillah Agustian — Frontend Developer Enthusiast & Creative Technologist yang fokus di web development dan digital innovation.",
  url: "https://fajarfadillahagustian.com",
  image: "/og-image.jpg",
  twitter: "@fajarfadillahagustian",
  locale: "id_ID",
  keywords: [
    "Fajar Fadillah Agustian",
    "Frontend Developer Enthusiast Indonesia",
    "Web Developer",
    "AI Engineer",
    "Frontend Developer",
    "Next.js Developer",
    "Portfolio Developer",
    "Tech Blog Indonesia",
    "Digital Innovation",
  ],
};

type GenerateMetadataProps = {
  title?: string;
  description?: string;
};

export function generateMetadata({
  title,
  description,
}: GenerateMetadataProps = {}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const metaDesc = description || siteConfig.description;

  return {
    title: metaTitle,
    description: metaDesc,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.name, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: metaTitle,
      description: metaDesc,
      url: siteConfig.url,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}${siteConfig.image}`,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
      locale: siteConfig.locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDesc,
      creator: siteConfig.twitter,
      images: [`${siteConfig.url}${siteConfig.image}`],
    },
    alternates: {
      canonical: siteConfig.url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    category: "Technology",
    other: {
      "application-name": siteConfig.name,
      "apple-mobile-web-app-title": "FajarFadillahAgustian",
    },
  };
}
