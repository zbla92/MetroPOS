import itemList from '../data/items/items.json'
import '../css/register.css'
import React from 'react';
import Clock from './Clock';

class Register extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <div className="ui grid">
                    <div className="sixteen wide column info-bar">
                        <div className="ui  three column grid">
                            <div className="column"></div>
                            <div className="column clock"><Clock /></div>
                            <div className="column"></div>
                        </div>
                    </div>
                    <div className="ten wide column"></div>
                    <div className="six wide column"></div>
                </div>
            </div>
        )
    }
}
export default Register; 