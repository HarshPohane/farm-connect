import './Worker.css';

const workers = [
  { name: 'Asha Patel', skill: 'Harvesting', rate: '₹500/day' },
  { name: 'Ravi Kumar', skill: 'Irrigation', rate: '₹650/day' },
  { name: 'Mina Nair', skill: 'Crop care', rate: '₹700/day' },
];

function Worker() {
  return (
    <div className="page-panel">
      <h1>Available Workers</h1>
      <div className="card-grid">
        {workers.map((worker) => (
          <article className="info-card" key={worker.name}>
            <h2>{worker.name}</h2>
            <p>{worker.skill}</p>
            <strong>{worker.rate}</strong>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Worker;
