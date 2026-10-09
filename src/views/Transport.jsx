import './Transport.css';

const routes = [
  { name: 'Local field transport', cost: '₹1500' },
  { name: 'Harvest collection', cost: '₹2200' },
  { name: 'Cold storage transfer', cost: '₹3000' },
];

function Transport() {
  return (
    <div className="page-panel">
      <h1>Transport Services</h1>
      <div className="card-grid">
        {routes.map((route) => (
          <article className="info-card" key={route.name}>
            <h2>{route.name}</h2>
            <p>On-time logistic support</p>
            <strong>{route.cost}</strong>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Transport;
