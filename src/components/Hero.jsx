import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Download, Sparkles, BarChart3, TrendingUp, Database } from 'lucide-react';
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


  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const floatAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
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
          {/* Floating Data Icons */}
          <motion.div variants={fadeIn} className={styles.floatingIcons}>
            <motion.div variants={floatAnimation} className={styles.floatingIcon}>
              <BarChart3 size={32} />
            </motion.div>
            <motion.div variants={floatAnimation} className={styles.floatingIcon} style={{ animationDelay: '1s' }}>
              <TrendingUp size={32} />
            </motion.div>
            <motion.div variants={floatAnimation} className={styles.floatingIcon} style={{ animationDelay: '2s' }}>
              <Database size={32} />
            </motion.div>
            <motion.div variants={floatAnimation} className={styles.floatingIcon} style={{ animationDelay: '1.5s' }}>
              <Sparkles size={32} />
            </motion.div>
          </motion.div>
  
          <motion.h1 variants={fadeInUp} className={styles.heroTitle}>
            Vipul Umeshkumar Singh
          </motion.h1>
          
          <motion.p variants={fadeInUp} className={styles.heroSubtitle}>
            Insight-Focused <span className={styles.highlight}>Data Analyst</span>
          </motion.p>
          
          <motion.p variants={fadeInUp} className={styles.heroDescription}>
            Transforming Complex Data into <span className={styles.accentText}>Actionable Insights</span> & Strategic Visualizations
          </motion.p>
  
          <motion.div variants={fadeInUp} className={styles.heroContactInfo}>
            <span className={styles.contactItem}>
              📧 unhindered.passion@gmail.com
            </span>
            <span className={styles.contactDivider}>•</span>
            <span className={styles.contactItem}>
              📍 Kolhapur, India
            </span>
          </motion.div>
          
          <motion.div variants={fadeInUp} className={styles.heroActions}>
            <button
              onClick={() => scrollToSection('projects')}
              className={`btn-primary ${styles.heroCta}`}
            >
              View My Work
            </button>
            
            <Link
              to="/resume"
              className={`btn-secondary ${styles.heroResume}`}
            >
              <Download size={18} />
              View Resume
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          className={styles.heroScrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown
              size={24}
              className={styles.scrollArrow}
              onClick={() => scrollToSection('about')}
            />
          </motion.div>
          <span className={styles.scrollText}>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;