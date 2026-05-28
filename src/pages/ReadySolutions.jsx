import { useState } from "react";
import { Link } from "react-router-dom";
import readysolutions1 from "../assets/readysolutions (1).png";
import readysolutions2 from "../assets/readysolutions (2).png";
import readysolutions3 from "../assets/readysolutions (3).png";
import readysolutions4 from "../assets/readysolutions (4).png";

// 1. Organize all solutions into a clean array of objects
const solutionsData = [
  {
    id: 1,
    title: "Billing Software",
    image: readysolutions1,
    imageBg: "bg-slate-100",
    description: "Automate complex revenue cycles with our enterprise-grade billing engine. Supports recurring subscriptions, multi-currency, and global tax compliance.",
    tags: ["Auto-Invoicing", "Revenue Recovery", "API First"]
  },
  {
    id: 2,
    title: "Inventory System",
    image: readysolutions2,
    imageBg: "bg-teal-50 border border-teal-100",
    description: "Real-time visibility into your supply chain. Intelligent stock forecasting, multi-warehouse management, and barcode Integration.",
    tags: ["Smart Forecasting", "RFID Support", "Batch Tracking"]
  },
  {
    id: 3,
    title: "IoT Systems",
    image: readysolutions3,
    imageBg: "bg-blue-900",
    description: "Connect the physical world to your digital infrastructure. High-frequency data ingestion, predictive maintenance, and device orchestration.",
    tags: ["Digital Twin", "Low Latency", "Edge Computing"]
  },
  {
    id: 4,
    title: "Voice Billing System",
    image: readysolutions4,
    imageBg: "bg-gray-900",
    description: "A next-gen voice-activated checkout and billing experience. Integrated AI speech recognition for hands-free industrial and retail operations.",
    tags: ["NLP Processing", "Voice Identity", "Omnichannel"]
  }
];

export default function ReadySolutions() {
  // 2. State to hold the current search text
  const [searchQuery, setSearchQuery] = useState("");

  // 3. Filter the solutions array based on the search query
  const filteredSolutions = solutionsData.filter((solution) =>
    solution.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-brandPurple font-bold text-sm tracking-widest uppercase mb-4">
            Pre-Built Excellence
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Ready Solutions for<br/>Modern Enterprise.
          </h1>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl leading-relaxed">
            Skip the development cycle with our battle-tested, highly customizable software ecosystems. Designed for scale, security, and seamless integration.
          </p>
          
          {/* Search Bar */}
          <div className="flex max-w-md">
            <input 
              type="text" 
              placeholder="Search solutions..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Updates state as user types
              className="w-full border border-gray-300 px-6 py-3 rounded-l-full focus:outline-none focus:border-brandPurple"
            />
            <button className="bg-brandDark text-white px-8 py-3 rounded-r-full font-bold hover:bg-gray-800 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* 4. Dynamically map through the filtered solutions */}
          {filteredSolutions.length > 0 ? (
            filteredSolutions.map((solution) => (
              <div key={solution.id} className="group border border-gray-100 rounded-3xl p-6 bg-white shadow-sm hover:shadow-lg transition duration-300 flex flex-col h-full">
                <div className={`${solution.imageBg} rounded-2xl h-64 mb-8 flex items-center justify-center overflow-hidden relative`}>
                  <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-3xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-500 mb-6 flex-grow">{solution.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {solution.tags.map((tag, index) => (
                    <span key={index} className="text-xs font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to="/contact" 
                  className="bg-linear-to-r from-brandPurple to-orange-400 text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition inline-block text-center mt-auto"
                >
                  Request Demo →
                </Link>
              </div>
            ))
          ) : (
            // Fallback UI if the search query doesn't match anything
            <div className="col-span-1 md:col-span-2 text-center py-16">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No solutions found</h3>
              <p className="text-gray-500">Try adjusting your search to something like "Billing" or "IoT".</p>
            </div>
          )}

        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gray-50 py-24 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Fit?</h2>
          <p className="text-gray-500 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Our ready solutions are built to be modular. We can tailor every single component to meet your unique business logic and brand identity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-brandPurple to-orange-400 text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition inline-block text-center"
            >
              Consult Our Architects
            </Link>
            
            <Link 
              to="/get-estimate" 
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition inline-block text-center"
            >
              View Pricing Models
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}