import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getData } from "../actions";

class FriendsList extends React.Component {
  componentDidMount() {
    // need to invoke the getData action here
    this.props.getData();
  }

  render() {
    return (
      <div className="friends-list-container">
        <h2>FRIENDS LIST:</h2>
        {this.props.friends.map(friend => (
          <div key={friend.name}>
            <h2>
              {friend.name}, {friend.age}
            </h2>
            <p>{friend.email}</p>
            <button>Delete</button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends
});

export default withRouter(
  connect(
    mapStateToProps,
    { getData }
  )(FriendsList)
);
