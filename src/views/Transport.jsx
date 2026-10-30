
import { useState } from "react";
import transportData from "../utils/Transport.json";

import deliveryIcon from "../component/icon-images/fast-delivery.png";
import searchIcon from "../component/icon-images/serach.png";
import locationIcon from "../component/icon-images/location-pin.png";
import connectIcon from "../component/icon-images/connect.png";
import chooseIcon from "../component/icon-images/choose.png";

import "./Transport.css";

function Transport() {
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  // Get all available locations
  const locations = [
    ...new Set(transportData.map((item) => item.location)),
  ];

  // Search and filter vehicles
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

  // Confirm and save transport booking
  const handleBooking = (transport) => {
    const confirmed = window.confirm(
      `Confirm Your Transport Booking?\n\n` +
      `Vehicle: ${transport.name}\n` +
      `Type: ${transport.type}\n` +
      `Location: ${transport.location}\n` +
      `Price per day: ₹${Number(transport.price).toLocaleString("en-IN")}\n` +
      `Price per km: ₹${transport.pricePerKm ?? "N/A"}\n\n` +
      `Click OK to confirm your booking.`
    );

    if (!confirmed) {
      return;
    }

    try {
      const oldBookings = JSON.parse(
        localStorage.getItem("farmBookings") || "[]"
      );

      const newBooking = {
        id: Date.now(),
        type: "Transport",
        name: transport.name,
        location: transport.location,
        price: Number(transport.price),
        bookingDate: new Date().toLocaleDateString("en-IN"),
        status: "Confirmed",
      };

      localStorage.setItem(
        "farmBookings",
        JSON.stringify([...oldBookings, newBooking])
      );

      alert(
        `Transport Booking Confirmed Successfully!\n\n` +
        `Vehicle: ${transport.name}\n` +
        `Booking Status: Confirmed`
      );
    } catch (error) {
      console.error("Booking Error:", error);
      alert("Unable to save booking. Please try again.");
    }
  };

  // Reset all filters
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
              <img src={deliveryIcon} alt="" />
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
                src="https://imgs.search.brave.com/4lraUU5NmFGSS6-NyH2AzaKouMsbSiQ-6mejb6vzmPo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTk3/NTI5MDc5NS9waG90/by9jYXJnby10cmFu/c3BvcnRhdGlvbi1i/eS10cnVjay1zaGlw/cGluZy1jaGVja2xp/c3QuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPXlmNnZTcFdV/Nzl0WDQ4dlowVW1a/MWItZ1RQZlZvUGVL/VFh3cG8wYWoyNUk9"
                alt="Truck for farm goods transportation"
              />
            </div>

            <div className="transport-hero-info">
              <img src={connectIcon} alt="FarmConnect logo" />
              <div>
                <strong>Farm Transport</strong>
                <p>For agricultural needs</p>
              </div>
            </div>

            <div className="transport-hero-floating">
              <img src={chooseIcon} alt="Farm field selection" />
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
            <img src={searchIcon} alt="Search" />

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
                        <img src={locationIcon} alt="Location" />
                        {item.location}
                      </p>
                    </div>

                    <div className="transport-day-price">
                      <strong>
                        ₹{Number(item.price).toLocaleString("en-IN")}
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
                      <span className="transport-spec-icon">₹</span>
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
                      <span className="transport-spec-icon">▣</span>
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
                      <img src={deliveryIcon} alt="Vehicle type" />
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
              <img src={searchIcon} alt="Search" />
              <h3>No transport found</h3>

              <p>
                Try another vehicle name, type or location.
              </p>

              <button
                type="button"
                onClick={resetFilters}
              >
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
            <img src={connectIcon} alt="Select vehicle" />
            <span className="transport-step-number">01</span>
            <h3>Choose a Vehicle</h3>
            <p>
              Browse tractors, trucks, trailers and pickup vehicles.
            </p>
          </div>

          <div className="transport-step">
            <span className="transport-spec-icon transport-step-icon">
              ₹
            </span>
            <span className="transport-step-number">02</span>
            <h3>Compare Pricing</h3>
            <p>
              Check daily rental rates, distance charges and
              load capacity before selecting a vehicle.
            </p>
          </div>

          <div className="transport-step">
            <img src={chooseIcon} alt="Book service" />
            <span className="transport-step-number">03</span>
            <h3>Confirm Booking</h3>
            <p>
              Select your preferred vehicle and confirm your
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
            <img src={chooseIcon} alt="Check" />
            Multiple vehicle types in one place
          </li>

          <li>
            <img src={chooseIcon} alt="Check" />
            Search and filter by location
          </li>

          <li>
            <img src={chooseIcon} alt="Check" />
            Clear daily and per-kilometre rates
          </li>

          <li>
            <img src={chooseIcon} alt="Check" />
            Simple vehicle selection process
          </li>
        </ul>

      </section>

    </main>
  );
}

export default Transport;
