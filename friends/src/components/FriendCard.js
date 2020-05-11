import React from 'react'
import {Link} from 'react-router-dom'

export default function FriendCard({friend}) {
    // console.log(friend.id)
    return (
        <Link to={`friend/${friend.id}`} friend={friend}>
            <div className="card">
                <h3>{friend.name}</h3>
            </div>
        </Link>
        
    )
}