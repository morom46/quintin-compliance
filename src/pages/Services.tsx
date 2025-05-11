import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import HeroSection from "@/components/HeroSection";

const Services = () => {
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
          title="Our Comprehensive Service Portfolio"
          subtitle="Specialized solutions designed to ensure compliance and quality across all aspects of pharmaceutical manufacturing"
        />
      </motion.div>
      
      {/* Main Services */}
      <motion.section
        className="py-16 px-4 bg-white content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid md:grid-cols-2 gap-12"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="enhanced-box p-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Product Inspections</h3>
              <p className="text-slate-600 mb-6">
                Our comprehensive product inspection services ensure that pharmaceutical products meet all quality and regulatory requirements. 
                We conduct detailed examinations of raw materials, in-process materials, and finished products to identify potential issues 
                before they impact patient safety or regulatory compliance.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/70 p-4 rounded-lg border border-blue-100/50 shadow-sm">
                  <h4 className="font-semibold text-lg mb-2 text-slate-700">Key inspection services:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                      <span className="text-slate-600">Visual inspections for physical defects</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                      <span className="text-slate-600">Laboratory testing for chemical and biological compliance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                      <span className="text-slate-600">Packaging and labeling verification</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                      <span className="text-slate-600">Documentation and batch record review</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="enhanced-box p-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-4 text-slate-800">GMP Audit & Consulting</h3>
              <p className="text-slate-600 mb-6">
                Our expert consultants help pharmaceutical manufacturers understand and meet Good Manufacturing Practice (GMP) 
                requirements across global markets. We provide comprehensive audits and actionable recommendations to help you 
                improve quality systems and maintain regulatory compliance.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white/70 p-4 rounded-lg border border-blue-100/50 shadow-sm">
                  <h4 className="font-semibold text-lg mb-2 text-slate-700">Our audit expertise covers:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                      <span className="text-slate-600">Facility and equipment qualification</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                      <span className="text-slate-600">Process validation and verification</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                      <span className="text-slate-600">Quality management system assessment</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                      <span className="text-slate-600">Regulatory gap analysis and remediation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={sectionVariants}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-4 text-slate-800">Compliance Training</h3>
            <p className="text-slate-600 mb-6">
              We offer customized training programs for personnel at all levels, covering GMP, data integrity, 
              and quality control. Our certification programs align with industry best practices, ensuring your 
              team is well-versed in compliance.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-slate-700">Training topics include:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-600">GMP fundamentals and advanced practices</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-600">Data integrity and documentation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-600">Quality risk management</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-600">Regulatory compliance updates</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-slate-700">Training benefits:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-600">Interactive, practical learning experiences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-600">Industry-recognized certification</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-600">Customized to your organization's needs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-blue-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-600">Ongoing support and refresher courses</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Why Choose Us */}
      <motion.section
        className="py-16 px-4 bg-gradient-to-br from-slate-100 to-blue-50 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,rgba(255,255,255,0.5),rgba(255,255,255,0.8))]"></div>
        <div className="max-w-7xl mx-auto relative">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-slate-800"
            variants={itemVariants}
          >
            Why Choose Quintin Compliance?
          </motion.h2>
          
          <motion.div 
             className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="enhanced-box-light p-6 transition duration-300 ease-in-out hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="bg-blue-50/80 w-12 h-12 rounded-md flex items-center justify-center mb-4 text-xl font-bold text-blue-700 shadow-sm border border-blue-100/50">1</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Qualified Professionals</h3>
              <p className="text-slate-600">Highly experienced team with relevant pharmaceutical certifications.</p>
            </motion.div>
            
            <motion.div 
              className="enhanced-box-light p-6 transition duration-300 ease-in-out hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="bg-blue-50/80 w-12 h-12 rounded-md flex items-center justify-center mb-4 text-xl font-bold text-blue-700 shadow-sm border border-blue-100/50">2</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Advanced Technologies</h3>
              <p className="text-slate-600">Utilizing best laboratory equipment for inspections.</p>
            </motion.div>
            
            <motion.div 
              className="enhanced-box-light p-6 transition duration-300 ease-in-out hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="bg-blue-50/80 w-12 h-12 rounded-md flex items-center justify-center mb-4 text-xl font-bold text-blue-700 shadow-sm border border-blue-100/50">3</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Proprietary Data Analytics</h3>
              <p className="text-slate-600">Comprehensive analytics platform for trend identification.</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-12 enhanced-box p-6 md:p-8"
            variants={itemVariants}
          >
            <p className="text-lg text-slate-700">
              Quintin Compliance differentiates itself from competitors through a combination of expertise and
              technology. Our highly qualified professionals, advanced inspection technologies, and proprietary
              data analytics platform provide a competitive edge, enabling us to deliver superior service and build
              long-term client relationships.
            </p>
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
            Ready to Elevate Your Compliance Standards?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Contact our team to learn more about how we can help ensure your pharmaceutical products meet the highest quality and regulatory standards.
          </motion.p>
          <motion.div 
            variants={itemVariants}
          >
            <Link 
              to="/contact" 
              className="bg-white text-slate-800 hover:bg-slate-100 px-6 py-3 rounded-md font-medium inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Request a Consultation
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;
