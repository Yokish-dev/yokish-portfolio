import React, { useState, useEffect } from "react";
import Loader from "./components/Loader/Loader";
import Header from "./components/Header/Header";
import "./App.css";
import {
  FaMoon,
  FaSun,
  FaWhatsapp,
  FaEnvelope,
  FaGithub,
  FaLinkedin, 
  FaDownload,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
import ParticlesBackground from "./ParticlesBackground";

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
  "Firebase",
  "MySQL",
  "Git",
];

const projects = [
  {
    title: "Insurance Web Portal",
    desc: "Developed a scalable React.js Health Insurance Portal with reusable components and REST API & GraphQL integration.",
  },
  {
    title: "Pension Scheme Mobile App",
    desc: "Built a React Native application supporting Android(Kotlin) & iOS(Swift) with optimized performance.",
  },
  // {
  //   title: "Portfolio Website",
  //   desc: "Responsive personal portfolio with animations, dark mode and particle background.",
  // },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [hireCard, setHireCard] = useState(false);
   const [loadingDone, setLoadingDone] = useState(false);
   const [message , setMessage]=useState('');
  const [cursor, setCursor] = useState({
    x: 0,
    y: 0,
  });
const [form, setForm] = useState({
  name: "",
  email: "",
  project: "",
  message: "",
});

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleWhatsApp = () => {
  const text = encodeURIComponent(`
Hi Yokish,

Name: ${form.name}

Email: ${form.email}

Project Type: ${form.project}

Message:
${form.message}
  `);

  window.open(
    `https://wa.me/919123541243?text=${text}`,
    "_blank"
  );
};
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  useEffect(() => {
    const move = (e) => {
      setCursor({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoadingDone(true);
  }, 2000);

  return () => clearTimeout(timer);
}, []);

if (!loadingDone) {
  return <Loader onFinish={() => setLoadingDone(true)} />;
}
  const downloadResume = () => {
    window.location.href = "/YOKISH_D.pdf";
  };
 const handleSend = () => {
    if (!message.trim()) {
      alert("Please enter your message.");
      return;
    }

    const text = encodeURIComponent(
      `Hi Yokish,\n\n${message}\n\nRegards`
    );

    window.open(
      `https://wa.me/YOUR_PHONE_NUMBER?text=${text}`,
      "_blank"
    );
  };
  const highlights = [
    "⚡ 3+ Years Experience",
    "📱 React Native",
    "🌐 React.js",
    "🚀 REST APIs",
    "📦 Redux",
    "🔥 Firebase",
    "🍏 iOS",
    "🤖 Android",
  ];

  return (
    <>
      <ParticlesBackground />
    <div className={`app ${darkMode ? "dark" : "light"}`}>

      <div
        className="cursor"
        style={{
          left: cursor.x,
          top: cursor.y,
        }}
      ></div>


      {/* Background Blobs */}

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      {/* Floating Contact */}

      <div className="floating-buttons">

        <a href="mailto:yokishdev@gmail.com">
          <FaEnvelope />
        </a>

        <a
          href="https://wa.me/919123541243"
          target="_blank"
          rel="noreferrer"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://www.linkedin.com/in/yokish-d-49b220308"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

      </div> 
            <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
      {/* HERO SECTION */}
   
    
      <section className="hero">

        <div className="hero-left">

          <p className="hello">
            👋 Hello I'm
          </p>

          <h1 className="gradient-text">
            Yokish
          </h1>

          <TypeAnimation
            sequence={[
              "React Native Developer",
              2000,
              "React.js Developer",
              2000,
              "Frontend Developer",
              2000,
              "Mobile App Dev eloper",
              2000,
            ]}
            wrapper="h2"
            repeat={Infinity}
            speed={40}
          />

          <p className="hero-text">

            Passionate React Native & React.js developer with 3+ years of experience building high-performance Android, iOS and Web applications.

          </p>

          {/* <div className="hero-buttons">

            <button
              className="btn"
              onMouseEnter={() => setHireCard(true)}
              onMouseLeave={() => setHireCard(false)}
              onClick={() => setHireCard(true)}
            >
              Hire Me
            </button>

            {/* <a href="#projects">

              <button className="btn outline">

                View Projects

              </button>

            </a> */}

          {/* </div> */} 
  
          {/* {hireCard && (

            <div className="hire-card">

              <h3>Available For Hiring</h3>

              <p>

                Looking for a React Native / React.js Developer who can build scalable, optimized applications with clean architecture?

              </p>

              <div className="highlight-list">

                {highlights.map((item) => (

                  <span key={item}>

                    {item}

                  </span>

                ))}

              </div>

            </div>

          )} */}
                          {/* <div>
      <h2>Let's Build Something Amazing Together 🚀</h2>

      <p>
        Looking for a React.js & React Native developer?
        Leave a message and let's connect.
      </p>

      <textarea
        placeholder="Type your message here..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button onClick={handleSend}>
        <FaWhatsapp />
        Send via WhatsApp
      </button>
    </div> */}
        </div>
   

        {/* <div className="hero-right">

          <img
            src="/YOKISH.png"
            alt="Yokish"
            className="profile-image"
          />

        </div> */}

      </section>
      <section className="contact-form-card">

  <h2>Hire Me 🚀</h2>

  <p>
    require job opportunity ?
    I'd love to hear from you.Lets connect
  </p>

  {/* <input
    type="text"
    name="name"
    placeholder="👤 Your name"
    value={form.name}
    onChange={handleChange}
  />

  <input
    type="email"
    name="email"
    placeholder="📧 Email address"
    value={form.email}
    onChange={handleChange}
  />

  <input
    type="text"
    name="project"
    placeholder="💼 Project type (Web / Mobile / Full Time)"
    value={form.project}
    onChange={handleChange}
  /> */}

  <textarea
    name="message"
    placeholder="✍️ Send a message...."
    value={form.message}
    onChange={handleChange}
  />

  <button onClick={handleWhatsApp}>
    <FaWhatsapp />
    SEND VIA WHATSAPP →
  </button>

</section>
            {/* ================= ABOUT ================= */}

      <section id="about" className="section">

        <h2 data-aos="fade-up">About Me</h2>

        <div className="card about-card" data-aos="zoom-in">

          <p>
            I'm a passionate React Native and React.js Developer with over
            3 years of experience building high-quality Android, iOS and Web
            applications.
          </p>

          <p>
            I enjoy creating responsive user interfaces, integrating REST APIs,
            optimizing performance and delivering scalable applications that
            provide an excellent user experience.
          </p>

        </div>

        <div className="stats">

          <div className="card stat" data-aos="fade-up">

            <h3>3+</h3>

            <p>Years Experience</p>

          </div>

          <div
            className="card stat"
            data-aos="fade-up"
            data-aos-delay="150"
          >

            <h3>15+</h3>

            <p>Features Developed</p>

          </div>

          <div
            className="card stat"
            data-aos="fade-up"
            data-aos-delay="300"
          >

            <h3>10+</h3>

            <p>Technologies</p>

          </div>

          <div
            className="card stat"
            data-aos="fade-up"
            data-aos-delay="450"
          >

            <h3>100%</h3>

            <p>Client Satisfaction</p>

          </div>

        </div>

      </section>

      {/* ================= SKILLS ================= */}

      <section id="skills" className="section">

        <h2 data-aos="fade-up">

          Skills

        </h2>

        <div className="grid">

          {skills.map((skill, index) => (

            <div
              className="card skill"
              key={skill}
              data-aos="zoom-in"
              data-aos-delay={index * 70}
            >

              {skill}

            </div>

          ))}

        </div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section id="experience" className="section">

        <h2 data-aos="fade-up">

          Experience

        </h2>

        <div
          className="card timeline"
          data-aos="fade-right"
        >

          <div className="timeline-dot"></div>

          <h3>

            React Native Developer

          </h3>

          <span>

            2024 - Present

          </span>

          <p>

            Building Android & iOS applications,
            integrating REST APIs,
            optimizing app performance,
            publishing builds,
            fixing production bugs,
            and implementing scalable architectures.

          </p>

        </div>

        <div
          className="card timeline"
          data-aos="fade-left"
        >

          <div className="timeline-dot"></div>

          <h3>

            React JS Developer

          </h3>

          <span>

            2023 - 2024

          </span>

          <p>

            Developed responsive web applications,
            reusable UI components,
            API integrations,
            authentication,
            dashboards and optimized performance.

          </p>

        </div>

      </section>

      {/* ================= PROJECTS ================= */}

      <section id="projects" className="section">

        <h2 data-aos="fade-up">

          Projects

        </h2>

        <div className="grid">

          {projects.map((project, index) => (

            <div
              className="card project"
              key={project.title}
              data-aos="flip-left"
              data-aos-delay={index * 150}
            >

              <h3>

                {project.title}

              </h3>

              <p>

                {project.desc}

              </p>

              {/* <button className="btn">

                View Details

              </button> */}

            </div>

          ))}

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section id="contact" className="section">

        <h2 data-aos="fade-up">

          Contact

        </h2>

        <div
          className="card contact-card"
          data-aos="zoom-in"
        >

          <h3>

            Let's Build Something Amazing 🚀

          </h3>

          <p>

            Feel free to contact me for freelance work,
            full-time opportunities or collaborations.

          </p>

          <div className="contact-links">

            <a href="mailto:yokishdev@gmail.com">

              <FaEnvelope />

              yokishdev@gmail.com

            </a>

            <a
              href="https://wa.me/9123541243"
              target="_blank"
              rel="noreferrer"
            >

              <FaWhatsapp />

              WhatsApp

            </a>

            <a
              href="https://linkedin.com/in/yokish-d-49b220308"
              target="_blank"
              rel="noreferrer"
            >

              <FaLinkedin />

              LinkedIn

            </a>

            <a
              href="https://github.com/Yokish-dev"
              target="_blank"
              rel="noreferrer"
            >

              <FaGithub />

              GitHub

            </a>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <h3>

          Yokish D

        </h3>

        <p>

          React Native Developer | React JS Developer

        </p>

        <p>

          © 2026 All Rights Reserved

        </p>

      </footer>

    </div>
</>
  );

}