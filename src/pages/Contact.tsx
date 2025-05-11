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

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
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
        className="py-16 px-4 bg-white content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            <motion.div className="enhanced-box p-6 md:p-8" variants={itemVariants}>
              <motion.h2 
                className="text-3xl font-bold mb-8 text-slate-800"
                variants={itemVariants}
              >
                Get In Touch
              </motion.h2>
              
              <motion.div 
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="bg-white/80 p-3 rounded-full mr-4 shrink-0 shadow-sm border border-slate-100">
                    <MapPin className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-slate-700">Our Location</h3>
                    <p className="text-slate-600">
                      GIDC, Makarpura<br />
                      Gujarat 390013<br />
                      India
                    </p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="bg-white/80 p-3 rounded-full mr-4 shrink-0 shadow-sm border border-slate-100">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-slate-700">Phone</h3>
                    <p className="text-slate-600">+91 93139 15222</p>
                    {/* <p className="text-slate-600">Toll-free: 1800 123 4567</p> */}
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="bg-white/80 p-3 rounded-full mr-4 shrink-0 shadow-sm border border-slate-100">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-slate-700">Email</h3>
                    <p className="text-slate-600">info@quintincompliance.com</p>
                    <p className="text-slate-600">support@quintincompliance.com</p>
                  </div>
                </motion.div>
                
                <motion.div className="flex items-start" variants={itemVariants}>
                  <div className="bg-white/80 p-3 rounded-full mr-4 shrink-0 shadow-sm border border-slate-100">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-slate-700">Business Hours</h3>
                    <p className="text-slate-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-slate-600">Saturday: 10:00 AM - 2:00 PM</p>
                    <p className="text-slate-600">Sunday: Closed</p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Consultation CTA */}
      <motion.section
        className="py-16 px-4 bg-gradient-to-r from-slate-100 to-blue-50 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.8))]"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.h2 
            className="text-3xl font-bold mb-4 text-slate-800"
            variants={itemVariants}
          >
            Schedule a Consultation
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 text-slate-600 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Our team of experts is ready to help you navigate the complex world of pharmaceutical compliance. 
            Schedule a consultation today to discuss your specific needs and challenges.
          </motion.p>

          <motion.div className="text-center" variants={itemVariants}>
            <a 
              href="tel:+919313915222" 
              className="bg-slate-700 text-white hover:bg-slate-800 px-6 py-3 rounded-md font-medium inline-flex items-center justify-center gap-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              <Phone className="h-5 w-5" />
              Call Now: +91 93139 15222
            </a>
          </motion.div>
        </div>
      </motion.section>
      
      {/* FAQ Section */}
      <motion.section
        className="py-16 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-8 text-center text-slate-800"
            variants={itemVariants}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="enhanced-box-light p-6" 
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-3 text-slate-700">What services does Quintin Compliance offer?</h3>
              <p className="text-slate-600">
                We offer a comprehensive range of services including product inspections, GMP audit consulting, and compliance training programs. 
                Our solutions are tailored to meet the specific needs of pharmaceutical companies of all sizes.
              </p>
            </motion.div>
            
            <motion.div 
              className="enhanced-box-light p-6" 
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-3 text-slate-700">How do I request a service quote?</h3>
              <p className="text-slate-600">
                You can request a quote by filling out our contact form, calling our office directly, or sending an email with your 
                requirements. Our team will respond within 24 hours with a detailed proposal.
              </p>
            </motion.div>
            
            <motion.div 
              className="enhanced-box-light p-6" 
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-3 text-slate-700">What qualifications do your inspectors have?</h3>
              <p className="text-slate-600">
                All our inspectors hold advanced degrees in pharmaceutical sciences or related fields and have a minimum of 10 years 
                experience in pharmaceutical quality control, manufacturing and quality assurance. Many have backgrounds working with regulatory agencies.
              </p>
            </motion.div>
            
            <motion.div 
              className="enhanced-box-light p-6" 
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-3 text-slate-700">How quickly can you respond to inspection requests?</h3>
              <p className="text-slate-600">
                We pride ourselves on rapid response times. Depending on the scope and location, we can typically arrange inspections within 5-7 business days. 
                For urgent matters, we offer expedited services.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 px-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2 
            className="text-3xl font-bold mb-6"
            variants={itemVariants}
          >
            Ready to Ensure Your Compliance Standards?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Contact Quintin Compliance today and take the first step toward pharmaceutical excellence.
          </motion.p>
          <motion.div 
            variants={itemVariants}
          >
            <a 
              href="mailto:info@quintincompliance.com" 
              className="bg-white text-slate-800 hover:bg-slate-100 px-6 py-3 rounded-md font-medium inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Email Us Now
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Contact;
