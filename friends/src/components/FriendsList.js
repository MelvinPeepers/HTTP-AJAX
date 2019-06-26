import React from "react";

function FriendsList(props) {
  return (
    <div className='characters-list-wrapper'>
      {props.friends.map(friend => (
        <div className='character-card'>
          <h2>Name: {friend.name}</h2>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
        </div>
      ))}
    </div>
  );
}

export default FriendsList;
