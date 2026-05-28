export default function CTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <div className="bg-gradient-to-r from-brandPurple to-orange-400 rounded-3xl p-16 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something<br/>Amazing Together</h2>
        <p className="mb-10 text-lg opacity-90">Ready to take your digital presence to the next level? Our<br/>team is standing by to help you scale.</p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-brandPurple px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition">
            Start Your Project
          </button>
          <button className="border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white/10 transition">
            Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}