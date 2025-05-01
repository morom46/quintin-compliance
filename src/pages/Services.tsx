
import HeroSection from "@/components/HeroSection";
import { Check } from "lucide-react";

const Services = () => {
  return (
    <div>
      <HeroSection 
        title="Our Comprehensive Service Portfolio"
        subtitle="Specialized solutions designed to ensure compliance and quality across all aspects of pharmaceutical manufacturing"
      />
      
      {/* Main Services */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8 border border-slate-100">
              <div className="mb-6">
                <span className="bg-slate-100 p-3 rounded-md inline-block">
                  <span className="text-slate-700 font-bold text-2xl">📦</span>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Product Inspections</h3>
              <p className="text-slate-600 mb-6">
                We inspect raw materials, in-process goods, and finished products, focusing on API integrity and purity. 
                Our statistical sampling plans are based on ISO 2859-1, ensuring accurate and reliable results.
              </p>
              
              <h4 className="font-semibold text-lg mb-3 text-slate-700">Our inspection services include:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-slate-600">Raw material quality verification</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-slate-600">In-process controls and monitoring</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-slate-600">Finished product conformity assessments</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-slate-600">API integrity and purity testing</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-slate-600">Statistical quality control based on ISO standards</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8 border border-slate-100">
              <div className="mb-6">
                <span className="bg-slate-100 p-3 rounded-md inline-block">
                  <span className="text-slate-700 font-bold text-2xl">📋</span>
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-800">GMP Audit Consulting</h3>
              <p className="text-slate-600 mb-6">
                Our gap analysis, remediation plans, and mock audits prepare facilities for regulatory 
                inspections, including FDA, EMA, WHO, & GMP.
              </p>
              
              <h4 className="font-semibold text-lg mb-3 text-slate-700">Our consulting services include:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-slate-600">Comprehensive GMP gap analysis</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-slate-600">Detailed remediation planning</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-slate-600">Mock regulatory audits (FDA, EMA, WHO)</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-slate-600">Quality system implementation guidance</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                  <span className="text-slate-600">Regulatory compliance strategies</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-md p-8 border border-slate-100">
            <div className="mb-6">
              <span className="bg-slate-100 p-3 rounded-md inline-block">
                <span className="text-slate-700 font-bold text-2xl">👥</span>
              </span>
            </div>
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
                    <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-600">GMP fundamentals and advanced practices</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-600">Data integrity principles and implementation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-600">Quality control methodologies</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-3 text-slate-700">Program benefits:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-600">Industry-recognized certification</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-600">Customized to your organization's needs</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-slate-600">Ongoing support and refresher courses</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
            Why Choose Quintin Compliance?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-slate-100 w-12 h-12 rounded-md flex items-center justify-center mb-4 text-xl font-bold text-slate-700">1</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Qualified Professionals</h3>
              <p className="text-slate-600">Highly experienced team with relevant pharmaceutical certifications.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-slate-100 w-12 h-12 rounded-md flex items-center justify-center mb-4 text-xl font-bold text-slate-700">2</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Advanced Technologies</h3>
              <p className="text-slate-600">Utilizing best laboratory equipment for inspections.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-slate-100 w-12 h-12 rounded-md flex items-center justify-center mb-4 text-xl font-bold text-slate-700">3</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Proprietary Data Analytics</h3>
              <p className="text-slate-600">Identifying compliance risks through advanced analytics.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="bg-slate-100 w-12 h-12 rounded-md flex items-center justify-center mb-4 text-xl font-bold text-slate-700">4</div>
              <h3 className="text-xl font-semibold mb-3 text-slate-700">Long-Term Relationships</h3>
              <p className="text-slate-600">Focus on building lasting client partnerships.</p>
            </div>
          </div>
          
          <div className="mt-12">
            <p className="text-slate-600 text-center max-w-4xl mx-auto">
              Quintin Compliance differentiates itself from competitors through a combination of expertise and
              technology. Our highly qualified professionals, advanced inspection technologies, and proprietary
              data analytics platform provide a competitive edge, enabling us to deliver superior service and build
              long-term client relationships.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
