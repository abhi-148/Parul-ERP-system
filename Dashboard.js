export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      {/* ===== HEADER ===== */}
      <div className="dashboard-header glass">
        <div>
          <h2>Welcome Back 👋 {user?.name}</h2>
          <p className="dash-sub">
            {user?.role} Dashboard • Parul University ERP
          </p>
        </div>
      </div>

      {/* ===== STATS GRID ===== */}
      <div className="dashboard-grid">
        <div className="stat-card students">
          <span>🎓 Students</span>
          <h3>1200</h3>
        </div>

        <div className="stat-card teachers">
          <span>👩‍🏫 Teachers</span>
          <h3>80</h3>
        </div>

        <div className="stat-card attendance">
          <span>📊 Attendance</span>
          <h3>92%</h3>
        </div>

        <div className="stat-card revenue">
          <span>💰 Revenue</span>
          <h3>₹1.2 Cr</h3>
        </div>
      </div>

      {/* ===== QUICK INFO ===== */}
      <div className="dashboard-bottom">
        <div className="card glass">
          <h3>📌 Today Highlights</h3>
          <ul className="dash-list">
            <li>✔ Attendance updated successfully</li>
            <li>✔ Fee records synced</li>
            <li>✔ New admission requests pending</li>
          </ul>
        </div>

        <div className="card glass">
          <h3>🔔 Notifications</h3>
          <ul className="dash-list">
            <li>📢 Semester exam form opens soon</li>
            <li>📢 Timetable updated</li>
            <li>📢 New chatbot features added</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
