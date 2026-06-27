import React, { useEffect, useState } from "react";
import "./Loader.css";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish && onFinish(), 300);
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="loader-container">
      
      <div className="terminal-text">
        <span className="blink">▶</span> Booting Yokish Profile...
      </div>

      <div className="sub-text">
       Welcome to My Portfolio
      </div>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="percent">{progress}%</div>
    </div>
  );
};

export default Loader;