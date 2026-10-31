import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Home from "./views/Home";
import Workers from "./views/Worker";
import Equipment from "./views/Equipement";
import Transport from "./views/Transport";
import Bookings from "./views/Booking";
import Login from "./views/Login";
import Register from "./views/Register";
import ProtectedRoute from "./component/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/workers" element={<Workers />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/bookings" element={<Bookings />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
