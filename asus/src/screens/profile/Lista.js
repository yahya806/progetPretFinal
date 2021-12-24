import React from 'react'
import { useSelector } from 'react-redux'

import "../books/list.css"
import Utilisateur from './Utilisateur'
const Lista = () => {
    const users = useSelector(state => state.user.user)

    return (
        <div className="liste">
            {users.map((user)=><Utilisateur user={user}  />)}
            
        </div>
    )
}

export default Lista
