import React, {Component} from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = ({match}) => {
return <h1>Welcome User {match.params.username}</h1>
}


function App() {
  const ulstyle = {
    margin: "0",
    padding: "0",
    overflow: "hidden",
    backgroundColor: "#333",
    listStyleType:"none"
  }
  const navlinkstyle ={
    display: "block",
    color: "white",
    textAlign: "center",
    padding: "14px 16px",
    textDecoration:"none"
  }

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
      ​<nav class="navbar navbar-default">
         <div class="container-fluid">
    <ul className="" style={ulstyle}>
    <li style={{float:"left"}} className="active">
         <NavLink to = '/' exact activeStyle={
           {color:'yellow'}} style={navlinkstyle}>HOME</NavLink>
         </li>
         <li  style={{float:"left"}}>
         <NavLink to = '/projects' exact activeStyle={
           {color:'yellow'}} style={navlinkstyle}>PROJECTS</NavLink> 
         </li>
         <li  style={{float:"left"}}>
         <NavLink to = '/services' exact activeStyle={
           {color:'yellow'}} style={navlinkstyle}>SERVICES</NavLink>
         </li>
         <li  style={{float:"left"}}>
         <NavLink to = '/contact' exact activeStyle={
           {color:'yellow'}} style={navlinkstyle}>CONTACT</NavLink>
         </li>
    </ul>
  </div>
</nav>
       {/* <ul className="nav navbar-nav">
         <li className="active">
         <NavLink to = '/' exact activeStyle={
           {color:'green'}}>Home</NavLink>
         </li>
         <li>
         <NavLink to = '/projects' exact activeStyle={
           {color:'green'}}>Project</NavLink> 
         </li>
         <li>
         <NavLink to = '/services' exact activeStyle={
           {color:'green'}}>Services</NavLink>
         </li>
         <li>
         <NavLink to = '/contact' exact activeStyle={
           {color:'green'}}>Contact</NavLink>
         </li>
         <li>
         <NavLink to = '/user/Nikhita' username='Nikhita' exact activeStyle={
           {color:'green'}}>User Nikhita</NavLink>
         </li>
         <li>
         <NavLink to = '/user/Namrata' username='Namrata' exact activeStyle={
           {color:'green'}}>User Namrata</NavLink>
         </li>
       </ul> */}
       {/* <input type="button" value={state.loggedIn? 'LogOut':'Login'} onClick={loginHandle.bind(this)}></input> */}
        <Route path='/' exact strict render={
          () => {
            return (<h1>You chose HOME</h1>)
          }
        }/>
        <Route path='/projects' exact strict render={
          () => {
            return (<h1>You chose PROJECTS</h1>)
          }
        }/>

         <Route path='/services' exact strict render={
          () => {
            return (<h1>You chose SERVICES</h1>)
          }
        }/>
        <Route path='/contact' exact strict render={
          () => {
            return (<h1>You chose CONTACT</h1>)
          }
        }/>
        {/* <Route path='/user/:username' exact strict component={User}/>
         */}
         {/* <Route path='/user/:username' exact strict render={({match})=>(
          state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/"/>)
        )}/> */}
      </div>
      
    </Router>     
    
  );
}

export default App;
