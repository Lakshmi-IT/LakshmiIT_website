
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Briefcase, MapPin, Clock } from "lucide-react";

const jobOpenings = [
  {
    title: "Senior Cloud Engineer",
    department: "Engineering",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Lead cloud infrastructure projects and mentor junior developers in our growing engineering team."
  },
  {
    title: "Cybersecurity Specialist",
    department: "Security",
    location: "Remote",
    type: "Full-time",
    description: "Implement security protocols and conduct vulnerability assessments for enterprise clients."
  },
  {
    title: "Full Stack Developer",
    department: "Development",
    location: "San Francisco, CA",
    type: "Full-time",
    description: "Build custom applications using modern web technologies and collaborate with cross-functional teams."
  },
  {
    title: "IT Support Technician",
    department: "Support",
    location: "San Francisco, CA",
    type: "Part-time",
    description: "Provide technical support to clients and maintain IT infrastructure systems."
  }
];

const Careers = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl sm:text-5xl font-display font-bold mb-8 text-gray-900">
                Join Our <span className="text-pulse-500">Team</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Be part of a dynamic team that's shaping the future of IT solutions. 
                We offer competitive benefits, flexible work arrangements, and opportunities for growth.
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-gray-900">Open Positions</h2>
              <div className="space-y-6">
                {jobOpenings.map((job, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center">
                            <Briefcase size={16} className="mr-1" />
                            {job.department}
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock size={16} className="mr-1" />
                            {job.type}
                          </div>
                        </div>
                      </div>
                      <button className="mt-4 md:mt-0 bg-pulse-500 hover:bg-pulse-600 text-white px-6 py-2 rounded-lg transition-colors duration-300">
                        Apply Now
                      </button>
                    </div>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="max-w-4xl mx-auto mt-16 text-center bg-pulse-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Don't see the right fit?</h3>
              <p className="text-gray-600 mb-6">
                We're always looking for talented individuals to join our team. 
                Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <button className="bg-pulse-500 hover:bg-pulse-600 text-white px-8 py-3 rounded-lg transition-colors duration-300">
                Send Resume
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
