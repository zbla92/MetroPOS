import React from 'react';

import TenderCash from './TenderCash/TenderCash';
import TenderTip from './TenderTip/TenderTip';
import TenderCC from './TenderCC/TenderCC';

export default class TenderLoader extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            active: 'tip'
        }
    }
    



    render(){
        if(this.state.active === "select"){
            return(
                <div>
                    Please select tender option
                </div>
            );
        } else if(this.state.active === 'tip'){
            return <TenderTip tipFormatter={this.props.tipFormatter} tendered={this.props.tendered}/>
        } else if(this.state.active === "cash"){
            return <TenderCash />
        } else if(this.state.active === 'tip'){
            return <TenderCC />
        }
    }
}




