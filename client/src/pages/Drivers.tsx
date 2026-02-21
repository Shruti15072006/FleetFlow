import { useState, useEffect } from 'react';
import API from '../api/axios';
import DataTable from '../components/DataTable';
import StatusPill from '../components/StatusPill';
import LoadingSpinner from '../components/LoadingSpinner';

interface Driver {
  id: number;
  name: string;
  licenseNumber: string;
  licenseExpiry: string;
  status: string;
  currentTripId?: number;
}

const Drivers = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    licenseNumber: '',
    licenseExpiry: ''
  });

  const columns = [
    { header: 'ID', accessor: 'id' },
    { header: 'Name', accessor: 'name' },
    { header: 'License Number', accessor: 'licenseNumber' },
    { 
      header: 'License Expiry', 
      accessor: 'licenseExpiry',
      render: (val: string) => new Date(val).toLocaleDateString()
    },
    { 
      header: 'Status', 
      accessor: 'status',
      render: (val: string) => <StatusPill status={val} />
    }
  ];

  useEffect(() => {
    fetchDrivers();
  }, []);

  const fetchDrivers = async () => {
    try {
      setLoading(true);
      const response = await API.get('/drivers');
      setDrivers(response.data);
    } catch (err) {
      setError('Failed to fetch drivers');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await API.post('/drivers', formData);
      setShowForm(false);
      setFormData({ name: '', licenseNumber: '', licenseExpiry: '' });
      fetchDrivers();
    } catch (err) {
      setError('Failed to create driver');
      console.error(err);
    }
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Drivers</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showForm ? 'Cancel' : '+ Add Driver'}
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 p-4 rounded mb-6">
          {error}
        </div>
      )}

      {showForm && (
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">Add New Driver</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                License Number
              </label>
              <input
                type="text"
                value={formData.licenseNumber}
                onChange={(e) => setFormData({...formData, licenseNumber: e.target.value})}
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                License Expiry Date
              </label>
              <input
                type="date"
                value={formData.licenseExpiry}
                onChange={(e) => setFormData({...formData, licenseExpiry: e.target.value})}
                className="w-full border rounded p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Save Driver
            </button>
          </form>
        </div>
      )}

      <DataTable columns={columns} data={drivers} />
    </div>
  );
};

export default Drivers;