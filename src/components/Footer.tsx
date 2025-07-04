
import React from "react";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-pulse-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              {/* <img src="/lakshiitlogo.png" alt="LakshmiIT IT Solutions" className="h-8 w-auto mr-3 invert" /> */}
              <span className="text-xl font-bold">Lakshmi info tech pvt.Ltd</span>
            </div>
            <p className="text-pulse-200 mb-6 leading-relaxed">
              Leading IT solutions provider offering cloud services, cybersecurity, 
              custom development, and digital transformation for modern businesses.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/lakshmi-information-technology-private-limited" className="text-pulse-300 hover:text-white transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-pulse-300 hover:text-white transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-pulse-300 hover:text-white transition-colors duration-300">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-pulse-200 hover:text-white transition-colors duration-300">Cloud Solutions</Link></li>
              <li><Link to="/services" className="text-pulse-200 hover:text-white transition-colors duration-300">Cybersecurity</Link></li>
              <li><Link to="/services" className="text-pulse-200 hover:text-white transition-colors duration-300">Custom Development</Link></li>
              <li><Link to="/services" className="text-pulse-200 hover:text-white transition-colors duration-300">IT Consulting</Link></li>
              <li><Link to="/services" className="text-pulse-200 hover:text-white transition-colors duration-300">Digital Transformation</Link></li>
              <li><Link to="/services" className="text-pulse-200 hover:text-white transition-colors duration-300">Managed Services</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-pulse-200 hover:text-white transition-colors duration-300">About Us</Link></li>
              <li><Link to="/careers" className="text-pulse-200 hover:text-white transition-colors duration-300">Careers</Link></li>
              <li><Link to="/about" className="text-pulse-200 hover:text-white transition-colors duration-300">Testimonials</Link></li>
              {/* <li><a href="#" className="text-pulse-200 hover:text-white transition-colors duration-300">Blog</a></li> */}
              <li><a href="#" className="text-pulse-200 hover:text-white transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-pulse-400 mt-1 flex-shrink-0" />
                <div className="text-pulse-200">
                  <p>at 1-11-251/11, RKP Mansion,</p>
                  <p>Begumpet, Hyderabad 500016,</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-pulse-400 flex-shrink-0" />
                <a href="tel:	+917897893299" className="text-pulse-200 hover:text-white transition-colors duration-300">
                  	+91 7897893299
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-pulse-400 flex-shrink-0" />
                <a href="mailto:info@LakshmiIT.com" className="text-pulse-200 hover:text-white transition-colors duration-300">
                  info@LakshmiIT.com
                </a>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <Link 
                to="/contact" 
                className="inline-block bg-pulse-500 hover:bg-pulse-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pulse-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-pulse-300 text-sm">
              © 2025 Lakshmi info tech pvt.Ltd . All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-pulse-300 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-pulse-300 hover:text-white transition-colors duration-300">Privacy Policy</a>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
