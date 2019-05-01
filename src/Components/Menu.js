import "../css/MainMenu.css";
import React from "react";

const Menu = ({ deLogging }) => {
  return (
    <div>
      <div class="ui grid">
        <div class="three column row">
          <div class="column">
            <div className="register-btn" />
          </div>
          <div class="column" />
          <div class="column" />
        </div>
        <div class="three column row">
          <div class="column" />
          <div class="column" />
          <div class="column" />
        </div>
      </div>
    </div>
  );
};
export default Menu;
