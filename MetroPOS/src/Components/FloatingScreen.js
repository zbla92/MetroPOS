import '../css/floatingLogo.css';
import React from 'react';
import Clock from './Clock';

function FloatingScreen({ logging }) {
    return (
        <div className="clock-style">
            <Clock />
        </div>
    );
}

export default FloatingScreen;
