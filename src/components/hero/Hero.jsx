import "./hero.scss";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero">
      <motion.div
        className="heroCircle heroCircleTop"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 2, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="heroCircle heroCircleBottom"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, -2, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="heroContent">
        <motion.div
          className="heroText"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div
            className="heroBadge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span />
            <p>Multimedia Specialist</p>
          </motion.div>

          <h1>
            Julia
            <br />
            <motion.span
              initial={{ opacity: 0, skewX: 10 }}
              animate={{ opacity: 1, skewX: 0 }}
              transition={{ delay: 0.6, duration: 0.9 }}
              className="heroAccentName"
            >
              Kobzar
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ delay: 1.1 }}
          >
           Storytelling through compelling visuals. 
          </motion.p>

          {/* <motion.div
            className="heroActions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <a href="#portfolio" className="primaryButton">
              Explore Work
            </a>
            <a href="#contact" className="secondaryButton">
              Get In Touch
            </a>
          </motion.div> */}
        </motion.div>

        <motion.div
          className="heroVisual"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="heroImageCard">
            <img src="/hero2.webp" alt="Julia Kobzar" />
            {/* <div className="heroImageCaption">
              <p>Portfolio 2025</p>
              <h4>Creating Impactful Visuals</h4>
            </div> */}
            
          </div>

        </motion.div>
      </div>

      {/* <div className="scrollHint">
        <span>Scroll</span>
        <div />
      </div> */}
    </div>
  );
};

export default Hero;
