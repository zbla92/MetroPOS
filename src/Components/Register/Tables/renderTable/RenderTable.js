import React from 'react';

export default function RenderTable({ table, updateOrderedItems, setCheckID, updateTip, tip }) {
    return (
        <div
            className="table-container"
            onClick={() => {
                updateOrderedItems(table.items);
                setCheckID(table.id)
                updateTip(tip)
            }}
        >
            <i className="file alternate icon" /> {table.id}
        </div>
    );
}
