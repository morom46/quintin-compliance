import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import { Shield, Award, Users, Briefcase } from "lucide-react";

const About = () => {
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
          title="About Quintin Compliance"
          subtitle="Your Trusted Partner in Pharmaceutical Compliance"
        />
      </motion.div>
      
      {/* Our Story */}
      <motion.section
        className="py-16 px-4 bg-white content-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-6 text-slate-800 text-center">Our Story</h2>
            <p className="text-lg text-slate-600 mb-6 text-center">
              Quintin Compliance was founded in 2025 by a team of pharmaceutical industry veterans who recognized 
              the critical need for independent, third-party quality assurance in the growing global pharmaceutical supply chain.
            </p>
            {/* <p className="text-lg text-slate-600 mb-6 text-center">
              What began as a small consulting firm has grown into a global leader in pharmaceutical compliance services, 
              with operations spanning three continents and partnerships with some of the world's most respected pharmaceutical manufacturers.
            </p> */}
            <p className="text-lg text-slate-600 text-center">
              Our mission remains unchanged: to safeguard public health by ensuring pharmaceutical products meet the 
              highest standards of quality and safety, through rigorous inspection, testing, and compliance verification.
            </p>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Our Values */}
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
            className="text-3xl font-bold mb-12 text-center text-slate-800"
            variants={itemVariants}
          >
            Our Core Values
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="enhanced-box-light p-6 text-center transition duration-300 ease-in-out hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="mb-4 flex justify-center">
                <Shield className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Integrity</h3>
              <p className="text-slate-600">
                We provide unbiased assessments and maintain strict ethical standards in all our operations.
              </p>
            </motion.div>
            
            <motion.div 
              className="enhanced-box-light p-6 text-center transition duration-300 ease-in-out hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="mb-4 flex justify-center">
                <Award className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Excellence</h3>
              <p className="text-slate-600">
                We are committed to delivering superior quality services that exceed industry standards.
              </p>
            </motion.div>
            
            <motion.div 
              className="enhanced-box-light p-6 text-center transition duration-300 ease-in-out hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="mb-4 flex justify-center">
                <Users className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Collaboration</h3>
              <p className="text-slate-600">
                We work closely with our clients, forming partnerships built on trust and mutual respect.
              </p>
            </motion.div>
            
            <motion.div 
              className="enhanced-box-light p-6 text-center transition duration-300 ease-in-out hover:-translate-y-1"
              variants={itemVariants}
            >
              <div className="mb-4 flex justify-center">
                <Briefcase className="h-12 w-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Innovation</h3>
              <p className="text-slate-600">
                We continuously improve our methodologies and embrace new technologies to enhance our services.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Our Approach */}
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
            Our Approach
          </motion.h2>
          
          <motion.p 
            className="text-lg text-slate-600 mb-12 text-center max-w-4xl mx-auto"
            variants={itemVariants}
          >
            At Quintin Compliance, we take a comprehensive, systematic approach to pharmaceutical compliance, 
            ensuring that every aspect of the manufacturing process meets stringent quality standards.
          </motion.p>
          
          <motion.div 
            className="enhanced-box p-8 mb-12"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800">What Sets Us Apart</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-slate-700">Global Perspective, Local Expertise</h4>
                <p className="text-slate-600 mb-6">
                  Our international team brings diverse experience from major pharmaceutical markets worldwide, while 
                  maintaining deep knowledge of local regulatory requirements and cultural contexts.
                </p>
                
                <h4 className="text-xl font-semibold mb-3 text-slate-700">Data-Driven Methodology</h4>
                <p className="text-slate-600">
                  We utilize advanced analytics and proprietary assessment tools to provide objective, quantifiable insights 
                  into compliance status and improvement opportunities.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-slate-700">Continuous Improvement</h4>
                <p className="text-slate-600 mb-6">
                  Beyond identifying issues, we partner with clients to implement sustainable solutions and build robust quality 
                  systems that evolve with changing regulatory landscapes.
                </p>
                
                <h4 className="text-xl font-semibold mb-3 text-slate-700">Scalable Solutions</h4>
                <p className="text-slate-600">
                  Whether you're a small-scale manufacturer or a multinational corporation, our services scale to your needs, 
                  and ensuring your operations remain compliant, no matter the scale or location.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Team */}
      <motion.section
        className="py-16 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center text-slate-800"
            variants={itemVariants}
          >
            Our Expert Team
          </motion.h2>
          
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
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Leadership Team</h3>
              <p className="text-slate-600 mb-4">
                Our leadership team brings together decades of experience in pharmaceutical compliance, 
                quality assurance, and regulatory affairs. With backgrounds in top pharmaceutical companies 
                and regulatory agencies, they provide strategic direction and ensure we deliver outstanding service.
              </p>
            </motion.div>
            
            <motion.div 
              className="enhanced-box p-8"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Technical Experts</h3>
              <p className="text-slate-600 mb-4">
                Our technical team consists of qualified professionals with specialized expertise in GMP, 
                quality control, laboratory operations, and data integrity. Each member holds relevant 
                certifications and undergoes continuous training to stay updated with evolving industry standards.
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
            Partner with Us for Pharmaceutical Excellence
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Discover how Quintin Compliance can help your organization achieve and maintain the highest standards of quality and regulatory compliance.
          </motion.p>
          <motion.div 
            variants={itemVariants}
          >
            <a 
              href="/contact" 
              className="bg-white text-slate-800 hover:bg-slate-100 px-6 py-3 rounded-md font-medium inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
