import React from 'react';
import './App.css';
import {ProtectedRoute} from './utils/ProtectedRoute'
import {Link, Route} from 'react-router-dom'
import {getToken} from './utils/api'
import Login from './components/Login'

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

     <Route exact path='/signin' component={Login}/>
    </div>
  );
}

export default App;
