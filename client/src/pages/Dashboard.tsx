import { useState, useEffect } from 'react';
import API from '../api/axios';
import LoadingSpinner from '../components/LoadingSpinner';

interface KPIs {
  totalVehicles: number;
  activeVehicles: number;
  inMaintenance: number;
  totalDrivers: number;
  availableDrivers: number;
  activeTrips: number;
  completedTrips: number;
}

const Dashboard = () => {
  const [kpis, setKpis] = useState<KPIs | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [backendStatus, setBackendStatus] = useState<'checking' | 'online' | 'offline'>('checking');

  useEffect(() => {
    checkBackend();
    fetchKPIs();
  }, []);

  const checkBackend = async () => {
    try {
      const response = await fetch('http://localhost:5000');
      if (response.ok) {
        setBackendStatus('online');
      } else {
        setBackendStatus('offline');
      }
    } catch {
      setBackendStatus('offline');
    }
  };

  const fetchKPIs = async () => {
    try {
      setLoading(true);
      const response = await API.get('/dashboard/kpis');
      setKpis(response.data);
      setError('');
    } catch (err) {
      console.error('Error fetching KPIs:', err);
      setError('Could not connect to backend');
      // Set fallback data for demo
      setKpis({
        totalVehicles: 0,
        activeVehicles: 0,
        inMaintenance: 0,
        totalDrivers: 0,
        availableDrivers: 0,
        activeTrips: 0,
        completedTrips: 0
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-6">
      {/* Backend Status Banner */}
      {backendStatus === 'offline' && (
        <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 rounded-lg mb-6">
          <p className="font-medium">⚠️ Backend server not running</p>
          <p className="text-sm">Start the backend server with: <code className="bg-yellow-100 px-2 py-1 rounded">cd backend && npm run dev</code></p>
        </div>
      )}

      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm text-gray-600 uppercase">Total Vehicles</h3>
          <p className="text-3xl font-bold text-blue-600">{kpis?.totalVehicles || 0}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm text-gray-600 uppercase">Drivers</h3>
          <p className="text-3xl font-bold text-green-600">{kpis?.totalDrivers || 0}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm text-gray-600 uppercase">Active Trips</h3>
          <p className="text-3xl font-bold text-purple-600">{kpis?.activeTrips || 0}</p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-sm text-gray-600 uppercase">Completed Trips</h3>
          <p className="text-3xl font-bold text-gray-600">{kpis?.completedTrips || 0}</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="flex gap-4">
          <button 
            onClick={() => window.location.href = '/trips'}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Create New Trip
          </button>
          <button 
            onClick={() => window.location.href = '/vehicles'}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Add Vehicle
          </button>
          <button 
            onClick={() => window.location.href = '/drivers'}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
          >
            Add Driver
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;