
import React from "react";
import Navbar from "@/components/Navbar";
import ITServicesSection from "@/components/ITServicesSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <ITServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
