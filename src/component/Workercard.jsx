import { Link } from "react-router-dom";
import "./Workercard.css";

function WorkerCard({ worker }) {
  return (
    <div className="worker-card">

      <div className="worker-card-image">
        <img src={worker.image} alt={worker.name} />
      </div>

      <div className="worker-card-content">
        <span className="worker-skill">{worker.skill}</span>

        <h3>{worker.name}</h3>

        <div className="worker-detail">
          <img src="/images/location.png" alt="" />
          <span>{worker.location}</span>
        </div>

        <div className="worker-detail">
          <img src="/images/experience.png" alt="" />
          <span>{worker.experience} experience</span>
        </div>

        <div className="worker-card-bottom">
          <div className="worker-wage">
            <h4>₹{worker.wage}</h4>
            <span>per day</span>
          </div>

          <Link to="/contact" className="worker-book-btn">
            Contact
          </Link>
        </div>
      </div>

    </div>
  );
}

export default WorkerCard;