import "./TransportCard.css";

function TransportCard({ item, onBook }) {
  return (
    <div className="transport-card">
      <div className="transport-card-image">
        <img src={item.image} alt={item.name} />

        <span className="transport-card-type">
          {item.type}
        </span>
      </div>

      <div className="transport-card-content">
        <div className="transport-card-header">
          <div>
            <h3>{item.name}</h3>
            <p className="transport-card-location">
              <span>⌖</span> {item.location}
            </p>
          </div>

          <div className="transport-card-price">
            <strong>₹{item.price.toLocaleString("en-IN")}</strong>
            <span>per day</span>
          </div>
        </div>

        <div className="transport-card-info">
          <div className="transport-card-info-item">
            <span>Distance Rate</span>
            <strong>₹{item.pricePerKm}/km</strong>
          </div>

          <div className="transport-card-info-item">
            <span>Load Capacity</span>
            <strong>{item.capacityTons} tons</strong>
          </div>
        </div>

        <div className="transport-card-footer">
          <p>Reliable farm goods transportation</p>

          <button
            type="button"
            onClick={() => onBook(item)}
          >
            Book Transport <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransportCard;