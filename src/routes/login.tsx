import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useAuthActions } from '@convex-dev/auth/react'
import { useState } from 'react'
import { Sparkles, Lock, Mail, Loader2, ArrowRight } from 'lucide-react'

export const Route = createFileRoute('/login')({
  component: LoginPage,
})

function LoginPage() {
  const { signIn } = useAuthActions()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      await signIn('password', { email, password, flow: 'signIn' })
      navigate({ to: '/dashboard' })
    } catch (err: any) {
      try {
         await signIn('password', { email, password, flow: 'signUp' })
         navigate({ to: '/dashboard' })
      } catch (signUpErr: any) {
         setError('Authorization failure. Please verify credentials.')
         console.error(err)
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 font-sans">
      <div className="max-w-xl w-full bg-white rounded-[4rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden">
        <div className="p-12 lg:p-20 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-[2rem] mb-12 shadow-2xl shadow-blue-500/20 rotate-12">
            <Sparkles className="text-white" size={40} />
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tighter mb-4">Registry Access.</h1>
          <p className="text-slate-500 font-medium mb-16 text-lg">Secure concierge portal for Heritage staff.</p>

          {error && (
            <div className="mb-10 p-6 bg-red-50 text-red-600 rounded-3xl text-sm font-black uppercase tracking-widest border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8 text-left">
            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Secure Identifier</label>
              <div className="relative">
                <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                <input 
                  name="email" 
                  required 
                  type="email" 
                  className="w-full pl-16 pr-6 py-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-lg" 
                  placeholder="concierge@heritage.luxury" 
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] ml-2">Access Key</label>
              <div className="relative">
                <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                <input 
                  name="password" 
                  required 
                  type="password" 
                  className="w-full pl-16 pr-6 py-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-blue-600 outline-none transition-all font-bold text-lg" 
                  placeholder="••••••••" 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full py-6 bg-slate-900 text-white font-black text-xl rounded-2xl hover:bg-blue-600 transition-all shadow-2xl shadow-slate-900/20 disabled:opacity-50 flex items-center justify-center gap-4 uppercase tracking-[0.2em]"
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : (
                <>
                  Authenticate <ArrowRight size={24} />
                </>
              )}
            </button>
          </form>

          <p className="text-center text-slate-300 text-[10px] font-black uppercase tracking-widest mt-16">
            End-to-end encrypted connection.
          </p>
        </div>
      </div>
    </div>
  )
}
