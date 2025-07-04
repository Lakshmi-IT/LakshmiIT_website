import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "LakshmiIT | Web, App, Cloud & Digital Marketing Services",
  description:
    "Lakshmi Information Technology Private Limited is a leading IT company offering web development, mobile app development, cloud solutions, and digital marketing services tailored for startups and enterprises.",
  keywords: [
    "LakshmiIT",
    "Lakshmi Information Technology",
    "Web Development India",
    "Mobile App Development",
    "React Development Company",
    "Next.js Template",
    "Cloud Services India",
    "DevOps Services",
    "Digital Marketing Company",
    "SEO Services",
    "Startup IT Solutions",
    "Software Company India",
    "UI UX Design Services",
    "Full Stack Development",
    "PWA Development",
    "Custom Software Development",
    "E-commerce Development",
    "Technology Consulting",
    "IT Solutions Provider",
    "Enterprise App Development"
  ],
  authors: [{ name: "LakshmiIT Team", url: "https://lakshmiit.com" }],
  creator: "Lakshmi Information Technology Pvt Ltd",
  publisher: "LakshmiIT",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://lakshmiit.com"),
  alternates: {
    canonical: "https://lakshmiit.com", // ✅ Canonical URL
  },
  openGraph: {
    title: "LakshmiIT | Powering Your Digital Transformation",
    description:
      "Accelerate your business with LakshmiIT’s web, mobile, cloud, and digital marketing solutions. Trusted IT partner for startups and enterprises.",
    url: "https://lakshmiit.com",
    siteName: "LakshmiIT",
    images: [
      {
        url: "https://lakshmiit.com/og-image.jpg", // ✅ Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "LakshmiIT - Web, Mobile, and Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LakshmiIT | Web, App, Cloud & Digital Services",
    description:
      "LakshmiIT delivers cutting-edge technology services to help startups and enterprises grow in the digital age.",
    creator: "@lakshmiit", // ✅ Replace with your Twitter handle or remove if not needed
    images: ["https://lakshmiit.com/og-image.jpg"],
  },
};


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      {/* <Pricing /> */}
      <Blog />
      <Contact />
    </>
  );
}
