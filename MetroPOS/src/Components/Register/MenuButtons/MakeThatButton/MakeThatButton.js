import React from 'react';

function MakeThatButton({ setActiveMenu, btnName, id, submenu }) {
	return (
		<button
			id={`btn-${id}`}
			className={`btn-top animated fadeIn`}
			onClick={e => {
				setActiveMenu(submenu);
			}}
		>
			{btnName}
		</button>
	);
}
export default MakeThatButton;
