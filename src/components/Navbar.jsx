import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  // We can use the current path to highlight the active menu item
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto gap-8">
      <Link to="/" className="font-bold text-2xl text-brandPurple tracking-tighter whitespace-nowrap">VIS</Link>
      
      <div className="hidden lg:flex md:flex space-x-6 text-sm font-medium">
        <Link 
          to="/" 
          className={currentPath === '/' ? "text-brandPurple border-b-2 border-brandPurple" : "hover:text-brandPurple"}
        >
          Home
        </Link>
        <Link 
          to="/portfolio" 
          className={currentPath === '/portfolio' ? "text-brandPurple border-b-2 border-brandPurple" : "hover:text-brandPurple"}
        >
          Portfolio
        </Link>
   
        <Link to="/services" className={currentPath === '/services' ? "text-brandPurple border-b-2 border-brandPurple whitespace-nowrap" : "hover:text-brandPurple whitespace-nowrap"}>
          Services
        </Link>
        <Link to="/ready-solutions" className={currentPath === '/ready-solutions' ? "text-brandPurple border-b-2 border-brandPurple whitespace-nowrap" : "hover:text-brandPurple whitespace-nowrap"}>
          Ready Solutions
        </Link>
        <Link to="/blog" className={currentPath === '/blog' ? "text-brandPurple border-b-2 border-brandPurple whitespace-nowrap" : "hover:text-brandPurple whitespace-nowrap"}>
          Blog
        </Link>
        <Link to="/about" className={currentPath === '/about' ? "text-brandPurple border-b-2 border-brandPurple whitespace-nowrap" : "hover:text-brandPurple whitespace-nowrap"}>
          About
        </Link>
        <Link to="/careers" className={currentPath === '/careers' ? "text-brandPurple border-b-2 border-brandPurple whitespace-nowrap" : "hover:text-brandPurple whitespace-nowrap"}>
          Careers
        </Link>
        <Link to="/contact" className={currentPath === '/contact' ? "text-brandPurple border-b-2 border-brandPurple whitespace-nowrap" : "hover:text-brandPurple whitespace-nowrap"}>
          Contact
        </Link>
      </div>
      
      <Link 
  to="/get-estimate" 
  className="bg-linear-to-r from-orange-400 to-brandPurple text-white px-5 py-2 rounded-full text-sm font-medium hover:opacity-90 transition whitespace-nowrap"
>
  Get Estimate
</Link>
    </nav>
  );
}



