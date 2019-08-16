import './MainMenu.css';
import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = ({ loadRegister }) => {
    return (
        <div className="main-menu-container">
            <div className="ui grid ">
                <div className="three column row">
                    <div className="column">
                        <Link to="/Register">
                            <button className="register-btn">
                                <span className="register-icon">
                                    <i className="calculator icon" />
                                </span>
                                <h3>Register</h3>
                            </button>
                        </Link>
                    </div>
                    <div className="column">
                        <button className="register-btn">
                            <span className="stats-icon">
                                <i className="chart pie icon" />
                            </span>
                            <h3>Store Stats</h3>
                        </button>
                    </div>
                    <div className="column">
                        <Link to="/Users">
                            <button className="register-btn">
                                <span className="users-icon">
                                    <i className="users icon" />
                                </span>
                                <h3>Users</h3>
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="three column row">
                    <div className="column">
                        <button className="register-btn">
                            <span className="inventory-icon">
                                <i className="boxes icon" />
                            </span>
                            <h3>Inventory</h3>
                        </button>
                    </div>
                    <div className="column">
                        <button className="register-btn">
                            <span className="pricebook-icon">
                                <i className="dollar sign icon" />
                            </span>
                            <h3>Pricebook</h3>
                        </button>
                    </div>
                    <div className="column">
                        <button className="register-btn">
                            <span className="settings-icon">
                                <i className="cogs icon" />
                            </span>
                            <h3>Settings</h3>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MainMenu;
