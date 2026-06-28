import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiTerminal } from "react-icons/fi";
import { aboutData } from "../data";
import "./About.css";

export default function About() {
  const [activeCommandIndex, setActiveCommandIndex] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  const activeCommand = aboutData.terminalCommands[activeCommandIndex];

  return (
    <section id="about">
      <div className="section-title">
        About <span>Me</span>
      </div>

      <motion.div
        className="about-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Left Column: Text details */}
        <motion.div className="about-left" variants={itemVariants}>
          <p>{aboutData.description}</p>
          <ul className="about-bullets">
            {aboutData.bullets.map((bullet, idx) => (
              <li key={idx}>
                <FiCheckCircle size={18} />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Column: Interactive Terminal Mock */}
        <motion.div className="about-right" variants={itemVariants}>
          <div className="terminal-card">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span className="dot-red" />
                <span className="dot-yellow" />
                <span className="dot-green" />
              </div>
              <div className="terminal-title">bash - developer_info</div>
              <FiTerminal size={14} style={{ color: "var(--text-muted)" }} />
            </div>

            <div className="terminal-body">
              <div className="terminal-tabs">
                {aboutData.terminalCommands.map((cmd, idx) => (
                  <button
                    key={idx}
                    className={`terminal-tab-btn clickable ${
                      activeCommandIndex === idx ? "active" : ""
                    }`}
                    onClick={() => setActiveCommandIndex(idx)}
                    aria-label={`Show output of command ${cmd.command}`}
                  >
                    {cmd.command.split(" ")[0] || "cmd"}
                  </button>
                ))}
              </div>

              <div>
                <p>
                  <span className="terminal-prompt">piyush@developer:~$ </span>
                  <span className="terminal-cmd">{activeCommand.command}</span>
                </p>
                <div className="terminal-out">{activeCommand.response}</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Experience / Education Timeline */}
      <div className="timeline-section">
        <h3 className="timeline-subtitle">Milestones & Journey</h3>

        <div className="timeline-container">
          {aboutData.timeline.map((item, idx) => (
            <motion.div
              className="timeline-item"
              key={idx}
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-year">{item.year}</span>
                <h4 className="timeline-title">{item.title}</h4>
                <div className="timeline-company">{item.company}</div>
                <p className="timeline-desc">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
