import React from "react";
import "./Home.css";
import shawarmaImg from "./shawarma-pic.png"; // make sure file name matches exactly

function Home() {
  const menuItems = [
    { name: "Classic Chicken Shawarma", price: "₹180" },
    { name: "Beef Shawarma Deluxe", price: "₹220" },
    { name: "Falafel Shawarma Wrap", price: "₹150" },
    { name: "Paneer Shawarma Roll", price: "₹160" },
    { name: "Spicy Lamb Shawarma", price: "₹240" },
    { name: "Shawarma Platter", price: "₹300" }
  ];

  return (
    <div className="home">
      <img src={shawarmaImg} alt="Shawarma" />
      <div>
        <h1>Our Shawarma Menu</h1>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index}>
              <span className="item-name">{item.name}</span>
              <span className="item-price">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;