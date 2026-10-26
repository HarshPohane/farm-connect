
import { useState } from "react";
import transportData from "../utils/Transport.json";
import "./Transport.css";

function Transport() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const locations = [
    ...new Set(transportData.map((item) => item.location)),
  ];

  const filteredTransport = transportData.filter((item) => {
    const searchText = search.trim().toLowerCase();

    const matchesSearch =
      item.name.toLowerCase().includes(searchText) ||
      item.type.toLowerCase().includes(searchText) ||
      item.location.toLowerCase().includes(searchText);

    const matchesType =
      selectedType === "All" || item.type === selectedType;

    const matchesLocation =
      selectedLocation === "All" ||
      item.location === selectedLocation;

    return matchesSearch && matchesType && matchesLocation;
  });

  const handleBooking = (item) => {
    const confirmed = window.confirm(
      `Vehicle: ${item.name}\n` +
        `Location: ${item.location}\n` +
        `Price per day: ₹${item.price.toLocaleString("en-IN")}\n` +
        `Price per km: ₹${item.pricePerKm ?? "N/A"}\n\n` +
        "Do you want to save this booking request?"
    );

    if (!confirmed) return;

    try {
      const existingBookings = JSON.parse(
        localStorage.getItem("transportBookings") || "[]"
      );

      const booking = {
        bookingId: `${item.id}-${Date.now()}`,
        vehicleId: item.id,
        vehicleName: item.name,
        type: item.type,
        location: item.location,
        price: item.price,
        pricePerKm: item.pricePerKm ?? null,
        status: "Pending",
        bookedAt: new Date().toISOString(),
      };

      localStorage.setItem(
        "transportBookings",
        JSON.stringify([...existingBookings, booking])
      );

      alert("Your booking request has been saved successfully!");
    } catch {
      alert("Unable to save the booking. Please try again.");
    }
  };

  const resetFilters = () => {
    setSearch("");
    setSelectedType("All");
    setSelectedLocation("All");
  };

  return (
    <main className="transport-page">
      {/* Hero Section */}
      <section className="transport-hero">
        <div className="transport-hero-container">
          <div className="transport-hero-content">
            <span className="transport-hero-badge">
              <img src="/images/transport-icon.png" alt="" />
              FARMCONNECT TRANSPORT SERVICES
            </span>

            <h1>
              Reliable Transport
              <span> for Every Farmer</span>
            </h1>

            <p>
              Move your crops, farming equipment and agricultural
              materials with ease. Find tractors, trucks, trailers
              and pickup vehicles for your transportation needs.
            </p>

            <div className="transport-hero-actions">
              <a
                href="#transport-list"
                className="transport-hero-primary"
              >
                Explore Vehicles <span>→</span>
              </a>

              <a
                href="#transport-info"
                className="transport-hero-secondary"
              >
                How It Works
              </a>
            </div>

            <div className="transport-hero-stats">
              <div className="transport-hero-stat">
                <h3>{transportData.length}+</h3>
                <p>Vehicle Options</p>
              </div>

              <div className="transport-hero-stat">
                <h3>Flexible</h3>
                <p>Rental Pricing</p>
              </div>

              <div className="transport-hero-stat">
                <h3>Simple</h3>
                <p>Vehicle Selection</p>
              </div>
            </div>
          </div>

          <div className="transport-hero-visual">
            <div className="transport-hero-image">
              <img
                src="/images/truck.png"
                alt="Truck for farm goods transportation"
              />
            </div>

            <div className="transport-hero-info">
              <img src="/images/vehicle.png" alt="" />
              <div>
                <strong>Farm Transport</strong>
                <p>For agricultural needs</p>
              </div>
            </div>

            <div className="transport-hero-floating">
              <img src="/images/crops.png" alt="" />
              <div>
                <strong>Made for Farmers</strong>
                <p>From farm to market</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Listing Section */}
      <section className="transport-content" id="transport-list">
        <div className="transport-heading">
          <div>
            <span className="transport-small-title">
              OUR TRANSPORT SERVICES
            </span>

            <h2>Find Your Farm Transport</h2>

            <p>
              Choose a suitable vehicle according to your location,
              load capacity and budget.
            </p>
          </div>

          <span className="transport-count">
            {filteredTransport.length} vehicles found
          </span>
        </div>

        {/* Search and Filters */}
        <div className="transport-filters">
          <div className="transport-search">
            <img src="/images/search.png" alt="" />

            <input
              type="search"
              placeholder="Search vehicle or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search vehicles"
            />
          </div>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            aria-label="Filter by vehicle type"
          >
            <option value="All">All Vehicle Types</option>
            <option value="Tractor">Tractor</option>
            <option value="Truck">Truck</option>
            <option value="Trailer">Trailer</option>
            <option value="Pickup">Pickup</option>
          </select>

          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            aria-label="Filter by location"
          >
            <option value="All">All Locations</option>

            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>

          <button
            type="button"
            className="transport-reset-btn"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>

        {/* Vehicle Results */}
        <div className="transport-list">
          {filteredTransport.length > 0 ? (
            filteredTransport.map((item) => (
              <article className="transport-item" key={item.id}>
                <div className="transport-image">
                  <img
                    src={item.image}
                    alt={item.name}
                    loading="lazy"
                  />

                  <span className="transport-type">
                    {item.type}
                  </span>
                </div>

                <div className="transport-details">
                  <div className="transport-title-row">
                    <div>
                      <h3>{item.name}</h3>

                      <p className="transport-location">
                        <img src="/images/location.png" alt="" />
                        {item.location}
                      </p>
                    </div>

                    <div className="transport-day-price">
                      <strong>
                        ₹{item.price.toLocaleString("en-IN")}
                      </strong>
                      <span>per day</span>
                    </div>
                  </div>

                  <p className="transport-description">
                    Suitable for farm produce, agricultural supplies
                    and transportation of farming materials.
                  </p>

                  <div className="transport-specifications">
                    <div className="transport-spec">
                      <img src="/images/price.png" alt="" />
                      <span className="transport-spec-label">
                        Distance Rate
                      </span>
                      <strong>
                        {item.pricePerKm != null
                          ? `₹${item.pricePerKm}/km`
                          : "Not specified"}
                      </strong>
                    </div>

                    <div className="transport-spec">
                      <img src="/images/capacity.png" alt="" />
                      <span className="transport-spec-label">
                        Load Capacity
                      </span>
                      <strong>
                        {item.capacityTons != null
                          ? `${item.capacityTons} tons`
                          : "Not specified"}
                      </strong>
                    </div>

                    <div className="transport-spec">
                      <img src="/images/vehicle.png" alt="" />
                      <span className="transport-spec-label">
                        Vehicle Type
                      </span>
                      <strong>{item.type}</strong>
                    </div>
                  </div>

                  <div className="transport-bottom">
                    <p>
                      <span className="transport-status-dot"></span>
                      Available for selection
                    </p>

                    <button
                      type="button"
                      onClick={() => handleBooking(item)}
                    >
                      Book Transport <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="transport-empty">
              <img src="/images/search.png" alt="" />
              <h3>No transport found</h3>

              <p>
                Try another vehicle name, type or location.
              </p>

              <button type="button" onClick={resetFilters}>
                Show All Vehicles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="transport-info" id="transport-info">
        <div className="transport-info-heading">
          <span className="transport-small-title">
            SIMPLE BOOKING PROCESS
          </span>

          <h2>How Farm Transport Works</h2>

          <p>
            Find and select transport for your agricultural needs
            in three simple steps.
          </p>
        </div>

        <div className="transport-steps">
          <div className="transport-step">
            <img src="/images/vehicle.png" alt="" />
            <span className="transport-step-number">01</span>
            <h3>Choose a Vehicle</h3>
            <p>
              Browse tractors, trucks, trailers and pickup vehicles.
            </p>
          </div>

          <div className="transport-step">
            <img src="/images/price.png" alt="" />
            <span className="transport-step-number">02</span>
            <h3>Compare Pricing</h3>
            <p>
              Check daily rental rates, distance charges and
              load capacity before selecting a vehicle.
            </p>
          </div>

          <div className="transport-step">
            <img src="/images/booking.png" alt="" />
            <span className="transport-step-number">03</span>
            <h3>Request Booking</h3>
            <p>
              Select your preferred vehicle and save your
              booking request.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="transport-benefits">
        <div className="transport-benefits-content">
          <span className="transport-small-title">
            WHY FARMCONNECT?
          </span>

          <h2>Transport Made Easier for Farmers</h2>

          <p>
            FarmConnect helps farmers explore transportation options
            for moving harvested crops to markets and transporting
            agricultural materials between locations.
          </p>
        </div>

        <ul className="transport-benefits-list">
          <li>
            <img src="/images/check.png" alt="" />
            Multiple vehicle types in one place
          </li>

          <li>
            <img src="/images/check.png" alt="" />
            Search and filter by location
          </li>

          <li>
            <img src="/images/check.png" alt="" />
            Clear daily and per-kilometre rates
          </li>

          <li>
            <img src="/images/check.png" alt="" />
            Simple vehicle selection process
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Transport;