import './tenderTip.css'
import React from 'react';

export default function TenderTip({ tendered, tipFormatter }) {

    

    return(
        <div>
            <div className="totals-box-description">Tip Amount:</div>
            <div className="totals-balance-due">$ {tipFormatter(tendered)} </div>
        </div>
    );
}