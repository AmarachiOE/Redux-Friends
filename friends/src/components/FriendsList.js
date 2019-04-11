import React from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';


class FriendsList extends React.Component {
    componentDidMount() {
        // need to invoke the getData action here
    }

    render() {
        return (
            <div className="friends-list-container">
                <h2>FRIENDS LIST:</h2>
            </div>
        );
    }
}

export default withRouter(
    connect(
      null,
      { }
    )(FriendsList)
  );