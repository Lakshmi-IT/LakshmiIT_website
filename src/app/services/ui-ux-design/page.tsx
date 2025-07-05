// app/services/ui-ux-design/page.tsx
"use client";
import Image from "next/image";

const UIUXDesignPage = () => {
  return (
    <section className="py-16 px-4 md:px-16 lg:px-32 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">UI/UX Design</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
          We craft intuitive and beautiful digital experiences that delight users and enhance business outcomes across web and mobile platforms.
        </p>

        <Image
          src="/images/services/ui-ux-design.png"
          alt="UI/UX Design"
          width={1200}
          height={600}
          className="rounded-xl shadow-lg mb-10 mx-auto"
        />

        <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Our Design Services</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
          <li>UI/UX Strategy & Research</li>
          <li>Wireframing & Prototyping</li>
          <li>Responsive Web & Mobile UI Design</li>
          <li>Design Systems & Style Guides</li>
          <li>Usability Testing & Heuristic Evaluation</li>
          <li>Redesign & Product Revamp</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Tools & Platforms We Use</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
          <div>
            <h3 className="font-semibold text-lg mb-2">Wireframing</h3>
            <ul className="list-disc list-inside">
              <li>Balsamiq</li>
              <li>Whimsical</li>
              <li>Figma</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">UI Design</h3>
            <ul className="list-disc list-inside">
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Sketch</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Prototyping</h3>
            <ul className="list-disc list-inside">
              <li>InVision</li>
              <li>Marvel</li>
              <li>Framer</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">What Sets Us Apart</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">User-Centered Design</h3>
            <p>We focus on real user behavior and usability to deliver intuitive experiences.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Accessibility Compliance</h3>
            <p>All designs follow WCAG guidelines to ensure inclusivity for all users.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Brand Consistency</h3>
            <p>Designs aligned with your brand's identity and values to build trust and recognition.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Rapid Prototyping</h3>
            <p>Quick mockups and interactive demos for fast feedback and iteration.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Optional Add-Ons</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
          <li>UX Audits for Existing Products</li>
          <li>Design-to-Code Handoff (Figma to React, Tailwind, etc.)</li>
          <li>Mobile-First Redesign Strategy</li>
          <li>Animation & Microinteraction Design</li>
          <li>User Persona & Journey Mapping</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Why Lakshmi IT for UI/UX?</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
          <li>Experienced designers skilled in modern, clean aesthetics</li>
          <li>Deep understanding of design systems and mobile patterns</li>
          <li>Seamless collaboration with development teams</li>
          <li>Research-backed decisions for real business impact</li>
        </ul>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition"
          >
            Elevate Your User Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default UIUXDesignPage;
