import { motion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { personalData } from "../data";
import "./Home.css";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="home">
      <div className="home-glow glow-spot" />
      
      <motion.div
        className="home-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="home-content-row">
          <div className="home-left">
            <motion.p className="home-greet" variants={itemVariants}>
              Welcome, I am
            </motion.p>
            
            <motion.h1 className="home-title" variants={itemVariants}>
              <span>{personalData.name}</span>
            </motion.h1>
            
            <motion.h2 className="home-subtitle" variants={itemVariants}>
              {personalData.title}
            </motion.h2>
            
            <motion.p className="home-desc" variants={itemVariants}>
              {personalData.subTitle}
            </motion.p>

            <motion.div className="home-actions" variants={itemVariants}>
              <a href="#projects" className="btn btn-primary clickable">
                View Projects <FiArrowRight />
              </a>
              <a
                href={personalData.resumeUrl}
                className="btn btn-outline clickable"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume <FiDownload />
              </a>
            </motion.div>
          </div>

          <motion.div className="home-right" variants={itemVariants}>
            <div className="home-avatar-wrapper">
              <img src="/profile.png" alt={personalData.name} className="home-profile-pic" />
              <div className="home-avatar-glow" />
            </div>
          </motion.div>
        </div>

        {/* Developer stats block */}
        <motion.div className="home-stats-grid" variants={itemVariants}>
          {personalData.stats.map((stat, idx) => (
            <div className="stat-item" key={idx}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
