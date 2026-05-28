import { Link } from "react-router-dom";
import about1 from "../assets/about1.png";
import elena from "../assets/elena.png";
import marcus from "../assets/marcus.png";
import sarah from "../assets/sarah.png";
import david from "../assets/david.png";

export default function About() {
  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <p className="text-brandPurple font-bold text-sm tracking-widest uppercase mb-4">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Crafting the Future <br/> of Digital <br/> Innovation
          </h1>
          <p className="text-gray-800 text-lg font-medium mb-4 max-w-lg">
            At VIS, we don't just build products; we architect digital legacies.
          </p>
          <p className="text-gray-500 text-lg mb-8 max-w-lg">
            Our boutique approach blends cutting-edge engineering with high-end aesthetic precision to deliver experiences that resonate.
          </p>
        </div>
        
        {/* Office/Team Image Placeholder */}
        <div className="flex-1 w-full h-[400px] lg:h-[500px] flex items-center justify-center">
  <img 
    src={about1} 
    alt="About VIS" 
    className="w-full h-full object-contain" 
  />
</div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-gray-50 py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brandPurple text-white flex items-center justify-center text-sm">✦</span>
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To empower visionaries by translating complex technological challenges into seamless, human-centric digital solutions that define new industry standards.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-brandDark text-white flex items-center justify-center text-sm">👁</span>
              Our Vision
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              To be the global benchmark for boutique digital craftsmanship, where art and code converge to solve the world's most meaningful problems.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The Minds Behind VIS</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A curated collective of designers, engineers, and strategists obsessed with excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="group text-center">
            <div className="bg-gray-200 rounded-3xl h-72 mb-6 mx-auto overflow-hidden flex items-center justify-center">
              <span className="text-gray-400 font-bold text-sm uppercase"><img src={elena}/></span>
            </div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-brandPurple transition">Elena Vance</h3>
            <p className="text-sm text-gray-500 mb-3">Founder & Design Lead</p>
            <div className="flex justify-center gap-3 text-gray-400">
              <span className="hover:text-brandDark cursor-pointer">In</span>
              <span className="hover:text-brandDark cursor-pointer">X</span>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="group text-center">
            <div className="bg-gray-200 rounded-3xl h-72 mb-6 mx-auto overflow-hidden flex items-center justify-center">
              <span className="text-gray-400 font-bold text-sm uppercase"><img src={marcus}/></span>
            </div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-brandPurple transition">Marcus Chen</h3>
            <p className="text-sm text-gray-500 mb-3">CTO & Solution Architect</p>
            <div className="flex justify-center gap-3 text-gray-400">
              <span className="hover:text-brandDark cursor-pointer">In</span>
              <span className="hover:text-brandDark cursor-pointer">X</span>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="group text-center">
            <div className="bg-gray-200 rounded-3xl h-72 mb-6 mx-auto overflow-hidden flex items-center justify-center">
              <span className="text-gray-400 font-bold text-sm uppercase"><img src={sarah}/></span>
            </div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-brandPurple transition">Sarah Jenkins</h3>
            <p className="text-sm text-gray-500 mb-3">Head of Innovation</p>
            <div className="flex justify-center gap-3 text-gray-400">
              <span className="hover:text-brandDark cursor-pointer">In</span>
              <span className="hover:text-brandDark cursor-pointer">X</span>
            </div>
          </div>

          {/* Team Member 4 */}
          <div className="group text-center">
            <div className="bg-gray-200 rounded-3xl h-72 mb-6 mx-auto overflow-hidden flex items-center justify-center">
              <span className="text-gray-400 font-bold text-sm uppercase"><img src={david}/></span>
            </div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-brandPurple transition">David Ross</h3>
            <p className="text-sm text-gray-500 mb-3">Strategic Partnership</p>
            <div className="flex justify-center gap-3 text-gray-400">
              <span className="hover:text-brandDark cursor-pointer">In</span>
              <span className="hover:text-brandDark cursor-pointer">X</span>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY / TIMELINE */}
      <section className="bg-[#EFECE8] text-gray-800 py-24">
        <div className="max-w-4xl mx-auto px-6 relative">
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-24 text-center text-gray-900">
            Our Journey
          </h2>
          
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-32 bottom-0 w-1 bg-gradient-to-b from-brandPurple to-orange-400 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-24 relative">
            
            {/* Milestone 1 (Left Side) */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <div className="md:w-5/12 text-center md:text-right mb-6 md:mb-0 md:pr-10">
                <p className="text-brandPurple font-bold tracking-widest mb-1">2018</p>
                <h3 className="text-3xl font-bold mb-3 text-gray-900">Founded</h3>
                <p className="text-gray-600">
                  VIS was born in a small garage studio with a mission to change digital aesthetics.
                </p>
              </div>
              
              {/* Timeline Node */}
              <div className="md:w-2/12 flex justify-center z-10 relative">
                {/* White border effect ring */}
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                  {/* Gradient inner circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brandPurple to-orange-400 flex items-center justify-center text-white text-lg">
                    ☆
                  </div>
                </div>
              </div>
              
              <div className="md:w-5/12 hidden md:block"></div>
            </div>

            {/* Milestone 2 (Right Side) */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <div className="md:w-5/12 hidden md:block"></div>
              
              {/* Timeline Node */}
              <div className="md:w-2/12 flex justify-center z-10 relative">
                {/* White border effect ring */}
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                  {/* Gradient inner circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brandPurple to-orange-400 flex items-center justify-center text-white text-lg">
                    ⚡
                  </div>
                </div>
              </div>

              <div className="md:w-5/12 text-center md:text-left mt-6 md:mt-0 md:pl-10">
                <p className="text-orange-500 font-bold tracking-widest mb-1">2020</p>
                <h3 className="text-3xl font-bold mb-3 text-gray-900">First 50 Projects</h3>
                <p className="text-gray-600">
                  Reached our 50th project milestone, delivering excellence for Fortune 500 startups.
                </p>
              </div>
            </div>

            {/* Milestone 3 (Left Side) */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full">
              <div className="md:w-5/12 text-center md:text-right mb-6 md:mb-0 md:pr-10">
                <p className="text-red-500 font-bold tracking-widest mb-1">2022</p>
                <h3 className="text-3xl font-bold mb-3 text-gray-900">Global Expansion</h3>
                <p className="text-gray-600">
                  Opened offices in London and Singapore to serve our international client base.
                </p>
              </div>
              
              {/* Timeline Node */}
              <div className="md:w-2/12 flex justify-center z-10 relative">
                {/* White border effect ring */}
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                  {/* Gradient inner circle */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brandPurple to-orange-400 flex items-center justify-center text-white text-lg">
                    🌍
                  </div>
                </div>
              </div>
              
              <div className="md:w-5/12 hidden md:block"></div>
            </div>

          </div>
        </div>
      </section>

     {/* CTA SECTION */}
      {/* Added gradient background, rounded corners, and shadow to make it a beautiful card */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center bg-gradient-to-r from-brandPurple to-orange-400 rounded-3xl shadow-xl my-16">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Build the future?
        </h2>
        
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Let's collaborate to create something that stands out in the digital noise.
        </p>
        
        {/* Flex container for side-by-side buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          
          {/* Let's Build Together - White background, Purple text, Curved Rectangle (rounded-xl) */}
          <Link 
            to="/contact"
            className="bg-white text-brandPurple px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition shadow-lg hover:shadow-xl inline-block"
          >
            Let's Build Together
          </Link>
          
          {/* View Our Work - Mild Orange background, White text, Curved Rectangle */}
          <Link 
            to="/portfolio"
            className="bg-orange-400 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-500 transition shadow-lg hover:shadow-xl inline-block"
          >
            View Our Work
          </Link>
          
        </div>
      </section>

    </div>
  );
}