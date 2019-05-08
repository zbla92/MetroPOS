import '../css/totalPrice.css'
import React from 'react';

function TotalPrice (){

    return(
        <div>
            <div className="subtotal-container">
                <div className="total-label">Subtotal:</div>
                <div className="total-value">75.90</div>
              </div>
              <div className="discount-container">
                <div className="total-label">Discount:</div>
                <div className="total-value">0.00</div>
              </div>
              <div className="tax-container">
                <div className="total-label">Tax:</div>
                <div className="total-value">5.49</div>
              </div>
              <div className="complete-total-container">
                <div className="complete-value">81.39</div>
              </div>
        </div>
    );
}
export default TotalPrice;