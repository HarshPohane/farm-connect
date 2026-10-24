import "./TransportCard.css";

function TransportCard({ transport }) {
  return (
    <div className="transport-card">

      <div className="transport-card-image">
        <img
          src={transport.image}
          alt={transport.name}
        />

        <span className="transport-card-type">
          {transport.type}
        </span>
      </div>

      <div className="transport-card-content">
        <h3>{transport.name}</h3>

        <p className="transport-card-location">
          <span>📍</span> {transport.location}
        </p>

        <p className="transport-card-description">
          Suitable for transporting crops, farming materials
          and agricultural products.
        </p>

        <div className="transport-card-price">
          <div>
            <span className="transport-price-label">
              Rental Price
            </span>

            <h4>
              ₹{transport.price}
              <span> / day</span>
            </h4>
          </div>
        </div>

        <a
          href="/contact"
          className="transport-card-btn"
        >
          Contact Provider <span>→</span>
        </a>
      </div>

    </div>
  );
}

export default TransportCard;
