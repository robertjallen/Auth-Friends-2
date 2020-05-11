import React, {useState} from 'react'
import api from '../utils/api'

export default function Edit(props) {
  let friend = props.history.location.state.friend
  let id = props.history.location.state.friend.id
  const [error, setError] = useState('')
  const [data, setData] = useState(friend)
    
    const handleChange = (event) => {
      console.log("data",data)
      setData({[event.target.name]: event.target.value})
      }
    
      const handleSubmit = (event) => {
        event.preventDefault()
        api()
            .put(`/api/friends/${id}`, data)
			.then(result => {
				console.log("add result", result)
                props.history.push('/account')
			})
			.catch(err => {
				console.log(err)
				setError(err)
			})
    }



    return (
        <div>
            Edit
            { <form onSubmit={handleSubmit}>
			    {error && <div className="error">{error}</div>}
​
			    <input type="name" name="name" placeholder="name" value={data.name} onChange={handleChange} />
			    <button type="submit">Edit</button>
		    </form> }
        </div>
    )
}