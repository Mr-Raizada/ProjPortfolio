import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <motion.div 
          className={styles.footerContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.div variants={fadeInUp} className={styles.footerMain}>
            <div className={styles.footerInfo}>
              <h3 className={styles.footerTitle}>Vipul Umeshkumar Singh</h3>
              <p className={styles.footerDescription}>
                Insight-Focused Data Analyst | Transforming Data into Actionable Insights
              </p>
            </div>
            
            <div className={styles.footerLinks}>
              <div className={styles.linkGroup}>
                <h4>Quick Links</h4>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#certifications">Education</a>
                <a href="#contact">Contact</a>
              </div>
              
              <div className={styles.linkGroup}>
                <h4>Connect</h4>
                <a href="mailto:unhindered.passion@gmail.com">Email</a>
                <a href="https://linkedin.com/in/mrraizada" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/Mr-Raizada" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.footerBottom}>
            <div className={styles.copyright}>
              <p>
                © {currentYear} Vipul Umeshkumar Singh. Made with{' '}
                <Heart size={14} className={styles.heartIcon} /> using React
              </p>
            </div>
            
            <div className={styles.socialLinks}>
              <a
                href="https://github.com/Mr-Raizada"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/mrraizada"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:unhindered.passion@gmail.com"
                className={styles.socialLink}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;