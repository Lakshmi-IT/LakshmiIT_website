
import React, { useState } from "react";
import { ArrowRight, Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="pb-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-pulse-50/30 relative" id="contact">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-pulse-100/50 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pulse-50/80 rounded-full blur-3xl opacity-60"></div>
      
      <div className="section-container relative z-10 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-start mb-12 animate-fade-in">
              <div className="flex items-center gap-4 mb-8 sm:mb-16 animate-fade-in">
          <div className="flex items-center gap-4">
            <div className="pulse-chip hover-lift">
              {/* <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-pulse-500 text-white mr-2">02</span> */}
              <span>Get in Touch</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-pulse-200 to-transparent"></div>
        </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your 
              <span className="text-pulse-500 animate-pulse-slow"> IT Infrastructure?</span>
            </h2>
            <p className="text-start sm:text-lg text-gray-600  mx-auto">
              Let's discuss how our IT solutions can drive your business forward. Get in touch for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Interactive Contact Form */}
            <div className="glass-card p-6 sm:p-8 hover-lift animate-slide-up">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Send us a message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 ${
                          focusedField === 'name' 
                            ? 'border-pulse-500 ring-2 ring-pulse-200 shadow-lg' 
                            : 'border-gray-300 hover:border-pulse-300'
                        }`}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 ${
                          focusedField === 'email' 
                            ? 'border-pulse-500 ring-2 ring-pulse-200 shadow-lg' 
                            : 'border-gray-300 hover:border-pulse-300'
                        }`}
                        placeholder="your.email@company.com"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('company')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 ${
                          focusedField === 'company' 
                            ? 'border-pulse-500 ring-2 ring-pulse-200 shadow-lg' 
                            : 'border-gray-300 hover:border-pulse-300'
                        }`}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 border rounded-lg transition-all duration-300 resize-none ${
                          focusedField === 'message' 
                            ? 'border-pulse-500 ring-2 ring-pulse-200 shadow-lg' 
                            : 'border-gray-300 hover:border-pulse-300'
                        }`}
                        placeholder="Tell us about your IT needs..."
                        required
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="button-primary group flex items-center justify-center w-full"
                    >
                      Send Message
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8 animate-bounce-in">
                  <CheckCircle className="w-16 h-16 text-pulse-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-pulse-600 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Get in touch</h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Ready to take your business to the next level? Our team is here to help you navigate your digital transformation journey.
                </p>
              </div>

              <div className="space-y-6">
                <div className="group cursor-pointer">
                  <div className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-pulse-50/50">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-pulse-100 rounded-lg group-hover:bg-pulse-200 transition-colors duration-300">
                        <Phone className="w-6 h-6 text-pulse-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-pulse-600 transition-colors duration-300">Phone</h4>
                      <p className="text-gray-600 font-medium">+91 7897893299</p>
                      <p className="text-sm text-gray-500">Mon-Sat 10am-7pm EST</p>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-pulse-50/50">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-pulse-100 rounded-lg group-hover:bg-pulse-200 transition-colors duration-300">
                        <Mail className="w-6 h-6 text-pulse-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-pulse-600 transition-colors duration-300">Email</h4>
                      <p className="text-gray-600 font-medium">info@LakshmiIT.com</p>
                      <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer">
                  <div className="flex items-start space-x-4 p-4 rounded-lg transition-all duration-300 hover:bg-pulse-50/50">
                    <div className="flex-shrink-0">
                      <div className="p-3 bg-pulse-100 rounded-lg group-hover:bg-pulse-200 transition-colors duration-300">
                        <MapPin className="w-6 h-6 text-pulse-600" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-pulse-600 transition-colors duration-300">Office</h4>
                      <p className="text-gray-600 font-medium">at 1-11-251/11, RKP Mansion,<br />Begumpet, Hyderabad 500016</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover-lift">
                  <div className="text-2xl font-bold text-pulse-600">24/7</div>
                  <div className="text-sm text-gray-600">Support</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover-lift">
                  <div className="text-2xl font-bold text-pulse-600">50+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
