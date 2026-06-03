import { createFileRoute, Link } from '@tanstack/react-router'
import { CheckCircle, Clock, MapPin, Phone, Star, Scissors, Shirt, Sparkles, Send, Mail, Loader2, ChevronDown } from 'lucide-react'
import { useMutation } from 'convex/react'
import { api } from '../../convex/_generated/api'
import { useState } from 'react'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  const submitQuote = useMutation(api.quotes.submit)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    const formData = new FormData(e.currentTarget)
    try {
      await submitQuote({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        message: formData.get('message') as string,
      })
      setIsSubmitted(true)
      e.currentTarget.reset()
    } catch (error) {
      console.error(error)
      alert('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="p-2 bg-blue-600 rounded-lg group-hover:rotate-12 transition-transform">
              <Sparkles className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">Heritage</span>
          </div>
          <div className="hidden lg:flex items-center gap-10 text-[10px] font-black tracking-[0.2em] uppercase text-slate-500">
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="#process" className="hover:text-blue-600 transition-colors">Process</a>
            <Link to="/prices" className="hover:text-blue-600 transition-colors">Pricing</Link>
            <Link to="/location" className="hover:text-blue-600 transition-colors">Location</Link>
            <a href="#contact" className="px-6 py-3 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all shadow-xl shadow-slate-200">Book Now</a>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center lg:text-left flex flex-col lg:flex-row items-center gap-24">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
                  <Star size={14} fill="currentColor" />
                  Premium Garment Care Since 1992
                </div>
                <h1 className="text-6xl lg:text-[7.5rem] font-black text-slate-900 mb-8 leading-[0.85] tracking-tighter">
                  Meticulous <br />
                  <span className="text-blue-600 italic">Tradition.</span>
                </h1>
                <p className="text-xl text-slate-500 mb-12 max-w-xl leading-relaxed font-medium">
                  We don’t just clean clothes; we preserve your investments. Experience the surgical precision of Heritage’s master cleaners.
                </p>
                <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                  <a href="#contact" className="px-10 py-5 bg-blue-600 text-white text-lg font-black rounded-2xl hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 text-center uppercase tracking-widest">
                    Request Quote
                  </a>
                  <Link to="/prices" className="px-10 py-5 bg-white text-slate-900 text-lg font-black rounded-2xl border-2 border-slate-100 hover:border-blue-600 transition-all text-center uppercase tracking-widest">
                    Full Pricing
                  </Link>
                </div>
                
                <div className="mt-20 pt-12 border-t border-slate-100 grid grid-cols-3 gap-8">
                  <div>
                    <div className="text-4xl font-black text-slate-900 tracking-tighter">30+</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Years of Service</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 tracking-tighter">10k+</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Elite Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-black text-slate-900 tracking-tighter">24h</div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2">Fast Turnaround</div>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                  <img 
                    src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=1000" 
                    alt="Professional Laundry Service" 
                    className="w-full aspect-[4/5] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex flex-col justify-end p-12 lg:p-16">
                    <div className="p-8 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
                      <p className="text-white text-xl font-bold leading-relaxed italic">"Heritage is the only place I trust with my vintage couture. Their surgical attention to detail is truly unmatched."</p>
                      <div className="flex items-center gap-4 mt-8">
                        <div className="w-10 h-10 rounded-full bg-blue-500 overflow-hidden border-2 border-white/50">
                          <img src="https://i.pravatar.cc/150?u=1" alt="Kelsey" />
                        </div>
                        <p className="text-white text-sm font-black tracking-widest uppercase">— Kelsey Cartwright</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative background gradients */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-40 bg-slate-50 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12 text-center lg:text-left">
              <div className="max-w-3xl mx-auto lg:mx-0">
                <h2 className="text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase mb-6">Curated Solutions</h2>
                <h3 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[0.9] tracking-tighter">
                  Comprehensive care <br /> for elite fabrics.
                </h3>
              </div>
              <p className="text-xl text-slate-500 lg:max-w-sm font-medium leading-relaxed">
                Utilizing specialized medical-grade equipment and eco-friendly solvents for a standard of clean that feels brand new.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {[
                { 
                  title: 'Master Dry Cleaning', 
                  icon: <Shirt size={32} />, 
                  desc: 'State-of-the-art cleaning for silk, and couture wear using gentle, non-toxic GreenEarth solutions.',
                  color: 'bg-blue-600'
                },
                { 
                  title: 'Bespoke Alterations', 
                  icon: <Scissors size={32} />, 
                  desc: 'In-house master tailors for simple hems to complex bridal restorations and full suit tailoring.',
                  color: 'bg-slate-900'
                },
                { 
                  title: 'Executive Laundry', 
                  icon: <Sparkles size={32} />, 
                  desc: 'Hand-finished shirts with artisan-grade pressing. Crisp, clean, and delivered on luxury hangers.',
                  color: 'bg-slate-700'
                },
                { 
                  title: 'Rug Restoration', 
                  icon: <Sparkles size={32} />, 
                  desc: 'Clinical-grade deep cleaning for fine oriental, Persian, and heirloom area rugs.',
                  color: 'bg-blue-500'
                },
                { 
                  title: 'Fine Leather Care', 
                  icon: <Shirt size={32} />, 
                  desc: 'Specialized refinishing to restore natural oils, suppleness, and original color to your finest skins.',
                  color: 'bg-slate-800'
                },
                { 
                  title: 'Household Linens', 
                  icon: <Sparkles size={32} />, 
                  desc: 'Premium cleaning for down comforters, silk duvets, and delicate heirloom table linens.',
                  color: 'bg-slate-400'
                },
              ].map((service, index) => (
                <div key={index} className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-100 hover:shadow-2xl hover:-translate-y-4 transition-all group">
                  <div className={`w-16 h-16 ${service.color} text-white rounded-3xl flex items-center justify-center mb-10 shadow-lg group-hover:rotate-6 transition-transform`}>
                    {service.icon}
                  </div>
                  <h4 className="text-3xl font-black mb-6 tracking-tighter leading-none">{service.title}</h4>
                  <p className="text-slate-500 font-medium leading-relaxed text-lg">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-40 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-32">
              <h2 className="text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase mb-6">Our Protocol</h2>
              <h3 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter">Artisanal Precision.</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16 relative">
              <div className="hidden md:block absolute top-[4.5rem] left-0 w-full h-[2px] bg-slate-100"></div>
              
              {[
                { step: '01', title: 'Inspection', desc: 'Surgical-grade scan for micro-stains, structural integrity, and minor repairs.' },
                { step: '02', title: 'Hand-Treat', desc: 'Targeted hand-removal of stains using pH-balanced spotting agents.' },
                { step: '03', title: 'Preserve', desc: 'Gentle, temperature-controlled cleaning to preserve fabric longevity.' },
                { step: '04', title: 'Master Press', desc: 'Precision hand-finishing followed by a final three-point inspection.' },
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 text-center group">
                  <div className="w-36 h-36 bg-white border-8 border-slate-50 rounded-[2.5rem] flex items-center justify-center mx-auto mb-10 shadow-2xl group-hover:rotate-12 transition-transform">
                    <span className="text-4xl font-black text-blue-600 tracking-tighter">{step.step}</span>
                  </div>
                  <h4 className="text-2xl font-black mb-4 tracking-tight">{step.title}</h4>
                  <p className="text-slate-500 font-medium text-base leading-relaxed px-4">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commitment Section */}
        <section className="py-40 bg-slate-900 text-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
              <div>
                <h2 className="text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase mb-8">Green Mandate</h2>
                <h3 className="text-5xl lg:text-[6.5rem] font-black mb-12 tracking-tighter leading-[0.85]">
                  Pristine for <br />
                  <span className="text-blue-400 italic text-6xl lg:text-8xl">Future.</span>
                </h3>
                <div className="space-y-12">
                  {[
                    { t: 'Bio-Neutral Chemistry', d: 'We utilize exclusively GreenEarth® solvents—a clear, odorless liquid sand that is 100% bio-neutral.' },
                    { t: 'Zero-Waste Cycle', d: 'Our facility operates on a closed-loop system, recycling 98% of all cleaning solvents internally.' },
                    { t: 'Solar-Powered Steam', d: 'Utilizing low-emission infrastructure that significantly reduces our carbon footprint per garment.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-8 group">
                      <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                        <CheckCircle className="text-blue-400 group-hover:text-white" size={28} />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black mb-3 tracking-tight">{item.t}</h4>
                        <p className="text-slate-400 font-medium text-lg leading-relaxed">{item.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-600/20 rounded-[4rem] blur-2xl group-hover:bg-blue-600/40 transition-colors"></div>
                <div className="relative rounded-[3.5rem] overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=1000" 
                    alt="Eco-friendly facility" 
                    className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-10 left-10 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                    <p className="text-white text-xs font-black tracking-widest uppercase">Certified Green Cleaner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-40 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-32">
              <h2 className="text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase mb-6">Common Questions</h2>
              <h3 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter">Your Concerns.</h3>
            </div>
            
            <div className="space-y-8">
              {[
                { q: "What is Heritage's turnaround protocol?", a: "Our elite protocol requires 2 business days for perfection. We do offer a 'Premium Express' 24-hour turnaround for select items upon request." },
                { q: "Do you offer specialty couture services?", a: "Yes. Our master tailors and cleaners specialize in high-end couture, vintage restorations, and museum-grade wedding gown preservation." },
                { q: "Are your processes safe for delicate silks?", a: "Our clinical-grade GreenEarth cleaning system is specifically designed for delicate silks, wools, and cashmeres, ensuring zero shrinkage or fiber damage." },
                { q: "Can you restore damaged leather skins?", a: "Our leather artisans specialize in restoring natural oils, suppleness, and hand-painting original pigments back into damaged or faded skins." }
              ].map((faq, idx) => (
                <details key={idx} className="group bg-slate-50 rounded-[2.5rem] p-10 cursor-pointer border border-slate-100 hover:border-blue-600 transition-all duration-300">
                  <summary className="list-none flex items-center justify-between font-black text-2xl text-slate-900 tracking-tighter">
                    {faq.q}
                    <div className="p-2 bg-white rounded-full shadow-md group-open:rotate-180 transition-transform">
                      <ChevronDown className="text-blue-600" size={24} />
                    </div>
                  </summary>
                  <p className="mt-8 text-slate-500 font-medium leading-relaxed text-lg border-t border-slate-200 pt-8">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact/Location Section */}
        <section id="contact" className="py-40 bg-blue-600 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent)]"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-32">
              <div>
                <h2 className="text-[10px] font-black tracking-[0.4em] text-blue-200 uppercase mb-8">Secure Booking</h2>
                <h3 className="text-6xl lg:text-8xl font-black mb-12 tracking-tighter leading-[0.85]">Let’s Preserve <br /> Your <span className="italic text-slate-900">Wardrobe.</span></h3>
                <div className="space-y-12">
                  <div className="flex items-center gap-8 group">
                    <div className="w-20 h-20 bg-white text-blue-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-blue-900/50 group-hover:scale-110 transition-transform">
                      <Phone size={32} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs font-black uppercase tracking-widest mb-2">Artisan Line</p>
                      <p className="text-4xl font-black tracking-tighter">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-8 group">
                    <div className="w-20 h-20 bg-white text-blue-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-blue-900/50 group-hover:scale-110 transition-transform">
                      <MapPin size={32} />
                    </div>
                    <div>
                      <p className="text-blue-200 text-xs font-black uppercase tracking-widest mb-2">Heritage Atelier</p>
                      <p className="text-4xl font-black tracking-tighter">123 Main St, ST 12345</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-[4rem] p-16 text-slate-900 shadow-2xl relative border border-white/20">
                <div className="absolute -top-10 -left-10 w-24 h-24 bg-slate-900 rounded-[2rem] flex items-center justify-center rotate-12 shadow-2xl">
                   <Mail className="text-white" size={40} />
                </div>
                {isSubmitted ? (
                  <div className="text-center py-24">
                    <div className="w-24 h-24 bg-green-100 text-green-600 rounded-[2rem] flex items-center justify-center mx-auto mb-10 shadow-xl">
                      <CheckCircle size={48} />
                    </div>
                    <h3 className="text-4xl font-black mb-6 tracking-tighter">Inquiry Logged.</h3>
                    <p className="text-slate-500 font-medium mb-12 text-lg leading-relaxed">Your request has been prioritized. Our head concierge will contact you within 60 minutes.</p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="px-12 py-5 bg-slate-100 text-slate-600 font-black rounded-2xl hover:bg-slate-200 transition-colors uppercase tracking-widest"
                    >
                      New Request
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-4xl font-black mb-12 tracking-tighter leading-none">Schedule a <br /> Consultation.</h3>
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Full Name</label>
                          <input name="name" required type="text" className="w-full px-8 py-5 rounded-[1.5rem] bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-lg" placeholder="Jane Doe" />
                        </div>
                        <div>
                          <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Secure Email</label>
                          <input name="email" required type="email" className="w-full px-8 py-5 rounded-[1.5rem] bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-lg" placeholder="jane@example.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 ml-2">Garment Details</label>
                        <textarea name="message" required className="w-full px-8 py-5 rounded-[1.5rem] bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all h-48 font-bold text-lg resize-none" placeholder="Describe the fabrics you wish to preserve..."></textarea>
                      </div>
                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full py-6 bg-blue-600 text-white font-black text-xl rounded-[1.5rem] hover:bg-slate-900 transition-all shadow-2xl shadow-blue-100 disabled:opacity-50 flex items-center justify-center gap-4 uppercase tracking-[0.2em]"
                      >
                        {isSubmitting ? <Loader2 className="animate-spin" /> : (
                          <>
                            Send Inquiry <Send size={24} />
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-32 bg-slate-950 text-slate-500 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-24 mb-32">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-blue-600 rounded-xl">
                  <Sparkles className="text-white w-8 h-8" />
                </div>
                <span className="text-4xl font-black tracking-tighter text-white uppercase">Heritage</span>
              </div>
              <p className="text-slate-400 font-medium max-w-md leading-relaxed mb-12 text-xl italic">
                "Preserving the standard of luxury since 1992. Meticulous care for those who demand artisanal excellence."
              </p>
              <div className="flex gap-6">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all cursor-pointer group shadow-2xl">
                     <div className="w-6 h-6 bg-slate-400 rounded-lg group-hover:bg-white transition-colors"></div>
                   </div>
                 ))}
              </div>
            </div>
            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-12">Atelier</h4>
              <ul className="space-y-6 font-black uppercase text-[10px] tracking-widest">
                <li><a href="#services" className="hover:text-blue-400 transition-colors">Our Services</a></li>
                <li><a href="#process" className="hover:text-blue-400 transition-colors">The Protocol</a></li>
                <li><Link to="/prices" className="hover:text-blue-400 transition-colors">Pricing List</Link></li>
                <li><Link to="/location" className="hover:text-blue-400 transition-colors">Atelier Location</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xs font-black uppercase tracking-[0.3em] mb-12">Registry</h4>
              <ul className="space-y-6 font-black uppercase text-[10px] tracking-widest">
                <li><a href="#" className="hover:text-blue-400 transition-colors">Member FAQ</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition-colors">Concierge</a></li>
                <li><Link to="/login" className="hover:text-blue-400 transition-colors">Staff Login</Link></li>
                <li><a href="#" className="hover:text-blue-400 transition-colors text-slate-800">Legal Policy</a></li>
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
