export default function Result() {
  const results = [
    { subject: "Data Structures", marks: 88, grade: "A+" },
    { subject: "Operating System", marks: 81, grade: "A" },
    { subject: "DBMS", marks: 85, grade: "A+" },
    { subject: "Computer Networks", marks: 79, grade: "A" }
  ];

  const getGradeClass = (grade) => {
    if (grade === "A+") return "grade-aplus";
    if (grade === "A") return "grade-a";
    return "";
  };

  return (
    <div className="result-page">
      
      {/* ===== HEADER ===== */}
      <div className="result-header glass">
        <div>
          <h2>📄 Semester Result</h2>
          <p className="result-sub">
            Academic Performance Overview
          </p>
        </div>

        <div className="result-badge">
          CGPA <span>8.6</span>
        </div>
      </div>

      {/* ===== RESULT CARD ===== */}
      <div className="result-card card glass">
        <table className="result-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
              <th>Grade</th>
            </tr>
          </thead>

          <tbody>
            {results.map((row, i) => (
              <tr key={i}>
                <td>{row.subject}</td>
                <td>{row.marks}</td>
                <td>
                  <span className={`grade ${getGradeClass(row.grade)}`}>
                    {row.grade}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== FOOTER SUMMARY ===== */}
      <div className="result-summary grid">
        <div className="card">
          <span>Total Subjects</span>
          <h3>4</h3>
        </div>

        <div className="card">
          <span>Result Status</span>
          <h3 className="pass">PASS ✔</h3>
        </div>

        <div className="card">
          <span>Highest Grade</span>
          <h3>A+</h3>
        </div>
      </div>

    </div>
  );
}
