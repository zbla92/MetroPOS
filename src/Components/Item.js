import '../css/item.css'
import React from 'react';

function Item () {


    return(
        <div className="item-bdy-list">
            <div className='item-bdy-name'>Hommade Pizza</div>
            <div className='item-bdy-info'>
                <div className='item-bdy-qty'>3</div>
                <div className='item-bdy-unit'>10.00</div>
                <div className='item-bdy-amount'>30.00</div>
            </div>
        </div>
    )
}
export default Item;