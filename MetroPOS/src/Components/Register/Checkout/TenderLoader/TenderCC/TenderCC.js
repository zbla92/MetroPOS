import React from 'react';

export default class TenderCC extends React.Component {
    formatCreditCardNumber = creditCard => {
        let ccArr = creditCard;
        try {
            ccArr =
                creditCard.substring(0, 4) +
                ' ' +
                creditCard.substring(4, 8) +
                ' ' +
                creditCard.substring(8, 12) +
                ' ' +
                creditCard.substring(12, 16);
            return ccArr;
        } catch {
            return creditCard;
        }
    };

    render() {
        return (
            <div>
                <div className="totals-box-description">Enter CC Numer:</div>
                <div className="totals-balance-due">{this.formatCreditCardNumber(this.props.creditCard)}</div>
            </div>
        );
    }
}
