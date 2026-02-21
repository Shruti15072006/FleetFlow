interface StatusPillProps {
  status: string;
}

const StatusPill: React.FC<StatusPillProps> = ({ status }) => {
  const colors: Record<string, string> = {
    'available': 'bg-green-100 text-green-800',
    'on_trip': 'bg-blue-100 text-blue-800',
    'in_shop': 'bg-yellow-100 text-yellow-800',
    'suspended': 'bg-red-100 text-red-800',
    'retired': 'bg-gray-100 text-gray-800',
    'scheduled': 'bg-purple-100 text-purple-800',
    'in_progress': 'bg-blue-100 text-blue-800',
    'completed': 'bg-green-100 text-green-800',
    'cancelled': 'bg-red-100 text-red-800'
  };

  const colorClass = colors[status] || 'bg-gray-100 text-gray-800';

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${colorClass}`}>
      {status.replace('_', ' ').toUpperCase()}
    </span>
  );
};

export default StatusPill;