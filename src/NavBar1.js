import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function NavBar() {
  return (
    <Router>
    <div className="navBar">
        
      <div className="dropDown">
        <div class="dropdown">
        <button class="dropbtn">Dropdown</button>
        <div class="dropdown-content">

        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/members">Members</Link>
        <Link to="/contactUs">Contact US</Link>   

        </div>
        </div>
    </div>

      <hr />

      {/*
        A <Switch> looks through all its children <Route>
        elements and renders the first one whose path
        matches the current URL. Use a <Switch> any time
        you have multiple routes, but you want only one
        of them to render at a time
      */}
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/events">
          <Events />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/members">
          <Members />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
      </Switch>
    
      </div>

  </Router>
  );
}


// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div >
      
    </div>
  );
}

function Events() {
  return (
    <div>
      <h2>Events</h2>
    </div>
  );
}

function Gallery() {
  return (
    <div>
      <h2>Gallery</h2>
    </div>
  );
}

function ContactUs() {
  return (
    <div>
      <h2>Contact Us</h2>
    </div>
  );
}

function Members() {
  return (
    <div>
      <h2>Members</h2>
    </div>
  );
}
