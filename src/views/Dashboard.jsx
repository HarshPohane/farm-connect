import { Link } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const user = localStorage.getItem("user");

  return (
    <div className="dashboard">
      <h1>Farmer Dashboard</h1>

      <p>
        Welcome, {user || "Farmer"}
      </p>

      <div className="dashboard-cards">
        <Link to="/workers">
          <div>Find Workers</div>
        </Link>

        <Link to="/equipment">
          <div>Rent Equipment</div>
        </Link>

        <Link to="/transport">
          <div>Book Transport</div>
        </Link>

        <Link to="/bookings">
          <div>My Bookings</div>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;