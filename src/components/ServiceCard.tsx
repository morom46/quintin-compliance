import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-slate-100 hover:shadow-lg transition-shadow h-full flex flex-col">
      <div className="bg-slate-100 w-12 h-12 rounded-md flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-slate-700">{title}</h3>
      <p className="text-slate-600 flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
