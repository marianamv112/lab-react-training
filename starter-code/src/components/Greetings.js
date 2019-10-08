import React, {Component} from 'react';

class Greetings extends Component {
    constructor(props) {
        super();
        this.lang = props.lang;
        this.children = props.children;
    }
    render() {
        switch (this.lang) {
            case "en":
                return (
                    <div className="greetings"> Hello {this.children} </div>)
            case "es":
                
                return (
                    <div className="greetings">
                        Hola {this.children}
                    </div>)

            case "fr":
                
                return (
                    <div className="greetings">
                        Bonjour {this.children}
                    </div>)
            case "de":
                
                return (
                    <div className="greetings">
                        Hallo {this.children}
                    </div>)
        
            default:
                return (
                    <div className="greetings">
                        Something wrong happened.
                    </div>)
        }
    }

}

export default Greetings;
