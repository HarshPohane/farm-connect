import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import Home from './views/Home.jsx';
import Dashboard from './views/Dashboard.jsx';
import Worker from './views/Worker.jsx';
import Equipment from './views/Equiement.jsx';
import Transport from './views/Transport.jsx';
import Booking from './views/Booking.jsx';
import Login from './views/Login.jsx';
import Register from './views/Register.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/workers" element={<Worker />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/bookings" element={<Booking />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
