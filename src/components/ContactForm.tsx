
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="bg-white rounded-lg shadow-md p-6 md:p-8 h-full transition-all duration-300 hover:shadow-lg"
    >
      <h3 className="text-2xl font-bold mb-6 text-slate-800">Contact Us</h3>
      
      <div className="space-y-5">
        <div className="transition-transform duration-300 hover:translate-x-1">
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
            Name
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full transition-all duration-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
            required
          />
        </div>
        
        <div className="transition-transform duration-300 hover:translate-x-1">
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
            Email
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full transition-all duration-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
            required
          />
        </div>
        
        <div className="transition-transform duration-300 hover:translate-x-1">
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">
            Company
          </label>
          <Input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full transition-all duration-200 focus:border-slate-500 focus:ring-1 focus:ring-slate-500"
          />
        </div>
        
        <div className="transition-transform duration-300 hover:translate-x-1">
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-slate-300 rounded-md transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-slate-500 focus:border-slate-500 resize-none"
            required
          />
        </div>
      </div>
      
      <Button
        type="submit"
        className="w-full mt-6 bg-slate-700 hover:bg-slate-800 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-md"
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
