import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import axios from "axios";

import Home from "./components/Home";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";
import EditFriend from "./components/EditFriend";

import "./App.css";

class App extends Component {
  state = {
    friends: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const response = await axios.get("http://localhost:5000/friends");

    this.setState({ friends: response.data, loading: false });
  }

  updateFriends = newFriends => {
    this.setState({ friends: newFriends });
  };

  render() {
    return (
      <div className='App'>
        <ul className='navbar'>
          <div className='navtitle'>
            <h1>Friends!</h1>
          </div>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/friends'>Friends List</Link>
            <Link to='/form'>Add New Friend</Link>
          </li>
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
            <AddFriend {...props} updateFriends={this.updateFriends} />
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
