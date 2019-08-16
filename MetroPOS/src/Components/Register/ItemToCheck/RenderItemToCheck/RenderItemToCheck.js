import React from 'react';

function RenderItemToCheck({ name, qty, price, amount, id, items, updateOrderedItems }) {
    //UnspaghettyTheCode function call
    function checkForId(e) {
        if (e.target.parentNode.parentNode.id.length > 1 && e.target.parentNode.parentNode.id.length < 10) {
            return document.getElementById(e.target.parentNode.parentNode.id);
        } else if (e.target.parentNode.id.length > 1 && e.target.parentNode.id.length < 10) {
            return document.getElementById(e.target.parentNode.id);
        } else return document.getElementById(e.target.id);
    }

    function flagItemInState(id, updateOrderedItems) {
        let listOfItems = items;
        if (!listOfItems[id - 1].flagged) {
            listOfItems[id - 1].flagged = true;
        } else listOfItems[id - 1].flagged = false;

        updateOrderedItems(listOfItems);
    }

    function toggleClass(el, className) {
        if (el) {
            el.classList.toggle(className);
        }
    }

    return (
        <div
            id={`itm-${id}`}
            className="item-bdy-list"
            onClick={e => {
                let item = checkForId(e);
                flagItemInState(id, updateOrderedItems);
                toggleClass(item, 'active-itm');
            }}
        >
            <div className="item-bdy-name">{name}</div>
            <div className="item-bdy-info">
                <div className="item-bdy-qty">{qty}</div>
                <div className="item-bdy-unit">{price}</div>
                <div className="item-bdy-amount">{amount}</div>
            </div>
        </div>
    );
}
export default RenderItemToCheck;
