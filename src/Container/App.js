import React, {Component} from 'react';
import logo from '../Assets/Container/logo.svg';
import '../Assets/Container/App.css';
import Test from '../Components/test';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Test/>        
      </div>
    );
  }
}

export default App;
