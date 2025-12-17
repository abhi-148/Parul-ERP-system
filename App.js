import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Welcome from "./pages/Welcome";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";
import Result from "./pages/Result";
import Fee from "./pages/Fee";
import Chatbot from "./pages/Chatbot";
import TimeTable from "./pages/TimeTable";
import Admission from "./pages/Admission";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

/* ===== Layout Wrapper ===== */
const Layout = ({ children }) => (
  <div className="layout">
    <Sidebar />
    <div className="main">
      <Topbar />
      {children}
    </div>
  </div>
);

/* ===== Auth Check ===== */
const isAuthenticated = () => {
  return !!localStorage.getItem("user");
};

/* ===== Protected Route ===== */
const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" replace />;
};

export default function App() {
  const user = localStorage.getItem("user");
  const visitedWelcome = localStorage.getItem("visitedWelcome");

  return (
    <BrowserRouter>
      <Routes>

        {/* ============ LOGIN ============ */}
        <Route
          path="/"
          element={!user ? <Login /> : <Navigate to="/welcome" replace />}
        />

        {/* ============ SIGNUP ============ */}
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to="/welcome" replace />}
        />

        {/* ============ WELCOME (ONLY ONCE) ============ */}
        <Route
          path="/welcome"
          element={
            user && !visitedWelcome ? (
              <Welcome />
            ) : (
              <Navigate to="/dashboard" replace />
            )
          }
        />

        {/* ============ DASHBOARD ============ */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* ============ ATTENDANCE ============ */}
        <Route
          path="/attendance"
          element={
            <ProtectedRoute>
              <Layout>
                <Attendance />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* ============ RESULT ============ */}
        <Route
          path="/result"
          element={
            <ProtectedRoute>
              <Layout>
                <Result />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* ============ FEE ============ */}
        <Route
          path="/fee"
          element={
            <ProtectedRoute>
              <Layout>
                <Fee />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* ============ TIME TABLE ============ */}
        <Route
          path="/timetable"
          element={
            <ProtectedRoute>
              <Layout>
                <TimeTable />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* ============ CHATBOT ============ */}
        <Route
          path="/chatbot"
          element={
            <ProtectedRoute>
              <Layout>
                <Chatbot />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* ============ ADMISSION (🔥 FIXED) ============ */}
        <Route
          path="/admission"
          element={
            <ProtectedRoute>
              <Layout>
                <Admission />
              </Layout>
            </ProtectedRoute>
          }
        />

        {/* ============ FALLBACK ============ */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
