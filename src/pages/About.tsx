import HeroSection from "@/components/HeroSection";
import { Shield, Award, Users, Briefcase } from "lucide-react";

const About = () => {
  return (
    <div>
      <HeroSection 
        title="About Quintin Compliance"
        subtitle="Dedicated to excellence in pharmaceutical compliance"
      />
      
      {/* Our Mission */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                At Quintin Compliance, our mission is to safeguard public health by upholding the highest standards of pharmaceutical 
                manufacturing and distribution through comprehensive third-party inspection, auditing, and consulting services.
              </p>
              <p className="text-lg text-slate-600">
                We are dedicated to ensuring quality and validating trust in the pharmaceutical industry, addressing the critical 
                need for adherence to stringent regulations that protect consumers and maintain the integrity of pharmaceutical products.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Our Core Values</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mb-4 flex justify-center">
                <Shield className="h-12 w-12 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Integrity</h3>
              <p className="text-slate-600">
                We provide unbiased assessments and maintain strict ethical standards in all our operations.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mb-4 flex justify-center">
                <Award className="h-12 w-12 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Excellence</h3>
              <p className="text-slate-600">
                We are committed to delivering superior quality services that exceed industry standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mb-4 flex justify-center">
                <Users className="h-12 w-12 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Collaboration</h3>
              <p className="text-slate-600">
                We work closely with our clients, forming partnerships built on trust and mutual respect.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mb-4 flex justify-center">
                <Briefcase className="h-12 w-12 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Innovation</h3>
              <p className="text-slate-600">
                We continuously improve our methods and embrace technological advancements in our field.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-1 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-800">Our Approach</h2>
              <p className="text-lg text-slate-600 mb-6">
                Quintin Compliance goes beyond mere inspection, offering proactive solutions and continuous 
                support to ensure your operations meet and exceed global quality standards. We provide unbiased 
                assessments and expert guidance, empowering pharmaceutical companies to navigate the complex 
                regulatory landscape.
              </p>
              <p className="text-lg text-slate-600">
                Our services are designed to minimize risks, prevent costly recalls, and protect brand reputation. 
                With Quintin Compliance, you gain a partner committed to your success, consistently working to 
                improve your compliance posture and operational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Reach and Inspection Readiness */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Global Reach & Inspection Readiness</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Whether you're preparing for your first inspection or managing complex operations across global sites, 
            Quintin Compliance is equipped to support you. We are dedicated to keeping your quality standards sharp 
            and ensuring your operations remain compliant, no matter the scale or location.
          </p>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Our Expert Team</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8 border border-slate-100">
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Leadership Team</h3>
              <p className="text-slate-600 mb-4">
                Our leadership team brings together decades of experience in pharmaceutical compliance, 
                quality assurance, and regulatory affairs. With backgrounds in top pharmaceutical companies 
                and regulatory agencies, they provide strategic direction and ensure we deliver outstanding service.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border border-slate-100">
              <h3 className="text-2xl font-bold mb-2 text-slate-800">Technical Experts</h3>
              <p className="text-slate-600 mb-4">
                Our technical team consists of qualified professionals with specialized expertise in GMP, 
                quality control, laboratory operations, and data integrity. Each member holds relevant 
                certifications and undergoes continuous training to stay updated with evolving industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-700 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Partner with Us for Pharmaceutical Excellence</h2>
          <p className="text-xl mb-8 text-slate-200 max-w-3xl mx-auto">
            Join Quintin Compliance in our mission to uphold the highest standards in pharmaceutical quality and compliance.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/contact" 
              className="bg-white text-slate-800 hover:bg-slate-100 px-6 py-3 rounded-md font-medium inline-block"
            >
              Schedule a Consultation
            </a>
            <a 
              href="/services" 
              className="border border-white text-white hover:bg-white hover:text-slate-800 px-6 py-3 rounded-md font-medium inline-block transition-colors"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
