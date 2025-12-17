export default function Attendance() {
  const data = [
    { subject: "Data Structures", total: 45, present: 42 },
    { subject: "Operating System", total: 40, present: 36 },
    { subject: "DBMS", total: 38, present: 35 },
    { subject: "Computer Networks", total: 32, present: 29 }
  ];

  const percentage = (p, t) => Math.round((p / t) * 100);

  return (
    <div className="attendance-page">

      {/* ===== HEADER ===== */}
      <div className="attendance-header glass">
        <div>
          <h2>📊 Attendance Overview</h2>
          <p className="att-sub">
            Track your subject-wise attendance performance
          </p>
        </div>

        <div className="att-score">
          Overall <span>92%</span>
        </div>
      </div>

      {/* ===== SUMMARY CARDS ===== */}
      <div className="attendance-summary">
        <div className="att-card total">
          <span>Total Subjects</span>
          <h3>4</h3>
        </div>

        <div className="att-card classes">
          <span>Total Classes</span>
          <h3>155</h3>
        </div>

        <div className="att-card present">
          <span>Classes Attended</span>
          <h3>142</h3>
        </div>

        <div className="att-card percent">
          <span>Overall Attendance</span>
          <h3>92%</h3>
        </div>
      </div>

      {/* ===== DETAILED TABLE ===== */}
      <div className="attendance-card card glass">
        <h3>📘 Subject-wise Report</h3>

        <table className="attendance-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Total</th>
              <th>Present</th>
              <th>Attendance</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, i) => {
              const pct = percentage(row.present, row.total);
              return (
                <tr key={i}>
                  <td>{row.subject}</td>
                  <td>{row.total}</td>
                  <td>{row.present}</td>
                  <td>
                    <div className="progress-wrap">
                      <div
                        className={`progress-bar ${pct < 75 ? "danger" : ""}`}
                        style={{ width: `${pct}%` }}
                      ></div>
                      <span>{pct}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

    </div>
  );
}
