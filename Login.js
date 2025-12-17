import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student");

  const handleLogin = () => {
    if (!name || !email) {
      alert("Please fill all details");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ name, email, role })
    );
    localStorage.removeItem("visitedWelcome");
    navigate("/welcome");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h1 className="login-title">Parul University</h1>
        <p className="login-sub">Student / Teacher / Admin Login</p>

        <div className="login-form">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option>Student</option>
            <option>Teacher</option>
            <option>Admin</option>
          </select>

          <button onClick={handleLogin}>
            Login →
          </button>
        </div>

        <p className="signup-text" onClick={() => navigate("/signup")}>
          New user? <span>Signup</span>
        </p>

        <div className="login-footer">
          © 2025 Parul University ERP
        </div>
      </div>
    </div>
  );
}
