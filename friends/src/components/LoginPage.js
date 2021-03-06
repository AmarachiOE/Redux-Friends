import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";

class LoginPage extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  // for input fields
  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  // for form onSubmit
  // if post req for login is successful, this .then will also be invoked
  // if login is successful, then navigate to url/protected page
  submitForm = e => {
    e.preventDefault();
    this.props.login(this.state.credentials).then(() => {
      console.log("Login Credentials Accepted", this.state);
      this.props.history.push("/friends-list");
    });
  };

  render() {
    return (
      <div>
        <h2>Login To See Your Friends</h2>
        <form className="Login-Form" onSubmit={this.submitForm}>
          <input
            type="string"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChanges}
            placeholder="Username"
          />
          <input
            type="string"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChanges}
            placeholder="Password"
          />
          <button className="login-button">Login</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginPage);

