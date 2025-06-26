'use client'
import { useState } from 'react'

type Props = {
  onAddClient: (client: {
    nom: string
    email: string
    telephone: string
    dateDeCreation: string
  }) => void
}


export default function FormClient({ onAddClient }: Props) {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    dateDeCreation: '',
  })

 const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault()

    //recupere client

    const anciensClients = JSON.parse(localStorage.getItem('clients') || '[]')

    // Ajouter le client
    const miseAJourClients = [...anciensClients, formData]

    localStorage.setItem('clients', JSON.stringify(miseAJourClients))
    if (onAddClient) {
      onAddClient(formData)
    }

    setFormData({
      nom: '',
      email: '',
      telephone: '',
      dateDeCreation: '',
    })
  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <h1 className="text-2xl font-bold  mb-4">Ajouter un Client</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="nom"
          value={formData.nom}
          onChange={handleChange}
          placeholder="Nom"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          name="telephone"
          value={formData.telephone}
          onChange={handleChange}
          placeholder="Téléphone"
          className="w-full border px-3 py-2 rounded"
          required
        />
        <input
          name="dateDeCreation"
          type="date"
          value={formData.dateDeCreation}
          onChange={handleChange}
          className="w-full border px-3 py-2 rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#20DF7F] text-white py-2 rounded"
        >
          Ajouter
        </button>
      </form>
    </div>
  )
}
