import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    }


    return (
        <div className='flex w-full h-fit'>
            <div className="flex w-full gap-5 max-w-md mx-auto flex-col">
                <h2 className='flex w-full items-center justify-center text-3xl font-bold'>Login</h2>
                <input
                    type='text'
                    placeholder='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='flex w-full border pl-2 py-2 rounded-md'
                />
                <input type='text'
                    placeholder='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='flex w-full border pl-2 py-2 rounded-md'
                />
                <button onClick={handleSubmit} className='flex w-full py-2 text-lg font-bold bg-blue-400 text-white text-center items-center justify-center rounded-md'>Submit</button>
            </div>

        </div>
    )
}

export default Login
