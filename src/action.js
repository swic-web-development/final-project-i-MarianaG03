import state from './store.js'

export async function fetchPeople() {
  store.setState({ isLoading: true, error: null })

  try {
    const res = await fetch('https://www.swapi.tech/api/people')
    const json = await res.json()
    const people = json.result || json.results || []

    store.setState({ people, isLoading: false })
  } catch (error) {
    store.setState({ error: error.message, isLoading: false, people: [] })
  }
}
