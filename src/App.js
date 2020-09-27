import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = ({match}) => {
return <h1>Welcome User {match.params.username}</h1>
}


function App() {
 var state = {
    loggedIn:false
  }

  // loginHandle = () => {
  //   this.loggedIn = true
  // }
  function loginHandle() {
    state.loggedIn=true
    alert(state.loggedIn)
  }

  return (
    <Router>
      <div className="App">
       <ul>
         <li>
         <NavLink to = '/' exact activeStyle={
           {color:'green'}}>Home</NavLink>
         </li>
         <li>
         <NavLink to = '/about' exact activeStyle={
           {color:'green'}}>About</NavLink>
         </li>
         <li>
         <NavLink to = '/user/Nikhita' username='Nikhita' exact activeStyle={
           {color:'green'}}>User Nikhita</NavLink>
         </li>
         <li>
         <NavLink to = '/user/Namrata' username='Namrata' exact activeStyle={
           {color:'green'}}>User Namrata</NavLink>
         </li>
       </ul>
       <input type="button" value={state.loggedIn? 'LogOut':'Login'} onClick={loginHandle.bind(this)}></input>
        <Route path='/' exact strict render={
          () => {
            return (<h1>Welcome Home</h1>)
          }
        }/>
        <Route path='/about' exact strict render={
          () => {
            return (<h1>Welcome About</h1>)
          }
        }/>
        {/* <Route path='/user/:username' exact strict component={User}/>
         */}
         <Route path='/user/:username' exact strict render={({match})=>(
          state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/"/>)
        )}/>
      </div>
    </Router>     
  );
}

export default App;
