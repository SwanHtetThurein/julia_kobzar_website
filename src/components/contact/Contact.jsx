import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, Youtube } from "lucide-react";
import "./contact.scss";

const socials = [
  { icon: <Linkedin size={24} />, name: "LinkedIn", url: "https://www.linkedin.com/in/julia-kobzar-3a2ab0280/" },
  // { icon: <Instagram size={24} />, name: "Instagram", url: "https://instagram.com" },
  // { icon: <Youtube size={24} />, name: "YouTube", url: "https://youtube.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-inner">
          <motion.div
            className="contact-heading"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            
          </motion.div>

          <motion.div
            className="contact-email-wrap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <a className="contact-email" href="mailto:contact@juliakobzar.com">
              juliakobzar9@gmail.com
            </a>
          </motion.div>

          <div className="contact-socials">
            {socials.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.08, duration: 0.6 }}
                whileHover={{ y: -4 }}
              >
                <div className="contact-social-icon">{social.icon}</div>
                <span>{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
