import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {

    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState('')
    const passwordRef = useRef(null);

    const passwordGenrator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numberAllowed) str += "0123456789";
        if (charAllowed) str += "!@#$%^&*()-=_+~`{}[]:;\|/?<>";

        for (let index = 1; index <= length; index++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        }
        setPassword(pass);

    }, [length, numberAllowed, charAllowed, setPassword]);


    useEffect(() => {
        passwordGenrator();
    }, [length, numberAllowed, charAllowed, passwordGenrator])

    const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select();
        window.navigator.clipboard.writeText(password);
        popup();
    }, [password])


    const popup = () => {
        const popupcontainer = document.getElementById('copymessage');
        popupcontainer.style.display = 'flex';

        setTimeout(() => {
            popupcontainer.style.display = 'none';
        }, 4000);
    }


    return (
        <>

            <div className="flex w-full flex-col gap-5 lg:gap-10 items-center justify-center bg-black h-screen">

                <h1 className='flex w-fit mx-auto text-orange-400 text-3xl md:text-4xl lg:text-5xl font-bold'>Password Generator</h1>

                <div className="grid grid-cols-1 w-full gap-2 max-w-md bg-gray-700 p-5 rounded-md">

                    <div className="flex w-full gap-2 ">
                        <input type="text" name="text" id="" ref={passwordRef} readOnly value={password} placeholder='Password will Genrate Here..' className='flex w-3/4 pl-3 py-2 text-lg text-orange-400 rounded-md outline-none ' />
                        <button onClick={copyPasswordToClipboard} className='flex w-1/4 bg-blue-300 rounded-md items-center justify-center text-white hover:text-blue-300 hover:bg-white text-base transition-all'>Copy</button>
                    </div>

                    <div className="grid grid-cols-2 gap-5 divide w-full">
                        <div className="flex col-span-2 py-2 w-full items-center justify-around">
                            <input type="range" name="range" min={8} max={100} value={length} onChange={(e) => { setLength(e.target.value) }} className='flex w-2/3 cursor-pointer' />
                            <label htmlFor="" className='flex w-1/3 items-center justify-center text-base text-orange-400'>Length: {length}</label>
                        </div>
                        <div className="flex w-full py-2 items-center justify-around">
                            <input type="checkbox" name="" id="numberInput" defaultChecked={numberAllowed} onChange={() => { setNumberAllowed((prev) => !prev) }} className='flex h-4 w-4' />
                            <label htmlFor="" className='flex w-fit text-base text-orange-400 items-center justify-center'>Number Allowed</label>
                        </div>
                        <div className="flex w-full py-2 items-center justify-around">
                            <input type="checkbox" name="" id="characterInput" defaultChecked={charAllowed} onChange={() => { setCharAllowed((prev) => !prev) }} className='flex h-4 w-4' />
                            <label htmlFor="" className='flex w-fit text-base text-orange-400 items-center justify-center'>Characters Allowed</label>
                        </div>
                    </div>

                    <div className="flex w-full">
                        <button onClick={passwordGenrator} className='flex w-full py-2 bg-blue-300 rounded-md items-center justify-center text-white hover:text-blue-300 hover:bg-white text-base transition-all'>
                            Generate New Password
                        </button>
                    </div>

                </div>

                <div id='copymessage' className="hidden w-full max-w-md rounded-md bg-gray-700 absolute bottom-20 p-5">
                    <span className='flex w-full text-center items-center justify-center text-green-500'>
                        Genarated Password Copied To The Clipboard
                    </span>
                </div>


            </div>

        </>
    )
}

export default App
