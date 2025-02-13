import { ChevronDown } from 'lucide-react';
import user from '../assets/user.png'
export const Header = () => (
    <nav className="navbar navbar-light bg-white border-bottom px-4 py-3">
      <span className="navbar-brand mb-0 h5">KPI Tracker</span>
      <div className="d-flex align-items-center gap-2">
        <img 
          src={user}
          alt="User avatar"
          className="rounded-circle"
        />
        <span className="small">Dhananjay</span>
        <ChevronDown size={16} />
      </div>
    </nav>
  );

