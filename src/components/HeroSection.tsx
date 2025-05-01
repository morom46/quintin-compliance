
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) => {
  return (
    <div className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{title}</h1>
        <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-3xl mx-auto">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Link 
            to={ctaLink} 
            className="bg-white text-slate-800 hover:bg-slate-100 px-6 py-3 rounded-md font-medium inline-block"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
