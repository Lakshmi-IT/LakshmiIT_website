// app/services/digital-marketing-seo/page.tsx
"use client";
import Image from "next/image";

const DigitalMarketingPage = () => {
  return (
    <section className="py-16 px-4 md:px-16 lg:px-32 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto  lg:mt-[120px] mt-[80px]">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">Digital Marketing & SEO</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
          Grow your brand, increase conversions, and outrank your competition with Lakshmi IT’s result-driven digital marketing and SEO services.
        </p>

        <Image
          src="/services/seo.png"
          unoptimized
          alt="Digital Marketing & SEO"
           width={400}
          height={400}
          className="mx-auto mb-12 rounded-md shadow-md lg:h-[400px] lg:w-[700px]"
        />

        <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
          <li>Search Engine Optimization (On-page & Off-page)</li>
          <li>Google Ads & Pay-Per-Click (PPC) Campaigns</li>
          <li>Social Media Marketing (SMM)</li>
          <li>Content Marketing & Blogging</li>
          <li>Email Marketing Automation</li>
          <li>Conversion Rate Optimization (CRO)</li>
          <li>Analytics & Performance Reporting</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Channels We Cover</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-200">
          <div>
            <ul className="list-disc list-inside space-y-2">
              <li>Google Search & Display Ads</li>
              <li>Facebook & Instagram Ads</li>
              <li>LinkedIn B2B Marketing</li>
              <li>YouTube Video Ads</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc list-inside space-y-2">
              <li>WhatsApp & SMS Campaigns</li>
              <li>Email Funnels & Newsletters</li>
              <li>Local SEO (Google My Business)</li>
              <li>Influencer & Affiliate Marketing</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">SEO Optimization</h3>
            <p>Keyword research, content optimization, and technical SEO to boost organic traffic.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Targeted Campaigns</h3>
            <p>We design campaigns tailored to your niche audience to maximize ROI.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Performance Analytics</h3>
            <p>Real-time dashboards and monthly reports to track your success.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Reputation Management</h3>
            <p>Monitor and manage your brand’s online presence and customer reviews.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Optional Add-Ons</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
          <li>Landing Page Design & A/B Testing</li>
          <li>Multilingual SEO for Global Reach</li>
          <li>eCommerce Marketing Strategy (Shopify, WooCommerce)</li>
          <li>Video Editing for Social Content</li>
          <li>Chatbot Integration for Lead Generation</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Why Lakshmi IT for Digital Growth?</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
          <li>Certified Google & Meta Ads Professionals</li>
          <li>End-to-end campaign setup, launch & optimization</li>
          <li>Custom strategies tailored to your business goals</li>
          <li>Transparent reporting and real-time performance tracking</li>
        </ul>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition"
          >
            Boost Your Online Presence
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalMarketingPage;
