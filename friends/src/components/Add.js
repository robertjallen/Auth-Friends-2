import React, {useState} from 'react';
import api from '../utils/api';


export default function Add(props) {

    const [error, setError] = useState()
	const [data, setData] = useState({
		name: ""
    })

    const handleChange = (event) => {
		setData({
			...data,
			[event.target.name]: event.target.value,
		})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        api()
            .post("/api/friends", data)
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
		<form onSubmit={handleSubmit}>
			{error && <div className="error">{error}</div>}
​
			<input type="name" name="name" placeholder="name" value={data.name} onChange={handleChange} />
			<button type="submit">Add</button>
		</form>
	)
}