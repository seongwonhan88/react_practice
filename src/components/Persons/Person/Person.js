import React, { Component } from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';

class Person extends Component {


    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p key="" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
                <p key="">{this.props.children}</p>,
                <input key="" type='text' onChange={this.props.changed} value={this.props.name} />
            </Aux>
        );
    }
}

export default Person;
