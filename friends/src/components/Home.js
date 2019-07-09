import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='home-container'>
      <h1>My Good Friends</h1>
      <Link to='/friends'>Enter</Link>
    </div>
  );
}

export default Home;
