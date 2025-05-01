
import { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  description: string;
}

const StatCard = ({ icon, title, value, description }: StatCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-slate-100">
      <div className="flex items-center mb-4">
        <div className="bg-slate-100 w-10 h-10 rounded-md flex items-center justify-center mr-3">
          {icon}
        </div>
        <h3 className="text-lg font-medium text-slate-700">{title}</h3>
      </div>
      <p className="text-2xl font-bold text-slate-800 mb-2">{value}</p>
      <p className="text-sm text-slate-500">{description}</p>
    </div>
  );
};

export default StatCard;
