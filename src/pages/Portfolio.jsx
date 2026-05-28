import { Link } from "react-router-dom";
import Portfolio1 from "../assets/portfolio (1).png";
import Portfolio2 from "../assets/portfolio (2).png";
import Portfolio3 from "../assets/portfolio (3).png";
import Portfolio4 from "../assets/portfolio (4).png";
import Portfolio5 from "../assets/portfolio (5).png";
import Portfolio6 from "../assets/portfolio (6).png";

export default function Portfolio() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      
      {/* Header Section */}
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Selected Works
        </h1>
        <p className="text-gray-600 text-xl max-w-2xl">
          A curation of digital experiences that blend atmospheric depth with boutique precision.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-4 mb-12 border-b border-gray-200 pb-4">
        <button className="px-4 py-2 bg-brandDark text-white rounded-full text-sm font-medium">All</button>
        <button className="px-4 py-2 text-gray-500 hover:text-brandPurple text-sm font-medium transition">Web</button>
        <button className="px-4 py-2 text-gray-500 hover:text-brandPurple text-sm font-medium transition">Mobile</button>
        <button className="px-4 py-2 text-gray-500 hover:text-brandPurple text-sm font-medium transition">UI/UX</button>
        <button className="px-4 py-2 text-gray-500 hover:text-brandPurple text-sm font-medium transition">Branding</button>
      </div>

      {/* Portfolio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24">
        
        {/* Project Card 1 (Wide - 8 Columns) */}
        <div className="group cursor-pointer lg:col-span-8">
          <div className="bg-slate-900 rounded-3xl h-[400px] mb-6 overflow-hidden relative">
             {/* Overlay */}
             <div className="absolute inset-0 bg-blue-900/20 mix-blend-overlay z-10"></div>
             {/* Image */}
             <img src={Portfolio5} alt="Portfolio 5" className="w-full h-full object-cover group-hover:scale-110 transition duration-500 relative z-0" />
          </div>
        </div>

        {/* Project Card 2 (Vertical/Narrow - 4 Columns) */}
        <div className="group cursor-pointer lg:col-span-4">
          <div className="bg-orange-50 rounded-3xl h-[400px] mb-6 overflow-hidden border border-orange-100">
            <img src={Portfolio6} alt="Portfolio 6" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          </div>
        </div>

        {/* Project Card 3 (Vertical/Narrow - 4 Columns) */}
        {/* Placed first on this row so it sits on the left */}
        <div className="group cursor-pointer lg:col-span-4">
          <div className="bg-purple-900 rounded-3xl h-[400px] mb-6 overflow-hidden">
            <img src={Portfolio1} alt="Portfolio 1" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          </div>
        </div>

        {/* Project Card 4 (Wide - 8 Columns) */}
        <div className="group cursor-pointer lg:col-span-8">
          <div className="bg-gray-100 rounded-3xl h-[400px] mb-6 overflow-hidden border border-gray-200">
            <img src={Portfolio2} alt="Portfolio 2" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          </div>
        </div>

        {/* Project Card 5 (Wide - 8 Columns) */}
        <div className="group cursor-pointer lg:col-span-8">
          <div className="bg-gray-100 rounded-3xl h-[400px] mb-6 overflow-hidden border border-gray-200">
            <img src={Portfolio3} alt="Portfolio 3" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          </div>
        </div>

        {/* Project Card 6 (Narrow - 4 Columns) */}
        <div className="group cursor-pointer lg:col-span-4">
          <div className="bg-gray-100 rounded-3xl h-[400px] mb-6 overflow-hidden border border-gray-200">
            <img src={Portfolio4} alt="Portfolio 4" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
          </div>
        </div>

      </div>

      {/* Mini CTA */}
      <div className="bg-gray-50 rounded-3xl p-12 text-center flex flex-col items-center justify-center border border-gray-100">
        <h2 className="text-3xl font-bold mb-6">Let's Build Your<br/>Next Story.</h2>
        
        {/* Flex container to hold the two buttons side-by-side */}
        <div className="flex flex-col sm:flex-row gap-4">
          
          {/* Gradient Start Project Button */}
          <Link 
            to="/get-estimate" 
            className="bg-gradient-to-r from-orange-400 to-brandPurple text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition"
          >
            Start a Project
          </Link>
          
          {/* Simple Services Button */}
          <Link 
            to="/services" 
            className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:text-brandPurple hover:border-brandPurple transition"
          >
            Our Services
          </Link>
          
        </div>
      </div>

    </div>
  );
}