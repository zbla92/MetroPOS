import React from 'react';

import TenderCash from './TenderCash/TenderCash';
import TenderTip from './TenderTip/TenderTip';
import TenderCC from './TenderCC/TenderCC';

export default class TenderLoader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: ''
        };
    }

    componentDidUpdate() {
        if (this.state.active !== this.props.tenderSelector) {
            this.loadDifferetnComponent();
        }
    }
    loadDifferetnComponent() {
        this.setState({ active: this.props.tenderSelector });
    }

    render() {
        if (this.state.active === 'tip') {
            return <TenderTip tipFormatter={this.props.tipFormatter} tendered={this.props.tendered} />;
        } else if (this.state.active === 'cash') {
            return <TenderCash benjaminSize={this.props.benjaminSize} />;
        } else if (this.state.active === 'creditCard') {
            return <TenderCC creditCard={this.props.creditCard} />;
        } else {
            return <div>Please select tender option</div>;
        }
    }
}
