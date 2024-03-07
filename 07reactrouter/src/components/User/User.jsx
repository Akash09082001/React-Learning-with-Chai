import React from 'react'
import { useParams } from 'react-router-dom'


function User() {

    const { userid } = useParams()

    return (
        <div className='flex w-full items-center justify-center'>

            User :{userid}

        </div>
    )
}

export default User
