import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services'; 
import ReadySolutions from './pages/ReadySolutions'; 
import Blog from './pages/Blog'; 
import About from './pages/About'; 
import Careers from './pages/Careers'; 
import Contact from './pages/Contact'; 
import PrivacyPolicy from './pages/PrivacyPolicy';
import GetEstimate from './pages/GetEstimate';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <div className="min-h-screen text-gray-800 flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} /> 
            <Route path="/ready-solutions" element={<ReadySolutions />} /> 
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/careers" element={<Careers />} /> 
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/get-estimate" element={<GetEstimate />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;