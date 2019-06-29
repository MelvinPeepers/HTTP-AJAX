import React from "react";
import axios from "axios";

class EditFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      age: "",
      errorMessage: null
    };
  }

  // need to populate the data as soon as the page loads
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({
          name: response.data.name,
          email: response.data.name,
          age: response.data.name
        });
      })
      .catch(error => {
        this.setState({
          errorMessage: error.response.data.error
        });
      });
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // following along with PUT Requests lecture video
  changeFriend = event => {
    event.preventDefault();
    // have to have preventDefault
    const { name, age, email } = this.state;
    const updatedFriend = { name, age, email };
    const id = this.props.match.params.id;

    axios
      .put(`http://localhost:5000/friends/${id}`, updatedFriend)
      .then(response => {
        this.setState({ errorMessage: null });
        this.props.updateFriends(response.data);
        this.props.history.push("/friends");
        // this above changes the page to friends after submitting
      })
      .catch(error => {
        this.setState({ errorMessage: error.response.data.error });
      });
  };

  deleteFriend = event => {
    event.preventDefault();
    // make a delete request
    const id = this.props.match.params.id;
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(response => {
        this.setState({ errorMessage: null });
        this.props.updateFriends(response.data);
        this.props.history.push("/friends");
        // this above changes the page to friends after submitting
      })
      .catch(error => {
        this.setState({ errorMessage: error.response.data.error });
      });
  };

  render() {
    const { name, age, email } = this.state;

    return (
      <form onSubmit={this.changeFriend}>
        <div className='form'>
          <h1 className='edit-header'>Edit Your Friend</h1>
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
        </div>
        <div className='btn-wrapper'>
          <button className='btn-save edit-btn' type='submit'>
            Save
          </button>
          <button className='btn-delete edit-btn' onClick={this.deleteFriend}>
            Delete
          </button>
        </div>
      </form>
    );
  }
}

export default EditFriend;
