import { createFileRoute, Link } from '@tanstack/react-router'
import { MapPin, Phone, Clock, Sparkles, Navigation, Star, CheckCircle } from 'lucide-react'

export const Route = createFileRoute('/location')({
  component: Location,
})

function Location() {
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
            <Link to="/prices" className="hover:text-blue-600 transition-colors">Pricing</Link>
            <Link to="/location" className="text-blue-600">Location</Link>
            <Link to="/" hash="contact" className="px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">Book Now</Link>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-24 pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            {/* Info Section */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
                <Star size={14} fill="currentColor" />
                The Heritage Atelier
              </div>
              <h1 className="text-6xl lg:text-8xl font-black text-slate-900 mb-8 leading-[0.85] tracking-tighter">
                Find Our <br />
                <span className="text-blue-600 italic">Sanctuary.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-16 leading-relaxed font-medium lg:max-w-md">
                Located in the historic district, our flagship atelier provides the perfect environment for delicate garment inspection and preservation.
              </p>

              <div className="space-y-16">
                <div className="flex gap-8 group">
                  <div className="w-20 h-20 bg-blue-600 text-white rounded-[2rem] flex items-center justify-center shrink-0 shadow-2xl shadow-blue-100 group-hover:rotate-6 transition-transform">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase mb-4">Location</h3>
                    <p className="text-3xl font-black tracking-tighter">123 Main St<br />Metropolis, ST 12345</p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 text-blue-600 font-black text-sm uppercase tracking-widest hover:underline"
                    >
                      Secure Directions <Navigation size={16} />
                    </a>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-20 h-20 bg-slate-900 text-white rounded-[2rem] flex items-center justify-center shrink-0 shadow-2xl shadow-slate-200 group-hover:rotate-6 transition-transform">
                    <Clock size={32} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase mb-4">Atelier Hours</h3>
                    <div className="grid grid-cols-2 gap-x-12 gap-y-3">
                      <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Mon - Fri</span>
                      <span className="text-xl font-black tracking-tighter text-slate-900">08:00 — 18:00</span>
                      <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Saturday</span>
                      <span className="text-xl font-black tracking-tighter text-slate-900">09:00 — 16:00</span>
                      <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">Sunday</span>
                      <span className="text-xl font-black tracking-tighter text-slate-300">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-8 group">
                  <div className="w-20 h-20 bg-slate-100 text-slate-900 rounded-[2rem] flex items-center justify-center shrink-0 shadow-xl group-hover:rotate-6 transition-transform">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h3 className="text-[10px] font-black tracking-[0.3em] text-slate-400 uppercase mb-4">Concierge</h3>
                    <p className="text-3xl font-black tracking-tighter">(555) 123-4567</p>
                    <p className="text-slate-500 font-bold mt-2">concierge@heritage.luxury</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative group lg:h-[800px]">
              <div className="absolute -inset-8 bg-blue-50 rounded-[4.5rem] transform rotate-3 group-hover:rotate-1 transition-transform duration-700"></div>
              <div className="relative h-full bg-white border border-slate-100 rounded-[4rem] overflow-hidden shadow-2xl flex flex-col">
                {/* Mock Map UI */}
                <div className="flex-grow bg-slate-100 relative flex items-center justify-center overflow-hidden">
                   {/* Abstract Map Art */}
                   <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(0,0,0,0.1)_20px,rgba(0,0,0,0.1)_40px)]"></div>
                   </div>
                   <div className="relative text-center p-12 z-10">
                     <div className="w-24 h-24 bg-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-[0_0_50px_rgba(37,99,235,0.4)] animate-pulse">
                        <MapPin className="text-white" size={48} />
                     </div>
                     <h4 className="text-4xl font-black tracking-tighter text-slate-900 mb-4">Atelier Found.</h4>
                     <p className="text-slate-500 font-medium text-lg lg:max-w-xs mx-auto">Click below to open high-precision satellite navigation.</p>
                     <button className="mt-10 px-10 py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-blue-600 transition-all uppercase tracking-widest text-sm shadow-xl shadow-slate-200">
                        Launch GPS
                     </button>
                   </div>
                </div>
                <div className="p-12 bg-white border-t border-slate-50">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-green-50 text-green-600 rounded-xl">
                      <CheckCircle size={24} />
                    </div>
                    <h4 className="text-2xl font-black tracking-tighter">Complimentary Valet</h4>
                  </div>
                  <p className="text-slate-500 font-medium text-lg leading-relaxed">
                    We offer dedicated customer valet parking directly in front of the atelier for seamless garment drop-offs.
                  </p>
                </div>
              </div>
            </div>
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
                <li><Link to="/prices" className="hover:text-blue-400 transition-colors">Pricing List</Link></li>
                <li><Link to="/location" className="hover:text-blue-400 transition-colors text-white">Atelier Location</Link></li>
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
