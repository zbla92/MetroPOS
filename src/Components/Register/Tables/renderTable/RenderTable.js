import React from 'react';

export default function RenderTable({ table, updateOrderedItems, setCheckID }) {
    return (
        <div
            className="table-container"
            onClick={e => {
                updateOrderedItems(table.items);
                setCheckID(table.id)
            }}
        >
            <i className="file alternate icon" /> {table.id}
        </div>
    );
}
