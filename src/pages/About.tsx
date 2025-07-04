
import React from "react";
import Navbar from "@/components/Navbar";
import SpecsSection from "@/components/SpecsSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl font-display font-bold mb-8 text-gray-900">
                About <span className="text-pulse-500">LakshmiIT</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                We are a leading IT solutions provider dedicated to transforming businesses through innovative technology. 
                Our team of experts specializes in cloud solutions, custom development, and digital transformation.
              </p>
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                <div className="text-center">
                  <div className="text-3xl font-bold text-pulse-500 mb-2">10+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pulse-500 mb-2">50+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-pulse-500 mb-2">24/7</div>
                  <div className="text-gray-600">Support Available</div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <SpecsSection />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default About;
