import React from "react";
import { motion } from "framer-motion";
import "./Resume.css";

export default function Resume() {
  return (
    <section className="resume-container">
      <motion.div
        className="resume-card"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="resume-title"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          📄 Resume
        </motion.h2>

        <motion.p
          className="resume-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          A quick glance at my journey.
        </motion.p>

        {/* Profile Header */}
        <motion.div
          className="resume-profile"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="profile-info">
            <h3>👨‍💻 HENIL PANELIYA</h3>
            <p style={{ marginTop: 10, fontSize: 15 }}>
              4th Semester IMSC — Data Science (5-year) | JG University, Gurukul Road
            </p>
            <p style={{ color: "#aaa" }}>📍 Ahmedabad, Gujarat</p>
          </div>

          <motion.div
            className="profile-summary"
            whileHover={{ scale: 1.05 }}
          >
            <strong>Professional Summary:</strong>
            <p style={{ marginTop: 6, color: "#ccc" }}>
              4th semester IMSC Data Science (5-year integrated) student with strong
              interest in AI/ML. Currently building foundation in Python, data analysis,
              and machine learning. Passionate about exploring artificial intelligence
              and seeking opportunities to apply AI/ML in real-world projects.
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="resume-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h4>🎓 Education</h4>
          <ul>
            <li>
              <strong>IMSC in Data Science</strong> — JG University, Gurukul Road
              (Ahmedabad), 2023–2028 <br />
              <span>Currently in 4th Semester (5-year course)</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>12th Board — Sankalp International School</strong> (Nikol, Ahmedabad,
              Gujarat Board, 2023) <br />
              <span>Percentage: 76.86%</span>
            </li>
            <li style={{ marginTop: 8 }}>
              <strong>10th Board — Sankalp International School</strong> (Nikol, Ahmedabad,
              Gujarat Board, 2021)<br />
              <span>Percentage: 62%</span>
            </li>
          </ul>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="resume-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <h4>⚙️ Skills</h4>
          <div className="skills-list">
            {[
              "Python",
              "C",
              "C++",
              "Java",
              "TensorFlow",
              "PyTorch",
              "Scikit-learn",
              "OpenCV",
              "YOLO",
              "Streamlit",
              "React",
              "MySQL",
              "MongoDB",
              "Git",
              "NLP",
              "Explainable AI (XAI)",
              "Problem Solving",
              "Teamwork",
              "Adaptability",
              "Creativity",
            ].map((skill) => (
              <motion.span
                key={skill}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,180,255,0.3)" }}
                style={{ cursor: "pointer" }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="resume-links"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {[
            { name: "🏆 LeetCode", link: "https://leetcode.com/" },
            { name: "💻 GitHub", link: "https://github.com/henilpaneliya95" },
            { name: "💼 LinkedIn", link: "https://linkedin.com/" },
          ].map((site) => (
            <motion.a
              key={site.name}
              href={site.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.1, color: "#00b4ff" }}
            >
              {site.name}
            </motion.a>
          ))}
        </motion.div>

        {/* PDF Viewer */}
        <motion.div
          className="resume-pdf"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{ marginTop: 50 }}
        >
          <iframe
            src="/resume.pdf"
            title="Henil Paneliya Resume"
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href="/resume.pdf"
          download="Henil_Paneliya_Resume.pdf"
          className="resume-download"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ⬇️ Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
