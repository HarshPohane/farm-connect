import { Link } from "react-router-dom";
import "./Equipmentcard.css";

function EquipmentCard({ equipment }) {
  return (
    <article className="equipment-card">
      <div className="equipment-card-image">
        <img src={equipment.image} alt={equipment.name} />
      </div>

      <div className="equipment-card-content">
        <span className="equipment-category">{equipment.category}</span>
        <h3>{equipment.name}</h3>

        <div className="equipment-detail">
          <span>📍</span>
          <p>{equipment.location}</p>
        </div>

        <div className="equipment-detail">
          <span>⏱️</span>
          <p>{equipment.hours}</p>
        </div>

        <div className="equipment-card-bottom">
          <div className="equipment-price">
            <h4>₹{equipment.price}</h4>
            <span>per day</span>
          </div>

          <div className="equipment-rating">
            <span>★</span>
            <strong>{equipment.rating}</strong>
          </div>
        </div>

        <Link to="/bookings" className="equipment-book-btn">
          Book Now
        </Link>
      </div>
    </article>
  );
}

export default EquipmentCard;
