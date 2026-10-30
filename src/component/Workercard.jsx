
import experienceIcon from "./icon-images/experience.png";
import locationIcon from "./icon-images/worker.loction.png";
import "./Workercard.css";

function WorkerCard({ worker, onBook }) {
  return (
    <div className="worker-card">

      {/* Worker Image */}
      <div className="worker-card-image">
        <img src={worker.image} alt={worker.name} />
      </div>

      {/* Worker Details */}
      <div className="worker-card-content">

        <span className="worker-skill">
          {worker.skill}
        </span>

        <h3>{worker.name}</h3>

        <div className="worker-detail">
          <img src={locationIcon} alt="Location" />
          <span>{worker.location}</span>
        </div>

        <div className="worker-detail">
          <img src={experienceIcon} alt="Experience" />
          <span>{worker.experience} experience</span>
        </div>

        {/* Price and Booking Button */}
        <div className="worker-card-bottom">

          <div className="worker-wage">
            <h4>₹{worker.wage}</h4>
            <span>per day</span>
          </div>

          <button
            type="button"
            className="worker-book-btn"
            onClick={onBook}
          >
            Book Now
          </button>

        </div>

      </div>

    </div>
  );
}

export default WorkerCard;
