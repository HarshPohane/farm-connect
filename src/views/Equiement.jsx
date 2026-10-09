import './Equiement.css';

const equipment = [
  { name: 'Tractor', price: '₹1200/day' },
  { name: 'Water Pump', price: '₹800/day' },
  { name: 'Seeder', price: '₹950/day' },
];

function Equipment() {
  return (
    <div className="page-panel">
      <h1>Equipment Rentals</h1>
      <div className="card-grid">
        {equipment.map((item) => (
          <article className="info-card" key={item.name}>
            <h2>{item.name}</h2>
            <p>Available for rent</p>
            <strong>{item.price}</strong>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Equipment;
