import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Seongwon', age: 31 },
      { name: 'Angela', age: 32 },
      { name: 'child', age: 1 }
    ]
  });

  const switchNameHandler = () => {
    //console.log('Was clicked')
    setPersonsState({
      persons: [
        { name: 'Maximilian', age: 28 },
        { name: 'Angela', age: 28 },
        { name: 'Child', age: 28 }
      ]
    });
  };


  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        My Hobbies: Racing
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );

};
export default app;
