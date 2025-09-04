import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, GraduationCap, Award, BookOpen } from 'lucide-react';
import styles from './Certifications.module.css';

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const certifications = [
    {
      id: 1,
      type: 'education',
      title: 'Master of Computer Applications (MCA)',
      institution: 'Indira Gandhi National Open University',
      period: '2022 – Present',
      description: 'Currently pursuing Master\'s degree to deepen technical skills in computer applications and software development.',
      icon: <GraduationCap size={32} />
    },
    {
      id: 2,
      type: 'education',
      title: 'Bachelor of Science in Physics, Maths, Statistics',
      institution: 'Savitribai Phule Pune University',
      period: '2019 – 2021',
      description: 'Completed undergraduate studies with focus on quantitative analysis and scientific methodology.',
      icon: <BookOpen size={32} />
    },
    {
      id: 3,
      type: 'certification',
      title: 'Responsive Web Design Certification',
      institution: 'Online Certification',
      period: 'Completed',
      description: 'Comprehensive training including automated test suites for survey pages, portfolio management, and technical documentation development.',
      icon: <Award size={32} />
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === certifications.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="certifications" className={styles.certifications}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education & Certifications
        </motion.h2>

        <motion.div 
          className={styles.carousel}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className={styles.carouselSlide}
                  style={{ 
                    transform: `translateX(-${currentIndex * 100}%)`,
                    opacity: index === currentIndex ? 1 : 0.3
                  }}
                  animate={{ 
                    x: `-${currentIndex * 100}%`,
                    opacity: index === currentIndex ? 1 : 0.3
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`${styles.certCard} ${styles[cert.type]}`}>
                    <div className={styles.certIcon}>
                      {cert.icon}
                    </div>
                    
                    <div className={styles.certContent}>
                      <h3 className={styles.certTitle}>{cert.title}</h3>
                      <p className={styles.certInstitution}>{cert.institution}</p>
                      <p className={styles.certPeriod}>{cert.period}</p>
                      <p className={styles.certDescription}>{cert.description}</p>
                    </div>
                    
                    <div className={styles.certBadge}>
                      {cert.type === 'education' ? 'Education' : 'Certification'}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.carouselControls}>
            <button 
              onClick={prevSlide}
              className={styles.controlButton}
              aria-label="Previous slide"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className={styles.carouselDots}>
              {certifications.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className={styles.controlButton}
              aria-label="Next slide"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </motion.div>

        <motion.div
          className={styles.educationList}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className={styles.listTitle}>Academic Background</h3>
          
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <h4>Master of Computer Applications (MCA)</h4>
                <p className={styles.timelineInstitution}>Indira Gandhi National Open University</p>
                <p className={styles.timelinePeriod}>2022 – Present</p>
                <p>Deepening technical skills in software development and computer applications</p>
              </div>
            </div>
            
            <div className={styles.timelineItem}>
              <div className={styles.timelineMarker}></div>
              <div className={styles.timelineContent}>
                <h4>Bachelor of Science (Physics, Maths, Statistics)</h4>
                <p className={styles.timelineInstitution}>Savitribai Phule Pune University</p>
                <p className={styles.timelinePeriod}>2019 – 2021</p>
                <p>Focus on quantitative analysis, scientific methodology, and statistical reasoning</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;