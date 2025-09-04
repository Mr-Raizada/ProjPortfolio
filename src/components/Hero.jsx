import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download } from 'lucide-react';
import styles from './Hero.module.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const downloadResume = () => {
    // This would typically link to your actual resume file
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Update with actual resume path
    link.download = 'Vipul_Singh_Resume.pdf';
    link.click();
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      <div className="container">
        <motion.div
          className={styles.heroContent}
          variants={staggerChildren}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
            Vipul Singh
          </motion.h1>
          
          <motion.p variants={fadeInUp} className={styles.heroSubtitle}>
            Cloud & Data Analytics Professional
          </motion.p>
          
          <motion.p variants={fadeInUp} className={styles.heroDescription}>
            Expertise in Automation, Quality Assessment, and Multi-dimensional Scoring Mechanisms
          </motion.p>
          
          <motion.div variants={fadeInUp} className={styles.heroActions}>
            <button
              onClick={() => scrollToSection('projects')}
              className={`btn-primary ${styles.heroCta}`}
            >
              View My Work
            </button>
            
            <button
              onClick={downloadResume}
              className={`btn-secondary ${styles.heroResume}`}
            >
              <Download size={18} />
              Download Resume
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div
          className={styles.heroScrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <ChevronDown 
            size={24} 
            className={styles.scrollArrow}
            onClick={() => scrollToSection('about')}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;