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
            Everything Farmers Need,
            <span> All in One Place.</span>
          </h1>

          <p className="hero-description">
            FarmConnect connects farmers with skilled agricultural
            workers, modern farming equipment, and reliable
            transportation services.
          </p>

          <div className="hero-buttons">
            <Button
              text="Find Workers"
              link="/workers"
              type="primary"
            />

            <Button
              text="Explore Equipment"
              link="/equipment"
              type="outline"
            />
          </div>

          <div className="hero-points">
            <span>✓ Easy Booking</span>
            <span>✓ Affordable Services</span>
            <span>✓ Farmer Friendly</span>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/images/farmer.png"
            alt="Farmer working in an agricultural field"
          />
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section">
        <p className="section-tag">WELCOME TO FARMCONNECT</p>

        <h2>One Platform for All Your Farming Needs</h2>

        <p className="section-description">
          Finding farm workers, renting equipment, and arranging
          transportation can be difficult. FarmConnect brings these
          services together in one simple platform so farmers can
          save time, manage work, and focus on better productivity.
        </p>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="section-heading">
          <p className="section-tag">WHAT WE OFFER</p>
          <h2>Explore Our Services</h2>
          <p>
            Get the right support for every stage of your farming work.
          </p>
        </div>

        <div className="service-grid">

          <div className="service-card">
            <img
              src="/images/worker.png"
              alt="Agricultural workers"
            />

            <h3>Find Farm Workers</h3>

            <p>
              Find skilled workers for planting, harvesting,
              irrigation, and other agricultural activities.
            </p>

            <Button
              text="Find Workers"
              link="/workers"
              type="primary"
            />
          </div>

          <div className="service-card">
            <img
              src="/images/tractor.png"
              alt="Farm tractor"
            />

            <h3>Rent Equipment</h3>

            <p>
              Rent tractors, harvesters, rotavators, and other
              farming equipment when you need them.
            </p>

            <Button
              text="View Equipment"
              link="/equipment"
              type="primary"
            />
          </div>

          <div className="service-card">
            <img
              src="/images/truck.png"
              alt="Agricultural transport truck"
            />

            <h3>Book Transportation</h3>

            <p>
              Arrange transport for crops, seeds, fertilizers,
              and other agricultural materials.
            </p>

            <Button
              text="Book Transport"
              link="/transport"
              type="primary"
            />
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="how-section">
        <div className="section-heading">
          <p className="section-tag">SIMPLE AND CONVENIENT</p>
          <h2>How FarmConnect Works</h2>
          <p>Get started in just four simple steps.</p>
        </div>

        <div className="steps-grid">
          <div className="step-card">
            <span className="step-number">01</span>
            <h3>Create an Account</h3>
            <p>Register and create your FarmConnect profile.</p>
          </div>

          <div className="step-card">
            <span className="step-number">02</span>
            <h3>Choose a Service</h3>
            <p>Select workers, equipment, or transportation.</p>
          </div>

          <div className="step-card">
            <span className="step-number">03</span>
            <h3>Book Your Service</h3>
            <p>Choose a suitable option and submit your booking.</p>
          </div>

          <div className="step-card">
            <span className="step-number">04</span>
            <h3>Get Your Work Done</h3>
            <p>Coordinate your farming activities with the provider.</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefits-image">
          <img
            src="/images/farmer-field.jpg"
            alt="Green agricultural field"
          />
        </div>

        <div className="benefits-content">
          <p className="section-tag">WHY FARMCONNECT?</p>

          <h2>Making Farming Easier and Smarter</h2>

          <p>
            Our goal is to make essential farming services
            easier to discover and arrange through one platform.
          </p>

          <ul>
            <li>Save time finding agricultural services.</li>
            <li>Explore available equipment for rental.</li>
            <li>Connect with agricultural workers.</li>
            <li>Arrange transportation for farm products.</li>
            <li>Manage your service bookings in one place.</li>
          </ul>

          <Button
            text="Explore Services"
            link="/workers"
            type="primary"
          />
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="cta-section">
        <p className="section-tag">GROW WITH FARMCONNECT</p>

        <h2>Ready to Make Farming Easier?</h2>

        <p>
          Join FarmConnect and discover a simpler way to manage
          your agricultural needs.
        </p>

        <div className="cta-buttons">
          <Button
            text="Get Started"
            link="/register"
            type="orange"
          />

          <Button
            text="Explore Services"
            link="/workers"
            type="outline"
          />
        </div>
      </section>

    </div>
  );
}

export default Home;