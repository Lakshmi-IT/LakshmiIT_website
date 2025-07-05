// app/services/web-development/page.tsx
"use client";

import Image from "next/image";
import FAQSection from "./faq";

const WebDevelopmentPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Web Development Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Build fast, secure, and scalable websites that drive business growth.
          From concept to deployment, we offer end-to-end web solutions tailored to your needs.
        </p>
      </div>

      {/* Hero Image */}
      <Image
        src="/images/services/web-development.jpg"
        alt="Web Development Illustration"
        width={1200}
        height={600}
        className="rounded-xl mx-auto shadow-xl mb-12"
      />

      {/* What We Offer */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Custom website design & development</li>
            <li>Progressive Web Apps (PWA)</li>
            <li>CMS Integration (WordPress, Headless CMS)</li>
            <li>E-commerce stores (Shopify, WooCommerce)</li>
            <li>Website migration & rebranding</li>
            <li>Search Engine Optimization (SEO)</li>
          </ul>
        </div>

        {/* Interactive Features */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Interactive Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Live chat and chatbot integrations</li>
            <li>Dynamic forms with validation</li>
            <li>Interactive dashboards and charts</li>
            <li>Custom animations and scroll effects</li>
            <li>Blog with tagging, filters & search</li>
            <li>Newsletter subscriptions and popups</li>
          </ul>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center">Technologies We Use</h2>
        <div className="flex flex-wrap justify-center gap-6 text-gray-700 text-lg">
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

      {/* Benefits Section */}
      <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Experienced and certified developers</li>
          <li>Agile development process</li>
          <li>Post-launch support & maintenance</li>
          <li>SEO and performance optimization</li>
          <li>Mobile-first, accessible designs</li>
        </ul>
      </section>

      {/* FAQ Section */}
     <FAQSection/>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
        >
          Let’s Build Your Website 🚀
        </a>
      </div>
    </div>
  );
};

export default WebDevelopmentPage;
