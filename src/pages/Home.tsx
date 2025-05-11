import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";

const Home = () => {
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
      {/* Hero Section */}
      <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
        <HeroSection
          title="Quintin Compliance: Elevating Pharmaceutical Standards"
          subtitle="Partner with us to ensure regulatory excellence through meticulous third-party inspections, comprehensive audits, and expert consulting services."
          ctaText="Explore Our Expertise"
          ctaLink="/services"
        />
      </motion.div>

      {/* About Section */}
      <motion.section
        className="py-16 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              className="text-lg text-slate-600 mb-6"
              variants={itemVariants}
            >
              Quintin Compliance is dedicated to ensuring quality and validating trust in the pharmaceutical industry.
              Our mission is to safeguard public health by upholding the highest standards of pharmaceutical manufacturing and distribution.
            </motion.p>

            <motion.p
              className="text-lg text-slate-600 mb-6"
              variants={itemVariants}
            >
              In an era where pharmaceutical quality is paramount, Quintin Compliance emerges as a trusted ally.
              We provide unbiased assessments and expert guidance, empowering pharmaceutical companies to navigate the complex
              regulatory landscape and maintain unwavering compliance. Our services are designed to minimize risks, prevent costly recalls,
              and protect brand reputation.
            </motion.p>

            <motion.p
              className="text-lg text-slate-600"
              variants={itemVariants}
            >
              With Quintin Compliance, you gain a partner committed to your success. We go beyond mere inspection,
              offering proactive solutions and continuous support to ensure your operations meet and exceed global quality standards.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Why Third-Party Inspection Matters */}
      <motion.section
        className="py-16 px-4 bg-slate-50"
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
            The Compliance Imperative: Why Third-Party Inspection Matters
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-10 items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm transition duration-300 ease-in-out hover:shadow-md"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-700">Regulatory Landscape</h3>
              <p className="text-slate-600 mb-4">
                The pharmaceutical industry operates under increasingly stringent Good Manufacturing Practice (GMP)
                regulations set by agencies like the FDA, EMA, and WHO. These standards are designed to ensure product safety,
                efficacy, and consistency.
              </p>
              <p className="text-slate-600">
                Non-compliance can lead to product recalls, reputational damage, and severe legal penalties. For example,
                a company may face multi-million dollar fines due to GMP violations. Quintin Compliance helps mitigate these
                risks through unbiased inspection and expert consulting.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-sm transition duration-300 ease-in-out hover:shadow-md"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-700">Impact of Non-Compliance</h3>
              <ul className="space-y-3 text-slate-600 mb-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Product Recalls & Market Withdrawals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Significant Reputational Damage</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  <span>Severe Legal Penalties & Fines</span>
                </li>
              </ul>
              <p className="text-slate-600">
                Quintin plays a crucial role in mitigating these risks through unbiased inspection and expert consulting,
                ensuring that companies adhere to the latest regulatory requirements and maintain the highest standards of quality.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Services Overview */}
      <motion.section
        className="py-16 px-4 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl font-bold mb-4 text-center text-slate-800"
            variants={itemVariants}
          >
            Our Core Services
          </motion.h2>
          <motion.p
            className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Comprehensive Solutions Tailored for Pharmaceutical Compliance
          </motion.p>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="h-full transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 rounded-lg flex"
              variants={itemVariants}
            >
              <ServiceCard
                icon={<span className="text-slate-700 font-bold text-2xl">📦</span>}
                title="Product Inspections"
                description="We inspect raw materials, in-process goods, and finished products, focusing on API integrity and purity. Our statistical sampling plans are based on ISO 2859-1, ensuring accurate and reliable results."
              />
            </motion.div>
            <motion.div
              className="h-full transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 rounded-lg flex"
              variants={itemVariants}
            >
              <ServiceCard
                icon={<span className="text-slate-700 font-bold text-2xl">📋</span>}
                title="GMP Audit Consulting"
                description="Our gap analysis, remediation plans, and mock audits prepare facilities for regulatory inspections, including FDA, EMA, WHO, & GMP."
              />
            </motion.div>
            <motion.div
              className="h-full transition duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 rounded-lg flex"
              variants={itemVariants}
            >
              <ServiceCard
                icon={<span className="text-slate-700 font-bold text-2xl">👥</span>}
                title="Compliance Training"
                description="We offer customized training programs for personnel at all levels, covering GMP, data integrity, and quality control. Our certification programs align with industry best practices."
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center text-slate-700 hover:text-slate-900 font-medium group transition duration-300 ease-in-out"
            >
              View our complete service portfolio
              <svg className="ml-2 w-5 h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact CTA */}
      <motion.section
        className="py-16 px-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            variants={itemVariants}
          >
            Partner with Quintin for Pharmaceutical Excellence
          </motion.h2>
          <motion.p
            className="text-lg mb-8 text-slate-200 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Contact us to discuss your specific compliance needs and discover how Quintin can help you achieve pharmaceutical excellence.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              to="/contact"
              className="bg-white text-slate-800 hover:bg-slate-100 px-8 py-3 rounded-md font-medium inline-block transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
            >
              Schedule a Consultation
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;
