import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200">
            🚚 FleetFlow
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-blue-200 transition">Dashboard</Link>
            <Link to="/vehicles" className="hover:text-blue-200 transition">Vehicles</Link>
            <Link to="/drivers" className="hover:text-blue-200 transition">Drivers</Link>
            <Link to="/trips" className="hover:text-blue-200 transition">Trips</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;