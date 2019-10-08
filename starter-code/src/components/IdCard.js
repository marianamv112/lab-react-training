import React, {Component} from 'react';

class IdCard extends Component {
    constructor(props) {
        super();
        this.firstname = props.firstName;
        this.lastname = props.lastName;
        this.gender = props.gender;
        this.height = props.height;
        this.birth = props.birth.toDateString();
        this.picture = props.picture;
    }

    render() {
        return (
            <div className="card-id-container">
                <img src={this.picture} alt="user"/>
                <div className="card-id-text-container">
                <strong>Firstname: </strong> {this.firstname} <br/> 
                <strong>Lastname: </strong> {this.lastname} <br/>
                <strong>Gender: </strong> {this.gender} <br/>
                <strong>Height: </strong> {this.height} <br/>
                <strong>Birth: </strong> {this.birth} <br/> 
                </div>
            </div>
        );
    }
}

export default IdCard;