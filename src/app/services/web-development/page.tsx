// app/services/web-development/page.tsx
"use client";

import Image from "next/image";
import FAQSection from "./faq";

const WebDevelopmentPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className=" mb-10 text-center lg:mt-[120px] mt-[80px]">
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Web Development Services
        </h1>
        <p className="mx-auto text-center  w-full text-lg text-gray-600 dark:text-gray-300">
          Build fast, secure, and scalable websites that drive business growth.
          From concept to deployment, we offer end-to-end web solutions tailored
          to your needs.
        </p>
      </div>

      {/* Hero Image */}
      <Image
        unoptimized
        src="/services/service-web-deveopment.png"
        alt="Web Development Illustration"
        width={400}
        height={400}
        className="mx-auto mb-12 rounded-md shadow-md lg:w-[700px] lg:h-[400px]"
      />

      {/* What We Offer */}
      <section className="mb-16 flex lg:flex-row flex-col items-center justify-between ">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">What We Offer</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
            <li>Custom website design & development</li>
            <li>Progressive Web Apps (PWA)</li>
            <li>CMS Integration (WordPress, Headless CMS)</li>
            <li>E-commerce stores (Shopify, WooCommerce)</li>
            <li>Website migration & rebranding</li>
            <li>Search Engine Optimization (SEO)</li>
          </ul>
        </div>

        {/* Interactive Features */}
        <div className="pt-3 lg:pt-0">
          <h2 className="mb-4 text-2xl font-semibold">Interactive Features</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
            <li>Live chat and chatbot integrations</li>
            <li>Dynamic forms with validation</li>
            <li>Interactive dashboards and charts</li>
            <li>Custom animations and scroll effects</li>
            <li>Blog with tagging, filters & search</li>
            <li>Newsletter subscriptions and popups</li>
          </ul>
        </div>
        <div className="pt-3 lg:pt-0">
          <h2 className="mb-4 text-2xl font-semibold">Why Choose Us?</h2>
          <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
            <li>Experienced and certified developers</li>
            <li>Agile development process</li>
            <li>Post-launch support & maintenance</li>
            <li>SEO and performance optimization</li>
            <li>Mobile-first, accessible designs</li>
          </ul>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="mb-16">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Technologies We Use
        </h2>
        <div className="flex flex-wrap justify-center gap-6 text-lg text-gray-700 dark:text-gray-300">
          <span>Next.js</span>
          <span>React</span>
          <span>Tailwind CSS</span>
          <span>TypeScript</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>MongoDB</span>
          <span>WordPress</span>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <a
          href="/contact"
          className="inline-block rounded-md bg-blue-600 px-8 py-4 text-lg font-medium text-white transition duration-300 hover:bg-blue-700"
        >
          Let’s Build Your Website 🚀
        </a>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
