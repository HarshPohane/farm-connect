import { useState } from "react";
import transportData from "../utils/Transport.json";
import TransportCard from "../component/TransportCard";
import "./Transport.css";

function Transport() {
  const [search, setSearch] = useState("");

  const filteredTransport = transportData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.location.toLowerCase().includes(search.toLowerCase()) ||
    item.type.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="transport-page">

      {/* Hero Section */}
      <section className="transport-hero">
        <div className="transport-hero-content">
          <span className="transport-tag">
            FARMCONNECT TRANSPORT
          </span>

          <h1>
            Reliable Transport for{" "}
            <span>Your Farm</span>
          </h1>

          <p>
            Move your crops, seeds, fertilizers and farming
            materials safely with affordable transport services.
            Find suitable vehicles for your agricultural needs.
          </p>

          <a href="#transport-list" className="transport-btn">
            Explore Transport
          </a>

          <div className="transport-hero-points">
            <span>✓ Easy Vehicle Search</span>
            <span>✓ Affordable Options</span>
            <span>✓ Farm-Friendly Transport</span>
          </div>
        </div>

        <div className="transport-hero-image">
          <img
            src="/images/tractor.png"
            alt="Tractor used for agricultural transport"
          />
        </div>
      </section>

      {/* Transport Information */}
      <section className="transport-info">
        <div className="transport-heading">
          <span>TRANSPORT SOLUTIONS</span>
          <h2>Transport for Every Farming Need</h2>
          <p>
            Choose a suitable vehicle for carrying agricultural
            products, equipment and other farm materials.
          </p>
        </div>

        <div className="transport-info-list">
          <div className="transport-info-item">
            <div className="transport-info-icon">🌾</div>
            <h3>Crop Transportation</h3>
            <p>
              Transport harvested crops, grains and vegetables
              from farms to markets or storage facilities.
            </p>
          </div>

          <div className="transport-info-item">
            <div className="transport-info-icon">🚜</div>
            <h3>Farm Equipment</h3>
            <p>
              Find transport options for moving agricultural
              machinery and farming equipment.
            </p>
          </div>

          <div className="transport-info-item">
            <div className="transport-info-icon">📦</div>
            <h3>Farm Supplies</h3>
            <p>
              Move seeds, fertilizers, tools and other
              agricultural materials when needed.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Transport List */}
      <section className="transport-services">
        <div className="transport-heading">
          <span>AVAILABLE TRANSPORT</span>
          <h2>Find the Right Transport</h2>
          <p>
            Search vehicles by name, transport type or location.
          </p>
        </div>

        <div className="transport-search">
          <input
            type="text"
            placeholder="Search vehicle, type or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search transport services"
          />

          {search && (
            <button
              type="button"
              className="transport-clear-btn"
              onClick={() => setSearch("")}
            >
              Clear Search
            </button>
          )}
        </div>

        <p className="transport-results">
          {filteredTransport.length} transport service
          {filteredTransport.length !== 1 ? "s" : ""} found
        </p>

        <div id="transport-list" className="transport-list">
          {filteredTransport.length > 0 ? (
            filteredTransport.map((item) => (
              <TransportCard
                key={item.id}
                transport={item}
              />
            ))
          ) : (
            <div className="transport-empty">
              <h3>No Transport Found</h3>
              <p>
                Try another vehicle name, type or location.
              </p>
              <button
                type="button"
                onClick={() => setSearch("")}
                className="transport-reset-btn"
              >
                View All Transport
              </button>
            </div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="transport-how">
        <div className="transport-heading">
          <span>SIMPLE PROCESS</span>
          <h2>How Transport Booking Works</h2>
          <p>
            Find the right transport for your farm in three steps.
          </p>
        </div>

        <div className="transport-steps">
          <div className="transport-step">
            <span className="transport-step-number">01</span>
            <h3>Search Vehicles</h3>
            <p>
              Browse available vehicles and search by type or
              location.
            </p>
          </div>

          <div className="transport-step">
            <span className="transport-step-number">02</span>
            <h3>Choose Transport</h3>
            <p>
              Compare the available options and select a vehicle
              that suits your farming requirements.
            </p>
          </div>

          <div className="transport-step">
            <span className="transport-step-number">03</span>
            <h3>Contact Provider</h3>
            <p>
              Discuss availability, price, pickup location and
              delivery requirements with the provider.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="transport-benefits">
        <div className="transport-benefits-content">
          <span className="transport-tag">
            WHY FARMCONNECT?
          </span>

          <h2>Making Farm Transportation Easier</h2>

          <p>
            FarmConnect helps farmers explore transport options
            in one place, making it easier to find vehicles for
            daily agricultural activities.
          </p>

          <ul>
            <li>Search transport services by location.</li>
            <li>Explore different vehicle types.</li>
            <li>Find options for crops and farm supplies.</li>
            <li>Connect with providers to discuss availability.</li>
          </ul>
        </div>

        <div className="transport-benefits-image">
          <img
            src="/images/machinery-field.jpg"
            alt="Agricultural machinery working in a field"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="transport-help">
        <h2>Need Transport for Your Harvest?</h2>
        <p>
          Find suitable vehicles and connect with transport
          providers for your farming needs.
        </p>

        <div className="transport-help-actions">
          <a href="#transport-list" className="transport-help-btn">
            Find Transport
          </a>

          <a href="/contact" className="transport-contact-btn">
            Contact Us
          </a>
        </div>
      </section>

    </div>
  );
}

export default Transport;
