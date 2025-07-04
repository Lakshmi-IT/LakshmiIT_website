
import React, { useRef } from "react";

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  gradient: string;
  backgroundImage?: string;
}

const testimonials: TestimonialProps[] = [{
  content: "LakshmiIT transformed our entire IT infrastructure, migrating us to the cloud and improving our system performance by 40%. Their expertise in digital transformation is unmatched.",
  author: "Sarah Chen",
  role: "CTO, InnovateTech Solutions",
  gradient: "from-blue-700 via-indigo-800 to-purple-900",
  backgroundImage: "/background-section1.png"
}, {
  content: "The cybersecurity solutions implemented by LakshmiIT have given us peace of mind. Zero security incidents in 18 months and comprehensive compliance management.",
  author: "Michael Rodriguez",
  role: "IT Director, SecureData Corp",
  gradient: "from-indigo-900 via-purple-800 to-orange-500",
  backgroundImage: "/background-section2.png"
}, {
  content: "Their custom development team delivered exactly what we needed. The software solution has streamlined our operations and increased productivity by 35%.",
  author: "Dr. Amara Patel",
  role: "Operations Manager, MedTech Innovations",
  gradient: "from-purple-800 via-pink-700 to-red-500",
  backgroundImage: "/background-section3.png"
}, {
  content: "As a growing business, LakshmiIT's scalable IT solutions have been game-changing. Their 24/7 support ensures we never miss a beat.",
  author: "Jason Lee",
  role: "CEO, GrowthTech Enterprises",
  gradient: "from-orange-600 via-red-500 to-purple-600",
  backgroundImage: "/background-section1.png"
}];

const TestimonialCard = ({
  content,
  author,
  role,
  backgroundImage = "/background-section1.png"
}: TestimonialProps) => {
  return (
    <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-between shadow-lg hover:shadow-xl transform transition-all duration-300 hover:-translate-y-2 border border-gray-100">
      <div className="flex-1">
        <div className="text-pulse-500 text-4xl mb-4">"</div>
        <p className="text-gray-700 text-lg mb-6 font-medium leading-relaxed italic">
          {content}
        </p>
      </div>
      <div className="border-t border-gray-100 pt-6">
        <h4 className="font-bold text-lg text-gray-900">{author}</h4>
        <p className="text-pulse-600 font-medium">{role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-16 bg-gray-50 relative" id="testimonials" ref={sectionRef}>
      <div className="section-container animate-on-scroll">
        <div className="flex items-center gap-4 mb-6">
          <div className="pulse-chip">
            {/* <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">04</span> */}
            <span>Testimonials</span>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-pulse-200 to-transparent"></div>
        </div>
         
        
        <h2 className="text-5xl font-display font-bold mb-12 text-left">What our clients say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index} 
              content={testimonial.content} 
              author={testimonial.author} 
              role={testimonial.role} 
              gradient={testimonial.gradient} 
              backgroundImage={testimonial.backgroundImage} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
