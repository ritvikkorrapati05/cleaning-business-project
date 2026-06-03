import { createFileRoute, Link } from '@tanstack/react-router'
import { Shirt, Scissors, Sparkles, Star, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/prices')({
  component: Prices,
})

function Prices() {
  const priceCategories = [
    {
      title: 'Dry Cleaning',
      icon: <Shirt className="text-white" size={32} />,
      color: 'bg-blue-600',
      items: [
        { name: 'Shirts (Laundered)', price: '$5.50' },
        { name: 'Pants / Slacks', price: '$12.50' },
        { name: 'Blouse / Silk Top', price: '$14.50' },
        { name: 'Suit (2-Piece)', price: '$35.00' },
        { name: 'Evening Gowns', price: 'From $45.00' },
        { name: 'Overcoats', price: '$38.00' },
      ]
    },
    {
      title: 'Alterations',
      icon: <Scissors className="text-white" size={32} />,
      color: 'bg-slate-900',
      items: [
        { name: 'Hem Trousers', price: '$25.00' },
        { name: 'Hem Skirt/Dress', price: '$35.00' },
        { name: 'Waist Adjustment', price: '$40.00' },
        { name: 'Zipper Replacement', price: '$45.00' },
        { name: 'Sleeve Refitting', price: '$55.00' },
        { name: 'Button Hand-Sewn', price: '$10.00' },
      ]
    },
    {
      title: 'Specialty',
      icon: <Sparkles className="text-white" size={32} />,
      color: 'bg-blue-400',
      items: [
        { name: 'Wedding Gown Preserve', price: 'From $250' },
        { name: 'Leather Refinishing', price: 'From $85' },
        { name: 'Area Rugs (sq. ft.)', price: '$6.00' },
        { name: 'Silk Curtains', price: 'From $75' },
        { name: 'Down Comforter', price: '$55.00' },
      ]
    }
  ]

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-blue-600 rounded-lg group-hover:rotate-12 transition-transform">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">Heritage</span>
          </Link>
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">
            <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <Link to="/prices" className="text-blue-600">Pricing</Link>
            <Link to="/location" className="hover:text-blue-600 transition-colors">Location</Link>
            <Link to="/" hash="contact" className="px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">Book Now</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-24 pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
              <Star size={14} fill="currentColor" />
              Transparent Elite Pricing
            </div>
            <h1 className="text-6xl lg:text-[7.5rem] font-black text-slate-900 mb-8 leading-[0.85] tracking-tighter">
              The Cost of <br />
              <span className="text-blue-600 italic text-5xl lg:text-8xl underline decoration-8 underline-offset-[-10px] decoration-blue-100">Excellence.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
              We provide surgical-grade garment care with clear, upfront pricing. Quality that preserves your wardrobe for generations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {priceCategories.map((category, idx) => (
              <div key={idx} className="relative group">
                <div className="absolute -inset-4 bg-slate-100 rounded-[4rem] scale-95 group-hover:scale-100 transition-transform opacity-0 group-hover:opacity-100 duration-500"></div>
                <div className="relative bg-white rounded-[3.5rem] p-12 border border-slate-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col">
                  <div className={`w-20 h-20 ${category.color} rounded-[2rem] flex items-center justify-center mb-10 shadow-xl group-hover:rotate-6 transition-transform`}>
                    {category.icon}
                  </div>
                  <h2 className="text-4xl font-black mb-12 tracking-tighter">{category.title}</h2>
                  <div className="space-y-8 flex-grow">
                    {category.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex justify-between items-end pb-4 border-b-2 border-slate-50 group-hover:border-slate-100 transition-colors">
                        <span className="text-slate-800 font-black tracking-tight text-xl">{item.name}</span>
                        <span className="text-blue-600 font-black tracking-tighter text-2xl">{item.price}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-12 text-[10px] font-black text-slate-300 uppercase tracking-widest leading-relaxed">
                    * Base rates. Subject to fabric complexity and stain depth.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-32 p-16 lg:p-24 bg-slate-900 rounded-[4rem] text-white flex flex-col lg:row items-center justify-between gap-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2"></div>
            <div className="relative z-10 max-w-2xl">
              <h3 className="text-5xl lg:text-7xl font-black mb-6 tracking-tighter leading-none">Bespoke <br /> Inquiry?</h3>
              <p className="text-xl text-slate-400 font-medium leading-relaxed">For luxury items, wedding gowns, or volume corporate accounts, please contact our concierge directly.</p>
            </div>
            <Link to="/" hash="contact" className="relative z-10 px-16 py-6 bg-blue-600 text-white font-black text-xl rounded-2xl hover:bg-white hover:text-blue-600 transition-all shadow-2xl shadow-blue-900/50 uppercase tracking-[0.2em] shrink-0">
              Concierge Desk
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { t: 'Bulk Volume', d: 'Significant discounts for weekly commercial accounts and film production crews.' },
              { t: 'Student Elite', d: '15% reduction for local university students with valid surgical or legal ID.' },
              { t: 'Senior Heritage', d: 'Priority 24h turnaround and 10% reduction for our established community elders.' }
            ].map((benefit, i) => (
              <div key={i} className="bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <CheckCircle size={20} />
                </div>
                <h4 className="text-xl font-black mb-3 tracking-tight">{benefit.t}</h4>
                <p className="text-slate-500 font-medium leading-relaxed">{benefit.d}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-32 bg-slate-950 text-slate-500 overflow-hidden relative font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-24 mb-32">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <Sparkles className="text-white w-8 h-8" />
                </div>
                <span className="text-2xl font-black tracking-tighter text-white uppercase">Heritage</span>
              </div>
              <p className="text-slate-400 font-medium max-w-md leading-relaxed mb-12 text-xl italic">
                "Preserving the standard of luxury since 1992. Meticulous care for those who demand artisanal excellence."
              </p>
            </div>
            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-12">Atelier</h4>
              <ul className="space-y-6 font-black uppercase text-[10px] tracking-widest">
                <li><Link to="/" className="hover:text-blue-400 transition-colors">Our Services</Link></li>
                <li><Link to="/prices" className="hover:text-blue-400 transition-colors text-white">Pricing List</Link></li>
                <li><Link to="/location" className="hover:text-blue-400 transition-colors">Atelier Location</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-12">Registry</h4>
              <ul className="space-y-6 font-black uppercase text-[10px] tracking-widest">
                <li><Link to="/" className="hover:text-blue-400 transition-colors">Concierge</Link></li>
                <li><Link to="/login" className="hover:text-blue-400 transition-colors text-slate-800">Staff Login</Link></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors">Legal Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-20 border-t border-white/5 flex flex-col md:row items-center justify-between gap-12 text-[10px] font-black uppercase tracking-[0.4em]">
            <p>© {new Date().getFullYear()} Heritage International Garment Preservation.</p>
            <p className="text-slate-800">Surgical Clean. Artisanal Finish.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
