import { motion } from "framer-motion";
import { FiLayers, FiCpu, FiMap, FiCloud, FiCheck } from "react-icons/fi";
import { servicesData } from "../data";
import "./Services.css";

const iconMap = {
  Mern: FiLayers,
  Nlp: FiCpu,
  Map: FiMap,
  Cloud: FiCloud,
};

export default function Services() {
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
    <section id="services">
      <div className="services-glow glow-spot" />
      
      <div className="section-title">
        Freelance <span>Services</span>
      </div>
      
      <p className="services-subtitle">
        Tailored solutions built with modern technology stacks to solve complex business challenges.
      </p>

      <motion.div
        className="services-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {servicesData.map((service) => {
          const IconComponent = iconMap[service.icon] || FiLayers;
          return (
            <motion.div
              key={service.id}
              className="service-card glass-card"
              variants={cardVariants}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon-wrapper">
                <IconComponent className="service-icon" />
              </div>
              
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              <div className="service-divider" />
              
              <ul className="service-features-list">
                {service.features.map((feature, index) => (
                  <li key={index} className="service-feature-item">
                    <FiCheck className="service-check-icon" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
