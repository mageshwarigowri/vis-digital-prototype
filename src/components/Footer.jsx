import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="font-bold text-2xl text-brandPurple tracking-tighter mb-4">VIS</div>
          <p className="text-gray-500 text-sm">Crafting high-end digital solutions for modern enterprises. We merge art with technology.</p>
          <div className="flex space-x-4 mt-6 text-gray-400">
             <span>In</span> <span>Tw</span> <span>Fb</span>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-4">Agency</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link to="/" className="hover:text-brandPurple">Home</Link></li>
            <li><Link to="/portfolio" className="hover:text-brandPurple">Portfolio</Link></li>
            <li><Link to="/services" className="hover:text-brandPurple">Services</Link></li>
            <li><Link to="/ready-solutions" className="hover:text-brandPurple">Ready Solutions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li><Link to="/blog" className="hover:text-brandPurple">Blog</Link></li>
            <li><Link to="/about" className="hover:text-brandPurple">About</Link></li>
            <li><Link to="/careers" className="hover:text-brandPurple">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-brandPurple">Contact</Link></li>
            <li><Link to="/privacy-policy" className="hover:text-brandPurple">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Newsletter</h4>
          <p className="text-sm text-gray-500 mb-4">Enter your email for the latest updates.</p>
          <div className="flex">
            <input type="email" placeholder="Email address" className="bg-gray-50 border border-gray-200 px-4 py-2 rounded-l-lg w-full focus:outline-none focus:border-brandPurple text-sm" />
            <button className="bg-brandPurple text-white px-4 py-2 rounded-r-lg">→</button>
          </div>
        </div>
      </div>
    </footer>
  );
}