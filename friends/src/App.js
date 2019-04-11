import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

// Components
import LoginPage from "./components/LoginPage";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/protected">Protected</Link>
        </nav>
        <h2>Currently on Page</h2>
        <Route path="/login" component={LoginPage} />
      </div>
    );
  }
}

export default App;
