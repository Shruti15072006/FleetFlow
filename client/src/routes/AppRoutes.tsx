import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Vehicles from '../pages/Vehicles';
import Drivers from '../pages/Drivers';
import Trips from '../pages/Trips';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/trips" element={<Trips />} />
    </Routes>
  );
};

export default AppRoutes;