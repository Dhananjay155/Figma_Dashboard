import { useState } from 'react';
import { Camera, List, LayoutDashboard, Menu, X } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import '../App.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        className="btn d-lg-none position-fixed top-0 start-0 mt-3 ms-3 z-3"
        onClick={() => setIsOpen(!isOpen)}
        style={{ zIndex: 1031 }}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay when sidebar is open */}
      <div
        className={`position-fixed top-0 start-0 h-100 w-100 bg-dark bg-opacity-50 d-lg-none ${isOpen ? 'd-block' : 'd-none'}`}
        style={{ zIndex: 1029 }}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`d-flex flex-column bg-white position-fixed start-0 top-0 h-100 d-lg-flex ${isOpen ? 'd-block' : 'd-none'}`}
        style={{
          width: '240px',
          borderRight: '1px solid #eee',
          zIndex: 1030,
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <div className="p-4 border-bottom">
          <div className="d-flex justify-content-between align-items-center">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        {/* Sidebar buttons */}
        <div className="py-2">
          <button className="sidebar-btn">
            <LayoutDashboard size={20} />
            <span className="ms-3">Dashboard</span>
          </button>

          <button className="sidebar-btn">
            <Camera size={20} />
            <span className="ms-3">Camera View</span>
          </button>

          <button className="sidebar-btn">
            <List size={20} />
            <span className="ms-3">Event Log</span>
          </button>
        </div>
      </div>

      {/* Spacer for desktop layout */}
      <div className="d-flex">
        <div className="d-none d-lg-block" style={{ width: '240px' }}></div>
        <div className="flex-grow-1"></div>
      </div>
    </>
  );
};

export default Sidebar;
