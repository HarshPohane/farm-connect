import { useState } from "react";
import transportData from "../utils/Transport.json";
import "./Transport.css";

function Transport() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const filteredTransport = transportData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase()) ||
      item.type.toLowerCase().includes(search.toLowerCase());

    const matchesType =
      selectedType === "All" || item.type === selectedType;

    return matchesSearch && matchesType;
  });

  const handleBooking = (item) => {
    alert(`You selected ${item.name} for transport booking.`);
  };

  return (
    <div className="transport-page">
      <section className="transport-hero">
        <span className="transport-tag">FARMCONNECT TRANSPORT</span>

        <h1>Move Your Farm Goods Easily</h1>

        <p>
          Find reliable tractors, trailers and trucks to transport
          crops, equipment and agricultural materials.
        </p>

        <div className="transport-stats">
          <div>
            <h3>{transportData.length}+</h3>
            <span>Transport Options</span>
          </div>

          <div>
            <h3>Per KM</h3>
            <span>Flexible Pricing</span>
          </div>

          <div>
            <h3>Easy</h3>
            <span>Booking Process</span>
          </div>
        </div>
      </section>

      <section className="transport-content">
        <div className="transport-heading">
          <div>
            <span className="transport-small-title">OUR TRANSPORT SERVICES</span>
            <h2>Find Your Transport</h2>
            <p>Choose a vehicle according to your load and budget.</p>
          </div>

          <span className="transport-count">
            {filteredTransport.length} vehicles found
          </span>
        </div>

        <div className="transport-filters">
          <input
            type="text"
            placeholder="Search by vehicle or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="All">All Vehicles</option>
            <option value="Tractor">Tractor</option>
            <option value="Truck">Truck</option>
            <option value="Trailer">Trailer</option>
            <option value="Pickup">Pickup</option>
          </select>
        </div>

        <div className="transport-list">
          {filteredTransport.length > 0 ? (
            filteredTransport.map((item) => (
              <div className="transport-item" key={item.id}>
                <div className="transport-image">
                  <img src={item.image} alt={item.name} />

                  <span className="transport-type">
                    {item.type}
                  </span>
                </div>

                <div className="transport-details">
                  <div className="transport-title-row">
                    <div>
                      <h3>{item.name}</h3>

                      <p className="transport-location">
                        <span>Location:</span> {item.location}
                      </p>
                    </div>

                    <div className="transport-day-price">
                      <strong>₹{item.price.toLocaleString("en-IN")}</strong>
                      <span>per day</span>
                    </div>
                  </div>

                  <div className="transport-specifications">
                    <div>
                      <span className="transport-spec-label">
                        Distance Rate
                      </span>
                      <strong>₹{item.pricePerKm}/km</strong>
                    </div>

                    <div>
                      <span className="transport-spec-label">
                        Load Capacity
                      </span>
                      <strong>{item.capacityTons} tons</strong>
                    </div>

                    <div>
                      <span className="transport-spec-label">
                        Vehicle Type
                      </span>
                      <strong>{item.type}</strong>
                    </div>
                  </div>

                  <div className="transport-bottom">
                    <p>Suitable for farm goods and materials</p>

                    <button
                      type="button"
                      onClick={() => handleBooking(item)}
                    >
                      Book Transport <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="transport-empty">
              <h3>No transport found</h3>
              <p>Try another vehicle name, type or location.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Transport;