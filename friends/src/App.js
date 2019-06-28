import React from "react";
import { Route } from "react-router-dom";
import axios from "axios";
// import Home from "./components/Home";
import FriendsList from "./components/FriendsList";
// import FriendPage from "./components/FriendPage";
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
      // added server here after get
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
    const { friends } = this.state;
    return (
      <div className='App'>
        <FriendsList friends={friends} />
        <div>
          <FriendForm />
        </div>
        <Route
          path='/form'
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
