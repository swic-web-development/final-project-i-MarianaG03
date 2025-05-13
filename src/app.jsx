import React, { useEffect, UseState } from 'react'
import store from './store.js'
import { fetchPeople } from './action.js'
import PeopleList from './components/PeopleList.jsx'

export default function App() {
  const [state, setState] = useState(store.getState())

  useEffect(() => {
    const unsubscribe = store.subscribe(setState)
    fetchPeople()
    return unsubscribe
  }, [])

  return (
    <main className="min-h-screen bg-gray-900 p-4 text-white">
      <h1 className="mb-6 text-center text-3xl font-bold">Star Wars Characters</h1>

      {state.error && <p className="text-center text-red-400">{state.error}</p>}

      {state.isLoading && <p className="text-center text-gray-400">Loading...</p>}

      {!state.isLoading && !state.error && <PeopleList people={state.people} />}
    </main>
  )
}
