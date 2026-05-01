import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateHoverState = (e) => {
      const target = e.target;
      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button'], [data-cursor-hover]"
      );
      setHovered(Boolean(interactive));
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", updateHoverState);
    window.addEventListener("mouseout", updateHoverState);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", updateHoverState);
      window.removeEventListener("mouseout", updateHoverState);
    };
  }, []);

  return (
    <motion.div
      className={`cursor ${hovered ? "cursor-hover" : ""}`}
      animate={{ x: position.x, y: position.y }}
    >
      <div className="cursor-ring">
        <div className="cursor-dot" />
      </div>
    </motion.div>
  );
};

export default Cursor;
