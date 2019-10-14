import React, {Component} from 'react'

class CreditCard extends Component {
    render() {

        let cardImg = "";

        switch (this.props.type) {
            case "Visa":
                cardImg = "/img/visa.png"
                break;
        
            case "Master Card":
                cardImg = "/img/master-card.svg"
                break;
            default:
                cardImg = "/img/master-card.svg"
                break;
        }
        const cardStyle = {
            backgroundColor: this.props.bgColor,
            color: this.props.color
        }
        return (
        <div style={cardStyle} className="creditCard">
            <img src={cardImg} alt="" id="cardImg"/>
            <div className="number">•••• •••• •••• {this.props.number.substr(-4)}</div>
            <div className="credit-card-text">
                <p>Expires {this.props.expirationMonth > 10 ?  this.props.expirationMonth : "0" + this.props.expirationMonth} / {this.props.expirationYear } </p>
                <p className="bank-name">{this.props.bank}</p>
            </div>
            <div className="credit-card-text">
                {this.props.owner}
            </div>
        </div>);
    }
}

export default CreditCard;