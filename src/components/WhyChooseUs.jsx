import teamcollab from '../assets/teamcollab.png';
export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <div className="bg-brandDark text-white rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 leading-tight">Why partners choose VIS over the competition.</h2>
          <p className="text-gray-400 mb-10">We aren't just an agency; we are your technical co-founders. We focus on outcome-driven design and clean, maintainable code.</p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-brandPurple bg-clip-text text-transparent mb-1 inline-block">50+</div>
              <div className="text-xs text-gray-400 tracking-widest uppercase">Projects Launched</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-brandPurple bg-clip-text text-transparent mb-1 inline-block">20+</div>
              <div className="text-xs text-gray-400 tracking-widest uppercase">Clients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-brandPurple bg-clip-text text-transparent mb-1 inline-block">12k</div>
              <div className="text-xs text-gray-400 tracking-widest uppercase">Hours Crafted</div>
            </div>
            <div>
              <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-brandPurple bg-clip-text text-transparent mb-1 inline-block">100%</div>
              <div className="text-xs text-gray-400 tracking-widest uppercase">Commitment</div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-800 rounded-2xl h-80 w-full flex items-center justify-center border border-gray-700">
          <span className="text-gray-500"><img src={teamcollab} /></span>
        </div>
      </div>
    </section>
  );
}