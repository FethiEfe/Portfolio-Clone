import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       
        <div className ="nav">
          <h1>Start Bootstrap</h1>
         

          <label for="toggle">&#9776;</label>
          <input type="checkbox" id="toggle" />


          <div className="menu">
            <a href="#">SERVICES</a>
            <a href="#">PORTFOLIO</a>
            <a href="#">ABOUT</a>
            <a href="#">TEAM</a>
            <a href="#">CONTACT</a>
          </div>

        </div>



       
      </div>
    );
  }
}

export default App;
