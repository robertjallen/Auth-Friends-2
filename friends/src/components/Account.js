import React, {useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import api from '../utils/api'
import FriendCard from './FriendCard'


export default function Account(props) {

    const [friends, setFriends] = useState()

    useEffect(() => {
        api().get("/api/friends")
        .then(results => {
            console.log(results.data)
            setFriends(results.data)
        })
        .catch(err =>{
            console.log(err)
        })
    },[])

    return (
        <div>
            <div className="header">
            <h1>My Friends Account</h1>
            <Link to="/add"><i className="fas fa fa-plus"/></Link>
            </div>
            
         {friends ? friends.map((item,index) => {
            return <FriendCard friend={item} key={index}/>}) : <i className="fas fa-circle-notch fa-7x" /> }  
        </div>
    )
}