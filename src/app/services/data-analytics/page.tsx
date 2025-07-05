// app/services/data-analytics/page.tsx
"use client";
import Image from "next/image";

const DataAnalyticsPage = () => {
  return (
    <section className="py-16 px-4 md:px-16 lg:px-32 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary">Data Analytics</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
          Unlock actionable insights and drive smarter decisions with our end-to-end data analytics solutions tailored for your business growth.
        </p>

        <Image
          src="/images/services/data-analytics.png"
          alt="Data Analytics"
          width={1200}
          height={600}
          className="rounded-xl shadow-lg mb-10 mx-auto"
        />

        <h2 className="text-2xl font-semibold text-black dark:text-white mb-4">Our Services</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
          <li>Business Intelligence (BI) Dashboards</li>
          <li>Predictive & Descriptive Analytics</li>
          <li>ETL Pipelines and Data Warehousing</li>
          <li>Custom Reporting & KPI Monitoring</li>
          <li>Data Visualization using Power BI / Tableau</li>
          <li>Real-Time Data Processing & Stream Analytics</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Industries We Support</h2>
        <div className="grid md:grid-cols-2 gap-6 text-gray-700 dark:text-gray-200">
          <div>
            <ul className="list-disc list-inside space-y-2">
              <li>Retail & eCommerce</li>
              <li>Healthcare & Pharmaceuticals</li>
              <li>Finance & Insurance</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc list-inside space-y-2">
              <li>Manufacturing & Supply Chain</li>
              <li>Education & EdTech</li>
              <li>Telecom & Media</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Key Capabilities</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Data Cleaning & Transformation</h3>
            <p>Ensure high-quality, clean, and structured data for reliable analysis.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Real-Time Monitoring</h3>
            <p>Get up-to-the-minute updates on KPIs and operational metrics.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Predictive Modeling</h3>
            <p>Use machine learning to forecast trends and customer behaviors.</p>
          </div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">
            <h3 className="font-bold text-lg mb-2">Interactive Dashboards</h3>
            <p>Custom dashboards with drill-down capabilities and visual storytelling.</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Add-On Services</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
          <li>Integration with CRM & ERP systems</li>
          <li>Automated Email & Report Scheduling</li>
          <li>Custom AI/ML Models for Domain-Specific Use Cases</li>
          <li>Cloud-Based Data Lakes (AWS, Azure, GCP)</li>
        </ul>

        <h2 className="text-2xl font-semibold text-black dark:text-white mt-10 mb-4">Why Choose Lakshmi IT?</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
          <li>Data-driven decision frameworks tailored to business goals</li>
          <li>End-to-end implementation from data ingestion to reporting</li>
          <li>Expertise in Python, SQL, Power BI, Tableau, R, Spark & more</li>
          <li>Scalable and secure architecture for long-term growth</li>
        </ul>

        <div className="mt-12 text-center">
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-medium hover:bg-primary/90 transition"
          >
            Start Your Data Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default DataAnalyticsPage;
