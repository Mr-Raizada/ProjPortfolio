import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className={styles.aboutContent}
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
          <motion.div variants={fadeInUp} className={styles.aboutTextSection}>
            <h3 className={styles.aboutSubtitle}>About Me</h3>
            <p className={styles.aboutText}>
              I am a dedicated Data Analyst passionate about leveraging data to drive business decisions and performance improvements. Skilled in data analysis, visualization, and statistical modeling, I bring expertise in Excel, Tableau, R, and Python. My goal is to tell compelling data stories that influence strategy and create measurable impact. Currently pursuing a Master's in Computer Applications to deepen my technical skills. Always exploring new tools and techniques to enhance my ability to deliver clear and insightful data-driven recommendations.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.experienceSection}>
            <h3 className={styles.experienceTitle}>Professional Experience</h3>
            
            <div className={styles.experienceGrid}>
              <div className={styles.experienceItem}>
                <h4>Global Catalog Associate</h4>
                <p className={styles.company}>Amazon India Pvt Ltd | Jan 2025 – Present | Bengaluru, Karnataka</p>
                <ul className={styles.responsibilities}>
                  <li>Designed and implemented automated quality assessment systems to ensure high accuracy</li>
                  <li>Created multi-dimensional quality scoring mechanisms to improve catalog data evaluation</li>
                  <li>Developed gap analysis methodologies to identify and rectify quality metric issues</li>
                  <li>Utilized Python and Excel extensively for data analysis and process optimization</li>
                </ul>
              </div>

              <div className={styles.experienceItem}>
                <h4>Virtual Assistant</h4>
                <p className={styles.company}>Amazon India Pvt Ltd | May 2023 – Jan 2024</p>
                <ul className={styles.responsibilities}>
                  <li>Assisted in data management and client handling to support operational workflows</li>
                </ul>
              </div>

              <div className={styles.experienceItem}>
                <h4>Intern</h4>
                <p className={styles.company}>Srijan India.one | Aug 2021 – Jun 2022</p>
                <ul className={styles.responsibilities}>
                  <li>Generated competitive statistics content related to exams</li>
                  <li>Monitored social media updates and analyzed web development trends</li>
                  <li>Created content for competitive statistics and educational exams related topics</li>
                  <li>Monitored social media updates and analyzed website development and trends</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.volunteerSection}>
            <h3 className={styles.volunteerTitle}>Volunteer Experience</h3>
            
            <div className={styles.volunteerGrid}>
              <div className={styles.volunteerItem}>
                <h4>Article 51A Volunteer (Environment)</h4>
                <p className={styles.location}>Pune | Since Jun 2019</p>
                <p className={styles.volunteerDescription}>Weekly tree planting and sapling protection efforts</p>
              </div>

              <div className={styles.volunteerItem}>
                <h4>Chanakya Mandal Pariwar (Disaster & Humanitarian Relief)</h4>
                <p className={styles.location}>Kolhapur Flood Relief</p>
                <p className={styles.volunteerDescription}>
                  <strong>Kerala Flood Relief Volunteer | Aug 2018</strong><br />
                  <strong>Head Volunteer for Kolhapur Flood Relief | Sep–Nov 2019</strong><br />
                  Led volunteer coordination, cleanup, and community assistance during severe floods
                </p>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;