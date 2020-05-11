import React from 'react';
import './App.css';
import ProtectedRoute from './utils/ProtectedRoute'
import {Link, Route} from 'react-router-dom'
import {getToken} from './utils/api'
import Login from './components/Login'
import Logout from './components/Logout'
import Account from './components/Account'
import FriendDetails from './components/FriendDetails'
import Add from './components/Add'
import Edit from './components/Edit'

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

      <Route exact path='/login' component={Login}/>
			<ProtectedRoute exact path='/account' component={Account}/>
			<ProtectedRoute exact path='/logout' component={Logout}/>
			<ProtectedRoute exact path='/add' component={Add}/>
			<ProtectedRoute exact path='/edit/:id' component={Edit}/>
			<ProtectedRoute exact path='/friend/:id' component={FriendDetails}/>
    </div>
  );
}

export default App;
