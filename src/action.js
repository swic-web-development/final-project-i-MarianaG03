import state from './store.js'

export async function fetchPeople(){
    store.setState({ isLoading: true, error: null })

    try {
        const res = await fetch
    }
}