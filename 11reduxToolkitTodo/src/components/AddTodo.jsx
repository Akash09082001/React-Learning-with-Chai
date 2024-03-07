import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, removeTodo } from '../features/todo/todoSlice';

const AddTodo = () => {

    const [input, setInput] = useState('');

    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    return (
        <form onSubmit={addTodoHandler} className='grid grid-cols-6 gap-3 py-10 w-full max-w-lg mx-auto '>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Enter Todo'
                className='flex w-full border border-gray-300 py-1 px-3 col-span-4 rounded-md'
            />

            <button type='submit' className='flex w-full text-center items-center justify-center bg-black px-5 py-2 rounded-md text-white col-span-2'>
                Add Todo
            </button>

        </form>
    )
}

export default AddTodo
