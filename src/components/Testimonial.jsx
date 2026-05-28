import ceo from "../assets/ceo.jpg"


export default function Testimonial() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-24 text-center">
      <p className="text-brandPurple font-bold text-sm tracking-widest uppercase mb-12 border-b inline-block border-gray-300 pb-2">What Our Clients Say</p>
      <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
        <span className="text-gray-300 text-6xl font-serif block mb-4">"</span>
        <p className="text-2xl font-medium text-gray-800 mb-8 leading-relaxed">
          "VIS transformed our legacy system into a high-converting digital masterpiece. Their attention to detail and technical prowess is unmatched in the industry."
        </p>
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-300 mb-3 [clip-path:polygon(30%_0%,70%_0%,100%_30%,100%_70%,70%_100%,30%_100%,0%_70%,0%_30%)]">
                <img src={ceo} alt="CEO" className="w-full h-full object-cover" />
          </div>
          <h4 className="font-bold">Marcus Sterling</h4>
          <p className="text-sm text-gray-500">CEO, Tarmous Systems</p>
        </div>
      </div>
    </section>
  );
}