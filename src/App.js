import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Seongwon', age: 31 },
      { name: 'Angela', age: 32 },
      { name: 'child', age: 1 },
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked')
    this.setState({
      persons: [
        { name: 'seongwon', age: 28 },
        { name: 'Angela', age: 28 },
        { name: newName, age: 28 },
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'seongwon', age: 28 },
        { name: 'Angela', age: 28 },
        { name: event.target.value, age: 28 },
      ]
    })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return <Person 
            name={person.name} 
            age={person.age} />
          })}
        
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
