import { motion } from "framer-motion";
import { FiAward, FiCalendar, FiExternalLink, FiShield } from "react-icons/fi";
import { certificatesData } from "../data";
import "./Certificates.css";

export default function Certificates() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <section id="certificates">
      <div className="certs-glow glow-spot" />

      <div className="section-title">
        Licenses & <span>Certifications</span>
      </div>

      <motion.div
        className="certs-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {certificatesData.map((cert) => (
          <motion.div
            className="cert-card"
            key={cert.id}
            variants={cardVariants}
            whileHover={{ y: -6 }}
          >
            {/* Visual Badge Icon wrapper */}
            <div className="cert-badge-wrapper">
              <FiAward className="cert-badge-icon" />
            </div>

            <div className="cert-header">
              <h3 className="cert-title">{cert.title}</h3>
              <span className="cert-issuer">{cert.issuer}</span>
            </div>

            <div className="cert-meta">
              <div className="cert-date">
                <FiCalendar style={{ marginRight: 6, verticalAlign: "middle" }} />
                Issued: {cert.date}
              </div>
              <div className="cert-id">
                <FiShield style={{ marginRight: 6, verticalAlign: "middle" }} />
                ID: <span>{cert.credentialId}</span>
              </div>
            </div>

            <div className="cert-footer">
              <a
                href={cert.verificationLink}
                className="btn btn-outline cert-verify-btn clickable"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verify Credential <FiExternalLink style={{ marginLeft: 6 }} />
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
