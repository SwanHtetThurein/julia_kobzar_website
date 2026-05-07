import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Youtube, Play, X } from "lucide-react";
import { PROJECTS, GALLERY } from "../constants";
import "./portfolio.scss";

const getYouTubeId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export default function Portfolio() {
  const [activeVideo, setActiveVideo] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section id="portfolio" className="portfolio-section">
      <div className="portfolio__container">
        <div className="portfolio__intro">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="portfolio__intro-copy"
          >
            <span className="portfolio__eyebrow">
              <Youtube size={14} /> Visual Stories
            </span>
            {/* <h2 className="portfolio__title">
              Featured <br /> <span>Videos</span>
            </h2> */}
            {/* <p className="portfolio__subtitle">
              A curated collection of m creative media productions.
            </p> */}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="portfolio__projects-grid"
        >
          {PROJECTS.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="portfolio__project-card"
            >
              <div
                className="portfolio__project-media"
                onClick={() => {
                  if (!item.videoUrl) return;
                  item.openInNewTab
                    ? window.open(item.videoUrl, "_blank")
                    : setActiveVideo(item.videoUrl);
                }}
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="portfolio__project-thumb"
                  referrerPolicy="no-referrer"
                />
                <div className="portfolio__project-overlay">
                  <div className="portfolio__project-play">
                    <Play size={24} />
                  </div>
                </div>
              </div>

              <div className="portfolio__project-content">
                {/* <span className="portfolio__project-tag">
                  <Youtube size={14} /> Production
                </span> */}
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <button
                  onClick={() => item.videoUrl && setActiveVideo(item.videoUrl)}
                  className="portfolio__project-button"
                >
                  Play 
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {activeVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="portfolio__modal-backdrop"
              onClick={() => setActiveVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="portfolio__modal"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="portfolio__modal-close"
                  onClick={() => setActiveVideo(null)}
                >
                  <X size={20} />
                </button>
                <iframe
                  className="portfolio__modal-video"
                  src={`https://www.youtube.com/embed/${getYouTubeId(activeVideo)}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="portfolio__gallery-heading">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="portfolio__eyebrow">Captures</span>
            {/* <h3 className="portfolio__gallery-title">Media Gallery</h3> */}
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="portfolio__gallery-grid"
        >
          {GALLERY.map((photo) => (
            <motion.div
              key={photo.id}
              variants={itemVariants}
              whileHover={{ scale: 0.98 }}
              className="portfolio__gallery-item"
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="portfolio__gallery-image"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
