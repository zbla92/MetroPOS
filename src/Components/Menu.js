import "../css/MainMenu.css";
import React from "react";

const Menu = ({ deLogging }) => {
  return (
    <div>
      <div className="ui grid">
        <div className="three column row">
          <div className="column">
            <div className="register-btn" />
          </div>
          <div className="column" />
          <div className="column" />
        </div>
        <div className="three column row">
          <div className="column" />
          <div className="column" />
          <div className="column" />
        </div>
      </div>
    </div>
  );
};
export default Menu;
