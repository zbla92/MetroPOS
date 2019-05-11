import '../css/menuButtons.css';
import React from 'react';
import submenu from '../data/menu.json';
import MakeThatButton from '../Components/MakeThatButton';

function MenuButtons({setActiveMenu}) {
    const obj = Object.keys(submenu);
    console.log(Object.values(submenu)[0])
  // Ovdje sam radio destructuring na props
  const renderButton = obj.map(e => {
    return <MakeThatButton setActiveMenu={setActiveMenu} btnName={e} id={obj.indexOf(e)} submenu={Object.values(submenu)[obj.indexOf(e)]}/>
});

return <div>{renderButton}</div>;
};
export default MenuButtons;
