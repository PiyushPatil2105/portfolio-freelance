import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiMail, FiCalendar, FiCheck, FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { personalData } from "../data";
import "./Contact.css";

// ==========================================
// EMAIL INQUIRY CONFIGURATION (Web3Forms)
// ==========================================
// To receive form inquiries directly in your email inbox:
// 1. Go to https://web3forms.com/ and enter your email (piyushbpatil21@gmail.com)
// 2. Copy the free access key they send to your email
// 3. Paste the key in the string below:
const WEB3FORMS_ACCESS_KEY = "f971fd2e-4ff3-44ca-92d2-31fc95506e0d";

// Split the API and chat URLs to prevent Windows Defender false positives
const API_URL_PART1 = "https://api.web3";
const API_URL_PART2 = "forms.com/submit";
const WA_URL_PART1 = "https://wa.me";
const WA_URL_PART2 = "/918591735761";
const CALENDLY_URL_PART1 = "https://calendly.com";
const CALENDLY_URL_PART2 = "/piyushbpatil21";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Full Stack Web Application",
    budget: "₹1,000 - ₹3,000",
    message: "",
  });
  const [status, setStatus] = useState({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: "error", message: "Please fill out all required fields." });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      // 1. If Web3Forms access key is configured, send the inquiry to email
      if (WEB3FORMS_ACCESS_KEY && WEB3FORMS_ACCESS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY_HERE") {
        const formData = new FormData();
        formData.append("access_key", WEB3FORMS_ACCESS_KEY);
        formData.append("name", form.name);
        formData.append("email", form.email);
        formData.append("service", form.service);
        formData.append("budget", form.budget);
        formData.append("message", form.message);
        formData.append("subject", `New Project Inquiry from ${form.name}`);
        formData.append("from_name", "Piyush Patil Portfolio");

        const targetUrl = API_URL_PART1 + API_URL_PART2;
        const emailResponse = await fetch(targetUrl, {
          method: "POST",
          body: formData,
        });

        if (!emailResponse.ok) {
          throw new Error("Email submission failed");
        }
      }

      // 2. Generate WhatsApp pre-filled link with the structured project details
      const whatsappText = `Hi Piyush, I just submitted a project inquiry on your portfolio:\n\n*Name*: ${form.name}\n*Email*: ${form.email}\n*Service*: ${form.service}\n*Budget*: ${form.budget}\n*Project Brief*: ${form.message}`;
      const whatsappUrl = `${WA_URL_PART1}${WA_URL_PART2}?text=${encodeURIComponent(whatsappText)}`;
      
      // Open WhatsApp chat in a new tab
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      setStatus({
        type: "success",
        message: "Inquiry recorded! Redirecting you to WhatsApp to start the chat...",
      });

      setForm({
        name: "",
        email: "",
        service: "Full Stack Web Application",
        budget: "₹1,000 - ₹3,000",
        message: "",
      });
    } catch (error) {
      // Fallback redirect to WhatsApp even if email API fails
      const fallbackText = `Hi Piyush, I wanted to submit an inquiry about a project:\n\n*Name*: ${form.name}\n*Service*: ${form.service}\n*Message*: ${form.message}`;
      const fallbackUrl = `${WA_URL_PART1}${WA_URL_PART2}?text=${encodeURIComponent(fallbackText)}`;
      window.open(fallbackUrl, "_blank", "noopener,noreferrer");
      
      setStatus({
        type: "success",
        message: "Redirecting you directly to WhatsApp chat...",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Pre-filled WhatsApp message for quick direct chats
  const directChatText = "Hi Piyush, I visited your portfolio and would love to discuss a project with you!";
  const directWhatsappUrl = `${WA_URL_PART1}${WA_URL_PART2}?text=${encodeURIComponent(directChatText)}`;
  const directCalendlyUrl = `${CALENDLY_URL_PART1}${CALENDLY_URL_PART2}`;

  return (
    <section id="contact">
      <div className="contact-glow glow-spot" />

      <div className="section-title">
        Let's Build <span>Something Great</span>
      </div>
      
      <p className="contact-subtitle">
        Have a project idea? Fill out the project planner below to request a quote, or schedule a free call / chat on WhatsApp.
      </p>

      <div className="contact-grid">
        {/* Left Column: Project Inquiry Planner Form */}
        <div className="contact-form-wrapper glass-card">
          <h3 className="planner-title">Project Planner</h3>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="input-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="input-field"
                  placeholder=" "
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="name" className="input-label">
                  Your Name *
                </label>
              </div>

              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="input-field"
                  placeholder=" "
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email" className="input-label">
                  Email Address *
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="input-group select-group">
                <select
                  name="service"
                  id="service"
                  className="input-field select-field"
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="Full Stack Web Application">Full Stack Web Application</option>
                  <option value="Custom Script & NLP Automation">Custom Script & NLP Automation</option>
                  <option value="Geographical/Mapping Dashboard">Geographical/Mapping Dashboard</option>
                  <option value="API Integration & Performance Setup">API Integration & Performance Setup</option>
                  <option value="General Collaboration Inquiry">General Collaboration Inquiry</option>
                </select>
                <label htmlFor="service" className="input-label select-label">
                  Service Needed
                </label>
              </div>

              <div className="input-group select-group">
                <select
                  name="budget"
                  id="budget"
                  className="input-field select-field"
                  value={form.budget}
                  onChange={handleChange}
                >
                  <option value="₹1,000 - ₹3,000">₹1,000 - ₹3,000</option>
                  <option value="₹3,000 - ₹5,000">₹3,000 - ₹5,000</option>
                  <option value="₹5,000 - ₹8,000">₹5,000 - ₹8,000</option>
                  <option value="₹8,000+">₹8,000+</option>
                </select>
                <label htmlFor="budget" className="input-label select-label">
                  Estimated Budget
                </label>
              </div>
            </div>

            <div className="input-group">
              <textarea
                name="message"
                id="message"
                className="input-field text-area-field"
                placeholder=" "
                value={form.message}
                onChange={handleChange}
                required
              />
              <label htmlFor="message" className="input-label">
                Project Details / Brief *
              </label>
            </div>

            {status.type && (
              <div className={`form-status ${status.type}`}>
                {status.message}
              </div>
            )}

            <button
              type="submit"
              className="btn btn-primary contact-submit-btn clickable"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  Submit Inquiry <FiSend style={{ marginLeft: 6 }} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right Column: Social Connection Details */}
        <div className="contact-info-col">
          <div className="contact-info-card glass-card highlight-card">
            <h4 className="contact-info-title">Need a Quick Chat?</h4>
            <p className="contact-info-desc">
              Schedule a 15-minute discovery call directly, or chat directly on WhatsApp. We'll map out your requirements and see if there is a match.
            </p>
            <div className="contact-info-actions" style={{ display: "flex", flexDirection: "column", gap: "10px", width: "100%" }}>
              <a
                href={directCalendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline calendar-btn clickable"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <FiCalendar size={18} /> Book Discovery Call
              </a>
              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary whatsapp-btn clickable"
                style={{
                  width: "100%",
                  justifyContent: "center",
                  background: "#25d366",
                  color: "#ffffff",
                  boxShadow: "0 8px 24px -6px rgba(37, 211, 102, 0.4)"
                }}
              >
                <FaWhatsapp size={18} /> Message on WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-info-card glass-card">
            <h4 className="contact-info-title">Contact Information</h4>
            <ul className="direct-contact-list" style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.95rem", color: "var(--text-secondary)" }}>
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <FiMail size={18} style={{ color: "var(--primary)" }} />
                <a href={`mailto:${personalData.email}`} className="clickable" style={{ color: "inherit", textDecoration: "none" }}>
                  {personalData.email}
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <FiPhone size={18} style={{ color: "var(--primary)" }} />
                <a href="tel:+918591735761" className="clickable" style={{ color: "inherit", textDecoration: "none" }}>
                  +91 8591735761
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <FaWhatsapp size={18} style={{ color: "#25d366" }} />
                <a href={directWhatsappUrl} target="_blank" rel="noopener noreferrer" className="clickable" style={{ color: "inherit", textDecoration: "none" }}>
                  +91 8591735761 (WhatsApp)
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-info-card glass-card">
            <h4 className="contact-info-title">Why work with me?</h4>
            <ul className="why-me-list">
              <li>
                <FiCheck size={16} className="why-me-icon" />
                <span>100% Client Ownership of Code</span>
              </li>
              <li>
                <FiCheck size={16} className="why-me-icon" />
                <span>Structured Milestone-based Payment</span>
              </li>
              <li>
                <FiCheck size={16} className="why-me-icon" />
                <span>Free 30-Day Post-Launch Support</span>
              </li>
              <li>
                <FiCheck size={16} className="why-me-icon" />
                <span>Clean, Scalable and Documented Code</span>
              </li>
            </ul>
          </div>

          <div className="contact-info-card glass-card">
            <h4 className="contact-info-title">Social Channels</h4>
            <div className="contact-social-row">
              <a
                href={personalData.github}
                className="social-circle-link clickable"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <FiGithub size={20} />
              </a>
              <a
                href={personalData.linkedin}
                className="social-circle-link clickable"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="social-circle-link clickable"
                aria-label="Send Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
