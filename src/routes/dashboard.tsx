import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { convexQuery } from '@convex-dev/react-query'
import { useMutation, useConvexAuth } from 'convex/react'
import { useAuthActions } from '@convex-dev/auth/react'
import { api } from '../../convex/_generated/api'
import { Sparkles, LogOut, Clock, Mail, User, MessageSquare, ChevronDown, Loader2, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      navigate({ to: '/login' })
    }
  }, [isLoading, isAuthenticated, navigate])

  const { data: quotes } = useSuspenseQuery(convexQuery(api.quotes.list, {}))
  const updateStatus = useMutation(api.quotes.updateStatus)
  const { signOut } = useAuthActions()
  const [filter, setFilter] = useState<'all' | 'pending' | 'contacted' | 'completed'>('all')

  if (isLoading || !isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <Loader2 className="animate-spin text-blue-600" size={64} />
      </div>
    )
  }

  const filteredQuotes = filter === 'all' 
    ? quotes 
    : quotes.filter(q => q.status === filter)

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      {/* Header */}
      <header className="bg-slate-900 text-white px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between sticky top-0 z-50 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Sparkles className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-black tracking-tighter uppercase">Heritage Admin</span>
        </div>
        <button 
          onClick={async () => {
            await signOut()
            navigate({ to: '/' })
          }}
          className="px-6 py-2 bg-white/10 hover:bg-red-600 rounded-full text-xs font-black uppercase tracking-widest transition-all"
        >
          Sign Out
        </button>
      </header>

      <main className="flex-grow p-6 sm:p-12 lg:p-20 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-12 mb-20">
          <div>
            <h2 className="text-[10px] font-black tracking-[0.4em] text-blue-600 uppercase mb-4">Concierge Desk</h2>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter">Inquiries.</h1>
          </div>
          
          <div className="flex bg-white rounded-2xl p-2 border border-slate-200 shadow-xl overflow-x-auto max-w-full">
            {(['all', 'pending', 'contacted', 'completed'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap ${
                  filter === tab 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10">
          {filteredQuotes.length === 0 ? (
            <div className="bg-white rounded-[4rem] border-4 border-dashed border-slate-200 p-32 text-center">
              <div className="w-24 h-24 bg-slate-50 rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-slate-300">
                <MessageSquare size={48} />
              </div>
              <h3 className="text-4xl font-black tracking-tighter text-slate-900">Void.</h3>
              <p className="text-slate-400 font-medium text-lg mt-4 uppercase tracking-widest text-xs font-black">No requests in this queue</p>
            </div>
          ) : (
            filteredQuotes.map((quote) => (
              <div key={quote._id} className="bg-white rounded-[3.5rem] border border-slate-100 shadow-sm overflow-hidden hover:shadow-2xl transition-all duration-500">
                <div className="p-10 lg:p-16 flex flex-col lg:row items-start gap-16">
                  <div className="flex-grow space-y-8">
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-[2rem] flex items-center justify-center shrink-0">
                        <User size={32} />
                      </div>
                      <div>
                        <h3 className="text-4xl font-black tracking-tighter leading-none">{quote.name}</h3>
                        <p className="text-slate-400 font-bold mt-4 flex items-center gap-2 text-lg">
                          <Mail size={18} /> {quote.email}
                        </p>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-10 rounded-[2.5rem] text-slate-700 text-xl font-medium leading-relaxed italic border border-slate-100">
                      "{quote.message}"
                    </div>
                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] flex items-center gap-2 ml-4">
                      <Clock size={14} /> Received {new Date(quote._creationTime).toLocaleString()}
                    </div>
                  </div>

                  <div className="flex flex-col gap-6 w-full lg:w-72 shrink-0">
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] ml-4">Registry Status</div>
                    <div className="relative group">
                      <select 
                        value={quote.status}
                        onChange={(e) => updateStatus({ id: quote._id, status: e.target.value as any })}
                        className={`w-full appearance-none pl-8 pr-12 py-6 rounded-3xl font-black text-sm uppercase tracking-widest border-2 focus:ring-4 focus:ring-blue-100 outline-none cursor-pointer transition-all ${
                          quote.status === 'pending' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                          quote.status === 'contacted' ? 'bg-blue-50 text-blue-700 border-blue-200' :
                          'bg-green-50 text-green-700 border-green-200'
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="contacted">Contacted</option>
                        <option value="completed">Completed</option>
                      </select>
                      <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" size={20} />
                    </div>
                    {quote.status === 'completed' && (
                      <div className="flex items-center gap-3 px-6 py-4 bg-green-50 text-green-700 rounded-2xl font-black uppercase text-[10px] tracking-widest animate-in fade-in slide-in-from-bottom-2">
                        <CheckCircle size={16} /> Preservation Complete
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      
      <footer className="py-12 bg-white border-t border-slate-100 text-center">
         <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em]">Heritage Systems Administration — Secure Socket</p>
      </footer>
    </div>
  )
}
