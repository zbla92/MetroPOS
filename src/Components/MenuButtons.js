import '../css/menuButtons.css';
import React from 'react';
import submenu from '../data/menu.json';
import MakeThatButton from '../Components/MakeThatButton';

function MenuButtons({ setActiveMenu }) {
    const obj = Object.keys(submenu);
    // Ovdje sam radio destructuring na props
    const renderButton = obj.map(e => {
        return (
            <MakeThatButton
                setActiveMenu={setActiveMenu}
                btnName={e}
                key={obj.indexOf(e)}
                id={obj.indexOf(e)}
                submenu={Object.values(submenu)[obj.indexOf(e)]}
            />
        );
    });

    return renderButton;
}
export default MenuButtons;
