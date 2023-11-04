import React from "react";

import "./Stat.css";

const Stat = ({title,color,count}) => {
  return (
    <div className="stat">
      <div className="stat-name">{title}</div>
      <div className="stat-count-container">
        <div className="stats-bar" style={{ backgroundColor: color }}></div>
        <div className="stats-count">{count}</div>
      </div>
    </div>
  );
};

export default Stat;
