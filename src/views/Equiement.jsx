
import { useState } from "react";
import equipmentData from "../utils/Equipment.json";
import EquipmentCard from "../component/Equipmentcard.jsx";
import "./Equiement.css";

function Equipment() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Tractors",
    "Harvesters",
    "Cultivation",
    "Sowing"
  ];

  const filteredEquipment = equipmentData.filter((equipment) => {
    const matchesSearch =
      equipment.name.toLowerCase().includes(search.toLowerCase()) ||
      equipment.location.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || equipment.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="equipment-page">
      <section className="equipment-hero">
        <div className="equipment-hero-content">
          <span className="equipment-tag">
            SMART FARMING, BETTER FUTURE
          </span>

          <h1>
            Rent the Right Equipment.
            <span> Grow More.</span>
          </h1>

          <p>
            Find affordable farming machinery near you.
            Rent tractors, harvesters and other equipment
            without the high cost of buying them.
          </p>

          <a href="#equipment-list" className="equipment-hero-btn">
            Explore Equipment →
          </a>

          <div className="equipment-hero-features">
            <span>✓ Affordable Rentals</span>
            <span>✓ Local Equipment</span>
            <span>✓ Easy Booking</span>
          </div>
        </div>

        <div className="equipment-hero-image">
          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
            alt="Modern farming machinery in a field"
          />
        </div>
      </section>

      <section className="equipment-benefits">
        <div>
          <h3>💰 Save Money</h3>
          <p>Rent machinery instead of purchasing expensive equipment.</p>
        </div>

        <div>
          <h3>🚜 Modern Machines</h3>
          <p>Find equipment for different farming activities.</p>
        </div>

        <div>
          <h3>🌱 Work Efficiently</h3>
          <p>Complete agricultural tasks with less effort and time.</p>
        </div>
      </section>

      <section className="equipment-list-section" id="equipment-list">
        <div className="equipment-section-heading">
          <span>OUR EQUIPMENT</span>
          <h2>Find Machinery for Your Farm</h2>
          <p>
            Choose suitable equipment for your next farming task.
          </p>
        </div>

        <div className="equipment-search">
          <span>🔍</span>
          <input
            type="text"
            placeholder="Search equipment or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="equipment-filters">
          {categories.map((item) => (
            <button
              key={item}
              className={
                category === item
                  ? "equipment-filter active"
                  : "equipment-filter"
              }
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="equipment-grid">
          {filteredEquipment.length > 0 ? (
            filteredEquipment.map((equipment) => (
              <EquipmentCard
                key={equipment.id}
                equipment={equipment}
              />
            ))
          ) : (
            <div className="equipment-empty">
              <h3>No Equipment Found</h3>
              <p>Try another equipment name or select a different category.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Equipment;
