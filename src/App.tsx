import React from 'react'
import { HashTable, linked, NameIDLookup } from './new'

export default function App() {
  const hash2 = NameIDLookup

  console.log(linked)

  const characters = [
    {
      id: 1,
      name: 'rick'
    },
    {
      id: 2,
      name: 'morty'
    },
  ]
  console.log(NameIDLookup(characters))


  return (
    <div>App</div>
  )
}