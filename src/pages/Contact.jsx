import { useState } from 'react';
import contactHero from "../assets/contactHero.png"; 
import background from "../assets/Background.png"; 

export default function Contact() {
  // 1. State for Form Submission
  const [formStatus, setFormStatus] = useState('idle'); // 'idle' | 'success'

  // 2. State for FAQ Accordions
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('success');
    
    // Reset form after 4 seconds
    setTimeout(() => {
      setFormStatus('idle');
      e.target.reset(); // Clears the inputs
    }, 4000);
  };

  // FAQ Data Array
  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Most of our web and mobile projects take between 8 to 16 weeks from kickoff to launch, depending on the complexity of the features and design requirements."
    },
    {
      question: "Do you offer post-launch support?",
      answer: "Yes! We offer customized retainer packages for ongoing maintenance, feature updates, and performance monitoring."
    },
    {
      question: "How do you handle project pricing?",
      answer: "We prefer fixed-bid pricing based on a detailed scope of work. For exploratory or ongoing work, we offer flexible Time & Materials (T&M) contracts."
    },
    {
      question: "Can you work with our existing brand?",
      answer: "Absolutely. Our design team is highly skilled at adapting to and evolving existing brand guidelines to ensure consistency across all new digital touchpoints."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "Our core stack includes React, Node.js, and Python. We also build native mobile apps using Swift and Kotlin, and cross-platform apps with React Native."
    }
  ];

  return (
    <div className="w-full pb-24">
      
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-24">
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Let's Build the <span className="bg-gradient-to-r from-brandPurple to-orange-400 bg-clip-text text-transparent">Luminous</span> Future.
        </h1>
        <p className="text-gray-500 text-xl max-w-2xl">
          Whether you have a fully-formed idea or just a spark of inspiration, we're here to curate your digital presence into a masterpiece.
        </p>
      </section>

      {/* ROW 1: Info & Image */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* SECTION 1: Contact Info */}
          <div className="flex flex-col justify-center">
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {/* Studio Info */}
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                  <span className="text-brandPurple text-xl">📍</span> Our Studios
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  88 Luminous Drive, <br/>
                  Creative Quarter<br/>
                  San Francisco, CA 94103<br/>
                  United States
                </p>
              </div>
              
              {/* Connect Info */}
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                  <span className="text-brandPurple text-xl">✉️</span> Direct Connect
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <a href="mailto:hello@vis-digital.com" className="hover:text-brandPurple transition block mb-1">hello@vis-digital.com</a>
                  <a href="tel:+15552345678" className="hover:text-brandPurple transition block">+1 (555) 234-5678</a>
                </p>
              </div>
            </div>

            {/* Global Network */}
            <div>
              <h3 className="font-bold text-lg mb-4 flex items-center gap-2 border-b border-gray-200 pb-2">
                <span className="text-brandPurple text-xl">🌐</span> Global Network
              </h3>
              <p className="text-gray-600 mb-6">We also have satellite offices in these major hubs:</p>
              
              <div className="flex gap-6">
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-purple-50 text-brandPurple rounded-full flex items-center justify-center text-xl mb-2 group-hover:bg-brandPurple group-hover:text-white transition">🇬🇧</div>
                  <span className="text-xs font-bold text-gray-500">London</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-purple-50 text-brandPurple rounded-full flex items-center justify-center text-xl mb-2 group-hover:bg-brandPurple group-hover:text-white transition">🇸🇬</div>
                  <span className="text-xs font-bold text-gray-500">Singapore</span>
                </div>
                <div className="flex flex-col items-center group cursor-pointer">
                  <div className="w-12 h-12 bg-purple-50 text-brandPurple rounded-full flex items-center justify-center text-xl mb-2 group-hover:bg-brandPurple group-hover:text-white transition">🇦🇪</div>
                  <span className="text-xs font-bold text-gray-500">Dubai</span>
                </div>
              </div>
            </div>

          </div>

          {/* SECTION 2: Layered Image Display */}
          <div className="relative h-[400px] lg:h-full min-h-[400px] rounded-3xl overflow-hidden flex items-center justify-center group">
            {/* Background Layer: Stretched and grayed out */}
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale opacity-30 transform group-hover:scale-105 transition duration-700"
              style={{ backgroundImage: `url(${contactHero})` }}
            ></div>
            
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-gray-900/10"></div>
            
            {/* Foreground Layer: Original size image */}
            <img 
              src={background} 
              alt="VIS Studio" 
              className="relative z-10 max-w-[80%] h-auto shadow-2xl rounded-2xl border-4 border-white/50"
            />
          </div>

        </div>
      </section>

      {/* ROW 2: Form & FAQ */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* SECTION 3: Contact Form */}
          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 relative overflow-hidden">
            
            {/* Success Overlay */}
            {formStatus === 'success' && (
              <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center z-20 text-center px-8 animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-3xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2">Inquiry Sent!</h3>
                <p className="text-gray-500">Thank you for reaching out. A member of our team will get back to you shortly.</p>
              </div>
            )}

            <h3 className="text-2xl font-bold mb-8 relative z-10">Send us a message</h3>
            <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">First Name *</label>
                  <input required type="text" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-brandPurple transition" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Last Name *</label>
                  <input required type="text" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-brandPurple transition" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                <input required type="email" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-brandPurple transition" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Project Details *</label>
                <textarea required rows="5" className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-brandPurple resize-none transition" placeholder="Tell us about your goals, timeline, and vision..."></textarea>
              </div>
              <button type="submit" className="w-full bg-brandDark text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition text-lg">
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* SECTION 4: FAQ Accordion */}
          <div className="flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-2">Common Questions</h3>
            <p className="text-gray-500 mb-8">Quick answers to help you navigate our collaborative process.</p>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                
                return (
                  <div 
                    key={index} 
                    onClick={() => toggleFaq(index)}
                    className={`border rounded-xl cursor-pointer transition-all duration-300 overflow-hidden ${
                      isOpen ? 'border-brandPurple bg-purple-50/30' : 'border-gray-200 hover:border-brandPurple/50'
                    }`}
                  >
                    {/* Question Header */}
                    <div className="p-5 flex justify-between items-center group">
                      <span className={`font-medium ${isOpen ? 'text-brandPurple font-bold' : 'text-gray-800 group-hover:text-brandPurple'}`}>
                        {faq.question}
                      </span>
                      <span className={`text-xl transition-transform duration-300 ${isOpen ? 'rotate-45 text-brandPurple' : 'text-gray-400 group-hover:text-brandPurple'}`}>
                        +
                      </span>
                    </div>
                    
                    {/* Answer Dropdown */}
                    <div 
                      className={`px-5 text-gray-600 transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      {faq.answer}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}