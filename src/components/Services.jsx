import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="flex justify-between items-end mb-12">
        <div>
          <p className="text-brandPurple font-bold text-sm tracking-widest uppercase mb-2">Expertise</p>
          <h2 className="text-4xl font-bold max-w-md leading-tight">We build modern digital infrastructures for the web.</h2>
        </div>
        <Link to="/services" className="font-medium hover:text-brandPurple hidden md:block">
          View All Services →
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-purple-100 text-brandPurple rounded-xl flex items-center justify-center mb-6">💻</div>
          <h3 className="text-xl font-bold mb-4">Web Development</h3>
          <p className="text-gray-500 text-sm mb-6">Scalable, responsive, and blazing-fast web applications built with the latest technologies like Next.js and Tailwind.</p>
          <ul className="text-sm text-gray-500 space-y-2">
            <li>✓ React/Next.js</li>
            <li>✓ E-commerce Engines</li>
            <li>✓ Custom CMS</li>
          </ul>
        </div>
        
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center mb-6">🎨</div>
          <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
          <p className="text-gray-500 text-sm mb-6">User-centric designs that convert. We create emotional connections through thoughtful visual storytelling.</p>
          <ul className="text-sm text-gray-500 space-y-2">
            <li>✓ Design Systems</li>
            <li>✓ Rapid Prototyping</li>
            <li>✓ User Research</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition">
          <div className="w-12 h-12 bg-pink-100 text-pink-500 rounded-xl flex items-center justify-center mb-6">🚀</div>
          <h3 className="text-xl font-bold mb-4">Digital Strategy</h3>
          <p className="text-gray-500 text-sm mb-6">Data-driven roadmaps to help your business navigate the complex landscape of digital growth.</p>
          <ul className="text-sm text-gray-500 space-y-2">
            <li>✓ Product Roadmap</li>
            <li>✓ SEO Mastery</li>
            <li>✓ Conversion Optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}