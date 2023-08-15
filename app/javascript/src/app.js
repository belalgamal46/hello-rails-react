import React from 'react';
import {Link} from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <h1>Random Greeting Message App</h1>
      <Link to="/randomGreeting">
        <button type="button">Greeting</button>
      </Link>
    </div>
  );
}

export default App;