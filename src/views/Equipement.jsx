
import { useState } from "react";
import EquipmentData from "../utils/Equipment.json";
import EquipmentCard from "../component/Equipmentcard.jsx";
import "./Equipement.css";

function Equipment() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const categories = [
    "All",
    ...new Set(EquipmentData.map((item) => item.category))
  ];

  const filteredEquipment = EquipmentData
    .filter((equipment) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        equipment.name.toLowerCase().includes(searchText) ||
        equipment.location.toLowerCase().includes(searchText) ||
        equipment.category.toLowerCase().includes(searchText);

      const matchesCategory =
        category === "All" || equipment.category === category;

      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sort === "low") return a.price - b.price;
      if (sort === "high") return b.price - a.price;
      return a.id - b.id;
    });

  function handleBooking(equipment) {
    alert(
      `You selected ${equipment.name}.\nRental price: ₹${equipment.price} per ${equipment.unit}.\nPlease contact the equipment owner to confirm availability and booking.`
    );
  }

  return (
    <main className="equipment-page">
      <section className="equipment-hero">
        <div className="equipment-hero-content">
          <span className="equipment-tag">
            FARM SMARTER, NOT HARDER
          </span>

          <h1>
            Modern Equipment for
            <span> Better Farming</span>
          </h1>

          <p>
            Find and rent reliable farming machinery at affordable
            prices. Save time, reduce effort, and improve your
            farm productivity with FarmConnect.
          </p>

          <a href="#equipment-list" className="equipment-hero-btn">
            Explore Equipment →
          </a>

          <div className="equipment-hero-points">
            <span>✓ Affordable Rentals</span>
            <span>✓ Local Equipment</span>
            <span>✓ Easy Search</span>
          </div>
        </div>

        <div className="equipment-hero-image">
          <img
            src="/images/tractor.png"
            alt="Tractor for agricultural work"
          />
        </div>
      </section>

      <section className="equipment-benefits">
        <div>
          <span className="benefit-number">01</span>
          <h3>Save Money</h3>
          <p>Rent machinery instead of buying expensive equipment.</p>
        </div>

        <div>
          <span className="benefit-number">02</span>
          <h3>Save Time</h3>
          <p>Find equipment for your farming activities quickly.</p>
        </div>

        <div>
          <span className="benefit-number">03</span>
          <h3>Work Efficiently</h3>
          <p>Access machines that help simplify farm operations.</p>
        </div>
      </section>

      <section className="equipment-list-section" id="equipment-list">
        <div className="equipment-heading">
          <div>
            <span className="equipment-small-title">
              OUR EQUIPMENT
            </span>
            <h2>Find the Right Machinery</h2>
            <p>
              Explore available equipment and compare rental prices.
            </p>
          </div>

          <span className="equipment-count">
            {filteredEquipment.length} items found
          </span>
        </div>

        <div className="equipment-toolbar">
          <div className="equipment-search">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search equipment or location..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search equipment or location"
            />
          </div>

          <select
            className="equipment-sort"
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            aria-label="Sort equipment by price"
          >
            <option value="default">Default order</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        <div className="equipment-categories">
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

        <div className="equipment-results">
          {filteredEquipment.length > 0 ? (
            filteredEquipment.map((equipment) => (
              <EquipmentCard
                key={equipment.id}
                equipment={equipment}
                onBook={handleBooking}
              />
            ))
          ) : (
            <div className="equipment-empty">
              <h3>No equipment found</h3>
              <p>
                Try another search term or choose a different category.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setSort("default");
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="equipment-help">
        <div>
          <span>HAVE FARM MACHINERY?</span>
          <h2>Earn by Renting Out Your Equipment</h2>
          <p>
            Connect with farmers who need machinery for their
            agricultural work.
          </p>
        </div>

        <a href="/contact" className="equipment-help-btn">
          Contact FarmConnect →
        </a>
      </section>
    </main>
  );
}

export default Equipment;
