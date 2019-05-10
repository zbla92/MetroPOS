import '../css/menuButtons.css';
import React from 'react';
import submenu from '../data/menu.json';

function MenuButtons({ setActiveMenu }) {
    return (
        <div>
            <div className="button-row">
                <button
                    id="drinks-btn"
                    className="btn-top" 
                    submenu='drinks'
                    onClick={e => {
                        setActiveMenu(submenu.beverages);
                    }}
                >
                    Drinks
                </button>
                <button
                    id="apetizers-btn"
                    className="btn-top"
                    submenu='pizzas'
                    onClick={e => {
                        setActiveMenu(submenu.pizzas);
                    }}
                >
                    Apetizers
                </button>
                <button
                    id="salads-btn"
                    className="btn-top"
                    submenu='salads'
                    onClick={e => {
                        setActiveMenu(submenu.salads);
                    }}
                >
                    Salads
                </button>
                <button
                    id="sandwitch-btn"
                    className="btn-top"
                    onClick={e => {
                        setActiveMenu(e.target.id);
                    }}
                >
                    Sandwitches
                </button>
                <button
                    id="burgers-btn"
                    className="btn-top"
                    onClick={e => {
                        setActiveMenu(e.target.id);
                    }}
                >
                    Burgers
                </button>
                <button
                    id="pizzas-btn"
                    className="btn-top"
                    onClick={e => {
                        setActiveMenu(e.target.id);
                    }}
                >
                    Pizza
                </button>
                <button
                    id="soup-btn"
                    className="btn-top"
                    onClick={e => {
                        setActiveMenu(e.target.id);
                    }}
                >
                    Soups
                </button>
                <button
                    id="kids-menu-btn"
                    className="btn-top"
                    onClick={e => {
                        setActiveMenu(e.target.id);
                    }}
                >
                    Kids menu
                </button>
                <button
                    id="cake-btn"
                    className="btn-top"
                    onClick={e => {
                        setActiveMenu(e.target.id);
                    }}
                >
                    Cake
                </button>
            </div>
            <div className="button-row">
                <button
                    id="flat-bread-btn"
                    className="btn-top"
                    onClick={e => {
                        setActiveMenu(e.target.id);
                    }}
                >
                    Flat Breads
                </button>
                <button
                    id="dinner-plates-btn"
                    className="btn-top"
                    onClick={e => {
                        setActiveMenu(e.target.id);
                    }}
                >
                    Dinner Plates
                </button>
                <button
                    id="dessert-btn"
                    className="btn-top"
                    onClick={e => {
                        setActiveMenu(e.target.id);
                    }}
                >
                    Dessert
                </button>
                <button
                    id="vegetarian-btn"
                    className="btn-top"
                    onClick={e => {
                        setActiveMenu(e.target.id);
                    }}
                >
                    Vegetarian
                </button>
                <button
                    id="pasta-btn"
                    className="btn-top"
                    onClick={e => {
                        setActiveMenu(e.target.id);
                    }}
                >
                    Pasta
                </button>
                <button
                    id="alchocol-btn"
                    className="btn-top"
                    onClick={e => {
                        setActiveMenu(e.target.id);
                    }}
                >
                    Alcohol
                </button>
                <button
                    id="chicken-btn"
                    className="btn-top"
                    onClick={e => {
                        setActiveMenu(e.target.id);
                    }}
                >
                    Chicken
                </button>
                <button
                    id="steak-btn"
                    className="btn-top"
                    onClick={e => {
                        setActiveMenu(e.target.id);
                    }}
                >
                    Steak
                </button>
                <button
                    id="palstic-btn"
                    className="btn-top"
                    onClick={e => {
                        setActiveMenu(e.target.id);
                    }}
                >
                    Plastic
                </button>
            </div>
        </div>
    );
}
export default MenuButtons;
