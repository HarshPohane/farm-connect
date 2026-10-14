import { Link } from "react-router-dom";
import Button from "../component/Button/Button";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* ================= HERO SECTION ================= */}

      <section className="home-hero">

        <div className="home-content">

          <span className="home-tag">
            SMART FARMING, BETTER FUTURE
          </span>

          <h1>
            Your Farm,
            <br />
            Your People,
            <br />
            <span>Your Success.</span>
          </h1>

          <p>
            FarmConnect connects farmers with agricultural workers,
            equipment rentals, and transportation services.
            Everything you need for your farm, in one place.
          </p>

          <div className="home-buttons">

            <Link to="/workers">
              <Button text="Find Workers" />
            </Link>

            <Link to="/equipment">
              <Button
                text="Explore Equipment"
                variant="secondary"
              />
            </Link>

          </div>

          {/* Statistics */}

          <div className="home-stats">

            <div>
              <h3>3-in-1</h3>
              <p>Farm Services</p>
            </div>

            <div>
              <h3>Easy</h3>
              <p>Booking Process</p>
            </div>

            <div>
              <h3>24/7</h3>
              <p>Online Access</p>
            </div>

          </div>

        </div>

        {/* Hero Image */}

        <div className="home-image">

          <img
            src="/images/farming.png"
            alt="Farmer working in a green agricultural field"
          />

          <div className="image-badge">
            <span className="badge-icon">✓</span>

            <div>
              <h4>Farm Made Easy</h4>
              <p>Everything in one place</p>
            </div>
          </div>

        </div>

      </section>


      {/* ================= SERVICES SECTION ================= */}

      <section className="home-services">

        <div className="section-heading">

          <span className="section-tag">
            OUR SERVICES
          </span>

          <h2>
            Everything Your Farm Needs
          </h2>

          <p>
            Find the right people, equipment, and transportation
            to make your farming work easier.
          </p>

        </div>


        <div className="service-grid">

          {/* Workers Card */}

          <div className="service-card">

            <div className="service-icon worker-bg">
              <img
                src="/images/worker-icon.png"
                alt="Agricultural worker"
              />
            </div>

            <h3>Find Farm Workers</h3>

            <p>
              Connect with agricultural workers for harvesting,
              planting, irrigation, and other farm activities.
            </p>

            <Link to="/workers" className="service-link">
              Find Workers <span>→</span>
            </Link>

          </div>


          {/* Equipment Card */}

          <div className="service-card">

            <div className="service-icon equipment-bg">
              <img
                src="/images/equipment-icon.png"
                alt="Agricultural equipment"
              />
            </div>

            <h3>Rent Equipment</h3>

            <p>
              Find tractors, harvesters, and other agricultural
              equipment according to your farming needs.
            </p>

            <Link to="/equipment" className="service-link">
              Explore Equipment <span>→</span>
            </Link>

          </div>


          {/* Transportation Card */}

          <div className="service-card">

            <div className="service-icon transport-bg">
              <img
                src="/images/transport-icon.png"
                alt="Farm transportation truck"
              />
            </div>

            <h3>Book Transportation</h3>

            <p>
              Arrange transportation to move crops, seeds,
              fertilizers, and agricultural products.
            </p>

            <Link to="/transport" className="service-link">
              Book Transport <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="home-how">

        <div className="section-heading">

          <span className="section-tag">
            SIMPLE PROCESS
          </span>

          <h2>
            How FarmConnect Works
          </h2>

          <p>
            Get started in three simple steps.
          </p>

        </div>


        <div className="steps-grid">

          <div className="step-card">

            <div className="step-number">01</div>

            <h3>Choose a Service</h3>

            <p>
              Select workers, agricultural equipment,
              or transportation for your farm.
            </p>

          </div>


          <div className="step-card">

            <div className="step-number">02</div>

            <h3>Find What You Need</h3>

            <p>
              Browse available services and choose
              an option suitable for your requirements.
            </p>

          </div>


          <div className="step-card">

            <div className="step-number">03</div>

            <h3>Make a Booking</h3>

            <p>
              Submit your booking request and manage
              your selected services from one place.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CALL TO ACTION ================= */}

      <section className="home-cta">

        <div className="cta-content">

          <span className="cta-tag">
            GROW WITH FARMCONNECT
          </span>

          <h2>
            Make Farming Easier.
            <br />
            Grow Your Future.
          </h2>

          <p>
            Start exploring agricultural services and find
            the support your farm needs.
          </p>

        </div>

        <div className="cta-button">

          <Link to="/workers">
            <Button text="Get Started" />
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;