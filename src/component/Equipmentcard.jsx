
import "./Equipmentcard.css";

function EquipmentCard({ equipment, onBook }) {
  return (
    <article className="equipment-item">
      <div className="equipment-image">
        <img
          src={equipment.image}
          alt={equipment.name}
          onError={(event) => {
            event.currentTarget.style.visibility = "hidden";
          }}
        />
      </div>

      <div className="equipment-details">
        <span className="equipment-category">
          {equipment.category}
        </span>

        <h3>{equipment.name}</h3>

        <p className="equipment-description">
          {equipment.description}
        </p>

        <div className="equipment-information">
          <span>📍 {equipment.location}</span>
          <span>⚙️ {equipment.power}</span>
          <span className="equipment-available">
            ● {equipment.availability}
          </span>
        </div>
      </div>

      <div className="equipment-booking">
        <p className="equipment-price">
          ₹{Number(equipment.price).toLocaleString("en-IN")}
          <span> / {equipment.unit}</span>
        </p>

        <button
          type="button"
          className="equipment-book-btn"
          onClick={() => onBook(equipment)}
        >
          Book Equipment
        </button>
      </div>
    </article>
  );
}

export default EquipmentCard;
