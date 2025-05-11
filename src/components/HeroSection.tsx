import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}

const HeroSection = ({ title, subtitle, ctaText, ctaLink }: HeroSectionProps) => {
  return (
    <div className="bg-slate-900 text-white py-32 px-4 w-full">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 tracking-tight">{title}</h1>
        <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
        {ctaText && ctaLink && (
          <Link 
            to={ctaLink} 
            className="bg-white/90 text-slate-800 hover:bg-white px-8 py-4 font-medium inline-block transition-all duration-300"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
