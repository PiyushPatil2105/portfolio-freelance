import { motion } from "framer-motion";
import { workflowData } from "../data";
import "./Workflow.css";

export default function Workflow() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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
    <section id="workflow">
      <div className="workflow-glow glow-spot" />
      
      <div className="section-title">
        My Development <span>Process</span>
      </div>
      
      <p className="workflow-subtitle">
        How we work together to translate your initial idea into a fully-functional, high-performance web product.
      </p>

      <motion.div
        className="workflow-timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {workflowData.map((step, idx) => (
          <motion.div
            key={step.step}
            className="workflow-step-card glass-card"
            variants={itemVariants}
          >
            <div className="workflow-number-badge">{step.step}</div>
            
            <h3 className="workflow-step-title">{step.title}</h3>
            
            <p className="workflow-step-desc">{step.description}</p>
            
            {idx < workflowData.length - 1 && (
              <div className="workflow-connector-arrow">→</div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
