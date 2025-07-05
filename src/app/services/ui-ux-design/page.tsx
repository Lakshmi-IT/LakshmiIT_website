// app/services/ui-ux-design/page.tsx
"use client";
import Image from "next/image";

const UIUXDesignPage = () => {
  return (
    <section className="px-4 py-16 md:px-16 lg:px-32 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl lg:mt-[120px] mt-[80px]">
        <h1 className="text-primary mb-6 text-center text-4xl font-bold">
          UI/UX Design
        </h1>
        <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-300">
          We craft intuitive and beautiful digital experiences that delight
          users and enhance business outcomes across web and mobile platforms.
        </p>

        <Image
          src="/services/ui_ux.png"
          unoptimized
          alt="UI/UX Design"
          width={400}
          height={400}
          className="mx-auto mb-12 rounded-md shadow-md lg:h-[400px] lg:w-[700px]"
        />

        <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
          Our Design Services
        </h2>
        <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-200">
          <li>UI/UX Strategy & Research</li>
          <li>Wireframing & Prototyping</li>
          <li>Responsive Web & Mobile UI Design</li>
          <li>Design Systems & Style Guides</li>
          <li>Usability Testing & Heuristic Evaluation</li>
          <li>Redesign & Product Revamp</li>
        </ul>

        <h2 className="mt-10 mb-4 text-2xl font-semibold text-black dark:text-white">
          Tools & Platforms We Use
        </h2>
        <div className="grid gap-6 text-gray-700 md:grid-cols-3 dark:text-gray-300">
          <div>
            <h3 className="mb-2 text-lg font-semibold">Wireframing</h3>
            <ul className="list-inside list-disc">
              <li>Balsamiq</li>
              <li>Whimsical</li>
              <li>Figma</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">UI Design</h3>
            <ul className="list-inside list-disc">
              <li>Figma</li>
              <li>Adobe XD</li>
              <li>Sketch</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Prototyping</h3>
            <ul className="list-inside list-disc">
              <li>InVision</li>
              <li>Marvel</li>
              <li>Framer</li>
            </ul>
          </div>
        </div>

        <h2 className="mt-10 mb-4 text-2xl font-semibold text-black dark:text-white">
          What Sets Us Apart
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-bold">User-Centered Design</h3>
            <p>
              We focus on real user behavior and usability to deliver intuitive
              experiences.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-bold">Accessibility Compliance</h3>
            <p>
              All designs follow WCAG guidelines to ensure inclusivity for all
              users.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-bold">Brand Consistency</h3>
            <p>
              Designs aligned with your brand{`'`}s identity and values to build
              trust and recognition.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-bold">Rapid Prototyping</h3>
            <p>
              Quick mockups and interactive demos for fast feedback and
              iteration.
            </p>
          </div>
        </div>

        <h2 className="mt-10 mb-4 text-2xl font-semibold text-black dark:text-white">
          Optional Add-Ons
        </h2>
        <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-200">
          <li>UX Audits for Existing Products</li>
          <li>Design-to-Code Handoff (Figma to React, Tailwind, etc.)</li>
          <li>Mobile-First Redesign Strategy</li>
          <li>Animation & Microinteraction Design</li>
          <li>User Persona & Journey Mapping</li>
        </ul>

        <h2 className="mt-10 mb-4 text-2xl font-semibold text-black dark:text-white">
          Why Lakshmi IT for UI/UX?
        </h2>
        <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-200">
          <li>Experienced designers skilled in modern, clean aesthetics</li>
          <li>Deep understanding of design systems and mobile patterns</li>
          <li>Seamless collaboration with development teams</li>
          <li>Research-backed decisions for real business impact</li>
        </ul>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="bg-primary hover:bg-primary/90 inline-block rounded-full px-8 py-4 font-medium text-white transition"
          >
            Elevate Your User Experience
          </a>
        </div>
      </div>
    </section>
  );
};

export default UIUXDesignPage;
