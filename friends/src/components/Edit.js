import React, {useState} from 'react'

export default function Edit(props) {
  const [data, setData] = useState({
		name: props.history.location.state.friend.name
    })

    console.log(props)
    let handleSubmit
    let error
    let handleChange


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