import React, { Component } from "react";

export default class NumbersTable extends Component {
    
    constructor(props) {
        super(props)
        this.limitArray = [];
        this.limit = this.props.limit;
    }
    
    render() {
        for (let i = 1; i <= this.limit; i++) {
            this.limitArray.push(i); 
        }

        return (
            <ul className="numbersTable">
                {this.limitArray.map(number => {
                    return number % 2 === 0 ? <li className="red" key={number}> {number} </li> :  <li key={number}>{number}</li>
                })}
            </ul>
        )
    }
}