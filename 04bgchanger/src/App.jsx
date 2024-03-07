import { useState } from "react"
function App() {

    const [color, setColor] = useState('lightblue');

    return (

        <>
            <div className="flex w-full h-screen items-center justify-center" style={{ backgroundColor: color }} >

                <div className="grid grid-cols-3 md:grid-cols-9 bg-white gap-5 w-fit px-3 py-3 fixed bottom-20 flex-wrap rounded-lg shadow-md border border-gray-300">

                    <button onClick={() => { setColor('red') }} className="flex px-3 py-1 text-white items-center justify-center rounded-md capitalize" style={{ backgroundColor: 'red' }}>
                        red
                    </button>
                    <button onClick={() => { setColor('green') }} className="flex px-3 py-1 text-white items-center justify-center rounded-md capitalize" style={{ backgroundColor: 'green' }}>
                        green
                    </button>
                    <button onClick={() => { setColor('yellow') }} className="flex px-3 py-1 text-white items-center justify-center rounded-md capitalize" style={{ backgroundColor: 'yellow' }}>
                        yellow
                    </button>
                    <button onClick={() => { setColor('blue') }} className="flex px-3 py-1 text-white items-center justify-center rounded-md capitalize" style={{ backgroundColor: 'blue' }}>
                        blue
                    </button>
                    <button onClick={() => { setColor('pink') }} className="flex px-3 py-1 text-white items-center justify-center rounded-md capitalize" style={{ backgroundColor: 'pink' }}>
                        pink
                    </button>
                    <button onClick={() => { setColor('orange') }} className="flex px-3 py-1 text-white items-center justify-center rounded-md capitalize" style={{ backgroundColor: 'orange' }}>
                        orange
                    </button>
                    <button onClick={() => { setColor('purple') }} className="flex px-3 py-1 text-white items-center justify-center rounded-md capitalize" style={{ backgroundColor: 'purple' }}>
                        purple
                    </button>
                    <button onClick={() => { setColor('olive') }} className="flex px-3 py-1 text-white items-center justify-center rounded-md capitalize" style={{ backgroundColor: 'olive' }}>
                        olive
                    </button>
                    <button onClick={() => { setColor('lightblue') }} className="flex px-3 py-1 text-white items-center justify-center rounded-md capitalize" style={{ backgroundColor: 'lightblue' }}>
                        lightblue
                    </button>




                </div>

            </div>
        </>

    )
}

export default App
