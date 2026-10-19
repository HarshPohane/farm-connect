import { useState } from "react";
import workersData from "../utils/Worker.json";
import WorkerCard from "../component/Workercard.jsx";
import "./Worker.css";

function Workers() {
  const [search, setSearch] = useState("");
  const [skill, setSkill] = useState("All");

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
            src="/images/workers-team.jpg"
            alt="Agricultural workers"
          />
        </div>
      </section>

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
          </select>
        </div>

        <div className="workers-grid">
          {filteredWorkers.length > 0 ? (
            filteredWorkers.map((worker) => (
              <WorkerCard key={worker.id} worker={worker} />
            ))
          ) : (
            <p className="workers-empty">
              No workers found. Try another search.
            </p>
          )}
        </div>
      </section>

    </div>
  );
}

export default Workers;