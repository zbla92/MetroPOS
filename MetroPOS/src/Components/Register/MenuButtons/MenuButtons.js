import './menuButtons.css';
import React from 'react';
import MakeThatButton from './MakeThatButton/MakeThatButton';

function MenuButtons({ setActiveMenu, menus }) {
    const obj = Object.keys(menus);
    // Ovdje sam radio destructuring na props
    if (menus) {
        const renderButton = obj.map(e => {
            return (
                <MakeThatButton
                    setActiveMenu={setActiveMenu}
                    btnName={e}
                    key={obj.indexOf(e)}
                    id={obj.indexOf(e)}
                    submenu={Object.values(menus)[obj.indexOf(e)]}
                />
            );
        });

        return renderButton;
    } else return <div>loading component will be mounted here </div>;
}
export default MenuButtons;
