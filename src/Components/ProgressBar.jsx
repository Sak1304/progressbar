import { useEffect, useState } from "react";

const ProgressBar = ({ value = 0 }) => {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));
  }, [value]);

  return (
    <div className="Progress">
      <span style={{ color: percent > 49 ? "white" : "black" }}>
        {percent}%
      </span>
      <div style={{ width: `${percent}%` }} />
    </div>
  );
};

export default ProgressBar;
