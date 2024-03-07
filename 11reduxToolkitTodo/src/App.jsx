import './App.css'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {

    return (
        <section className='bg-gray-400 w-full h-screen'>
            <div className="flex flex-col w-full max-w-7xl mx-auto px-5 py-10">
                <h1 className='flex w-full items-center justify-center text-xl font-bold'>Learn about redux toolkit</h1>
                <AddTodo />
                <Todos />

            </div>
        </section>
    )
}

export default App
