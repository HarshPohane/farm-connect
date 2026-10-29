
import { useState } from "react";
import "./Booking.css";

function Booking() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      name: "Ramesh Patil",
      category: "Worker",
      location: "Nagpur",
      date: "2026-11-02",
      price: 600,
      status: "Confirmed",
      image: "/images/farmer.png",
    },
    {
      id: 2,
      name: "Mahindra Tractor",
      category: "Equipment",
      location: "Wardha",
      date: "2026-11-04",
      price: 1200,
      status: "Pending",
      image: "/images/tractor.png",
    },
    {
      id: 3,
      name: "Farm Goods Truck",
      category: "Transport",
      location: "Nagpur",
      date: "2026-11-06",
      price: 2500,
      status: "Confirmed",
      image: "/images/machinery-field.jpg",
    },
  ]);

  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.name.toLowerCase().includes(search.toLowerCase()) ||
      booking.location.toLowerCase().includes(search.toLowerCase()) ||
      booking.category.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      selectedStatus === "All" ||
      booking.status === selectedStatus;

    return matchesSearch && matchesStatus;
  });

  const cancelBooking = (id) => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this booking?"
    );

    if (confirmCancel) {
      setBookings((previousBookings) =>
        previousBookings.map((booking) =>
          booking.id === id
            ? { ...booking, status: "Cancelled" }
            : booking
        )
      );
    }
  };

  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "Confirmed"
  ).length;

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "Pending"
  ).length;

  return (
    <div className="booking-page">

      {/* Hero Section */}
      <section className="booking-hero">
        <div className="booking-hero-content">
          <span className="booking-tag">
            FARMCONNECT BOOKINGS
          </span>

          <h1>Manage Your Farm Bookings</h1>

          <p>
            Manage workers, farming equipment, and transport
            bookings easily from one place.
          </p>

          <a href="/workers" className="booking-hero-btn">
            Explore Services →
          </a>
        </div>

        <div className="booking-hero-image">
          <img
            src="/images/hero-farmer.jpg"
            alt="Farmer working in a field"
          />
        </div>
      </section>

      {/* Statistics */}
      <section className="booking-stats">
        <div className="booking-stat">
          <span>Total Bookings</span>
          <h2>{bookings.length}</h2>
        </div>

        <div className="booking-stat">
          <span>Confirmed</span>
          <h2>{confirmedBookings}</h2>
        </div>

        <div className="booking-stat">
          <span>Pending</span>
          <h2>{pendingBookings}</h2>
        </div>
      </section>

      {/* Booking List */}
      <section className="booking-list-section">
        <div className="booking-heading">
          <h2>My Bookings</h2>
          <p>View and manage your farming services.</p>
        </div>

        {/* Search and Filter */}
        <div className="booking-controls">
          <div className="booking-search">
            <img src="/images/searchbar.png" alt="" />

            <input
              type="text"
              placeholder="Search bookings..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </div>

          <select
            value={selectedStatus}
            onChange={(event) =>
              setSelectedStatus(event.target.value)
            }
          >
            <option value="All">All Bookings</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Pending">Pending</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>

        {/* Booking Items */}
        <div className="booking-list">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <div className="booking-item" key={booking.id}>

                <div className="booking-item-image">
                  <img
                    src={booking.image}
                    alt={booking.name}
                  />
                </div>

                <div className="booking-item-info">
                  <span className="booking-category">
                    {booking.category}
                  </span>

                  <h3>{booking.name}</h3>

                  <p>
                    <img src="/images/location.png" alt="" />
                    {booking.location}
                  </p>

                  <p>
                    <img src="/images/calendar.png" alt="" />
                    {new Date(
                      booking.date + "T00:00:00"
                    ).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className="booking-item-price">
                  <span>Estimated Price</span>

                  <h3>
                    ₹{booking.price.toLocaleString("en-IN")}
                  </h3>

                  <small>Per day</small>
                </div>

                <div className="booking-item-action">
                  <span
                    className={`booking-status ${booking.status.toLowerCase()}`}
                  >
                    {booking.status}
                  </span>

                  {booking.status !== "Cancelled" && (
                    <button
                      className="booking-cancel-btn"
                      onClick={() => cancelBooking(booking.id)}
                    >
                      Cancel Booking
                    </button>
                  )}
                </div>

              </div>
            ))
          ) : (
            <div className="booking-empty">
              <h3>No bookings found</h3>
              <p>Try changing your search or filter.</p>

              <a href="/workers">Explore Services</a>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}

export default Booking;
