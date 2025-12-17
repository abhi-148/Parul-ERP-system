import { useState } from "react";

export default function Topbar() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [showLogout, setShowLogout] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  };

  const confirmLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <>
      <div className="topbar glass">
        <h3>Welcome Back 👋 {user?.name}</h3>

        <div className="top-right">
          <button className="btn-light" onClick={toggleTheme}>🌙</button>
          <button className="btn-logout" onClick={() => setShowLogout(true)}>
            Logout
          </button>
        </div>
      </div>

      {/* ===== LOGOUT MODAL ===== */}
      {showLogout && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to logout?</p>

            <div className="modal-actions">
              <button className="secondary" onClick={() => setShowLogout(false)}>
                Cancel
              </button>
              <button className="danger" onClick={confirmLogout}>
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
