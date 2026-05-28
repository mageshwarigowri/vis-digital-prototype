import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import ceo from "../assets/ceo.jpg";


export default function Blog() {
  return (
    <div className="w-full">
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:pt-24 lg:pb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-brandPurple font-bold text-sm tracking-widest uppercase mb-4">
            <span className="text-xl leading-none">+</span> Luminous Journal
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Insights & Innovation
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
            Exploring the intersection of high-end design, future-proof engineering, and creative strategy for the modern digital era.
          </p>
        </div>
      </section>

      {/* RECENT ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold mb-8">Recent Articles</h2>
        
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Featured Article (Left Side - 7 Columns) */}
          <div className="lg:col-span-7 group cursor-pointer flex flex-col">
            <div className="bg-gray-900 rounded-3xl h-[400px] mb-8 flex items-center justify-center overflow-hidden relative shadow-sm group-hover:shadow-lg transition duration-300">
               <span className="text-gray-600 font-bold tracking-widest uppercase z-10 group-hover:scale-105 transition duration-500"><img src={blog1}/></span>
            </div>
            
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-bold text-brandPurple bg-purple-50 border border-purple-100 px-3 py-1 rounded-full tracking-wider uppercase">
                AI & Design
              </span>
            </div>
            
            <h3 className="text-4xl font-bold mb-4 group-hover:text-brandPurple transition">
              How Generative AI is Redefining the Creative Workflow in 2024
            </h3>
            
            <p className="text-gray-500 text-lg mb-8 flex-grow">
              Discover the tools and methodologies our agency uses to augment human creativity with machine intelligence, delivering faster yet more soulful digital experiences.
            </p>
            
            <div className="flex items-center justify-between border-t border-gray-200 pt-6 mt-auto">
              <span className="font-bold text-gray-800">Elena Vance</span>
              <span className="font-bold text-brandDark group-hover:text-brandPurple transition">Read More →</span>
            </div>
          </div>

          {/* Side Articles (Right Side - 5 Columns) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Side Article 1 */}
            <div className="group cursor-pointer grid grid-cols-3 gap-6 items-center">
              <div className="col-span-1 bg-blue-50 rounded-2xl h-32 flex items-center justify-center overflow-hidden border border-blue-100">
                <span className="text-[10px] text-blue-300 font-bold uppercase tracking-wider text-center px-2 group-hover:scale-110 transition duration-500"><img src={blog2}/></span>
              </div>
              <div className="col-span-2">
                <p className="text-xs font-bold text-brandPurple tracking-widest uppercase mb-2">Web Dev</p>
                <h4 className="text-xl font-bold mb-2 group-hover:text-brandPurple transition leading-tight">Performance-First Architectures</h4>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">Building for speed without compromising aesthetic integrity. Why hydration matters in the modern web stack.</p>
                <span className="text-sm font-bold text-gray-800">Read Full Story →</span>
              </div>
            </div>

            {/* Side Article 2 */}
            <div className="group cursor-pointer grid grid-cols-3 gap-6 items-center">
              <div className="col-span-1 bg-orange-50 rounded-2xl h-32 flex items-center justify-center overflow-hidden border border-orange-100">
                <span className="text-[10px] text-orange-300 font-bold uppercase tracking-wider text-center px-2 group-hover:scale-110 transition duration-500"><img src={blog3}/></span>
              </div>
              <div className="col-span-2">
                <p className="text-xs font-bold text-brandPurple tracking-widest uppercase mb-2">Design Strategy</p>
                <h4 className="text-xl font-bold mb-2 group-hover:text-brandPurple transition leading-tight">Beyond Minimalism: The Return of Detail</h4>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">Exploring the shift from flat design towards layered, texture-rich interfaces that demand emotional engagement.</p>
                <span className="text-sm font-bold text-gray-800">Read Full Story →</span>
              </div>
            </div>

            {/* Side Article 3 */}
            <div className="group cursor-pointer grid grid-cols-3 gap-6 items-center">
              <div className="col-span-1 bg-emerald-50 rounded-2xl h-32 flex items-center justify-center overflow-hidden border border-emerald-100">
                <span className="text-[10px] text-emerald-300 font-bold uppercase tracking-wider text-center px-2 group-hover:scale-110 transition duration-500"><img src={blog4}/></span>
              </div>
              <div className="col-span-2">
                <p className="text-xs font-bold text-brandPurple tracking-widest uppercase mb-2">Business</p>
                <h4 className="text-xl font-bold mb-2 group-hover:text-brandPurple transition leading-tight">The ROI of User Delight</h4>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">Quantifying the impact of micro-interactions and brand personality on long-term user retention and conversion rates.</p>
                <span className="text-sm font-bold text-gray-800">Read Full Story →</span>
              </div>
            </div>

          </div>
        </div>

        {/* Load More Button */}
        <div className="mt-16 flex justify-center">
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-bold hover:border-brandDark hover:text-brandDark transition">
            Load More Articles
          </button>
        </div>
      </section>

      {/* NEWSLETTER SECTION ("Stay Luminous") */}
      <section className="bg-brandDark text-white py-24 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Luminous</h2>
          <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join over 5,000+ creators and innovators. Get curated insights on design and digital strategy delivered straight to your inbox once a month.
          </p>
          
          <form className="flex flex-col sm:flex-row max-w-lg mx-auto gap-3">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              className="flex-grow bg-gray-800 border border-gray-700 text-white px-6 py-4 rounded-full focus:outline-none focus:border-brandPurple focus:ring-1 focus:ring-brandPurple placeholder-gray-500"
              required
            />
            <button 
              type="submit" 
              className="bg-brandPurple text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700 transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}