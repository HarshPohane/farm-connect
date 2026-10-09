import './Booking.css';

const bookings = [
  { name: 'Seed drill booking', date: '12 Oct 2026' },
  { name: 'Worker schedule', date: '15 Oct 2026' },
  { name: 'Transport route', date: '18 Oct 2026' },
];

function Booking() {
  return (
    <div className="page-panel">
      <h1>My Bookings</h1>
      <ul className="booking-list">
        {bookings.map((booking) => (
          <li key={booking.name}>
            <span>{booking.name}</span>
            <span>{booking.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Booking;
