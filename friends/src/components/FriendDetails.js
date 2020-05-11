import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import api from '../utils/api'

export default function FriendDetails(props) {

    console.log("details", props.match.params.id)

    const [friends, setFriends] = useState()

    useEffect(() => {
        api().get(`/api/friends/${props.match.params.id}`)
        .then(results => {
            console.log("details res", results.data)
            setFriends(results.data)
            console.log('friend', friends)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    const deleteFriend = () => {
        api().delete(`/api/friends/${props.match.params.id}`)
        .then(results => {
            console.log("details res", results.data)
            // setFriends(results.data)
            // console.log('friend', friends)
            props.history.push('/account')
        })
        .catch(err =>{
            console.log(err)
        })
    }


    return (
        <>
           {friends ? (
               <div className="card">
                   <h3>{friends.name}</h3>
                   <p>{friends.email}</p>
                   <button onClick={deleteFriend}><i className="fas fa fa-trash"/></button>

                   <Link to={{
                    pathname: `/edit/${friends.id}`,
                    state: {friend: friends}
                  }}><i className="fas fa fa-edit"/></Link>
               </div>
               ) : <p><i className="fas fa-circle-notch fa-7x" /></p> }
        </>
    )
}