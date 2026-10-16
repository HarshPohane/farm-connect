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
            src="https://imgs.search.brave.com/mMtil-Wva0d6oSKKMP5ueIQjfx6AWFIG8Lo2cProccQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2ODIwOTIw/MzQyNjgtNjQ1MzIy/YzFkMzA4P2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZhdXRvPWZvcm1h/dCZmaXQ9Y3JvcCZp/eGxpYj1yYi00LjEu/MCZpeGlkPU5Id3hN/akEzZkRBPQ"
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
              src="https://imgs.search.brave.com/bjzlFfEW21UMus24Y8uW4Mdh5ceuf_ydFx2gv68J12Q/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTkw/ODk4MDEyL3Bob3Rv/L2luZGlhbi1mYXJt/ZXItaG9sZGluZy1j/cm9wLXBsYW50LWlu/LWhpcy13aGVhdC1m/aWVsZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9M0phOV9r/OThNVjYwNUJacHpV/S0oyclFXSU1EUXhj/Q0lXekhmTml5c1gy/Zz0"
              alt="Farmer inspecting a crop in a field"
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
              src="https://imgs.search.brave.com/eyp5cfA1_yRNvegp5DiSzroFVhzU30HKOrWIbxvs_oM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA3LzMzLzc5Lzg5/LzM2MF9GXzczMzc5/ODk1NF9qbHlNdm9X/Qk51bnY1TXg2NHRt/NlNPd3g5anJGWHlo/Vy5qcGc"
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
              src="https://imgs.search.brave.com/zUIGcoa50nYv2CKYVaBRqdTWczkpKvZcFrch1wHRxM4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMjE2/MDkxNTcyNS9waG90/by9mYXJtLXdvcmtl/cnMtaW4tc21hbGwt/dHJ1Y2std2l0aC1o/YXJ2ZXN0ZWQtdmVn/ZXRhYmxlcy1kcml2/aW5nLXRvLWxvY2Fs/LW1hcmtldC5qcGc_/cz02MTJ4NjEyJnc9/MCZrPTIwJmM9ZW1D/d2M1NE5YaGF3RnZU/N0VSYW1WMUlubmYt/SzBrb0UzWmt2UWxZ/OTRoMD0"
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
            src="https://imgs.search.brave.com/fqv-cC0RAZ568hUeB3zRPQ4VzoYhRSR3VfI75ZnVRfc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNjE1/MTk0NTI0L3Bob3Rv/L2luZGlhbi1mYXJt/ZXItaW4tcmljZS1m/aWVsZC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9RElsWk1x/c3FiTHhlTzA2QW90/RjFWb3F4Z1FiV3pZ/NDA5SDZERHJ3ZklU/TT0"
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