import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> 
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-2">Quintin Compliance</h2>
            <p className="mb-2 text-slate-300 text-sm">
              Your trusted partner in pharmaceutical compliance. We ensure quality and validate trust through comprehensive third-party inspection, auditing, and consulting services.
            </p>
            <p className="text-slate-300 text-sm">
              © {new Date().getFullYear()} Quintin Compliance. All rights reserved.
            </p>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link to="/" className="text-slate-300 hover:text-white">Home</Link></li>
              <li><Link to="/services" className="text-slate-300 hover:text-white">Services</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-base font-semibold mb-2">Contact Us</h3>
            <ul className="space-y-1 text-sm text-slate-300">
              <li>Email: info@quintincompliance.com</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Address: Pharmaceutical District, Mumbai, India</li>
              <li><a href="https://www.linkedin.com/company/quintin-compliance/" target="_blank" rel="noopener noreferrer" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
