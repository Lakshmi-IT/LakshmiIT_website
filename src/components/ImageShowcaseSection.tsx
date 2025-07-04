
import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

const ImageShowcaseSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const showcaseItems = [
    {
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Next Generation IT Infrastructure",
      description: "Built with enterprise-grade technology and sophisticated architecture, our IT solutions seamlessly integrate into various business environments, from startups to enterprises, providing reliable support and driving digital transformation."
    },
    {
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=2126&q=80",
      title: "Cloud Computing Excellence",
      description: "Our cloud solutions provide scalable, secure, and efficient infrastructure that grows with your business needs, ensuring optimal performance and cost-effectiveness."
    },
    {
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      title: "Advanced Security Solutions",
      description: "Comprehensive cybersecurity measures that protect your digital assets with multi-layered defense systems and real-time threat monitoring."
    }
  ];

  const startSlideshow = () => {
    setIsPlaying(true);
    intervalRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % showcaseItems.length);
    }, 4000);
  };

  const stopSlideshow = () => {
    setIsPlaying(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const resetSlideshow = () => {
    stopSlideshow();
    setCurrentSlide(0);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-gradient-to-b from-white to-pulse-50/20" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Experience Innovation 
            <span className="text-pulse-500 ml-2">Today</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our cutting-edge IT solutions are designed to transform how businesses 
            operate in the digital age, delivering efficiency and competitive advantage.
          </p>
        </div>
        
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-slide-up hover-glow">
          {/* Interactive controls */}
          <div className="bg-gray-900 p-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={isPlaying ? stopSlideshow : startSlideshow}
                className="flex items-center space-x-2 px-4 py-2 bg-pulse-500 text-white rounded-lg hover:bg-pulse-600 transition-colors duration-300"
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                <span className="text-sm font-medium">
                  {isPlaying ? 'Pause' : 'Play'} Showcase
                </span>
              </button>
              <button
                onClick={resetSlideshow}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                <RotateCcw size={16} />
                <span className="text-sm font-medium">Reset</span>
              </button>
            </div>
            
            {/* Slide indicator */}
            <div className="flex space-x-2">
              {showcaseItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-pulse-400 w-6' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Image slideshow */}
          <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
            {showcaseItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ${
                  currentSlide === index 
                    ? 'opacity-100 transform scale-100' 
                    : 'opacity-0 transform scale-105'
                }`}
              >
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Slide content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive bottom section */}
          <div className="bg-white p-4 sm:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-xl sm:text-2xl font-display font-semibold mb-2 text-gray-900">
                  {showcaseItems[currentSlide].title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {showcaseItems[currentSlide].description}
                </p>
              </div>
              
              <div className="flex space-x-3">
                <button className="button-secondary text-sm px-4 py-2">
                  Learn More
                </button>
                <a href="#contact" className="button-primary text-sm px-4 py-2">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive statistics */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
          {[
            { number: "99.9%", label: "Uptime" },
            { number: "24/7", label: "Support" },
            { number: "50+", label: "Clients" },
            { number: "2+", label: "Years" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover-lift cursor-pointer group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-2xl sm:text-3xl font-bold text-pulse-600 mb-1 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 group-hover:text-pulse-600 transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
