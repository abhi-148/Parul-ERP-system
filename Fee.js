export default function Fee() {
  const total = 95000;
  const paid = 75000;
  const pending = total - paid;
  const percent = Math.round((paid / total) * 100);

  return (
    <div className="fee-page">

      {/* HEADER */}
      <div className="fee-header glass">
        <div>
          <h2>💰 Fee Overview</h2>
          <p className="fee-sub">
            Track your academic fee payment status
          </p>
        </div>

        <div className={`fee-status ${pending === 0 ? "paid" : "partial"}`}>
          {pending === 0 ? "Paid" : "Partially Paid"}
        </div>
      </div>

      {/* SUMMARY CARDS */}
      <div className="fee-summary">
        <div className="fee-card total">
          <span>Total Fee</span>
          <h3>₹{total.toLocaleString()}</h3>
        </div>

        <div className="fee-card paid">
          <span>Paid Amount</span>
          <h3>₹{paid.toLocaleString()}</h3>
        </div>

        <div className="fee-card pending">
          <span>Pending Amount</span>
          <h3>₹{pending.toLocaleString()}</h3>
        </div>
      </div>

      {/* PAYMENT CARD */}
      <div className="fee-payment card glass">
        <h3>Payment Progress</h3>

        <div className="fee-progress">
          <div
            className="fee-progress-bar"
            style={{ width: `${percent}%` }}
          ></div>
          <span>{percent}% Paid</span>
        </div>

        <div className="fee-actions">
          {pending > 0 ? (
            <button className="pay-btn">Pay Now →</button>
          ) : (
            <button className="paid-btn" disabled>
              Fully Paid ✔
            </button>
          )}
        </div>
      </div>

    </div>
  );
}
