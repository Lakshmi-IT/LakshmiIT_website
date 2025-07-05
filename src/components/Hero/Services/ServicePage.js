import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    id: 1,
    title: "Web Development",
    description:
      "We build custom, responsive websites using modern frameworks like Next.js and Tailwind CSS—optimized for speed, SEO, and scalability.",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Custom Admin Panels",
    ],
    imageLight: "/images/services/web-light.png",
    imageDark: "/images/services/web-dark.png",
  },
  {
    id: 2,
    title: "App Development",
    description:
      "From idea to app store, we craft powerful mobile apps using Flutter, React Native, and native platforms tailored for both iOS and Android.",
    features: [
      "Cross-platform Support",
      "Smooth UI/UX",
      "App Store Deployment",
    ],
    imageLight: "/images/services/app-light.png",
    imageDark: "/images/services/app-dark.png",
  },
  {
    id: 3,
    title: "Data Analytics",
    description:
      "Unlock insights from your data with our analytics dashboards, data engineering, and business intelligence services.",
    features: [
      "Real-time Dashboards",
      "ETL Pipelines",
      "Predictive Analytics",
    ],
    imageLight: "/images/services/data-light.png",
    imageDark: "/images/services/data-dark.png",
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Our designers create beautiful, intuitive interfaces that convert visitors into customers using user research and Figma-based workflows.",
    features: [
      "Wireframes & Prototypes",
      "User Testing",
      "Pixel-perfect UI",
    ],
    imageLight: "/images/services/uiux-light.png",
    imageDark: "/images/services/uiux-dark.png",
  },
  {
    id: 5,
    title: "Digital Marketing & SEO",
    description:
      "Grow your brand online with smart strategies in SEO, PPC, social media, and content marketing—all tailored to ROI.",
    features: [
      "Search Engine Optimization",
      "Paid Ad Campaigns",
      "Social Media Strategy",
    ],
    imageLight: "/images/services/seo-light.png",
    imageDark: "/images/services/seo-dark.png",
  },
];

const ServicePage = ({ serviceId }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    setIsDark(media.matches);
    const handler = (e) => setIsDark(e.matches);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  const service = services.find((s) => s.id === serviceId);
  if (!service) return <p>Service not found</p>;

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">
                {service.title}
              </h2>
              <p className="mb-6 text-lg text-body-color">
                {service.description}
              </p>
              <ul className="mb-6 list-disc pl-5 text-base text-body-color">
                {service.features.map((feature, index) => (
                  <li key={index} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-block rounded bg-primary px-6 py-3 text-white transition hover:bg-opacity-90"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto aspect-video max-w-[550px]">
              <Image
                src={isDark ? service.imageDark : service.imageLight}
                alt={service.title}
                fill
                className="object-cover drop-shadow-xl rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePage;
