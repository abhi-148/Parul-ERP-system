import { useNavigate } from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const goDashboard = () => {
    localStorage.setItem("visitedWelcome", "true");
    navigate("/dashboard");
  };

  const goEditProfile = () => {
    navigate("/edit-profile");
  };

  return (
    <div className="welcome-wrapper">
      <div className="profile-card">

        {/* ===== HEADER ===== */}
        <div className="profile-header">
          <div className="avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
        </div>

        {/* ===== BASIC INFO ===== */}
        <h2 className="profile-name">{user?.name}</h2>
        <p className="profile-sub">
          B.Tech CSE • 5th Semester
        </p>

        <div className="profile-meta">
          <p><strong>Admission No:</strong> ADM/2023/1045</p>
          <p><strong>Admission Date:</strong> June 10, 2023</p>
        </div>

        {/* ===== DETAILS GRID ===== */}
        <div className="profile-grid">
          <div className="info-box">
            <span>Date of Birth</span>
            <strong>May 12, 2003</strong>
          </div>

          <div className="info-box">
            <span>Mobile Number</span>
            <strong>9311132141</strong>
          </div>

          <div className="info-box">
            <span>Email Address</span>
            <strong>{user?.email}</strong>
          </div>

          <div className="info-box">
            <span>Student ID</span>
            <strong>PU2113</strong>
          </div>
        </div>

        {/* ===== ACTION BUTTONS ===== */}
        <div className="profile-actions">
          <button className="primary" onClick={goDashboard}>
            Go to Dashboard →
          </button>

          <button className="secondary" onClick={goEditProfile}>
            Edit Profile
          </button>
        </div>

      </div>
    </div>
  );
}
