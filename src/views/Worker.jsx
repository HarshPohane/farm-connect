
import { useState } from "react";
import workersData from "../utils/Worker.json";
import WorkerCard from "../component/Workercard.jsx";
import searchIcon from "../component/icon-images/serach.png";
import chooseIcon from "../component/icon-images/choose.png";
import skillsIcon from "../component/icon-images/skills.png";
import "./Worker.css";

function Workers() {
  const [search, setSearch] = useState("");
  const [skill, setSkill] = useState("All");

  // Worker Booking Function
  const handleBooking = (worker) => {
    const newBooking = {
      id: Date.now(),
      type: "Worker",
      name: worker.name,
      location: worker.location,
      price: worker.wage || worker.price || 0,
      bookingDate: new Date().toLocaleDateString("en-IN"),
      status: "Confirmed",
    };

    const oldBookings = JSON.parse(
      localStorage.getItem("farmBookings") || "[]"
    );

    localStorage.setItem(
      "farmBookings",
      JSON.stringify([...oldBookings, newBooking])
    );

    alert("Worker Booking Confirmed Successfully!");
  };

  // Search and Skill Filter
  const filteredWorkers = workersData.filter((worker) => {
    const matchesSearch =
      worker.name.toLowerCase().includes(search.toLowerCase()) ||
      worker.location.toLowerCase().includes(search.toLowerCase());

    const matchesSkill =
      skill === "All" || worker.skill === skill;

    return matchesSearch && matchesSkill;
  });

  return (
    <div className="workers-page">

      {/* Hero Section */}
      <section className="workers-hero">
        <div className="workers-hero-content">
          <span className="workers-tag">
            FARMCONNECT WORKERS
          </span>

          <h1>
            Find Skilled Workers for Your <span>Farm</span>
          </h1>

          <p>
            Find agricultural workers for planting,
            harvesting, irrigation and other farm activities.
          </p>

          <a href="#worker-list" className="workers-hero-btn">
            Explore Workers
          </a>
        </div>

        <div className="workers-hero-image">
          <img
            src="https://imgs.search.brave.com/orC2y_atYi0IkLs3CBsw0AHjH-2n0yHgn-pXpRTWXdI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/MDA3ODMxOS9waG90/by9jbG9zZS11cC1v/Zi1hLWxldHR1Y2Ut/c2VlZGxpbmctb24t/ZmFybWVyLWhhbmRz/LW9uLWNvbW11bml0/eS1nYXJkZW4uanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWNa/QjE3N0kwZ2ZCQ3Bo/a0RQX1ZTVWFLVy1j/UHBNcUpHdHYtMzdQ/WDJ5UXM9"
            alt="Agricultural workers"
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="workers-benefits">
        <div>
          <h3>Skilled Workers</h3>
          <p>Workers for different farming activities.</p>
        </div>

        <div>
          <h3>Flexible Hiring</h3>
          <p>Find workers according to your farm needs.</p>
        </div>

        <div>
          <h3>Clear Daily Wages</h3>
          <p>Compare listed daily wages.</p>
        </div>
      </section>

      {/* Workers List */}
      <section className="workers-list-section" id="worker-list">

        <div className="workers-heading">
          <span>OUR WORKFORCE</span>
          <h2>Find the Right Farm Worker</h2>
          <p>Search workers by name, location or skill.</p>
        </div>

        <div className="workers-filters">
          <input
            type="text"
            placeholder="Search name or location..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
          >
            <option value="All">All Skills</option>
            <option value="Ploughing">Ploughing</option>
            <option value="Harvesting">Harvesting</option>
            <option value="Planting">Planting</option>
            <option value="Irrigation">Irrigation</option>
            <option value="Pesticide Spraying">Pesticide Spraying</option>
            <option value="Fertilizer spreading">Fertilizer spreading</option>
          </select>
        </div>

        <div className="workers-grid">
          {filteredWorkers.length > 0 ? (
            filteredWorkers.map((worker) => (
              <WorkerCard
                key={worker.id}
                worker={worker}
                onBook={() => handleBooking(worker)}
              />
            ))
          ) : (
            <p className="workers-empty">
              No workers found. Try another search.
            </p>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="workers-info">

        <div className="workers-info-heading">
          <span>HOW IT WORKS</span>
          <h2>Hire Farm Workers in 3 Easy Steps</h2>
          <p>
            Find the right people for your farming needs with FarmConnect.
          </p>
        </div>

        <div className="workers-info-grid">

          <div className="workers-info-card">
            <img src={searchIcon} alt="Search workers" />
            <h3>1. Find Workers</h3>
            <p>
              Search for skilled workers by name, location or farming activity.
            </p>
          </div>

          <div className="workers-info-card">
            <img src={chooseIcon} alt="Compare skills" />
            <h3>2. Compare Skills</h3>
            <p>
              Check worker experience, skills and daily wages before choosing.
            </p>
          </div>

          <div className="workers-info-card">
            <img src={skillsIcon} alt="Plan farm work" />
            <h3>3. Plan Your Work</h3>
            <p>
              Choose workers to match your farm requirements and schedule.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Workers;
