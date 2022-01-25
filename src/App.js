import React,{useEffect, useContext} from 'react';
import './App.css';
import Signup from '../src/Pages/Signup';
import Login from '../src/Pages/Login';
import Create from '../src/Pages/Create'
import ViewPost from '../src/Pages/ViewPost'
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
import Post from './store/PostContext'

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

  <Post>
      <Router>

      <Switch>
        
        <Route exact path='/'> <Home/> </Route>
        <Route path='/signup'> <Signup/> </Route>
        <Route path='/login'> <Login/> </Route>
        <Route path='/create'> <Create /> </Route>
        <Route path='/viewpost'> <ViewPost /> </Route>
      </Switch>

      </Router>
  </Post> 
      
    </div>
  );
}

export default App;
