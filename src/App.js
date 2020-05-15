import React, {Component} from 'react';
import AboutMe from "./Components/AboutMe";
import Info from "./Info";
import "./reset.css";

class App extends Component {
  render() { 
    return (
      <div className="container">
        <AboutMe />
        <Info />
      </div>
    );
  }
}
 
export default App;
