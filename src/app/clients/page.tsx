'use client'

import { useState, useEffect } from 'react'
import ListeClients from './ListeClients'
import { clients as staticClients } from '../db/clientDb'
import { Client } from '../types/clients' 

export default function PageClients() {
  const [clientList, setClientList] = useState<Client[]>([])


  useEffect(() => {
  const donnees = localStorage.getItem('clients')
  if (donnees) {
    const clientsLocaux = JSON.parse(donnees)
    const tousLesClients = [...staticClients, ...clientsLocaux]
    setClientList(tousLesClients)
  } else {
    setClientList(staticClients)
  }
}, [])


  return (
    <div>
      <ListeClients clients={clientList} />
    </div>
  )
}
