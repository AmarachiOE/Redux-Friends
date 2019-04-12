import React from "react";
import { connect } from "react-redux";
//import { addFriend } from "../actions";

/* 

{
  id: 1
  name: 'Joe',
  age: 24,
  email: 'joe@lambdaschool.com',
}

*/
// invoking the addFriend function and pass in this.state.newFriend. that's the connection

class FriendForm extends React.Component {
  state = {
    newFriend: {
        id: "",
        name: "",
        age: "",
        email: "",
    }
  };

  // input form handleChanges
  handleChanges = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  // onSubmit
  submitForm = e => {
    e.preventDefault();
    this.props.addFriend(this.state.newFriend).then(() => {
      console.log("New Friend Added", this.state);
      this.props.history.push("/friends-list"); // redirect to friends list
    });
  } 

  render() {
    return (
      <div>
        <h2>Add A New Friend </h2>
        <form
          className="todo-form"
          onSubmit={this.submitForm}
        >
          <input
            type="string"
            name="name"
            value={this.state.newFriend.name}
            placeholder="Name"
            onChange={this.handleChanges}
          />
          <input
            type="number"
            name="age"
            value={this.state.newFriend.age}
            placeholder="Age"
            onChange={this.handleChanges}
          />
          <input
            type="string"
            name="email"
            value={this.state.newFriend.email}
            placeholder="Email"
            onChange={this.handleChanges}
          />
          <button className="btn add-btn">Add Item</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null, {}
//   { addFriend }
)(FriendForm);
