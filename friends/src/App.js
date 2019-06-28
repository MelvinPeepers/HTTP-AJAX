import React from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(response => {
        this.setState({
          friends: response.data
        });
      })
      .catch(err => {
        console.log("Error:", err);
      });
  }

  updateFriends = newFriends => {
    this.setState({ friends: newFriends });
  };

  render() {
    return (
      <div className='App'>
        <h1>Friends!</h1>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/friends'>Friends</Link>
        </div>
        <Route
          path='/friends'
          exact
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <div />
        <Route
          path='/'
          exact
          render={props => (
            <FriendForm {...props} updateFriends={this.updateFriends} />
          )}
        />
      </div>
    );
  }
}

export default App;
