import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import styles from './Projects.module.css';

const Projects = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          Featured Projects
        </motion.h2>

        <motion.div
          className={styles.projectsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <div className={styles.placeholderImage}>AWS Automation</div>
            </div>
            <div className={styles.projectContent}>
              <h3>Cloud Automation Framework</h3>
              <p>Built a scalable automation system for AWS infrastructure management with custom workflows and monitoring.</p>
              <div className={styles.techStack}>
                <span>AWS</span>
                <span>Python</span>
                <span>Lambda</span>
              </div>
              <div className={styles.projectLinks}>
                <button className={styles.projectLink}>
                  <ExternalLink size={16} />
                  View Demo
                </button>
                <button className={styles.projectLink}>
                  <Github size={16} />
                  Code
                </button>
              </div>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <div className={styles.placeholderImage}>Data Analytics</div>
            </div>
            <div className={styles.projectContent}>
              <h3>Real-time Analytics Dashboard</h3>
              <p>Interactive dashboard for business intelligence with real-time data visualization and reporting.</p>
              <div className={styles.techStack}>
                <span>Tableau</span>
                <span>SQL</span>
                <span>Python</span>
              </div>
              <div className={styles.projectLinks}>
                <button className={styles.projectLink}>
                  <ExternalLink size={16} />
                  View Demo
                </button>
                <button className={styles.projectLink}>
                  <Github size={16} />
                  Code
                </button>
              </div>
            </div>
          </div>

          <div className={styles.projectCard}>
            <div className={styles.projectImage}>
              <div className={styles.placeholderImage}>Scoring System</div>
            </div>
            <div className={styles.projectContent}>
              <h3>Multi-dimensional Scoring Engine</h3>
              <p>Advanced scoring system for quality assessment with machine learning integration.</p>
              <div className={styles.techStack}>
                <span>Python</span>
                <span>ML</span>
                <span>API</span>
              </div>
              <div className={styles.projectLinks}>
                <button className={styles.projectLink}>
                  <ExternalLink size={16} />
                  View Demo
                </button>
                <button className={styles.projectLink}>
                  <Github size={16} />
                  Code
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;