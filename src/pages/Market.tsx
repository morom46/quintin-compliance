
import HeroSection from "@/components/HeroSection";
import StatCard from "@/components/StatCard";

const Market = () => {
  return (
    <div>
      <HeroSection 
        title="Market Opportunity & Financial Insights"
        subtitle="Exploring the booming pharmaceutical sector in India and our strategic approach"
      />
      
      {/* Market Opportunity */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
            A Booming Pharmaceutical Sector in India
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="relative">
              <img 
                src="/lovable-uploads/bce44cbd-e5a1-4e6b-be11-a57b9cb07aa9.png" 
                alt="India pharmaceutical market map" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            
            <div className="lg:col-span-2">
              <div className="grid gap-8">
                <StatCard 
                  icon={<span className="text-slate-700 font-bold">⭐</span>}
                  title="Market Size"
                  value="$65 Billion USD"
                  description="India's pharmaceutical market is projected to reach this valuation by 2024 (Source: IBEF)."
                />
                
                <StatCard 
                  icon={<span className="text-slate-700 font-bold">📈</span>}
                  title="Growth Drivers"
                  value="Multiple Factors"
                  description="The market is fueled by increasing domestic demand, rising healthcare expenditure, and government initiatives promoting local manufacturing."
                />
                
                <StatCard 
                  icon={<span className="text-slate-700 font-bold">💰</span>}
                  title="Inspection Services Market"
                  value="INR 500-700 Crores"
                  description="The estimated annual market size for pharmaceutical inspection services in India, growing at a 15% CAGR."
                />
              </div>
              
              <div className="mt-8 bg-slate-50 p-6 rounded-lg">
                <p className="text-slate-700">
                  Quintin Compliance is poised to capitalize on this untapped potential by serving small and medium-sized 
                  enterprises (SMEs) that often lack in-house compliance expertise. By providing specialized services tailored 
                  to their needs, Quintin can establish a strong market presence and drive sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Profitability & Revenue Model */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
            Profitability and Revenue Model
          </h2>
          
          <div className="mb-12 bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-slate-700">Revenue Streams</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-slate-700">1</div>
                <h4 className="text-xl font-semibold mb-3 text-slate-700">Inspection Fees</h4>
                <p className="text-slate-600">Per batch/product basis</p>
              </div>
              
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-slate-700">2</div>
                <h4 className="text-xl font-semibold mb-3 text-slate-700">Consulting Fees</h4>
                <p className="text-slate-600">Project-based/retainer agreements</p>
              </div>
              
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="bg-slate-100 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-xl font-bold text-slate-700">3</div>
                <h4 className="text-xl font-semibold mb-3 text-slate-700">Training Fees</h4>
                <p className="text-slate-600">Per participant charges</p>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-slate-700">
                Quintin Compliance will implement competitive pricing based on service complexity and client requirements. 
                Projected gross profit margins are estimated to be 40-50%, aligning with industry benchmarks for similar 
                service companies. The revenue model is designed to ensure sustainable growth and profitability over the 
                next 3-5 years, driven by increasing demand for compliance services.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-slate-700">Profit Margins by Service</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-slate-100 w-12 h-12 rounded-md mr-4"></div>
                  <h4 className="text-lg font-medium text-slate-700">Inspection service</h4>
                </div>
                <p className="text-xl font-semibold text-slate-800 mb-2">35-40%</p>
                <p className="text-sm text-slate-500">Average profit margin</p>
              </div>
              
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-slate-100 w-12 h-12 rounded-md mr-4"></div>
                  <h4 className="text-lg font-medium text-slate-700">GMP Audit consulting</h4>
                </div>
                <p className="text-xl font-semibold text-slate-800 mb-2">40-45%</p>
                <p className="text-sm text-slate-500">Average profit margin</p>
              </div>
              
              <div className="border border-slate-200 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-slate-100 w-12 h-12 rounded-md mr-4"></div>
                  <h4 className="text-lg font-medium text-slate-700">Training programs</h4>
                </div>
                <p className="text-xl font-semibold text-slate-800 mb-2">25-30%</p>
                <p className="text-sm text-slate-500">Profit margin</p>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-slate-700">
                The high growth potential of the Indian pharmaceutical sector, combined with these healthy profit margins, 
                positions Quintin labs for sustained success and attractive returns on investment.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Financial Projections & ROI */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
            Financial Projections & Return on Investment
          </h2>
          
          <div className="bg-slate-50 p-8 rounded-lg mb-12">
            <p className="text-slate-700 mb-8">
              The table summarizes key financial projections, including revenue, expenses, EBITDA, and ROI. By Year 3, we
              project an EBITDA of INR 4 Crore (approximately $480,000 USD), with a conservative ROI of 3x - 5x over a 5-
              year period. This ROI is supported by the increasing demand for inspection and compliance services in the
              pharmaceutical industry, coupled with Quintin Compliance's strategic market positioning.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-4">
                  <div className="bg-slate-100 w-16 h-16 flex items-center justify-center rounded-md mr-4 text-xl font-bold text-slate-700">1</div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-700">Projected EBITDA</h4>
                    <p className="text-slate-600 mt-1">Year 3: INR 4 Crore</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex mb-4">
                  <div className="bg-slate-100 w-16 h-16 flex items-center justify-center rounded-md mr-4 text-xl font-bold text-slate-700">2</div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-700">ROI (5-Year)</h4>
                    <p className="text-slate-600 mt-1">3x - 5x</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <p className="text-slate-700">
                Our exit strategy includes potential acquisition by a larger consulting firm or strategic investor, 
                further enhancing the attractiveness of this investment opportunity.
              </p>
            </div>
          </div>
          
          {/* Startup Funding Requirements */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-700">Startup Funding Requirements</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-2xl font-bold mb-3 text-slate-800">20 Lakhs</h4>
                <h5 className="text-lg font-medium mb-3 text-slate-700">Office & Equipment</h5>
                <p className="text-slate-600">
                  Initial setup for office space, Company Registration, QMS System and essential equipment
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-2xl font-bold mb-3 text-slate-800">50 Lakhs</h4>
                <h5 className="text-lg font-medium mb-3 text-slate-700">Lab Setup</h5>
                <p className="text-slate-600">
                  Equipping the laboratory with necessary instruments
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-2xl font-bold mb-3 text-slate-800">60 Lakhs</h4>
                <h5 className="text-lg font-medium mb-3 text-slate-700">Personnel</h5>
                <p className="text-slate-600">
                  Salaries for the team for the first operating year
                </p>
              </div>
            </div>
            
            <div className="bg-slate-50 p-6 rounded-lg">
              <p className="text-slate-700">
                The total initial funding required to launch Quintin Compliance is INR 1.3-1.5 Crores. This investment
                will cover essential startup costs, including office space, laboratory equipment, personnel salaries,
                marketing initiatives, regulatory approvals, and a contingency fund. These funds are crucial for
                establishing a strong foundation and ensuring quality in service delivery.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Strategic Partnerships */}
      <section className="py-16 px-4 bg-slate-50 bg-opacity-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">
            Strategic Partnerships
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-slate-700">Manufacturers</h3>
              <p className="text-slate-600">
                Collaborating with pharmaceutical manufacturers to integrate inspection services into their production processes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-slate-700">Research Institutions</h3>
              <p className="text-slate-600">
                Partnering with leading pharmaceutical research institutes for access to cutting-edge testing methodologies.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-slate-700">Industry Associations</h3>
              <p className="text-slate-600">
                Building a network of qualified auditors and inspectors across India through industry alliances.
              </p>
            </div>
          </div>
          
          <div className="mt-8">
            <p className="text-slate-700 text-center max-w-4xl mx-auto">
              Strategic partnerships are essential for expanding Quintin's reach and enhancing service offerings. By collaborating with pharmaceutical
              manufacturers, research institutions, and industry associations, Quintin can build a robust network and deliver comprehensive compliance solutions
              to a wider audience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Market;
