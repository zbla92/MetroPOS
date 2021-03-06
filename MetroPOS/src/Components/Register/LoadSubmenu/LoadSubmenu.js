import './loadSubmenu.css';
import React from 'react';
import ItemToInject from './ItemToInject/ItemToInject';

const LoadSubmenu = ({ submenuName, setOrderedItem, items }) => {
	// Ovdje sam radio destructuring na props
	if (submenuName) {
		const renderedList = submenuName.map(e => {
			return (
				<ItemToInject
					items={items}
					name={e.name}
					image={e.image}
					price={e.price}
					setOrderedItem={setOrderedItem}
					key={e.name}
				/>
			);
		});

		return <div className="submenu-injection-container  ">{renderedList}</div>;
	} else return <div>Loading component</div>;
};

export default LoadSubmenu;
