import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 250, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("clickable") ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.role === "button";
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    // Apply global CSS to hide default cursor on screens above mobile
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      @media (min-width: 769px) {
        body, a, button, input, textarea {
          cursor: none !important;
        }
      }
    `;
    document.head.appendChild(styleTag);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.head.removeChild(styleTag);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        style={{
          position: "fixed",
          left: cursorXSpring,
          top: cursorYSpring,
          x: "-50%",
          y: "-50%",
          width: isHovered ? 45 : 24,
          height: isHovered ? 45 : 24,
          borderRadius: "50%",
          border: "2px solid var(--primary)",
          backgroundColor: isHovered ? "var(--primary-glow)" : "transparent",
          pointerEvents: "none",
          zIndex: 9999,
          display: "block",
        }}
        animate={{
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* Inner Pinpoint Dot */}
      <motion.div
        style={{
          position: "fixed",
          left: cursorX,
          top: cursorY,
          x: "-50%",
          y: "-50%",
          width: 6,
          height: 6,
          borderRadius: "50%",
          backgroundColor: "var(--primary)",
          pointerEvents: "none",
          zIndex: 10000,
          display: "block",
        }}
      />
    </>
  );
}
