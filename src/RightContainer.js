import React from 'react';
import Navbar from './NavBar/Navbar'
import Container from './Container';
import Footer from './Footer';
import  "./css/rightcontainer.css";
import Contactus from "./pages/Contactus";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Goodtoknow from "./pages/Goodtoknow";
import Members from "./pages/Members";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/rightcontainer.css";
       
//This div contains navbar, contents and footer
export default function RightContainer() {
  return (
    <div className="RightContainer"> 
      <Navbar className="nav"/>
      <div className="main-container">
      <Router>
      <Switch>
              <Route path="/Gallery" component={Gallery} />
              <Route path="/Goodtoknow" component={Goodtoknow} />
              <Route path="/Members" component={Members} />
              <Route path="/Contactus" component={Contactus} />
              <Route path="/Events" component={Events} />
            </Switch>
            </Router>
    </div>



    
      
    </div>
  )
}
