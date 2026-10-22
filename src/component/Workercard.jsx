import { Link } from "react-router-dom";
import experienceIcon from "./icon-images/experience.png";
import locationIcon from "./icon-images/worker.loction.png";
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
          <img src={locationIcon} alt="" />
          <span>{worker.location}</span>
        </div>

        <div className="worker-detail">
          <img src={experienceIcon} alt="" />
          <span>{worker.experience} experience</span>
        </div>

        <div className="worker-card-bottom">
          <div className="worker-wage">
            <h4>₹{worker.wage}</h4>
            <span>per day</span>
          </div>

          <Link to="/Bookings" className="worker-book-btn">
            Book Now
          </Link>
        </div>
      </div>

    </div>
  );
}

export default WorkerCard;