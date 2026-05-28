import culture1 from "../assets/culture1.png";
import culture2 from "../assets/culture2.png";
import culture3 from "../assets/culture3.png";
import culture4 from "../assets/culture4.png";
import career1 from "../assets/career1.png";
import {Link} from "react-router-dom";

export default function Careers() {
  return (
    <div className="w-full">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Text & CTA */}
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Join the Future <br/> of Digital Innovation
            </h1>
            <p className="text-gray-500 text-xl max-w-xl mb-10">
              We're a collective of makers, thinkers, and explorers building the next generation of digital experiences. Your talent belongs here.
            </p>
            <button className="bg-linear-to-r from-brandPurple to-orange-400 text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition inline-block text-center mt-auto">
              View Open Roles
            </button>
          </div>

          {/* Right Column: Image */}
          <div className="w-full flex justify-center">
            {/* Image Wrapper */}
            <div className="w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-sm">
              <img 
                src={career1} 
                alt="Career at VIS" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

        </div>
      </section>

      {/* WHY WORK WITH US / BENEFITS */}
      <section className="bg-gray-50 py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Benefits</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Comprehensive support designed to empower your career and enhance your life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-pink-50 text-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 text-xl">♥</div>
              <h3 className="font-bold mb-3">Premium Healthcare</h3>
              <p className="text-sm text-gray-500">Full medical, dental, and vision coverage for you and your family.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 text-xl">📚</div>
              <h3 className="font-bold mb-3">Learning & Growth</h3>
              <p className="text-sm text-gray-500">Annual stipends for courses, books, and conferences so that you level up.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 text-xl">🌍</div>
              <h3 className="font-bold mb-3">Flexible & Remote</h3>
              <p className="text-sm text-gray-500">Work from where you're most productive with our Remote First approach.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
              <div className="w-12 h-12 bg-orange-50 text-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 text-xl">🧘</div>
              <h3 className="font-bold mb-3">Wellness Program</h3>
              <p className="text-sm text-gray-500">Monthly fitness stipends and mental health support to keep you balanced.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: LIFE AT VIS (Image Grid) */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Life at VIS</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            A glimpse into our world, our people, and our playground.
          </p>
        </div>

        {/* Asymmetrical Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-auto md:h-[600px]">
          
          {/* Left Side: Culture 1 (Takes up full height of the left column) */}
          <div className="rounded-3xl overflow-hidden h-[300px] md:h-full">
            <img src={culture1} alt="Life at VIS" className="w-full h-full object-cover" />
          </div>
          
          {/* Right Side: Container for the other 3 images */}
          <div className="flex flex-col gap-4 h-[600px] md:h-full">
            
            {/* Right Top: Splits the top half into two columns for Culture 2 & 3 */}
            <div className="grid grid-cols-2 gap-4 h-1/2">
              <div className="rounded-3xl overflow-hidden">
                <img src={culture2} alt="Team Culture" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-3xl overflow-hidden">
                <img src={culture3} alt="Workspace" className="w-full h-full object-cover" />
              </div>
            </div>
            
            {/* Right Bottom: Culture 4 takes up the entire bottom half */}
            <div className="rounded-3xl overflow-hidden h-1/2">
              <img src={culture4} alt="Company Event" className="w-full h-full object-cover" />
            </div>
            
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR CULTURE (Feature Cards) */}
      <section className="bg-gray-50 py-24 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Culture</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We don't just build products, we build teams where everyone has the room to breathe, grow, and lead.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              {/* Icon Container */}
              <div className="w-14 h-14 bg-purple-100 text-brandPurple rounded-2xl flex items-center justify-center text-2xl mb-6">
                🌍
              </div>
              <h4 className="font-bold text-2xl mb-3">Remote First</h4>
              <p className="text-gray-500 leading-relaxed">
                Work from anywhere. We value outcomes over office hours, giving you the freedom to design your ideal workspace.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              {/* Icon Container */}
              <div className="w-14 h-14 bg-orange-100 text-orange-500 rounded-2xl flex items-center justify-center text-2xl mb-6">
                💡
              </div>
              <h4 className="font-bold text-2xl mb-3">Innovation-Led</h4>
              <p className="text-gray-500 leading-relaxed">
                Spend 10% of your time exploring new technologies and unconventional digital solutions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition">
              {/* Icon Container */}
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center text-2xl mb-6">
                🌱
              </div>
              <h4 className="font-bold text-2xl mb-3">Continuous Growth</h4>
              <p className="text-gray-500 leading-relaxed">
                Annual learning stipends, weekly mentorship sessions, and a clear path to leadership. We grow when you grow.
              </p>
            </div>

          </div>
        </div>
      </section>

     {/* OPEN POSITIONS */}
      <section className="bg-gray-50 py-24 border-y border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-brandPurple font-bold text-sm tracking-widest uppercase mb-2">Career Opportunities</p>
              <h2 className="text-4xl font-bold text-gray-900">Open Positions</h2>
            </div>
            
            {/* Filter Tabs - Updated for light theme */}
            <div className="hidden md:flex gap-4">
              <span className="text-brandPurple border-b-2 border-brandPurple pb-1 font-medium cursor-pointer">All Roles</span>
              <span className="text-gray-500 hover:text-brandPurple transition pb-1 font-medium cursor-pointer">Design</span>
              <span className="text-gray-500 hover:text-brandPurple transition pb-1 font-medium cursor-pointer">Engineering</span>
            </div>
          </div>

          <div className="space-y-4">
            
            {/* Job 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:shadow-md hover:border-purple-200 transition duration-300 group cursor-pointer">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-brandPurple transition">Senior Product Designer</h3>
                <div className="flex gap-3 text-sm text-gray-500 font-medium">
                  <span className="flex items-center gap-1">📍 London</span>
                  <span className="flex items-center gap-1">⏱ Full-Time</span>
                </div>
              </div>
              <button className="mt-4 sm:mt-0 bg-gradient-to-r from-brandPurple to-orange-400 text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition shadow-sm">
                Apply Now
              </button>
            </div>

            {/* Job 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:shadow-md hover:border-purple-200 transition duration-300 group cursor-pointer">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-brandPurple transition">Full Stack Engineer (React/Node)</h3>
                <div className="flex gap-3 text-sm text-gray-500 font-medium">
                  <span className="flex items-center gap-1">📍 Singapore / Remote</span>
                  <span className="flex items-center gap-1">⏱ Full-Time</span>
                </div>
              </div>
              <button className="mt-4 sm:mt-0 bg-gradient-to-r from-brandPurple to-orange-400 text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition shadow-sm">
                Apply Now
              </button>
            </div>

            {/* Job 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between hover:shadow-md hover:border-purple-200 transition duration-300 group cursor-pointer">
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-brandPurple transition">Digital Strategist</h3>
                <div className="flex gap-3 text-sm text-gray-500 font-medium">
                  <span className="flex items-center gap-1">📍 Remote</span>
                  <span className="flex items-center gap-1">⏱ Full-Time</span>
                </div>
              </div>
              <button className="mt-4 sm:mt-0 bg-gradient-to-r from-brandPurple to-orange-400 text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition shadow-sm">
                Apply Now
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* Open Application CTA SECTION */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center bg-linear-to-r from-brandPurple to-orange-400 rounded-3xl shadow-xl my-16">
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Don't see a fit?
        </h2>
        
        <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          We're always looking for exceptional talent. Send us an open application and tell us how you can help VIS shape the future.
        </p>
        
        {/* Flex container for side-by-side buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          
          {/* Let's Build Together - White background, Purple text, Curved Rectangle (rounded-xl) */}
          <Link 
            to="/contact"
            className="bg-white text-brandPurple px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition shadow-lg hover:shadow-xl inline-block"
          >
            Send Open Application
          </Link>
          
          
        </div>
      </section>

    </div>
  );
}