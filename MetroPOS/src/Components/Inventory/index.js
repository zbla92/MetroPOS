import React from 'react';
import './Inventory.css';
import { Link } from 'react-router-dom';

class Inventory extends React.Component {
	render() {
		return (
			<div className="Inventory_container">
				<div className="Inventory">
					<div className="inventory_top">
						<div className="inventory_top_logo">
							<Link to="/MainMenu">
								<button className="ui button">
									<i className="chevron left icon" />
									Back
								</button>
							</Link>
						</div>
						<div className="inventory_top_logo">Menu Configuration</div>
						<div className="inventory_top_logo">Info</div>
					</div>
					<div className="inventory_bottom" />
				</div>
			</div>
		);
	}
}

export default Inventory;
