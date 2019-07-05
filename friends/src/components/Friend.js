import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Friend = ({ friend: { name, age, email, id } }) => {
  return (
    <div className='characters-list-wrapper'>
      <div className='character-card' key={name}>
        <h2>
          <span>Name:</span> {name}
        </h2>
        <p>
          <span className='friend-page-para'>Age:</span>{" "}
          <span className='friend-age'>{age}</span>
        </p>
        <p>
          <span className='friend-page-para email-para'>Email:</span> {email}
        </p>
        <Link to={`/friend/edit/${id}`}>
          <span className='friend-edit'>Edit</span>
        </Link>
      </div>
    </div>
  );
};

Friend.propTypes = {
  friend: PropTypes.object.isRequired
};
// Got names, age and email to display
export default Friend;
