import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <p className="eyebrow">Smart farming solutions</p>
        <h1>Connect with reliable farm support.</h1>
        <p>
          Find trusted workers, rent the equipment you need, and arrange transport
          for your harvest in one place.
        </p>
        <div className="hero-actions">
          <Link to="/workers" className="primary-action">Find Workers</Link>
          <Link to="/equipment" className="secondary-action">Browse Equipment</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
