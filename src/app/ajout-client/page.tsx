'use client'
import FormClient from './FormClient'

export default function Page() {
  const handleAjout = (client: {
    nom: string
    email: string
    telephone: string
    dateDeCreation: string
  }) => {
    console.log('Nouveau client ajouté :', client)
  }

  return (
    <div>
      <FormClient onAddClient={handleAjout} />
    </div>
  )
}
