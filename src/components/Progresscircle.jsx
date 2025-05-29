import "../css/Progresscircle.css";
const Progresscircle = ({ percent }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div style={{ textAlign: "center" }}>
      <div className="progress-circle">
        <svg width="100" height="100">
          <circle
            className="circle-bg"
            cx="50"
            cy="50"
            r={radius}
          />
          <circle
            className="circle"
            cx="50"
            cy="50"
            r={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className="progress-text">{percent}%</div>
      </div>
      <h3 style={{ margin: "10px 0 5px" }}>Full Stack</h3>
      <p style={{ color: "gray", fontSize: "14px" }}>
        Complete all web development courses
      </p>
    </div>
  );
};

export default Progresscircle;
