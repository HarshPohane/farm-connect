
import "./TransportCard.css";
import locationIcon from "./icon-images/location-pin.png";
import deliveryIcon from "./icon-images/fast-delivery.png";

function TransportCard({ item, onBook }) {
  return (
    <article className="transport-item">

      <div className="transport-image">
        <img src={item.image} alt={item.name} />

        <span className="transport-type">
          {item.type}
        </span>
      </div>

      <div className="transport-details">

        <h3>{item.name}</h3>

        <p className="transport-location">
          <img src={locationIcon} alt="Location" />
          {item.location}
        </p>

        <p className="transport-description">
          Suitable for agricultural goods and farming materials.
        </p>

        <div className="transport-specifications">

          <div className="transport-spec">
            <span>Distance Rate</span>
            <strong>
              ₹{item.pricePerKm ?? "N/A"}/km
            </strong>
          </div>

          <div className="transport-spec">
            <span>Load Capacity</span>
            <strong>
              {item.capacityTons ?? "N/A"} tons
            </strong>
          </div>

          <div className="transport-spec">
            <img src={deliveryIcon} alt="" />
            <strong>{item.type}</strong>
          </div>

        </div>

        <div className="transport-bottom">

          <div className="transport-day-price">
            <strong>
              ₹{Number(item.price).toLocaleString("en-IN")}
            </strong>
            <span>per day</span>
          </div>

          <button
            type="button"
            onClick={() => onBook(item)}
          >
            Book Transport →
          </button>

        </div>

      </div>
    </article>
  );
}

export default TransportCard;
