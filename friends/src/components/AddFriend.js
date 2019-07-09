import React from "react";
import axios from "axios";

class FriendForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      age: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  createFriend = event => {
    event.preventDefault();

    const { name, age, email } = this.state;
    const newFriend = { name, age, email };

    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(response => {
        this.props.updateFriends(response.data);
        this.props.history.push("/friends");
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  render() {
    const { name, age, email } = this.state;
    return (
      <div className='form'>
        <h1>Add Your New Friend</h1>
        <form onSubmit={this.createFriend}>
          <div className='input-field'>
            <input
              type='text'
              name='name'
              placeholder='Name'
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field'>
            <input
              type='text'
              name='email'
              placeholder='Email'
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className='input-field'>
            <input
              type='text'
              name='age'
              placeholder='Age'
              value={age}
              onChange={this.handleChange}
            />
          </div>
          <input className='btn-add' type='submit' value='Add' />
        </form>
      </div>
    );
  }
}

export default FriendForm;
