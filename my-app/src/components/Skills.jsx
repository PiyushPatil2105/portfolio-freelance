import { motion } from "framer-motion";
import { skillsData } from "../data";
import "./Skills.css";

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="skills">
      <div className="skills-glow glow-spot" />
      
      <div className="section-title">
        My <span>Skills</span>
      </div>

      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillsData.map((categoryGroup, idx) => (
          <div className="skills-category-group" key={idx}>
            <h3 className="category-name">{categoryGroup.category}</h3>

            <div className="skills-grid">
              {categoryGroup.skills.map((skill, sIdx) => (
                <motion.div
                  className="skill-card"
                  key={sIdx}
                  variants={cardVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-pct">{skill.level}%</span>
                  </div>

                  <div className="skill-bar-track">
                    <motion.div
                      className="skill-bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
