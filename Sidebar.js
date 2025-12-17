
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-title">Parul University</div>

      {/* SEARCH */}
      <div className="sidebar-search">
        <input type="text" placeholder="Search menu..." />
      </div>

      {/* MAIN */}
      <div className="sidebar-group">Main</div>

      <NavLink to="/dashboard">
        <div className="menu-left">
          <span className="icon">🏠</span>
          <span>Dashboard</span>
        </div>
      </NavLink>

      <NavLink to="/result">
        <div className="menu-left">
          <span className="icon">📄</span>
          <span>Result</span>
        </div>
      </NavLink>

      <NavLink to="/attendance">
        <div className="menu-left">
          <span className="icon">📊</span>
          <span>Attendance</span>
        </div>
      </NavLink>

      {/* ACADEMIC */}
      <div className="sidebar-group">Academic</div>

      <NavLink to="/timetable">
        <div className="menu-left">
          <span className="icon">📅</span>
          <span>Time Table</span>
        </div>
      </NavLink>

      <NavLink to="/admission">
        <div className="menu-left">
          <span className="icon">🎓</span>
          <span>Admission</span>
        </div>
      </NavLink>

      {/* SUPPORT */}
      <div className="sidebar-group">Support</div>

      <NavLink to="/chatbot">
        <div className="menu-left">
          <span className="icon">🤖</span>
          <span>Chatbot</span>
        </div>
        <span className="badge">3</span>
      </NavLink>

      <NavLink to="/fee">
        <div className="menu-left">
          <span className="icon">💰</span>
          <span>Fee</span>
        </div>
        <span className="badge">1</span>
      </NavLink>
    </aside>
  );
}
