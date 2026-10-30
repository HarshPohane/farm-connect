
import { useState } from "react";
import "./Booking.css";

function Booking() {
  const [bookings, setBookings] = useState(() => {
    try {
      const savedBookings = JSON.parse(
        localStorage.getItem("farmBookings") || "[]"
      );

      return Array.isArray(savedBookings) ? savedBookings : [];
    } catch (error) {
      console.error("Unable to load bookings:", error);
      return [];
    }
  });
  const [search, setSearch] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Save updated bookings
  const saveBookings = (updatedBookings) => {
    localStorage.setItem(
      "farmBookings",
      JSON.stringify(updatedBookings)
    );

    setBookings(updatedBookings);
  };

  // Cancel booking
  const handleCancel = (id) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (!confirmCancel) return;

    const updatedBookings = bookings.map((booking) =>
      booking.id === id
        ? { ...booking, status: "Cancelled" }
        : booking
    );

    saveBookings(updatedBookings);
    alert("Booking cancelled successfully!");
  };

  // Delete cancelled bookings
  const clearCancelled = () => {
    const confirmDelete = window.confirm(
      "Delete all cancelled bookings?"
    );

    if (!confirmDelete) return;

    const updatedBookings = bookings.filter(
      (booking) => booking.status !== "Cancelled"
    );

    saveBookings(updatedBookings);
  };

  // Booking statistics
  const totalBookings = bookings.length;

  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "Confirmed"
  ).length;

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "Pending"
  ).length;

  const cancelledBookings = bookings.filter(
    (booking) => booking.status === "Cancelled"
  ).length;

  const totalAmount = bookings
    .filter((booking) => booking.status !== "Cancelled")
    .reduce(
      (total, booking) => total + Number(booking.price || 0),
      0
    );

  // Search and filter bookings
  const filteredBookings = bookings.filter((booking) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      (booking.name || "").toLowerCase().includes(searchText) ||
      (booking.location || "").toLowerCase().includes(searchText) ||
      (booking.type || "").toLowerCase().includes(searchText);

    const matchesType =
      selectedType === "All" || booking.type === selectedType;

    const matchesStatus =
      selectedStatus === "All" ||
      booking.status === selectedStatus;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <main className="booking-page">

      {/* Hero Section */}
      <section className="booking-hero">
        <div className="booking-hero-copy">
          <span className="booking-tag">
            FARMCONNECT BOOKINGS
          </span>

          <h1>
            Every farm booking,
            <span> all in one place.</span>
          </h1>

          <p>
            Keep track of workers, equipment and transport. See what is
            confirmed, what is pending, and what you have booked at a glance.
          </p>

          <a className="booking-hero-btn" href="/workers">
            Explore farm services <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="booking-hero-art" aria-hidden="true">
          <div className="booking-art-orbit">
            <span>🚜</span>
          </div>
          <div className="booking-art-card">
            <span className="booking-art-check">✓</span>
            <div>
              <strong>Farm plans, sorted</strong>
              <span>One simple overview</span>
            </div>
          </div>
          <span className="booking-art-spark booking-art-spark-one">✦</span>
          <span className="booking-art-spark booking-art-spark-two">✦</span>
        </div>
      </section>

      {/* Booking Statistics */}
      <section className="booking-stats">

        <div className="booking-stat">
          <span className="booking-stat-icon" aria-hidden="true">▤</span>
          <h2>{totalBookings}</h2>
          <p>Total Bookings</p>
        </div>

        <div className="booking-stat">
          <span className="booking-stat-icon confirmed-icon" aria-hidden="true">✓</span>
          <h2>{confirmedBookings}</h2>
          <p>Confirmed</p>
        </div>

        <div className="booking-stat">
          <span className="booking-stat-icon pending-icon" aria-hidden="true">◷</span>
          <h2>{pendingBookings}</h2>
          <p>Pending</p>
        </div>

        <div className="booking-stat">
          <span className="booking-stat-icon cancelled-icon" aria-hidden="true">×</span>
          <h2>{cancelledBookings}</h2>
          <p>Cancelled</p>
        </div>

      </section>

      {/* Total Booking Amount */}
      <section className="booking-total">
        <div>
          <span>Total Active Booking Value</span>
          <h2>
            ₹{totalAmount.toLocaleString("en-IN")}
          </h2>
          <p>
            Calculated from confirmed and pending bookings.
          </p>
        </div>

        <div className="booking-total-icon">₹</div>
      </section>

      {/* Booking Heading */}
      <div className="booking-heading">
        <div>
          <h2>My Bookings</h2>
          <p>
            Showing {filteredBookings.length} of {totalBookings}{" "}
            {totalBookings === 1 ? "booking" : "bookings"}
          </p>
        </div>

        {cancelledBookings > 0 && (
          <button
            type="button"
            className="clear-booking-btn"
            onClick={clearCancelled}
          >
            Clear Cancelled
          </button>
        )}
      </div>

      {/* Search and Filters */}
      <div className="booking-filters">

        <label className="booking-search">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            placeholder="Search service or location..."
            aria-label="Search bookings by service or location"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label>

        <select
          aria-label="Filter bookings by service"
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="All">All Services</option>
          <option value="Worker">Workers</option>
          <option value="Equipment">Equipment</option>
          <option value="Transport">Transport</option>
        </select>

        <select
          aria-label="Filter bookings by status"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>

      </div>

      {/* Booking List */}
      {filteredBookings.length === 0 ? (
        <div className="empty-booking">
          <div className="empty-booking-icon" aria-hidden="true">🌱</div>

          <h2>
            {bookings.length === 0
              ? "No Bookings Yet!"
              : "No Matching Bookings"}
          </h2>

          <p>
            {bookings.length === 0
              ? "Start booking workers, equipment and transport services for your farming needs."
              : "Try changing your search or filters."}
          </p>

          {bookings.length > 0 && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedType("All");
                setSelectedStatus("All");
              }}
            >
              Reset Filters
            </button>
          )}

        </div>
      ) : (

        <div className="booking-list">

          {filteredBookings.map((booking) => (

            <article className="booking-card" key={booking.id}>

              {/* Booking Header */}
              <div className="booking-card-top">

                <div className="booking-icon">
                  {booking.type === "Worker"
                    ? "👨‍🌾"
                    : booking.type === "Equipment"
                    ? "🚜"
                    : "🚛"}
                </div>

                <div className="booking-info">

                  <span className="booking-category">
                    {booking.type} Booking
                  </span>

                  <h3>{booking.name}</h3>

                  <p>
                    📍 {booking.location || "Location not specified"}
                  </p>

                </div>

                <span
                  className={`booking-status ${
                    (booking.status || "Pending").toLowerCase()
                  }`}
                >
                  {booking.status || "Pending"}
                </span>

              </div>

              {/* Booking Information */}
              <div className="booking-details">

                <div>
                  <span>Booking Date</span>
                  <strong>
                    {booking.bookingDate || "Not specified"}
                  </strong>
                </div>

                <div>
                  <span>Price</span>
                  <strong>
                    ₹{Number(booking.price || 0).toLocaleString("en-IN")}
                    {booking.type === "Worker" ? " / day" : ""}
                  </strong>
                </div>

                <div>
                  <span>Booking ID</span>
                  <strong>#{booking.id}</strong>
                </div>

              </div>

              {/* Worker Details */}
              {booking.type === "Worker" && (
                <div className="booking-extra-details">
                  <h4>Worker Information</h4>

                  <p>
                    <strong>Skill:</strong>{" "}
                    {booking.skill || "Not specified"}
                  </p>

                  <p>
                    <strong>Experience:</strong>{" "}
                    {booking.experience || "Not specified"}
                  </p>
                </div>
              )}

              {/* Equipment Details */}
              {booking.type === "Equipment" && (
                <div className="booking-extra-details">
                  <h4>Equipment Information</h4>

                  <p>
                    <strong>Category:</strong>{" "}
                    {booking.category || "Not specified"}
                  </p>

                  <p>
                    <strong>Power:</strong>{" "}
                    {booking.power || "Not specified"}
                  </p>

                  <p>
                    <strong>Rental Unit:</strong>{" "}
                    {booking.unit || "Not specified"}
                  </p>
                </div>
              )}

              {/* Transport Details */}
              {booking.type === "Transport" && (
                <div className="booking-extra-details">
                  <h4>Transport Information</h4>

                  <p>
                    <strong>Vehicle Type:</strong>{" "}
                    {booking.vehicleType || booking.type}
                  </p>

                  <p>
                    <strong>Price per KM:</strong>{" "}
                    {booking.pricePerKm != null
                      ? `₹${booking.pricePerKm}/km`
                      : "Not specified"}
                  </p>

                  <p>
                    <strong>Load Capacity:</strong>{" "}
                    {booking.capacityTons != null
                      ? `${booking.capacityTons} tons`
                      : "Not specified"}
                  </p>
                </div>
              )}

              {/* Booking Actions */}
              <div className="booking-actions">

                {booking.status !== "Cancelled" ? (
                  <button
                    type="button"
                    className="cancel-booking-btn"
                    onClick={() => handleCancel(booking.id)}
                  >
                    Cancel Booking
                  </button>
                ) : (
                  <span className="cancelled-message">
                    This booking has been cancelled.
                  </span>
                )}

              </div>

            </article>

          ))}

        </div>
      )}

    </main>
  );
}

export default Booking;
