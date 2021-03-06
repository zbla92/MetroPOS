import './itemToInject.css';
import React from 'react';

function ItemToInject({ name, image, price, setOrderedItem, items }) {
	const arr = {
		name: name,
		image: image,
		price: parseFloat(price),
		qty: 1,
		flagged: false
	};
	// Async scroll function to scroll the check display to the bottom  all the time as you ring the items
	const scrollToBottom = id => {
		setTimeout(() => {
			const div = document.getElementById(id);
			div.scrollTop = div.scrollHeight - div.clientHeight;
		}, 1);
	};

	return (
		<div
			className="img-container animated fadeIn"
			onClick={() => {
				setOrderedItem(items, arr);
				scrollToBottom('item-injection-place');
			}}
		>
			<div className="img-div">
				<img src={image} alt={image} />
			</div>
			<div className="img-overlay">
				<p>{name}</p>
			</div>
		</div>
	);
}
export default ItemToInject;
