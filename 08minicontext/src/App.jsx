import './App.css'
import Login from './Components/Login'
import Profile from './Components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {

    return (
        <>
            <div className="flex flex-col gap-10 w-full h-screen items-center justify-center">

                <UserContextProvider>
                    <h1 className='flex w-full text-4xl font-extrabold items-center justify-center'>Hello React Developer</h1>
                    <Login />
                    <Profile />
                </UserContextProvider>

            </div>
        </>
    )
}

export default App
