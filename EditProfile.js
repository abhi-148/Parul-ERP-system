import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    name: storedUser?.name || "",
    email: storedUser?.email || "",
    mobile: storedUser?.mobile || "",
    dob: storedUser?.dob || "",
    studentId: storedUser?.studentId || "PU2113",
    admissionNo: storedUser?.admissionNo || "ADM/2023/1045",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const saveProfile = () => {
    const updatedUser = { ...storedUser, ...form };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    navigate("/dashboard");
  };

  return (
    <div className="edit-wrapper">
      <div className="edit-card glass">
        <h2>Edit Profile</h2>

        <div className="edit-grid">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
          <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile Number" />
          <input name="dob" type="date" value={form.dob} onChange={handleChange} />
          <input value={form.studentId} disabled />
          <input value={form.admissionNo} disabled />
        </div>

        <div className="edit-actions">
          <button className="secondary" onClick={() => navigate(-1)}>Cancel</button>
          <button onClick={saveProfile}>Save Changes</button>
        </div>
      </div>
    </div>
  );
}
