import { useState } from 'react';

export default function GetEstimate() {
  // 1. Set up state for form fields
  const initialFormState = {
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    details: ''
  };
  
  const [formData, setFormData] = useState(initialFormState);
  const [showSuccess, setShowSuccess] = useState(false);

  // 2. Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 3. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show success message
    setShowSuccess(true);
    
    // Clear the form fields
    setFormData(initialFormState);
    
    // Optional: Hide success message after 5 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="w-full bg-gray-50 min-h-screen pb-24">
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-20 lg:pt-24 pb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Let's Build Something<br/>Extraordinary.
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl leading-relaxed">
          Tell us about your vision. Our team of digital artisans will craft a tailored strategy to bring your project to life.
        </p>
      </section>

      {/* FORM & INFO SECTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* LEFT: Form (Takes up 2 columns) */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 relative">
            
            {/* Success Message Overlay */}
            {showSuccess && (
              <div className="absolute inset-0 bg-white/95 rounded-3xl flex flex-col items-center justify-center z-10 p-8 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center text-3xl mb-4">✓</div>
                <h3 className="text-2xl font-bold mb-2">Request Received!</h3>
                <p className="text-gray-500">Thank you for reaching out. One of our lead strategists will review your project and contact you within 24 hours.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Name *</label>
                  <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-brandPurple focus:bg-white transition" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address *</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-brandPurple focus:bg-white transition" placeholder="jane@company.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-brandPurple focus:bg-white transition" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Project Type *</label>
                  <select required name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-brandPurple focus:bg-white transition appearance-none">
                    <option value="" disabled>Select a project type...</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile App">Mobile App Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Branding">Branding & Identity</option>
                    <option value="Digital Strategy">Digital Strategy</option>
                    <option value="Ready Solution">Ready Solution / Enterprise</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Budget Range *</label>
                  <select required name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-brandPurple focus:bg-white transition appearance-none">
                    <option value="" disabled>Select a budget range...</option>
                    <option value="$10k - $25k">$10k - $25k</option>
                    <option value="$25k - $50k">$25k - $50k</option>
                    <option value="$50k - $100k">$50k - $100k</option>
                    <option value="$100k+">$100k+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Timeline *</label>
                  <select required name="timeline" value={formData.timeline} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-brandPurple focus:bg-white transition appearance-none">
                    <option value="" disabled>Select a timeline...</option>
                    <option value="1-2 Months">1-2 Months (Rush)</option>
                    <option value="3-4 Months">3-4 Months (Standard)</option>
                    <option value="5-6 Months">5-6 Months</option>
                    <option value="6+ Months">6+ Months / Ongoing</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Tell us about your project</label>
                <textarea name="details" value={formData.details} onChange={handleChange} rows="5" className="w-full bg-gray-50 border border-gray-200 px-4 py-3 rounded-lg focus:outline-none focus:border-brandPurple focus:bg-white transition resize-none" placeholder="Share your goals, challenges, and vision here..."></textarea>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <button type="submit" className="bg-brandPurple text-white px-8 py-4 rounded-full font-bold hover:bg-purple-700 transition w-full sm:w-auto text-center">
                  Submit Estimate Request
                </button>
                <p className="text-xs text-gray-400 font-medium">🔒 Your data is securely processed and never shared.</p>
              </div>

            </form>
          </div>

          {/* RIGHT: Info Columns (Takes up 1 column) */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <div className="w-12 h-12 bg-purple-100 text-brandPurple rounded-xl flex items-center justify-center mb-4 text-xl">⚡</div>
              <h3 className="text-xl font-bold mb-2">Rapid Kickoff</h3>
              <p className="text-gray-500">Most estimate requests are reviewed and responded to within 24 hours.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-blue-100 text-blue-500 rounded-xl flex items-center justify-center mb-4 text-xl">🧠</div>
              <h3 className="text-xl font-bold mb-2">Expert Review</h3>
              <p className="text-gray-500">Your project is analyzed by our lead strategists, not just a sales rep.</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center mb-4 text-xl">🎯</div>
              <h3 className="text-xl font-bold mb-2">Tailored Strategy</h3>
              <p className="text-gray-500">Receive a custom roadmap and preliminary architecture for your vision.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}