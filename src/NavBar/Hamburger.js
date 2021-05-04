import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import Contactus from "../pages/Contactus";
import Events from "../pages/Events";
import Gallery from "../pages/Gallery";
import Goodtoknow from "../pages/Goodtoknow";
import Members from "../pages/Members";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Hamburger extends Component {
  state = {
    isOpen: false,
  };
  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
  render() {
    return (
      <Router>
        <div className="nav">
          <div className="barButton" onClick={this.handleClick}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <ul className={this.state.isOpen ? "navLink" : "navoff"}>
            <Link to="/Events">
              <li>Events</li>
            </Link>

            <Link to="/Gallery">
              <li>Gallery</li>
            </Link>

            <Link to="/Goodtoknow">
              <li>Good to know</li>
            </Link>

            <Link to="/Members">
              <li>Members</li>
            </Link>

            <Link to="/Contactus">
              <li>Contactus</li>
            </Link>
          </ul>
        </div>

        {/*  <Switch>
              <Route path="/Gallery" component={Gallery} />
              <Route path="/Goodtoknow" component={Goodtoknow} />
              <Route path="/Members" component={Members} />
              <Route path="/Contactus" component={Contactus} />
              <Route path="/Events" component={Events} />
            </Switch> */}
      </Router>
    );
  }
}

export default Hamburger;
