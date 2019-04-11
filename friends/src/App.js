import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

// Components
import LoginPage from "./components/LoginPage";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/login">Login</Link>
          <Link to="/friends-list">Friends List</Link>
        </nav>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute exact path="/friends-list" component={FriendsList} />
      </div>
    );
  }
}

export default App;
