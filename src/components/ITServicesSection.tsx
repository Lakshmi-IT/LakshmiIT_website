
import React, { useState } from "react";
import { Cloud, Shield, Code, Database, Smartphone, Zap } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Migrate to the cloud with confidence. We provide comprehensive cloud strategy, migration, and management services.",
    color: "pulse-500",
    bgColor: "pulse-50"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your business with enterprise-grade security solutions, threat monitoring, and compliance management.",
    color: "pulse-600",
    bgColor: "pulse-100"
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Build tailored software solutions that perfectly fit your business needs and scale with your growth.",
    color: "pulse-500",
    bgColor: "pulse-50"
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Optimize your data infrastructure with modern databases, analytics, and business intelligence solutions.",
    color: "pulse-600",
    bgColor: "pulse-100"
  },
  {
    icon: Smartphone,
    title: "Digital Transformation",
    description: "Transform your business processes with cutting-edge technology and automation solutions.",
    color: "pulse-500",
    bgColor: "pulse-50"
  },
  {
    icon: Zap,
    title: "IT Support",
    description: "24/7 technical support and maintenance to keep your systems running smoothly and efficiently.",
    color: "pulse-600",
    bgColor: "pulse-100"
  }
];

const ITServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-12 sm:py-16 bg-gradient-to-b from-gray-50 to-white" id="services">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="pulse-chip hover-lift">
              {/* <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span> */}
              <span>Services</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-pulse-200 to-transparent"></div>
        </div>
        
        <div className="max-w-3xl mb-12 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight mb-6 text-gray-900">
            Comprehensive IT Solutions for 
            <span className="text-pulse-500 ml-2">Modern Businesses</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            From cloud infrastructure to cybersecurity, we deliver enterprise-grade IT services that drive innovation and growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`interactive-card bg-white p-6 rounded-2xl shadow-elegant hover-glow group cursor-pointer ${
                hoveredIndex === index ? 'ring-2 ring-pulse-200' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 bg-${service.bgColor} rounded-xl mr-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                  <service.icon className={`w-6 h-6 text-${service.color} transition-colors duration-300`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-pulse-600 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* Interactive element that appears on hover */}
              <div className={`mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                <button className="text-pulse-500 font-semibold text-sm hover:text-pulse-600 transition-colors duration-200">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        {/* <div className="text-center mt-12 animate-fade-in-scale">
          <p className="text-gray-600 mb-6">Ready to transform your IT infrastructure?</p>
          <a href="#contact" className="button-primary inline-flex items-center">
            Get Started Today
            <span className="ml-2">→</span>
          </a>
        </div> */}
      </div>
    </section>
  );
};

export default ITServicesSection;
