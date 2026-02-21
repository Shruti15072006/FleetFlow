import { useState, useEffect } from 'react';
import API from '../api/axios';
import DataTable from '../components/DataTable';
import StatusPill from '../components/StatusPill';
import LoadingSpinner from '../components/LoadingSpinner';

interface Vehicle {
  id: number;
  name: string;
  capacity: number;
  status: string;
  currentTripId?: number;
  createdAt: string;
}

const Vehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', capacity: '' });

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { 
      header: 'Capacity (kg)', 
      accessor: 'capacity',
      render: (val: number) => `${val} kg`
    },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (val: string) => <StatusPill status={val} />
    }
  ];

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      setLoading(true);
      const response = await API.get('/vehicles');
      setVehicles(response.data);
    } catch (err) {
      setError('Failed to fetch vehicles');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.post('/vehicles', {
        name: formData.name,
        capacity: parseInt(formData.capacity)
      });
      setShowForm(false);
      setFormData({ name: '', capacity: '' });
      fetchVehicles();
    } catch (err) {
      setError('Failed to create vehicle');
      console.error(err);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Vehicles</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showForm ? 'Cancel' : '+ Add Vehicle'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded mb-6">
          {error}
        </div>
      )}

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Vehicle</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full border rounded p-2"
                placeholder="e.g., Truck A"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Capacity (kg)
              </label>
              <input
                type="number"
                value={formData.capacity}
                onChange={(e) => setFormData({...formData, capacity: e.target.value})}
                className="w-full border rounded p-2"
                placeholder="e.g., 5000"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Save Vehicle
            </button>
          </form>
        </div>
      )}

      <DataTable columns={columns} data={vehicles} />
    </div>
  );
};

export default Vehicles;