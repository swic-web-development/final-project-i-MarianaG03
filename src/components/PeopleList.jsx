import React from 'react'

export default function PeopleList({ people }) {
  return (
    <div className="lg:gird-cols-3 grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
      {people.map((person) => (
        <div key={person.uid} className="rounded bg-gray-800 p-4 shadow">
          <h2 className="text-xl font-semibold">{person.name}</h2>
          <p className="text-sm opacity-75">UID: {person.uid}</p>
        </div>
      ))}
    </div>
  )
}
