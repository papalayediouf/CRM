'use client'

import React, { useState, useMemo } from 'react'
import { FaEye } from 'react-icons/fa'
import { Client } from '../types/clients'  

const ELEMENTS_PAR_PAGE = 5



export default function ListeClients({ clients }: { clients: Client[] }) {
  const [clientActif, setClientActif] = useState<Client | null>(null)
  const [recherche, setRecherche] = useState('')
  const [pageCourante, setPageCourante] = useState(1)

  const clientsFiltres = useMemo(() => {
    return clients.filter((c) =>
      [c.nom, c.email, c.telephone]
        .join(' ')
        .toLowerCase()
        .includes(recherche.toLowerCase())
    )
  }, [clients, recherche])

  const totalPages = Math.ceil(clientsFiltres.length / ELEMENTS_PAR_PAGE)
  const clientsVisibles = clientsFiltres.slice(
    (pageCourante - 1) * ELEMENTS_PAR_PAGE,
    pageCourante * ELEMENTS_PAR_PAGE
  )

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#093545] mb-6">Clients</h1>

      <div className="mb-6 max-w-md w-full">
        <input
          type="text"
          placeholder="Rechercher un client..."
          value={recherche}
          onChange={(e) => {
            setRecherche(e.target.value)
            setPageCourante(1)
          }}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#20DF7F]"
        />
      </div>

      <div className="rounded-lg shadow ring-1 ring-gray-200 w-full overflow-x-auto">
        <table className="w-full table-auto bg-white divide-y divide-gray-200">
          <thead className="bg-[#093545] text-white text-xs sm:text-sm md:text-base">
            <tr className="hidden md:table-row">
              <th className="text-left px-4 py-3 uppercase font-semibold">Nom</th>
              <th className="text-left px-4 py-3 uppercase font-semibold">Email</th>
              <th className="text-left px-4 py-3 uppercase font-semibold">Téléphone</th>
              <th className="text-left px-4 py-3 uppercase font-semibold">Créé le</th>
              <th className="text-left px-4 py-3 uppercase font-semibold">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {clientsVisibles.map((client, index) => (
              <tr key={index} className="block md:table-row hover:bg-gray-50">
                <td className="px-4 py-3 md:table-cell block">
                  <span className="md:hidden font-semibold">Nom :</span> {client.nom}
                </td>
                <td className="px-4 py-3 md:table-cell block">
                  <span className="md:hidden font-semibold">Email :</span> {client.email}
                </td>
                <td className="px-4 py-3 md:table-cell block">
                  <span className="md:hidden font-semibold">Téléphone :</span> {client.telephone}
                </td>
                <td className="px-4 py-3 md:table-cell block">
                  <span className="md:hidden font-semibold">Créé le :</span> {new Date(client.dateDeCreation).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 md:table-cell block">
                  <span className="md:hidden font-semibold">Action :</span>
                  <button
                    onClick={() => setClientActif(client)}
                    className="mt-2 md:mt-0 text-[#093545] hover:text-[#20DF7F] flex items-center gap-1"
                    title="Voir détail"
                  >
                    <FaEye />
                    <span className="inline">Voir</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {totalPages > 1 && (
        <div className="mt-6 flex flex-wrap justify-center gap-2 text-sm sm:text-base">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              onClick={() => setPageCourante(n)}
              className={`px-3 py-1 rounded border ${
                pageCourante === n
                  ? 'bg-[#093545] text-white'
                  : 'bg-white text-[#093545] hover:bg-gray-100'
              }`}
            >
              {n}
            </button>
          ))}
        </div>
      )}

      {clientActif && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto relative shadow-xl">
            <button
              onClick={() => setClientActif(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold"
              aria-label="Fermer"
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold text-[#093545] mb-4">Détail du client</h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p><strong>Nom :</strong> {clientActif.nom}</p>
              <p><strong>Email :</strong> {clientActif.email}</p>
              <p><strong>Téléphone :</strong> {clientActif.telephone}</p>
              <p><strong>Date de création :</strong> {new Date(clientActif.dateDeCreation).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
