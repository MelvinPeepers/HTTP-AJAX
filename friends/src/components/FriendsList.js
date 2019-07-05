import React from "react";
import { Link } from "react-router-dom";

function FriendsList(props) {
  return (
    <div className='characters-list-wrapper'>
      {props.friends.map(friend => (
        <div className='character-card' key={friend.name}>
          <h2>
            <span>Name:</span> {friend.name}
          </h2>
          <p>
            <span className='friend-page-para'>Age:</span>{" "}
            <span className='friend-age'>{friend.age}</span>
          </p>
          <p>
            <span className='friend-page-para email-para'>Email:</span>{" "}
            {friend.email}
          </p>
          <Link to={`/friend/edit/${friend.id}`}>
            <a className='friend-edit'>Edit</a>
          </Link>
        </div>
      ))}
    </div>
  );
}
// Got names, age and email to display
export default FriendsList;
