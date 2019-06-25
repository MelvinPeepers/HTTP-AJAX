import React from "react";
import { Route, Link } from "react-router-dom";

import Home from "./components/Home";
import FriendsList from "./components/FriendsList";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  render() {
    return (
      <div className='App'>
        <ul className='navbar'>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route exact path='/friends' component={FriendsList} />
      </div>
    );
  }
}

export default App;
