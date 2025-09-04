import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import styles from './Certifications.module.css';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      description: 'Designing and deploying scalable systems on AWS',
      credential: 'AWS-SAA-02345'
    },
    {
      id: 2,
      title: 'Google Data Analytics Professional',
      issuer: 'Google',
      date: '2022',
      description: 'Data analysis, visualization, and dashboard creation',
      credential: 'GOOG-DA-98765'
    },
    {
      id: 3,
      title: 'Python for Data Science Certification',
      issuer: 'DataCamp',
      date: '2022',
      description: 'Advanced Python programming for data analysis',
      credential: 'DC-PYDS-45678'
    },
    {
      id: 4,
      title: 'Tableau Desktop Specialist',
      issuer: 'Tableau',
      date: '2021',
      description: 'Data visualization and business intelligence',
      credential: 'TAB-SPC-12345'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="certifications" className={`section ${styles.certifications}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          Certifications
        </motion.h2>

        <motion.div
          className={styles.certificationsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className={styles.certificationCard}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.certIcon}>
                <Award size={32} />
              </div>
              
              <div className={styles.certContent}>
                <h3>{cert.title}</h3>
                <p className={styles.issuer}>{cert.issuer}</p>
                <p className={styles.description}>{cert.description}</p>
                
                <div className={styles.certMeta}>
                  <div className={styles.metaItem}>
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>
                  <div className={styles.metaItem}>
                    <span>ID: {cert.credential}</span>
                  </div>
                </div>
                
                <button className={styles.verifyButton}>
                  <ExternalLink size={16} />
                  Verify Credential
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;