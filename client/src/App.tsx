import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <AppRoutes />
        </main>
        <footer className="bg-white border-t border-gray-200 mt-8 py-4 text-center text-sm text-gray-600">
          <p>FleetFlow MVP - Built for Hackathon</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;