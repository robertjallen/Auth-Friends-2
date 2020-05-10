import React from 'react';
import './App.css';
import {ProtectedRoute} from './utils/ProtectedRoute'
import {Link} from 'react-router-dom'
import {getToken} from './utils/api'

function App() {

  const token = getToken()

  return (
    <div className="App">
     <nav>
      <Link to="/">Home</Link>
			{!token && <Link to="/signin">Sign In</Link>}
			{token && <Link to="/account">My Account</Link>}
			{token && <Link to="/logout">Log Out</Link>}
     </nav>
    </div>
  );
}

export default App;
