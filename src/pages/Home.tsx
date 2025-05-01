
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection 
        title="Introducing Quintin Compliance: Your Partner in Pharmaceutical Excellence"
        subtitle="We address the critical need for adherence to stringent regulations through comprehensive third-party inspection, auditing, and consulting services."
        ctaText="Discover Our Services"
        ctaLink="/services"
      />
      
      {/* About Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-slate-600 mb-8">
              Quintin Compliance is dedicated to ensuring quality and validating trust in the pharmaceutical industry. 
              Our mission is to safeguard public health by upholding the highest standards of pharmaceutical manufacturing and distribution.
            </p>
            
            <p className="text-lg text-slate-600 mb-8">
              In an era where pharmaceutical quality is paramount, Quintin Compliance emerges as a trusted ally. 
              We provide unbiased assessments and expert guidance, empowering pharmaceutical companies to navigate the complex 
              regulatory landscape and maintain unwavering compliance. Our services are designed to minimize risks, prevent costly recalls, 
              and protect brand reputation.
            </p>
            
            <p className="text-lg text-slate-600 mb-8">
              With Quintin Compliance, you gain a partner committed to your success. We go beyond mere inspection, 
              offering proactive solutions and continuous support to ensure your operations meet and exceed global quality standards.
            </p>
          </div>
        </div>
      </section>
      
      {/* Why Third-Party Inspection Matters */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
            The Compliance Imperative: Why Third-Party Inspection Matters
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-700">Regulatory Landscape</h3>
              <p className="text-slate-600 mb-5">
                The pharmaceutical industry operates under increasingly stringent Good Manufacturing Practice (GMP) 
                regulations set by agencies like the FDA, EMA, and WHO. These standards are designed to ensure product safety, 
                efficacy, and consistency.
              </p>
              <p className="text-slate-600">
                Non-compliance can lead to product recalls, reputational damage, and severe legal penalties. For example, 
                a company may face multi-million dollar fines due to GMP violations. Quintin Compliance helps mitigate these 
                risks through unbiased inspection and expert consulting.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-700">Impact of Non-Compliance</h3>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start">
                  <span className="mr-2 text-slate-800 font-bold">•</span>
                  <span>Product Recalls</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-slate-800 font-bold">•</span>
                  <span>Reputational Damage</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-slate-800 font-bold">•</span>
                  <span>Legal Penalties</span>
                </li>
              </ul>
              <p className="mt-4 text-slate-600">
                Quintin plays a crucial role in mitigating these risks through unbiased inspection and expert consulting, 
                ensuring that companies adhere to the latest regulatory requirements and maintain the highest standards of quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-slate-800">Our Services</h2>
          <p className="text-xl text-slate-600 mb-12 text-center max-w-3xl mx-auto">
            Comprehensive Solutions for Pharmaceutical Compliance
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<span className="text-slate-700 font-bold text-2xl">📦</span>}
              title="Product Inspections"
              description="We inspect raw materials, in-process goods, and finished products, focusing on API integrity and purity. Our statistical sampling plans are based on ISO 2859-1, ensuring accurate and reliable results."
            />
            <ServiceCard 
              icon={<span className="text-slate-700 font-bold text-2xl">📋</span>}
              title="GMP Audit Consulting"
              description="Our gap analysis, remediation plans, and mock audits prepare facilities for regulatory inspections, including FDA, EMA, WHO, & GMP."
            />
            <ServiceCard 
              icon={<span className="text-slate-700 font-bold text-2xl">👥</span>}
              title="Compliance Training"
              description="We offer customized training programs for personnel at all levels, covering GMP, data integrity, and quality control. Our certification programs align with industry best practices."
            />
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center text-slate-700 hover:text-slate-900 font-medium"
            >
              View our complete service portfolio
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Market Opportunity */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
            Market Opportunity: A Booming Pharmaceutical Sector in India
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/lovable-uploads/bce44cbd-e5a1-4e6b-be11-a57b9cb07aa9.png" 
                alt="India pharmaceutical market map" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <div className="grid gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="bg-slate-100 w-10 h-10 rounded-md flex items-center justify-center mr-3">
                      <span className="text-slate-700 font-bold">⭐</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-700">$65 Billion USD</h3>
                  </div>
                  <p className="text-slate-600">
                    India's pharmaceutical market is projected to reach this valuation by 2024 (Source: IBEF).
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="bg-slate-100 w-10 h-10 rounded-md flex items-center justify-center mr-3">
                      <span className="text-slate-700 font-bold">📈</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-700">Growth Drivers</h3>
                  </div>
                  <p className="text-slate-600">
                    The market is fueled by increasing domestic demand, rising healthcare expenditure, and government initiatives promoting local manufacturing.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <div className="bg-slate-100 w-10 h-10 rounded-md flex items-center justify-center mr-3">
                      <span className="text-slate-700 font-bold">💰</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-700">INR 500-700 Crores</h3>
                  </div>
                  <p className="text-slate-600">
                    The estimated annual market size for pharmaceutical inspection services in India, growing at a 15% CAGR.
                  </p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-slate-100 rounded-lg">
                <p className="text-slate-700">
                  Quintin Compliance is poised to capitalize on this untapped potential by serving small and medium-sized enterprises (SMEs) 
                  that often lack in-house compliance expertise.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Link
              to="/market"
              className="bg-slate-700 text-white hover:bg-slate-800 px-6 py-3 rounded-md font-medium inline-block"
            >
              Explore Market Insights
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Partner with Quintin for Pharmaceutical Excellence</h2>
          <p className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto">
            Contact us to discuss your specific compliance needs and discover how Quintin can help you achieve pharmaceutical excellence.
          </p>
          <Link
            to="/contact"
            className="bg-white text-slate-800 hover:bg-slate-100 px-6 py-3 rounded-md font-medium inline-block"
          >
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
