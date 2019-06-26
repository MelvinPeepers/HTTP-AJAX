import React from "react";
// import { Route, Link } from "react-router-dom";
import axios from "axios";
// import Home from "./components/Home";
import FriendsList from "./components/FriendsList";
// import FriendPage from "./components/FriendPage";

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
      // .then(() => {
      //   return axios.get("http://localhost:5000/");
      // })
      // .then(response => {
      //   // console.log(response.data);
      // })
      .catch(err => {
        console.log("Error:", err);
      });
  }

  render() {
    const { friends } = this.state;
    return (
      <div className='App'>
        <FriendsList friends={friends} />
        {/* <ul className='navbar'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/friends'>Friends</Link>
          </li>
        </ul> */}
        {/* <Route
          exact
          path='/'
          render={props => <Home {...props} friends={friends} />}
        />
        <Route
          exact
          path='/friends'
          render={props => <FriendsList {...props} friends={friends} />}
        />
        <Route
          path='/friend/:name'
          render={props => <FriendPage {...props} friends={friends} />}
        /> */}
      </div>
    );
  }
}

export default App;
