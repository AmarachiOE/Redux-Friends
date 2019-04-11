import React from "react";
import { connect } from "react-redux";

// class component because it will have login form

const LoginPage = props => {
    return (
        <div >
          <form className="Login-Form" onSubmit={props.login}>
            <input 
            onChange={props.handleChanges}
            placeholder="Username" />
            <input 
            onChange={props.handleChanges}placeholder="Password" />
            <button className="login-button">Login</button>
          </form>
        </div>
      );
}

export default LoginPage;

/*


// Need to connect this component to the redux store
// implicit return: const mSTP = state => {( todos: state.todos )};
const mapStateToProps = state => {
  console.log("From mSTP TodoList", state);
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { toggleTask, deleteTask }
)(TodoList);



*/