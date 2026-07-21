import "./Hero.css";
import hero from "../assets/hero.png";

import photo1 from "../assets/photo1.jpg";
import photo2 from "../assets/photo2.jpg";
import photo3 from "../assets/photo3.jpg";
import photo5 from "../assets/photo5.jpg";
import photo6 from "../assets/photo6.jpg";

import CarCard from "./CarCard";

function Hero() {

  const cars = [
    {
      image: photo1,
      name: "BMW X5",
      price: "₹75,00,000",
    },
    {
      image: photo2,
      name: "Audi A6",
      price: "₹68,00,000",
    },
    {
      image: photo3,
      name: "Mercedes C-Class",
      price: "₹72,00,000",
    },
    {
      image: photo5,
      name: "Tesla Model 3",
      price: "₹60,00,000",
    },
    {
      image: photo6,
      name: "Toyota Fortuner",
      price: "₹45,00,000",
    },
  ];

  return (
    <>
      <section className="hero">

        <div className="hero-text">
          <h1>Elite Motors</h1>

          <h2>Drive Your Dream</h2>

          <p>
            Discover premium cars with luxury,
            comfort and performance.
          </p>

          <button>Explore Cars</button>
        </div>

        <div className="hero-image">
          <img src={hero} alt="Hero" />
        </div>

      </section>

      <h2 className="heading">Featured Cars</h2>

      <div className="car-list">

        {cars.map((car, index) => (
          <CarCard
            key={index}
            image={car.image}
            name={car.name}
            price={car.price}
          />
        ))}

      </div>
    </>
  );
}

export default Hero;