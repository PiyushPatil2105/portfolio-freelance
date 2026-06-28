import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { faqData } from "../data";
import "./FAQ.css";

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq">
      <div className="faq-glow glow-spot" />
      
      <div className="section-title">
        Frequently Asked <span>Questions</span>
      </div>
      
      <p className="faq-subtitle">
        Have questions about deliverables, process, or licensing? Here are standard answers.
      </p>

      <div className="faq-container">
        {faqData.map((item, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className={`faq-item glass-card ${isOpen ? "active" : ""}`}
            >
              <button
                className="faq-question-btn clickable"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                aria-label={`Toggle answer for: ${item.question}`}
              >
                <span className="faq-question-text">{item.question}</span>
                <span className="faq-icon-wrapper">
                  {isOpen ? <FiMinus size={18} /> : <FiPlus size={18} />}
                </span>
              </button>
              
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    className="faq-answer-wrapper"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="faq-answer-text">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
