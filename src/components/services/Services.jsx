import "./services.scss";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <div className="services about-section">
      <div className="about-container">
        
        <div className="about-grid">
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
          >
            <div className="about-image-card">
              <img
                src="/DSC_5039.jpg"
                alt="Creative workspace"
                className="about-image"
                referrerPolicy="no-referrer"
              />
            </div>

            <motion.div
              className="about-badge"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="about-badge-inner">
                <div className="about-badge-icon">💼</div>
                <div>
                  <div className="about-badge-value">1+ Year</div>
                  <div className="about-badge-label">Direct Broadcast Exp</div>
                </div>
              </div>
            </motion.div>

            <div className="about-shape about-shape-top" />
            <div className="about-shape about-shape-bottom" />
          </motion.div>

          <motion.div
            className="about-copy"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <span className="about-label">The Specialist</span>
            {/* <h2 className="about-title">
              A Passion For <br />
              <span className="about-title-highlight">Visual Narrative.</span>
            </h2> */}

            <div className="about-paragraphs">
              <p>
                My journey in multimedia began with a deep fascination for how editing can transform raw moments into powerful stories. Currently based in <strong>Tampa, Florida</strong>, I serve as a full-time News Video Editor for <span className="text-highlight">WFLA-TV News Channel 8</span> and WTTA-TV The CW.
              </p>
              <p>
                Professionalism in the fast-paced world of broadcast news is my standard. From my time as an intern at <span className="text-highlight">FOX13 Tampa Bay</span> to designing graphics for the Tampa Bay Arts & Education Network, I've honed a versatile skill set that spans technical editing, floor direction, and audio technique.
              </p>
              <p>
                I thrive under tight deadlines, collaborating with producers to ensure that every frame serves the story. Whether it's cutting VOs, VO/SOTs, or full packages, my focus is always on high-quality content that resonates with the audience.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
