import React from 'react';
import {NavLink} from 'react-router-dom';
import SignUpButton from './SignUpButton';
import SignOutButton from './SignOutButton';

const NavBar = () => {
    const loggedIn = localStorage.getItem('userToken');

    return(
      <div className="navbar navbar-light bg-light static-top">
        <div className="container">
          <h2><NavLink exact={true} to='/'><img src="img/spark-logo.png" /></NavLink></h2>
          <div className="link-wrap">
            <NavLink exact={true} activeClassName='is-active' to='/'>Home</NavLink>
            <NavLink activeClassName='is-active' to='/about'>About</NavLink>
            <NavLink activeClassName='is-active' to='/feeds'>Feeds</NavLink>
            {!loggedIn && <SignUpButton />}
            {loggedIn && <SignOutButton>Logout</SignOutButton>}
          </div>
        </div>
      </div>
    )
  }

export default NavBar;