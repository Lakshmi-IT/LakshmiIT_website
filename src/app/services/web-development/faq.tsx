"use client";
import { useState } from "react";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the scope. A basic site may take 2–3 weeks, while a complex one can take 6–8 weeks or more.",
  },
  {
    question: "Do you provide maintenance after launch?",
    answer:
      "Yes. We offer maintenance packages for updates, backups, and performance monitoring.",
  },
  {
    question: "Will the site be mobile-friendly?",
    answer:
      "Absolutely. Every site we build is fully responsive and optimized for all devices.",
  },
  {
    question: "Can I request custom features?",
    answer:
      "Yes. We develop tailored features based on your business needs, including API integrations, dashboards, and automation.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-16 px-4">
      <h2 className="mb-6 text-center text-2xl font-semibold text-primary">Frequently Asked Questions</h2>
      <div className="mx-auto max-w-3xl space-y-4 text-gray-700 dark:text-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 dark:border-gray-700 rounded-lg">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left p-4 font-semibold flex justify-between items-center focus:outline-none"
            >
              {faq.question}
              <span className="ml-4">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-400">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
