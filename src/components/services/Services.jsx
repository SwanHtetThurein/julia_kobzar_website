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

            {/* <motion.div
              className="about-badge"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img
                src="/juliakid.jpg"
                alt="Julia as a kid"
                className="about-badge-photo"
              />
            </motion.div> */}

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
            <span className="about-label">About Me</span>
            {/* <h2 className="about-title">
              A Passion For <br />
              <span className="about-title-highlight">Visual Narrative.</span>
            </h2> */}

            <div className="about-paragraphs">
              <p>
                Ever since I was a little kid, I’ve always loved storytelling and creating art, usually scribbling colored pencils and stickers on the wall. But things really took off when I got my hands on my dad’s camera and my own laptop at around 9 years old. That’s when I discovered my passion for using a camera and creating in general. Like many kids, I dreamed of becoming a famous YouTuber, and I even started making and editing my own YouTube videos.
              </p>
              <br></br>
              <p>
                This has lead me to focusing on digital storytelling throughout high school and college, and now I have over a year of experience at News Channel 8. In this year, I have edited thousands of videos including VOs, SOTs, and packages. My video editing skills developed quickly through this role and it made me realize that I want to continue with my passions and tell stories in any way I can. That can be through videography, photography, or mixed media artwork. I love it all.
              </p>
              <br></br>
              <p>
                Over the years, I’ve sharpened my skills in camera work, video editing, and tools like Adobe Premiere Pro, adding new techniques to my creative toolkit. My goal isn’t just to keep refining my craft, but also to push the boundaries and discover new ways of telling stories. I’m always excited to take on new challenges and find opportunities to bring stories to life in ways that engage and inspire.
              </p>
              <br></br>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
