import "./CarCard.css";

function CarCard({ image, name, price }) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>{price}</p>

      <button>View Details</button>
    </div>
  );
}

export default CarCard;