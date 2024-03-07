import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

const Profile = () => {

    const { user } = useContext(UserContext);

    if (!user) return <div className='text-lg'>Please Login</div>

    return <div className='text-lg'>Welcome: {user.username}</div>

}

export default Profile
