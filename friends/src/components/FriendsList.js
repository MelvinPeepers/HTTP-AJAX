import React, { Component } from "react";
import Friend from "./Friend";

class FriendsList extends Component {
  render() {
    return (
      <div>
        {this.props.friends.map(friend => (
          <Friend key={friend.id} friend={friend} />
        ))}
      </div>
    );
  }
}

export default FriendsList;
