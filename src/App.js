import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Seongwon', age: 31},
      {name: 'Angela', age: 32},
      {name: 'child', age: 1},
    ],
    otherState: 'some other value'
  }
  
  switchNameHandler = (newName) => {
    //console.log('Was clicked')
    this.setState({
      persons: [
        { name: 'seongwon', age: 28},
        { name: 'Angela', age: 28},
        { name: newName, age: 28},
      ] })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'seongwon', age: 28},
        { name: 'Angela', age: 28},
        { name: event.target.value, age: 28},
      ] })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button onClick={this.switchNameHandler.bind(this, 'CLIKC')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          click={this.switchNameHandler.bind(this, 'BRAHHH')}
          changed={this.nameChangedHandler}
          >
              child value here</Person>
      </div>
    );
  }
}

export default App;
