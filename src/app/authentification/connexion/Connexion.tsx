'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Connexion() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [motDePasse, setMotDePasse] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <div className="  flex items-center justify-center ">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden">
        <div className="bg-[#093545] px-6 py-4">
          <h2 className="text-2xl font-bold text-white text-center">Connexion</h2>
        </div>
        <form onSubmit={handleSubmit} className="px-6 py-8 space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Entrez votre email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#20DF7F]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#20DF7F]"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#20DF7F] text-white font-semibold rounded-md hover:bg-[#18b96c] transition"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>
  )
}
