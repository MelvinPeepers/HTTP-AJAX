import React from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import FriendsList from "./components/FriendsList";
import FriendForm from "./components/FriendForm";
import EditFriend from "./components/EditFriend";

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
        <ul className='navbar'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <div className='navtitle'>
            <h1>Friends!</h1>
          </div>
        </ul>
        <div />

        <Route
          path='/'
          exact
          render={props => <Home {...props} friends={this.state.friends} />}
        />

        <Route
          path='/friends'
          exact
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path='/form'
          exact
          render={props => (
            <FriendForm {...props} updateFriends={this.updateFriends} />
          )}
        />

        <Route
          path='/friend/edit/:id'
          exact
          render={props => (
            <EditFriend
              {...props}
              friends={this.state.friends}
              updateFriends={this.updateFriends}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
