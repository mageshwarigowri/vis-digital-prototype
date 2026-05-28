import lumina from "../assets/img7.png"
import zenith from "../assets/img9.png"
import nova from "../assets/img10.png"
import echo from "../assets/img11.png"

export default function Portfolio() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Crafted Excellence.</h2>
        <p className="text-gray-500">Selected works that define our standard of digital artistry.</p>
      </div>
{/* Change the main container to a 12-column grid on large screens */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
  
  {/* Lumina - Takes up 8 out of 12 columns (Wide) */}
  <div className="lg:col-span-8">
    <div className="bg-slate-900 rounded-[2rem] h-[400px] mb-4 overflow-hidden">
      <img src={lumina} alt="Lumina" className="w-full h-full object-cover" />
    </div>
    <div className="flex justify-between items-center mb-1">
      <p className="text-xs text-brandPurple font-bold tracking-widest uppercase">Product Design</p>
      <span className="text-sm text-gray-400 font-medium">2024</span>
    </div>
    <h3 className="text-2xl font-bold text-gray-800">Lumina Fintech Platform</h3>
  </div>

  {/* Zenith - Takes up 4 out of 12 columns (Narrow) */}
  <div className="lg:col-span-4">
    <div className="bg-slate-800 rounded-[2rem] h-[400px] mb-4 overflow-hidden">
      <img src={zenith} alt="Zenith" className="w-full h-full object-cover" />
    </div>
    <p className="text-xs text-orange-500 font-bold tracking-widest uppercase mb-1">Mobile Development</p>
    <h3 className="text-2xl font-bold text-gray-800">Zenith Health App</h3>
  </div>

  {/* ---- NEXT ROW ---- */}
  {/* If you want to keep the asymmetrical style for Nova and Echo, 
      you can flip the column spans so the narrow one is on the left! */}

  {/* Nova - Takes up 4 columns (Narrow) */}
  <div className="lg:col-span-4">
    <div className="bg-gray-100 border border-gray-200 rounded-[2rem] h-[400px] mb-4 overflow-hidden">
      <img src={nova} alt="Nova" className="w-full h-full object-cover" />
    </div>
    <p className="text-xs text-blue-500 font-bold tracking-widest uppercase mb-1">E-Commerce</p>
    <h3 className="text-2xl font-bold text-gray-800">Nova Minimalist Store</h3>
  </div>

  {/* Echo - Takes up 8 columns (Wide) */}
  <div className="lg:col-span-8">
    <div className="bg-emerald-800 rounded-[2rem] h-[400px] mb-4 overflow-hidden">
      <img src={echo} alt="Echo" className="w-full h-full object-cover" />
    </div>
    <p className="text-xs text-emerald-500 font-bold tracking-widest uppercase mb-1">Branding</p>
    <h3 className="text-2xl font-bold text-gray-800">Echo Branding System</h3>
  </div>

</div>
    </section>
  );
}