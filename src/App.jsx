import React, { useState } from "react";
import "./App.css";

const skills = [
  "React Native",
  "React.js",
  "JavaScript",
  "TypeScript",
  "Redux",
  "Context API",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "Firebase",
  "Git",
];

const projects = [
  {
    title: "Insurance Web Portal Application",
    desc: "•	Developed a health insurance portal UI using React.js, focusing on performance and scalability.",
  },
  {
    title: "Pension Scheme Mobile Application",
    desc: "•	Developed a cross-platform mobile application using React Native for Android and iOS platforms",
  },
  // {
  //   title: "Food Delivery App",
  //   desc: "Real-time tracking, payments, and restaurant management dashboard.",
  // },
];

export default function App() {
  // const downloadResume = () => {
  //   console.log("inside download function=====>")
  //   const link = document.createElement("a");
  //   link.href = "/resume.pdf";
  //   link.download = "YOKISH_D.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };
  const [hiringProcess, setHiringProcess] = useState(false);
  const downloadResume = () => {
    window.location.href = "/YOKISH_D.pdf";
  };

  const handleHiringProcess = () => {
    setHiringProcess(true);
  };

  const highlights = [
    "⚡ 3+ Years Experience",
    "📱 React Native",
    "🌐 React JS",
    "🔗 REST APIs",
    "🕸️ GraphQL",
    "🍎 Xcode (Swift)",
    "🤖 Android Studio (Kotlin)",
  ];
  return (
    <div className="app">
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <header className="navbar">
        <div className="logo">YOKISH</div>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="btn" onClick={downloadResume}>
          Resume
        </button>
      </header>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-left">
            <p>🟢 Available for Hire</p>
            <p>👋 Hello, I'm </p>
            <h1 className="gradient-text">Yokish</h1>
            <h2>WEB & MOBILE APP DEVELOPER</h2>

            <p>
              Building scalable mobile applications and modern web applications
              with user-friendly experiences.
            </p>

            <div className="actions">
              <button
                className="btn"
                onClick={handleHiringProcess}
                onMouseOver={() => setHiringProcess(true)}
                onMouseOut={() => setHiringProcess(false)}
              >
                Hire Me
              </button>

              <a href="#projects">
                <button className="btn outline">View Projects</button>
              </a>
            </div>
            {hiringProcess && (
              <div className="hire-card">
                <p>
                  Looking for a React Native Developer who can independently
                  develop, maintain, optimize, and deploy mobile applications?
                  Let's discuss how I can contribute to your team.
                </p>
                <div className="highlights">
                  {highlights.map((item, index) => (
                    <span key={item} style={{ "--delay": `${index * 0.15}s` }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="profile-image">
            <img src="/YOKISH.png" alt="Yokish" className="profile-image" />
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <div className="card">
          <p>
            Passionate React Native and React JS Developer with 3+ years of
            experience building Android, iOS and Web applications.
          </p>
        </div>

        <div className="stats">
          <div className="card stat">
            <h3>3+</h3>
            <p>Years</p>
          </div>
          <div className="card stat">
            <h3>2</h3>
            <p>Projects</p>
          </div>
          <div className="card stat">
            <h3>10+</h3>
            <p>Technologies</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section">
        <h2>Skills</h2>
        <div className="grid">
          {skills.map((s) => (
            <div className="card skill" key={s}>
              {s}
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section">
        <h2>Experience</h2>
        <div className="card timeline">
          <h3>React Native Developer</h3>
          <span>2024 - Present</span>
          <p>Leading mobile development and delivering scalable features.</p>
        </div>
        <div className="card timeline">
          <h3>React JS Developer</h3>
          <span>2023 - 2024</span>
          <p>Built apps, integrated APIs, and optimized performance.</p>
        </div>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>
        <div className="grid">
          {projects.map((p) => (
            <div className="card project" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {/* <button className="btn">View</button> */}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <div className="card">
          <p>Email: yokishdev@gmail.com</p>
          <p>LinkedIn: www.linkedin.com/in/yokish-d-49b220308</p>
          {/* <p>GitHub: github.com/yourprofile</p> */}
        </div>
      </section>

      <footer className="footer">
        <h3>Yokish D</h3>
        <p>© 2026 All Rights Reserved</p>
      </footer>
    </div>
  );
}
