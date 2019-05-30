import './tables.css';
import React from 'react';
import RenderTables from './renderTable/RenderTable';

export default class Tables extends React.Component {
    constructor(props) {
        super(props);
    }

    renderChecks(arrayOfChecks, updateOrderedItems) {
        if (arrayOfChecks.length > 0) {
            const result = arrayOfChecks.map(e => {
                return <RenderTables updateOrderedItems={updateOrderedItems} table={e} key={e.id} setCheckID={this.props.setCheckID} />;
            });
            return result;
        }
    }

    render() {
        return (
            <div className="tables">
                <div className="tables-heading">Opened Tables</div>
                <div className="exit-tables">
                    <i className="x icon" />
                </div>
                <div className="table-injection-place">
                    {this.renderChecks(this.props.openedTables, this.props.updateOrderedItems)}
                </div>
            </div>
        );
    }
}
