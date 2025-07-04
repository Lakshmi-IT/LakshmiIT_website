
import React, { useState, useEffect } from "react";
import { ArrowRight, Users, Award, TrendingUp, Shield } from "lucide-react";

const SpecsSection = () => {
  const [visibleStats, setVisibleStats] = useState<number[]>([]);
  const [activeFeature, setActiveFeature] = useState(0);

  const stats = [
    { icon: Users, value: "50+", label: "Happy Clients", color: "pulse-500" },
    { icon: Award, value: "2+", label: "Years Experience", color: "pulse-600" },
    { icon: TrendingUp, value: "99.9%", label: "Success Rate", color: "pulse-500" },
    { icon: Shield, value: "24/7", label: "Support Available", color: "pulse-600" }
  ];

  const features = [
    "Enterprise-grade security and compliance",
    "Scalable cloud infrastructure solutions",
    "24/7 monitoring and support services",
    "Custom development and integration"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 3000);
    
    return () => clearInterval(timer);
  }, [features.length]);

  useEffect(() => {
    // Animate stats on mount
    const timers = stats.map((_, index) => 
      setTimeout(() => {
        setVisibleStats(prev => [...prev, index]);
      }, index * 200)
    );
    
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="w-full py-6 sm:py-10 bg-gradient-to-b from-white via-pulse-50/20 to-white" id="about">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="pulse-chip hover-lift">
              {/* <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">3</span> */}
              <span>About</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-pulse-200 to-transparent"></div>
        </div>
        
        {/* Interactive stats section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center p-6 bg-white rounded-2xl shadow-elegant hover:shadow-elegant-hover transition-all duration-500 hover-lift cursor-pointer group ${
                visibleStats.includes(index) ? 'animate-bounce-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4">
                <div className={`inline-flex p-3 rounded-full bg-${stat.color}/10 group-hover:bg-${stat.color}/20 transition-colors duration-300`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
              </div>
              <div className={`text-3xl font-bold text-${stat.color} mb-2 group-hover:scale-105 transition-transform duration-300`}>
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
        {/* Main content with interactive text */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-xl lg:text-2xl font-display leading-tight mb-8 sm:mb-12 animate-slide-up">
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-pulse-600 to-gray-900 bg-size-200 animate-gradient">
              LakshmiIT partners with your team to accelerate digital transformation. By modernizing infrastructure, enhancing security, and implementing cutting-edge solutions, we help businesses focus on what they do best: innovate, grow, and succeed.
            </span>
          </h2>

          {/* Interactive features list */}
          <div className="mb-8 animate-fade-in-scale">
            <h3 className="text-xl font-semibold mb-6 text-gray-900">Our Core Capabilities:</h3>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center p-4 rounded-lg transition-all duration-500 cursor-pointer ${
                    activeFeature === index 
                      ? 'bg-pulse-50 border-l-4 border-pulse-500 transform scale-[1.02]' 
                      : 'bg-white/50 hover:bg-white border-l-4 border-transparent hover:border-pulse-200'
                  }`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className={`w-2 h-2 rounded-full mr-4 transition-all duration-300 ${
                    activeFeature === index ? 'bg-pulse-500 scale-150' : 'bg-gray-300'
                  }`} />
                  <span className={`font-medium transition-colors duration-300 ${
                    activeFeature === index ? 'text-pulse-700' : 'text-gray-700'
                  }`}>
                    {feature}
                  </span>
                  {activeFeature === index && (
                    <ArrowRight className="w-5 h-5 text-pulse-500 ml-auto animate-bounce-in" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-scale">
            <a href="#contact" className="button-primary inline-flex items-center justify-center">
              Start Your Transformation
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a href="#services" className="button-secondary inline-flex items-center justify-center">
              Explore Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
