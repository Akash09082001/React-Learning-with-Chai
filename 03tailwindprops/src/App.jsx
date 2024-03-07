import './App.css'
import Card from './components/Card'

function App() {

    return (
        <>

            <h1 className='bg-green-400 text-white w-fit mx-auto px-5 py-2 rounded-md mb-5'>Tailwind test</h1>

            <Card username="Akash" btnText="Click Me" />
            <Card username="Akashata" btnText="Visit Me" />

        </>
    )
}

export default App
