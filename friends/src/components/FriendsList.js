import React from "react";
import { Link } from "react-router-dom";

function FriendsList(props) {
  return (
    <div className='characters-list-wrapper'>
      {props.friends.map(friend => (
        <div className='character-card' key={friend.name}>
          <h2>Name: {friend.name}</h2>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
          <Link to={`/edit/${friend.id}`}>Edit</Link>
        </div>
      ))}
    </div>
  );
}
// Got names, age and email to display
export default FriendsList;
