import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import { MapPin, Phone, Mail, Building } from "lucide-react";

const Contact = () => {
  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div>
      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        <HeroSection 
          title="Contact Quintin Compliance"
          subtitle="Reach out to discuss your compliance needs and discover how we can help you achieve pharmaceutical excellence"
        />
      </motion.div>
      
      {/* Contact Information Section */}
      <motion.section
        className="py-12 md:py-16 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div className="bg-slate-50 p-6 md:p-8 rounded-lg shadow-sm" variants={itemVariants}>
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-slate-800">Get In Touch</h2>
              
              <div className="space-y-6">
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="bg-slate-100 p-3 rounded-full mr-4 shrink-0">
                    <MapPin className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-slate-700">Our Location</h3>
                    <p className="text-slate-600">
                      123 Pharmaceutical District<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="bg-slate-100 p-3 rounded-full mr-4 shrink-0">
                    <Phone className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-slate-700">Phone</h3>
                    <p className="text-slate-600">+91 123 456 7890</p>
                    <p className="text-slate-600">Toll-free: 1800 123 4567</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="bg-slate-100 p-3 rounded-full mr-4 shrink-0">
                    <Mail className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-slate-700">Email</h3>
                    <p className="text-slate-600">info@quintincompliance.com</p>
                    <p className="text-slate-600">support@quintincompliance.com</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="bg-slate-100 p-3 rounded-full mr-4 shrink-0">
                    <Building className="h-6 w-6 text-slate-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-slate-700">Business Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div className="mt-10 bg-white p-4 rounded-lg border border-slate-100" variants={itemVariants}>
                <h3 className="text-xl font-semibold mb-4 text-slate-700">Value Proposition</h3>
                <p className="text-slate-600">
                  Quintin Compliance offers comprehensive solutions to ensure quality, validate trust, 
                  and navigate the complex pharmaceutical regulatory landscape. Contact us to discuss your specific 
                  compliance needs and discover how Quintin can help you achieve pharmaceutical excellence.
                </p>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Schedule a Consultation */}
      <motion.section
        className="py-12 md:py-16 px-4 bg-slate-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div className="text-center mb-8" variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-800">Schedule a Consultation</h2>
            <p className="text-lg md:text-xl mb-8 text-slate-600 max-w-3xl mx-auto">
              Our team of experts is ready to help you navigate the complex world of pharmaceutical compliance. 
              Schedule a consultation today to discuss your specific needs and challenges.
            </p>
          </motion.div>
          
          <motion.div className="bg-white rounded-lg shadow-md overflow-hidden mb-8" variants={itemVariants}>
            <img 
              src="/lovable-uploads/d6688b0f-3c29-4169-9f0b-1f82d23c4dd9.png" 
              alt="Business professionals" 
              className="w-full h-64 md:h-80 object-cover object-center"
            />
          </motion.div>
          
          <motion.div className="text-center" variants={itemVariants}>
            <a 
              href="tel:+911234567890" 
              className="bg-slate-700 text-white hover:bg-slate-800 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              Call Now: +91 123 456 7890
            </a>
          </motion.div>
        </div>
      </motion.section>
      
      {/* FAQ Section */}
      <motion.section
        className="py-12 md:py-16 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-8 text-center text-slate-800"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div className="bg-slate-50 p-6 rounded-lg shadow-sm" variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">What services does Quintin Compliance offer?</h3>
              <p className="text-slate-600">
                We offer a comprehensive range of services including product inspections, GMP audit consulting, and compliance training programs. 
                Our solutions are tailored to meet the specific needs of pharmaceutical companies of all sizes.
              </p>
            </motion.div>
            
            <motion.div className="bg-slate-50 p-6 rounded-lg shadow-sm" variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">How can third-party inspections benefit my company?</h3>
              <p className="text-slate-600">
                Third-party inspections provide an unbiased assessment of your operations, help identify compliance gaps before regulatory audits, 
                and demonstrate your commitment to quality to both regulators and customers.
              </p>
            </motion.div>
            
            <motion.div className="bg-slate-50 p-6 rounded-lg shadow-sm" variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">What qualifications do your inspectors have?</h3>
              <p className="text-slate-600">
                Our inspectors are highly qualified professionals with relevant industry certifications and extensive experience in pharmaceutical 
                manufacturing and quality assurance. Many have backgrounds working with regulatory agencies.
              </p>
            </motion.div>
            
            <motion.div className="bg-slate-50 p-6 rounded-lg shadow-sm" variants={itemVariants}>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">How quickly can you respond to inspection requests?</h3>
              <p className="text-slate-600">
                We pride ourselves on rapid response times. Depending on the scope and location, we can typically arrange inspections within 5-7 business days. 
                For urgent matters, we offer expedited services.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
