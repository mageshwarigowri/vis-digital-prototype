import { Link } from "react-router-dom";
import service1 from "../assets/service1.png";

export default function Services() {
  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <p className="text-brandPurple font-bold text-sm tracking-widest uppercase mb-4">Capabilities</p> {/* [cite: 125] */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Precision Digital <br/> Engineering. {/* [cite: 126] */}
          </h1>
          <p className="text-gray-800 text-lg font-medium mb-4 max-w-lg">
            We don't just build websites; we craft high-performance digital ecosystems. {/* [cite: 127] */}
          </p>
          <p className="text-gray-500 text-lg mb-8 max-w-lg">
            Our boutique approach merges technical mastery with atmospheric design to elevate your brand's digital presence. {/*  */}
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">⚡ Fast Performance</span> {/* [cite: 129] */}
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">🎨 Custom Design</span> {/* [cite: 130] */}
            <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">📈 Scalable Infrastructure</span> {/* [cite: 131] */}
          </div>
        </div>
        
       {/* Abstract 3D Hero Graphic */}
        <div className="flex-1 w-full h-[400px] lg:h-[500px] flex items-center justify-center">
           <img 
             src={service1} 
             alt="Services Hero" 
             className="w-full h-full object-contain" 
           />
        </div>
      </section>

      {/* CORE EXPERTISE SECTION */}
      <section className="bg-gray-50 py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Our Core Expertise {/* [cite: 132] */}</h2>
              <p className="text-gray-500 text-lg">
                Strategic solutions tailored to your unique business challenges, delivered with creative flair and technical precision. {/* [cite: 133] */}
              </p>
            </div>
            {/* Carousel Arrows Placeholder */}
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white transition">←</button> {/* [cite: 134] */}
              <button className="w-12 h-12 rounded-full bg-brandDark text-white flex items-center justify-center hover:bg-gray-800 transition">→</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4">Web<br/>Development</h3> {/* [cite: 135, 136] */}
              <p className="text-gray-500 text-sm mb-6 flex-grow">
                Next-generation web applications built for speed, accessibility, and search engine dominance. {/* [cite: 137] */}
              </p>
              <ul className="text-sm text-gray-700 font-medium space-y-2 mb-8">
                <li>• Headless Architectures</li> {/* [cite: 138] */}
                <li>• E-commerce Engines</li> {/* [cite: 139] */}
                <li>• Progressive Web Apps</li> {/* [cite: 139] */}
              </ul>
              <a href="#" className="text-brandPurple font-bold hover:underline mt-auto">Explore Service →</a> {/* [cite: 140] */}
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4">App<br/>Development</h3> {/* [cite: 141] */}
              <p className="text-gray-500 text-sm mb-6 flex-grow">
                Native and cross-platform mobile experiences that users love to touch and interact with every day. {/* [cite: 142] */}
              </p>
              <ul className="text-sm text-gray-700 font-medium space-y-2 mb-8">
                <li>• iOS & Android Native</li> {/* [cite: 143] */}
                <li>• React Native Experts</li> {/* [cite: 143] */}
                <li>• Backend Integration</li> {/* [cite: 143] */}
              </ul>
              <a href="#" className="text-brandPurple font-bold hover:underline mt-auto">Explore Service →</a> {/* [cite: 144] */}
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4">UI/UX<br/>Design</h3> {/* [cite: 145] */}
              <p className="text-gray-500 text-sm mb-6 flex-grow">
                User-centric design systems that balance aesthetic brilliance with seamless functional clarity. {/* [cite: 146] */}
              </p>
              <ul className="text-sm text-gray-700 font-medium space-y-2 mb-8">
                <li>• Prototyping & Wireframing</li> {/* [cite: 147] */}
                <li>• Visual Brand Identity</li> {/* [cite: 147] */}
                <li>• Usability Auditing</li> {/* [cite: 147] */}
              </ul>
              <a href="#" className="text-brandPurple font-bold hover:underline mt-auto">Explore Service →</a> {/* [cite: 148] */}
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition flex flex-col h-full">
              <h3 className="text-2xl font-bold mb-4">Digital<br/>Marketing</h3> {/* [cite: 149] */}
              <p className="text-gray-500 text-sm mb-6 flex-grow">
                Data-driven growth strategies that convert passive observers into loyal brand advocates. {/* [cite: 150] */}
              </p>
              <ul className="text-sm text-gray-700 font-medium space-y-2 mb-8">
                <li>• SEO Optimization</li> {/* [cite: 151] */}
                <li>• Paid Media Strategy</li> {/* [cite: 152] */}
                <li>• Content Lifecycle</li> {/* [cite: 153] */}
              </ul>
              <a href="#" className="text-brandPurple font-bold hover:underline mt-auto">Explore Service →</a> {/* [cite: 154] */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-brandPurple to-orange-400 rounded-3xl p-12 md:p-20 text-center flex flex-col items-center">
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to launch your project?
          </h2>
          
          {/* Updated text color for better contrast on a gradient */}
          <p className="text-white/90 text-lg mb-10 max-w-2xl">
            Our team is standing by to help you translate your vision into a market-leading digital product.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/get-estimate" 
              className="bg-gradient-to-r from-orange-400 to-brandPurple text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition shadow-lg border border-white/20"
            >
              Get Started
            </Link>
            
            {/* Updated Ghost Button */}
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white hover:text-brandPurple transition bg-transparent"
            >
              Schedule Call
            </Link>
          </div>
          
        </div>
      </section>

    </div>
  );
}