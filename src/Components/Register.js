import itemList from '../data/items/items.json';
import '../css/register.css';
import React from 'react';
import Clock from './Clock';

class Register extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="ui grid">
                    <div className="sixteen wide column info-bar">
                        <div className="ui  three column grid">
                            <div className="column" />
                            <div className="column clock">
                                <Clock />
                            </div>
                            <div className="column" />
                        </div>
                    </div>
                    <div className="sixteen wide column info-panel">logout</div>
                </div>
                <div className="ui grid">
                    <div className="six wide column display-container">
                        <div className="ui grid">
                            <table className="table-top-buttons">
                                <tr>
                                    <th>
                                        <button className="pos-btn">
                                            To go
                                        </button>
                                    </th>
                                    <th>
                                        <button className="pos-btn">Tab</button>
                                    </th>
                                    <th>
                                        <button className="pos-btn">
                                            Delivery
                                        </button>
                                    </th>
                                    <th>
                                        <button className="pos-btn">
                                            Number
                                        </button>
                                    </th>
                                </tr>
                            </table>
                        </div>
                        <div className="items-container">item</div>
                        <div className="totals-container">totals</div>
                        <table className="table-bottom-buttons">
                            <tr>
                                <th>
                                    <button className="pos-btn">To go</button>
                                </th>
                                <th>
                                    <button className="pos-btn">Tab</button>
                                </th>
                                <th>
                                    <button className="pos-btn">
                                        Delivery
                                    </button>
                                </th>
                                <th>
                                    <button className="pos-btn">Number</button>
                                </th>
                            </tr>
                        </table>
                    </div>
                    <div className="ten wide column menus-container">s</div>
                </div>
            </div>
        );
    }
}
export default Register;
