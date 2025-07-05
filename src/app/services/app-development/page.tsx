// app/services/app-development/page.tsx
"use client";
import Image from "next/image";

const AppDevelopmentPage = () => {
  return (
    <section className="px-4 py-16 md:px-16 lg:px-32 dark:bg-gray-900">
      <div className="mx-auto lg:mt-[120px] mt-[80px] max-w-7xl">
        <h1 className="text-primary mb-6 text-center text-4xl font-bold">
          App Development
        </h1>
        <p className="mb-8 text-center text-lg text-gray-600 dark:text-gray-300">
          Lakshmi Information Technology specializes in crafting
          high-performance, scalable mobile applications tailored to drive
          engagement, streamline workflows, and increase ROI for businesses
          across industries.
        </p>

        <Image
          unoptimized
          src="/services/app-development.png"
          alt="App Development"
          width={400}
          height={400}
          className="mx-auto mb-12 rounded-md shadow-md lg:h-[400px] lg:w-[700px]"
        />

        <div className="flex lg:flex-row flex-col justify-between  items-center  ">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-black dark:text-white">
              What We Offer
            </h2>
            <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-200">
              <li>
                Custom Native App Development (Swift for iOS, Kotlin for
                Android)
              </li>
              <li>
                Cross-Platform App Development using Flutter and React Native
              </li>
              <li>API Development & Third-Party Integrations</li>
              <li>Mobile UI/UX Prototyping & Wireframing</li>
              <li>Real-Time App Analytics Integration</li>
              <li>Rigorous App Testing & Performance Tuning</li>
              <li>App Launch & Deployment (App Store & Play Store)</li>
              <li>Ongoing App Maintenance & Feature Upgrades</li>
            </ul>
          </div>
          <div>
            <h2 className="mt-10 mb-4 text-2xl font-semibold text-black dark:text-white">
              Target Industries & Use Cases
            </h2>
            <div className="">
              <div>
                <ul className="list-inside list-disc space-y-2">
                  <li>Healthcare & Telemedicine Apps</li>
                  <li>eCommerce & Marketplace Apps</li>
                  <li>Logistics & Delivery Tracking Apps</li>
                  <li>Fintech & Mobile Banking Solutions</li>
                  <li>Education & eLearning Platforms</li>
                  <li>On-Demand Service Apps (Booking, Home Services)</li>
                  <li>Social Networking & Messaging Apps</li>
                  <li>Fitness & Lifestyle Applications</li>
                  <li>IoT & Smart Device Companion Apps</li>
                </ul>
              </div>
              
            </div>
          </div>
        </div>

        <h2 className="mt-10 mb-4 text-2xl font-semibold text-black dark:text-white">
          Technology Stack
        </h2>
        <div className="grid gap-6 text-gray-700 md:grid-cols-3 dark:text-gray-300">
          <div>
            <h3 className="mb-2 text-lg font-semibold">Frontend</h3>
            <ul className="list-inside list-disc">
              <li>React Native</li>
              <li>Flutter</li>
              <li>Swift</li>
              <li>Kotlin</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Backend</h3>
            <ul className="list-inside list-disc">
              <li>Node.js</li>
              <li>Firebase</li>
              <li>Django</li>
              <li>Laravel</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-2 text-lg font-semibold">Database & APIs</h3>
            <ul className="list-inside list-disc">
              <li>PostgreSQL, MongoDB</li>
              <li>RESTful & GraphQL APIs</li>
              <li>Google Maps, Stripe, Twilio, etc.</li>
            </ul>
          </div>
        </div>

        <h2 className="mt-10 mb-4 text-2xl font-semibold text-black dark:text-white">
          Key Features
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-bold">High Performance</h3>
            <p>Optimized for smooth experience across devices and platforms.</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-bold">Scalability</h3>
            <p>
              Future-proof apps that scale with user growth and new features.
            </p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-bold">Security First</h3>
            <p>Secure logins, data encryption, and compliance with GDPR/PCI.</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow dark:bg-gray-800">
            <h3 className="mb-2 text-lg font-bold">Offline Capability</h3>
            <p>
              Enable key functionalities even with limited or no connectivity.
            </p>
          </div>
        </div>



        <div className="flex flex-col lg:flex-row justify-between items-center">


        <div>

        <h2 className="mt-10 mb-4 text-2xl font-semibold text-black dark:text-white">
          Optional Add-Ons
        </h2>
        <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-200">
          <li>Admin Dashboard & CMS for App Management</li>
          <li>In-App Chat & Push Notifications</li>
          <li>Multi-language & Localization Support</li>
          <li>Wearable App Integration (Smartwatch & Bands)</li>
          <li>AI/ML Features like Chatbots or Recommendations</li>
          <li>Custom App Analytics Dashboards</li>
        </ul>
        </div>
        <div>

        <h2 className="mt-10 mb-4 text-2xl font-semibold text-black dark:text-white">
          Why Choose Us?
        </h2>
        <ul className="list-inside list-disc space-y-2 text-gray-700 dark:text-gray-200">
          <li>Agile development methodology</li>
          <li>Transparent process with frequent updates</li>
          <li>Post-launch support and scaling plans</li>
          <li>Affordable, startup-friendly pricing</li>
        </ul>
        </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="bg-primary hover:bg-primary/90 inline-block rounded-full px-8 py-4 font-medium text-white transition"
          >
            Start Your App Project with Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopmentPage;
