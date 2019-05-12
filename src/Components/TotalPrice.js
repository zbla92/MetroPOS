import '../css/totalPrice.css';
import React from 'react';

function TotalPrice({ prices }) {
    let total = 0;
    let tax = 0;
    let subtotal = 0;

    prices.map(e => {
        total = total + e;
    });

    function calcTax(total) {
        tax = total * 0.0875;
        return tax;
    }
    calcTax(total);
    subtotal = total - tax;

    tax = tax.toFixed(2);
    total = total.toFixed(2);
    subtotal = subtotal.toFixed(2);
    return (
        <div>
            <div className="subtotal-container">
                <div className="total-label">Subtotal:</div>
                <div className="total-value">{subtotal}</div>
            </div>
            <div className="discount-container">
                <div className="total-label">Discount:</div>
                <div className="total-value">0.00</div>
            </div>
            <div className="tax-container">
                <div className="total-label">Tax:</div>
                <div className="total-value">{tax}</div>
            </div>
            <div className="complete-total-container">
                <div className="complete-value">{total}</div>
            </div>
        </div>
    );
}
export default TotalPrice;
