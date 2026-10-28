
import "./TransportCard.css";

function TransportCard({ item, onBook }) {
  return (
    <div className="transport-card">
      {/* Transport Image */}
      <div className="transport-card-image">
        <img src={item.image} alt={item.name} loading="lazy" />

        <span className="transport-card-type">
          {item.type}
        </span>

        <span className="transport-card-badge">
          ✓ Available for Rent
        </span>
      </div>

      {/* Transport Details */}
      <div className="transport-card-content">
        <div className="transport-card-header">
          <div className="transport-card-title">
            <h3>{item.name}</h3>

            <p className="transport-card-location">
              <img
                src="/images/location.png"
                alt="Location"
              />
              {item.location}
            </p>
          </div>

          <div className="transport-card-price">
            <strong>
              ₹{Number(item.price).toLocaleString("en-IN")}
            </strong>
            <span>per day</span>
          </div>
        </div>

        <p className="transport-card-description">
          Reliable transportation for your farm goods
          and agricultural needs.
        </p>

        {/* Transport Specifications */}
        <div className="transport-card-info">
          <div className="transport-card-info-item">
            <span className="transport-info-icon">↗</span>
            <div>
              <p>Distance Rate</p>
              <strong>₹{item.pricePerKm}/km</strong>
            </div>
          </div>

          <div className="transport-card-info-item">
            <span className="transport-info-icon">▣</span>
            <div>
              <p>Load Capacity</p>
              <strong>{item.capacityTons} Tons</strong>
            </div>
          </div>
        </div>

        {/* Booking Footer */}
        <div className="transport-card-footer">
          <span className="transport-card-note">
            <span className="transport-status-dot"></span>
            Suitable for farm transport
          </span>

          <button
            type="button"
            className="transport-book-button"
            onClick={() => onBook(item)}
          >
            Book Transport
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TransportCard;
