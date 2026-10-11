
import Button from "../component/Button/button";
import "./Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">
            SMART FARMING, BETTER FUTURE
          </p>

          <h1>
            Your Farm,
            <br />
            Your Future with <span>FarmConnect</span>
          </h1>

          <p className="hero-description">
            Find farm workers, rent agricultural equipment,
            and book transportation services in one place.
            Make farming easier and save your valuable time.
          </p>

          <div className="hero-buttons">
            <Button to="/workers" variant="primary">
              Find Workers
            </Button>

            <Button to="/equipment" variant="secondary">
              Explore Equipment
            </Button>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/images/farmer-field.jpg"
            alt="Farmer working in an agricultural field"
          />
        </div>
      </section>

      {/* Hero Banner */}
      <section className="hero-banner">
        <img
          className="banner-image"
          src="/images/farmer-field.jpg"
          alt="Farmer working in a field"
        />

        <div className="banner-overlay">
          <p>GROW SMARTER</p>

          <h2>
            Reliable farming support from field to market.
          </h2>

          <Button to="/register" variant="success">
            Join FarmConnect
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="section-heading">
          <p>WHAT WE OFFER</p>
          <h2>Our Farming Services</h2>
          <span>
            Everything you need to manage your farm easily.
          </span>
        </div>

        <div className="service-container">

          {/* Workers */}
          <div className="service-card">
            <img
              src="https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=800&q=80"
              alt="Agricultural field"
            />

            <h3>Farm Workers</h3>

            <p>
              Find workers for planting, harvesting,
              and other farming activities.
            </p>

            <Button to="/workers" variant="primary">
              Find Workers →
            </Button>
          </div>

          {/* Equipment */}
          <div className="service-card">
            <img
              src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
              alt="Farm and agricultural equipment"
            />

            <h3>Farm Equipment</h3>

            <p>
              Rent tractors and farming equipment
              according to your needs.
            </p>

            <Button to="/equipment" variant="primary">
              Rent Equipment →
            </Button>
          </div>

          {/* Transportation */}
          <div className="service-card">
            <img
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
              alt="Transportation and logistics"
            />

            <h3>Transportation</h3>

            <p>
              Book transport to move your crops
              from farms to markets.
            </p>

            <Button to="/transport" variant="primary">
              Book Transport →
            </Button>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="section-heading">
          <p>WHY FARMCONNECT?</p>
          <h2>Making Farming Simpler</h2>
        </div>

        <div className="features">

          <div className="feature-card">
            <span>👨‍🌾</span>
            <h3>Easy to Use</h3>
            <p>
              Find the services you need through one platform.
            </p>
          </div>

          <div className="feature-card">
            <span>⏱️</span>
            <h3>Save Time</h3>
            <p>
              Reduce the time spent searching for farm services.
            </p>
          </div>

          <div className="feature-card">
            <span>🤝</span>
            <h3>Connect Easily</h3>
            <p>
              Connect with workers and farming service providers.
            </p>
          </div>

        </div>
      </section>

      {/* Call to Action */}
      <section className="home-cta">
        <h2>Let's Grow Together!</h2>

        <p>
          Start using FarmConnect to find the right services
          for your agricultural needs.
        </p>

        <Button to="/register" variant="success">
          Get Started →
        </Button>
      </section>

    </div>
  );
}

export default Home;
