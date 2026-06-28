import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiCheckCircle, FiFolder, FiX, FiBookOpen } from "react-icons/fi";
import { projectsData } from "../data";
import "./Projects.css";

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects">
      <div className="section-title">
        Featured <span>Projects</span>
      </div>

      {/* Categories Filter Tabs */}
      <div className="projects-filters">
        {["All", "MERN Stack", "Machine Learning / NLP", "Frontend"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn clickable ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
            aria-label={`Filter projects by ${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid containing project cards */}
      <motion.div className="project-grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              className="project-card clickable"
              key={project.id}
              layout
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-thumb">
                <FiFolder className="project-thumb-icon" />
                <div className="project-card-overlay">
                  <FiBookOpen size={20} />
                  <span>View Case Study</span>
                </div>
              </div>

              <div className="project-details">
                <h3 className="project-card-title">{project.title}</h3>
                <p className="project-card-desc">{project.shortDescription}</p>

                <div className="project-tags">
                  {project.tech.slice(0, 3).map((techName) => (
                    <span className="project-tag" key={techName}>
                      {techName}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="project-tag">+{project.tech.length - 3} more</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Details Dialog Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-card"
              initial={{ y: 50, scale: 0.95 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-project-title"
            >
              <button
                className="modal-close-btn clickable"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                <FiX size={18} />
              </button>

              <div className="modal-body">
                <div className="modal-title-area">
                  <span className="modal-cat">{selectedProject.category}</span>
                  <h3 className="modal-title" id="modal-project-title">
                    {selectedProject.title}
                  </h3>
                </div>

                <div className="modal-case-study">
                  <div className="modal-case-section">
                    <h4 className="modal-section-title">Overview</h4>
                    <p className="modal-desc">{selectedProject.fullDescription}</p>
                  </div>

                  {selectedProject.problem && (
                    <div className="modal-case-section">
                      <h4 className="modal-section-title">The Challenge</h4>
                      <p className="modal-desc">{selectedProject.problem}</p>
                    </div>
                  )}

                  {selectedProject.solution && (
                    <div className="modal-case-section">
                      <h4 className="modal-section-title">The Solution</h4>
                      <p className="modal-desc">{selectedProject.solution}</p>
                    </div>
                  )}

                  {selectedProject.impact && (
                    <div className="modal-case-section">
                      <h4 className="modal-section-title">Outcome & Impact</h4>
                      <p className="modal-desc">{selectedProject.impact}</p>
                    </div>
                  )}

                  {/* Key Features */}
                  <div className="modal-case-section">
                    <h4 className="modal-section-title">Key Features & Deliverables</h4>
                    <ul className="modal-features">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx}>
                          <FiCheckCircle size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="modal-case-section">
                    <h4 className="modal-section-title">Technologies Used</h4>
                    <div className="project-tags">
                      {selectedProject.tech.map((techName) => (
                        <span className="project-tag" key={techName}>
                          {techName}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="modal-footer">
                <a
                  href={selectedProject.codeLink}
                  className="btn btn-outline clickable"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub /> View Code
                </a>
                <a
                  href={selectedProject.demoLink}
                  className="btn btn-primary clickable"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiExternalLink /> Live Demo
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
