import { Link } from 'react-router-dom';
import dashboardImg from '../assets/Dashboard Snippet.png';

export default function Hero() {
  return (
    <header className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Transforming <br /> Ideas into <br /> 
          <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-brandPurple">Digital Reality</span>
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md">
          We design and build premium digital experiences for forward-thinking brands. Boutique quality at a global scale.
        </p>
        <div className="flex space-x-4">
          <Link to="/services" className="bg-linear-to-r from-orange-400 to-brandPurple text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition inline-block text-center">
            Get Started
            </Link>
          <Link to="/portfolio" className="px-8 py-3 rounded-full font-medium flex items-center hover:bg-gray-100 transition text-gray-800">
            View Portfolio →
          </Link>
        </div>
      </div>
      
      {/* Updated Image Container */}
      <div className="flex-1 relative w-full flex justify-center items-center">
        
        {/* Actual Image Tag instead of background-image */}
        <img 
          src={dashboardImg} 
          alt="Dashboard Preview" 
          className="w-full h-auto rounded-3xl shadow-sm object-contain"
        />

        {/* Floating Badges */}
        <div className="absolute top-1/4 right-4 md:-right-4 lg:right-10 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 z-10">
          <span className="text-orange-500 font-bold">98%</span> Client satisfaction
        </div>
        <div className="absolute bottom-1/4 left-4 md:-left-4 lg:left-10 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 z-10">
          <span className="bg-purple-100 text-brandPurple p-2 rounded-full text-xs">⚡</span> Fast Delivery
        </div>
      </div>
    </header>
  );
}