import { useState } from "react";
import "./MainContent.css";
import hero from "../assets/hero.png";
import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";

function MainContent() {

  const cars = [
    {
      name: "BMW X5",
      price: "₹75,00,000",
      image: photo1,
    },
    {
      name: "Audi A6",
      price: "₹68,00,000",
      image: photo2,
    },
    {
      name: "Mercedes C-Class",
      price: "₹72,00,000",
      image: photo3,
    },
    {
      name: "Tesla Model 3",
      price: "₹60,00,000",
      image: photo5,
    },
    {
      name: "Toyota Fortuner",
      price: "₹45,00,000",
      image: photo6,
    },
  ];

  return (
    <main className="main">

      <section className="hero">

        <img src={hero} alt="Hero" />

        <h1>Elite Motors</h1>

        <h2>Drive Your Dream</h2>

        <button>Explore Cars</button>

      </section>

      <h2 className="title">Featured Cars</h2>

      <div className="car-container">

        {cars.map((car, index) => (
          <div className="card" key={index}>

            <img src={car.image} alt={car.name} />

            <h3>{car.name}</h3>

            <p>{car.price}</p>

            <button>View Details</button>

          </div>
        ))}

      </div>

    </main>
  );
}

export default MainContent;