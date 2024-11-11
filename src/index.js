import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function Header({ isOpen }) {
    return (
        <header className="header">
            <h1>Jeremy's Pizza Co</h1>
            {isOpen && <p className="tagline">Authentic Italian Cuisine</p>}
        </header>
    );
}

function Menu() {
    const pizzaData = [
        { name: "Focaccia", ingredients: "Bread with Italian olive oil and rosemary", price: 6, photoName: "pizzas/focaccia.jpg", soldOut: false },
        { name: "Pizza Margherita", ingredients: "Tomato and mozzarella", price: 10, photoName: "pizzas/margherita.jpg", soldOut: false },
        { name: "Pizza Spinaci", ingredients: "Tomato, mozzarella, spinach, and ricotta cheese", price: 12, photoName: "pizzas/spinaci.jpg", soldOut: false },
        { name: "Pizza Funghi", ingredients: "Tomato, mozzarella, mushrooms, and onion", price: 12, photoName: "pizzas/funghi.jpg", soldOut: false },
        { name: "Pizza Salamino", ingredients: "Tomato, mozzarella, and pepperoni", price: 15, photoName: "pizzas/salamino.jpg", soldOut: true },
        { name: "Pizza Prosciutto", ingredients: "Tomato, mozzarella, ham, arugula, and burrata cheese", price: 18, photoName: "pizzas/prosciutto.jpg", soldOut: false },
    ];
    
    return (
        <main className="menu">
            <h2>Our Menu</h2>
            <section className="pizza-list">
                {pizzaData.map((pizza, index) => (
                    <Pizza 
                        key={index} 
                        name={pizza.name} 
                        ingredients={pizza.ingredients} 
                        price={pizza.price} 
                        photoName={pizza.photoName} 
                        soldOut={pizza.soldOut}
                    />
                ))}
            </section>
        </main>
    );
}

function Pizza({ name, ingredients, price, photoName, soldOut }) {
    return (
        <article className={`pizza ${soldOut ? "sold-out" : ""}`}>
            <img src={photoName} alt={name} className="pizza-image" />
            <div className="pizza-details">
                <h3 className="pizza-name">{name}</h3>
                <p className="pizza-ingredients">{ingredients}</p>
                <p className="pizza-price">Price: ${price}</p>
                {soldOut && <span className="sold-out-badge">Sold Out</span>}
            </div>
        </article>
    );
}

function Footer({ isOpen }) {
    return (
        <footer className="footer">
            {isOpen ? <Order /> : <p>Sorry, we're closed</p>}
        </footer>
    );
}

function Order() {
    return (
        <div className="order-section">
            <p>We're currently open</p>
            <button className="btn">Order</button>
        </div>
    );
}

function App() {
    const currentHours = new Date().getHours();
    const isOpen = currentHours >= 10 && currentHours <= 22;
    
    return (
        <div className="container">
            <Header isOpen={isOpen} />
            <Menu />
            <Footer isOpen={isOpen} />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

