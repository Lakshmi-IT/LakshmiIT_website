// app/services/app-development/page.tsx
"use client";
import Image from "next/image";

const AppDevelopmentPage = () => {
  return (
    <section className="py-16 px-4 md:px-16 lg:px-32 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">App Development</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
          Lakshmi Information Technology specializes in crafting high-performance, scalable mobile applications tailored to drive engagement, streamline workflows, and increase ROI for businesses across industries.
        </p>

        <Image
          src="/images/services/app-development.png"
          alt="App Development"
          width={1200}
          height={600}
          className="rounded-xl shadow-lg mb-10 mx-auto"
        />

        <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
          <li>Custom Native App Development (Swift for iOS, Kotlin for Android)</li>
          <li>Cross-Platform App Development using Flutter and React Native</li>
          <li>API Development & Third-Party Integrations</li>
          <li>Mobile UI/UX Prototyping & Wireframing</li>
          <li>Real-Time App Analytics Integration</li>
          <li>Rigorous App Testing & Performance Tuning</li>
          <li>App Launch & Deployment (App Store & Play Store)</li>
          <li>Ongoing App Maintenance & Feature Upgrades</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Target Industries & Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-200">
          <div>
            <ul className="list-disc list-inside space-y-2">
              <li>Healthcare & Telemedicine Apps</li>
              <li>eCommerce & Marketplace Apps</li>
              <li>Logistics & Delivery Tracking Apps</li>
              <li>Fintech & Mobile Banking Solutions</li>
              <li>Education & eLearning Platforms</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc list-inside space-y-2">
              <li>On-Demand Service Apps (Booking, Home Services)</li>
              <li>Social Networking & Messaging Apps</li>
              <li>Fitness & Lifestyle Applications</li>
              <li>IoT & Smart Device Companion Apps</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Technology Stack</h2>
        <div className="grid md:grid-cols-3 gap-6 text-gray-700 dark:text-gray-300">
          <div>
            <h3 className="font-semibold text-lg mb-2">Frontend</h3>
            <ul className="list-disc list-inside">
              <li>React Native</li>
              <li>Flutter</li>
              <li>Swift</li>
              <li>Kotlin</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Backend</h3>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Firebase</li>
              <li>Django</li>
              <li>Laravel</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Database & APIs</h3>
            <ul className="list-disc list-inside">
              <li>PostgreSQL, MongoDB</li>
              <li>RESTful & GraphQL APIs</li>
              <li>Google Maps, Stripe, Twilio, etc.</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Key Features</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">High Performance</h3>
            <p>Optimized for smooth experience across devices and platforms.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Scalability</h3>
            <p>Future-proof apps that scale with user growth and new features.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Security First</h3>
            <p>Secure logins, data encryption, and compliance with GDPR/PCI.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Offline Capability</h3>
            <p>Enable key functionalities even with limited or no connectivity.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Optional Add-Ons</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
          <li>Admin Dashboard & CMS for App Management</li>
          <li>In-App Chat & Push Notifications</li>
          <li>Multi-language & Localization Support</li>
          <li>Wearable App Integration (Smartwatch & Bands)</li>
          <li>AI/ML Features like Chatbots or Recommendations</li>
          <li>Custom App Analytics Dashboards</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
          <li>Agile development methodology</li>
          <li>Transparent process with frequent updates</li>
          <li>Post-launch support and scaling plans</li>
          <li>Affordable, startup-friendly pricing</li>
        </ul>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition"
          >
            Start Your App Project with Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopmentPage;
