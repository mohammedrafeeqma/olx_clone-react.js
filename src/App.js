import React,{useEffect, useContext} from 'react';
import './App.css';
import Signup from '../src/Pages/Signup';
import Login from '../src/Pages/Login';
import Create from '../src/Pages/Create'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import { AuthContext, FireBaseContext } from './store/Context';

function App() {
  const {setUser} = useContext(AuthContext)
  const {firebase} = useContext(FireBaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
    })

  },[])
  return (
    <div>
      <Router>

      <Switch>
        
        <Route exact path='/'> <Home/> </Route>
        <Route path='/signup'> <Signup/> </Route>
        <Route path='/login'> <Login/> </Route>
        <Route path='/create'> <Create /> </Route>
      </Switch>

      </Router>
      
    </div>
  );
}

export default App;
