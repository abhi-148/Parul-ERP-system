import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Student");
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!name || !email) {
      alert("Please fill all details");
      return;
    }

    const user = { name, email, role };
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.removeItem("visitedWelcome");
    navigate("/welcome");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card glass">
        <h1 className="login-title">Parul University</h1>
        <p className="login-sub">Create New Account</p>

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

          <button onClick={handleSignup}>
            Signup →
          </button>
        </div>

        <p
          style={{ marginTop: 14, cursor: "pointer", fontSize: 14 }}
          onClick={() => navigate("/")}
        >
          Already have an account? <strong>Login</strong>
        </p>

        <div className="login-footer">
          © 2025 Parul University ERP
        </div>
      </div>
    </div>
  );
}
