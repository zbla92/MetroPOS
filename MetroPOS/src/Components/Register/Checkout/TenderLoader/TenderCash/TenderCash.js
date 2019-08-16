import React from 'react';

export default class TenderCash extends React.Component {
    constructor(props) {
        super(props);
        this.state = { checkTotalAmount: 0.0 };
    }
    componentDidMount() {
        this.getTotalCheckAmount();
    }

    getTotalCheckAmount = () => {
        const total = document.getElementById('total-value').innerHTML;
        this.setState({ checkTotalAmount: parseFloat(total) });
    };

    changeCalculator = (targetAmount, holdingAmount) => {
        if (holdingAmount - targetAmount < 0) {
            return (
                <div>
                    <div className="totals-box-description" />
                    <div className="totals-balance-err">Insufficient Funds </div>
                </div>
            );
        } else if (holdingAmount === targetAmount) {
            return (
                <div>
                    <div className="totals-box-description" />
                    <div className="totals-balance-err">No Change</div>
                </div>
            );
        } else
            return (
                <div>
                    <div className="totals-box-description">Change is:</div>
                    <div className="totals-balance-due">$ {parseFloat(holdingAmount - targetAmount).toFixed(2)} </div>
                </div>
            );
    };

    render() {
        return (
            <div className="totals-box-description">
                {this.changeCalculator(this.state.checkTotalAmount, this.props.benjaminSize)}
            </div>
        );
    }
}
