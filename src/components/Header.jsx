import user from '../assets/user.png'
export const Header = () => (
    <nav className="navbar navbar-light bg-white border-bottom  px-4 py-3">
      <span className="navbar-brand ms-5 h1">KPI Tracker</span>
      <div className="d-flex align-items-center gap-2">
        <img 
          src={user}
          alt="User avatar"
          className="rounded-circle"
        />
        <select className='border border-0' >
          <option className="small ">Dhananjay</option>
        </select>
        
      </div>
    </nav>
  );

