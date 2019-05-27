import React from 'react';

export default function RenderTable({ table, updateOrderedItems }) {
    return (
        <div
            className="table-container"
            onClick={e => {
                updateOrderedItems(table.items);
            }}
        >
            <i class="square outline icon" /> {table.id}
        </div>
    );
}
