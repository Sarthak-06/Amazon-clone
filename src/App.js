import { useEffect } from "react";
import React from "react";
import './App.css';
import Header from './Header';
import SearchIcon from '@material-ui/icons/Search';
import Home from'./Home';
import Login from "./Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from "./Checkout";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from './Payment';
function App() {
  const[{},dispatch]=useStateValue();
  useEffect(() =>{
    //will only ru when the app component loads
 auth.onAuthStateChanged(authUser =>{
   console.log('THE USER IS >>>, authUser');
   if(authUser){
 dispatch({
   type:'SET_USER',
   user: authUser
 
 })
   }
   else{

   }
 })
  }, [])
  return (
    //BEM
    <Router>
    <div className="app">
    <Header />
    <Switch>
      <Route path="/login">
        <Login />
        </Route>
    <Route path = "/checkout">
    
     
     <Checkout/>
     </Route>
<Route path="/payment">
  <Payment />

  </Route>
      <Route path = "/">
    
     <Home />
     </Route>
    </Switch>
     
     
    </div>
    </Router>
  );
}

export default App;
