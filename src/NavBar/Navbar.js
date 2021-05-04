import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Searchbutton from '../NavBar/Searchbutton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import '../css/navbar.css';
import SignInForm from '../LoginForms/SignInForm'; 
import SignUpForm from '../LoginForms/SignUpForm'; 

import Hamburger from './Hamburger';

class Navbar extends Component {
 
  state = {
    seen: false,
  };
  togglePop = () => {
    this.setState({
      seen: !this.state.seen,
    });
  };
  render() {
    return (
     
      <Router>
        <div className="navOutside">
          <div className="navInside">
            <ul>
              <li>
                <Searchbutton />
              </li>
              <li>
                <div className="FormTitle__Link" onClick={this.togglePop}>
                  <button> Sign In</button>
                </div>
                {this.state.seen ? (
                  <SignInForm toggle={this.togglePop} />
                ) : null}
              </li>
              { <li>
                  <NavLink
                    to="/sign-up"
                    activeClassName="FormTitle__Link--Active"
                    className="FormTitle__Link"
                  >
                    <button> Sign Up </button>
                  </NavLink>
                </li>
 }{' '}
            </ul>
            <div>
              { <Route path="/sign-up" component={SignUpForm}></Route> }
              <Route path="/sign-in" component={SignInForm}></Route>
            </div>
          </div>
          <Hamburger />
        </div>
      </Router>
    );
  }
}

export default Navbar;
