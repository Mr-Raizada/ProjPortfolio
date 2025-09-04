import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          About Me
        </motion.h2>

        <motion.div
          className={styles.aboutContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <div className={styles.aboutText}>
            <p>
              I am a passionate cloud and data analytics professional with expertise in transforming 
              complex data into actionable insights. My background includes extensive experience with 
              AWS cloud services, automation frameworks, and advanced data analysis techniques.
            </p>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5 }}
                  className={styles.expandedContent}
                >
                  <p>
                    I specialize in building efficient data pipelines, creating multi-dimensional 
                    scoring systems, and implementing quality assessment mechanisms that drive 
                    business intelligence and operational excellence.
                  </p>
                  <p>
                    My technical expertise spans across cloud infrastructure, data visualization, 
                    machine learning integration, and custom automation solutions. I'm passionate 
                    about leveraging technology to solve complex business problems and deliver 
                    measurable results.
                  </p>
                  <p>
                    With a strong foundation in both technical implementation and strategic thinking, 
                    I bridge the gap between data infrastructure and business objectives to create 
                    sustainable, scalable solutions.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={styles.toggleButton}
            >
              {isExpanded ? (
                <>
                  <ChevronUp size={16} />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown size={16} />
                  Read More
                </>
              )}
            </button>
          </div>

          <motion.div
            className={styles.aboutStats}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.statItem}>
              <div className={styles.statNumber}>3+</div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Projects Completed</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>100%</div>
              <div className={styles.statLabel}>Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;