import React, { useEffect, useState } from "react";
import "./Loader.css";

const messages = [
  "Initializing system...",
  "Connecting developer profile...",
  "Preparing portfolio experience...",
];

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState([]);
  
useEffect(() => {
  let index = 0;
  let logsDone = false;

  const progressInterval = setInterval(() => {
    setProgress((prev) => {
      const next = prev + 2;
      return next >= 100 ? 100 : next;
    });
  }, 40);

  const logInterval = setInterval(() => {
    setLogs((prev) => {
      const updated = [...prev, messages[index]];
      index++;

      // ✅ When last message is printed
      if (index === messages.length) {
        logsDone = true;

        // Start final delay AFTER last message
        setTimeout(() => {
          if (progress === 100) {
            onFinish && onFinish();
          }
        }, 800);
      }

      return updated;
    });

    if (index >= messages.length) {
      clearInterval(logInterval);
    }
  }, 400);

  return () => {
    clearInterval(progressInterval);
    clearInterval(logInterval);
  };
}, [onFinish]);

  return (
    <div className="loader-container">

      {/* <div className="terminal-header">
        <span className="dot red"></span>
        <span className="dot yellow"></span>
        <span className="dot green"></span>
        <span className="title">yokish.dev system</span>
      </div> */}

      <div className="terminal-body">

        <div className="boot-text">
          <span className="blink">▶</span> Booting Yokish Profile...
        </div>
{/* 
        <div className="logs">
          {logs.map((log, i) => (
            <div key={i} className="log-line">
              ✔ {log}
            </div>
          ))}
        </div> */}

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="percent">{progress}%</div>

      </div>
    </div>
  );
};

export default Loader;