import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';
import styles from './Projects.module.css';

// Function to generate deterministic placeholder image based on project data
const generateProjectImage = (project) => {
  const seed = project.title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const colors = [
    '6B7280', 'EF4444', '10B981', '3B82F6', 'F59E0B', '8B5CF6', 'EC4899', '06B6D4'
  ];
  const color = colors[seed % colors.length];
  
  return `https://placehold.co/600x400/${color}/white?text=${encodeURIComponent(project.title)}`;
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = useMemo(() => {
      const projectData = [
        {
          id: 1,
          title: 'Nutrition Chart Website',
          description: 'Interactive nutrition information website built with HTML, CSS, and React integration. Features responsive design and data visualization of nutritional content.',
          detailedDescription: 'A comprehensive nutrition information platform that allows users to explore detailed nutritional data for various foods. The website features interactive charts, search functionality, and mobile-responsive design. Users can filter foods by category, view nutritional breakdowns, and compare different food items side by side.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Chart.js', 'API Integration'],
          liveUrl: 'https://github.com/Mr-Raizada/Nutrition-Chart',
          githubUrl: 'https://github.com/Mr-Raizada/Nutrition-Chart',
          category: 'Web Development',
          features: ['Responsive Design', 'Interactive Charts', 'Search & Filter', 'Nutrition Data Visualization', 'Mobile Optimization']
        },
        {
          id: 2,
          title: 'Quiz Application',
          description: 'Interactive quiz platform with multiple question formats, scoring system, and responsive design. Built with modern web technologies.',
          detailedDescription: 'A feature-rich quiz application that supports multiple question types including multiple choice, true/false, and fill-in-the-blank. Includes timer functionality, scoring system, progress tracking, and detailed results analysis. The app provides an engaging user experience with smooth animations and intuitive navigation.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'React Router', 'Local Storage'],
          liveUrl: 'https://github.com/Mr-Raizada/Quiz-Application',
          githubUrl: 'https://github.com/Mr-Raizada/Quiz-Application',
          category: 'Web Development',
          features: ['Multiple Question Types', 'Timer Functionality', 'Score Tracking', 'Progress Indicators', 'Responsive Design']
        },
        {
          id: 3,
          title: 'Tribute Page',
          description: 'Responsive tribute page honoring notable figures, featuring clean design, smooth animations, and mobile-first approach.',
          detailedDescription: 'An elegant tribute page dedicated to inspirational figures, featuring a modern design with smooth scroll animations, parallax effects, and responsive layout. The page includes biographical information, achievements timeline, and multimedia content with careful attention to typography and visual hierarchy.',
          technologies: ['HTML', 'CSS', 'JavaScript', 'CSS Animations', 'Responsive Design'],
          liveUrl: 'https://github.com/Mr-Raizada/Tribute-Page',
          githubUrl: 'https://github.com/Mr-Raizada/Tribute-Page',
          category: 'Web Development',
          features: ['Parallax Effects', 'Smooth Animations', 'Timeline Display', 'Responsive Layout', 'Modern Design']
        },
        {
          id: 4,
          title: 'Data Analysis Projects',
          description: 'Various data analysis projects including statistical modeling, data cleaning, and visualization using Python and R.',
          detailedDescription: 'A collection of data analysis projects showcasing expertise in statistical analysis, data cleaning, and visualization. Includes projects on customer segmentation, sales forecasting, and market trend analysis. Utilizes advanced statistical techniques and creates insightful visualizations to communicate complex data findings effectively.',
          technologies: ['Python', 'R', 'Excel', 'Tableau', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
          liveUrl: '#',
          githubUrl: 'https://github.com/Mr-Raizada',
          category: 'Data Analysis',
          features: ['Statistical Modeling', 'Data Cleaning', 'Data Visualization', 'Predictive Analytics', 'Report Generation']
        },
        {
          id: 5,
          title: 'Automated Quality Assessment System',
          description: 'Designed and implemented automated quality assessment systems with multi-dimensional scoring mechanisms for data evaluation.',
          detailedDescription: 'A comprehensive quality assessment framework that automates the evaluation of data quality across multiple dimensions including accuracy, completeness, consistency, and timeliness. The system generates detailed quality reports, identifies areas for improvement, and provides actionable insights for data governance.',
          technologies: ['Python', 'Excel', 'Process Automation', 'Quality Systems', 'Data Validation', 'Reporting'],
          liveUrl: '#',
          githubUrl: '#',
          category: 'Process Automation',
          features: ['Multi-dimensional Scoring', 'Automated Reporting', 'Quality Metrics', 'Data Validation', 'Performance Monitoring']
        },
        {
          id: 6,
          title: 'Competitive Statistics Platform',
          description: 'Platform for generating and analyzing competitive statistics content with social media integration and trend analysis.',
          detailedDescription: 'A sophisticated platform for analyzing competitive statistics across various domains. Features include real-time data processing, trend analysis, social media integration, and comprehensive reporting. The platform helps users identify patterns, track performance metrics, and make data-driven decisions.',
          technologies: ['Data Analysis', 'Statistics', 'Content Creation', 'Trend Analysis', 'Social Media API', 'Data Visualization'],
          liveUrl: '#',
          githubUrl: '#',
          category: 'Data Analytics',
          features: ['Real-time Analysis', 'Trend Identification', 'Social Integration', 'Custom Reports', 'Performance Tracking']
        }
      ];

    // Add generated images to each project
    return projectData.map(project => ({
      ...project,
      image: generateProjectImage(project)
    }));
  }, []);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const closeProject = () => {
    setSelectedProject(null);
  };

  // Smooth scrolling function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
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
    <section id="projects" className={styles.projects}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>

        <motion.div 
          className={styles.projectsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={styles.projectCard}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              onClick={() => openProject(project)}
            >
              <div className={styles.projectImage}>
                <img src={project.image} alt={project.title} />
                <div className={styles.projectOverlay}>
                  <div className={styles.projectActions}>
                    <button className={styles.actionBtn}>
                      <ExternalLink size={18} />
                    </button>
                    <button className={styles.actionBtn}>
                      <Github size={18} />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className={styles.projectInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
                <div className={styles.projectTech}>
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <span className={styles.projectCategory}>{project.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className={styles.projectModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeProject}
            >
              <motion.div
                className={styles.modalContent}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className={styles.closeButton} onClick={closeProject}>
                  <X size={24} />
                </button>
                
                <div className={styles.modalHeader}>
                  <h3>{selectedProject.title}</h3>
                  <p className={styles.modalCategory}>{selectedProject.category}</p>
                </div>
                
                <div className={styles.modalBody}>
                  <img src={selectedProject.image} alt={selectedProject.title} />
                  
                  <div className={styles.modalContentSections}>
                    <div className={styles.modalSection}>
                      <h4>Project Overview</h4>
                      <p className={styles.modalDescription}>{selectedProject.detailedDescription || selectedProject.description}</p>
                    </div>
                    
                    <div className={styles.modalSection}>
                      <h4>Key Features</h4>
                      <ul className={styles.featuresList}>
                        {selectedProject.features?.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.modalSection}>
                      <h4>Technologies Used</h4>
                      <div className={styles.techList}>
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className={styles.techTag}>{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className={styles.modalLinks}>
                    {selectedProject.liveUrl && selectedProject.liveUrl !== '#' && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <ExternalLink size={16} />
                        View Live
                      </a>
                    )}
                    
                    {selectedProject.githubUrl && selectedProject.githubUrl !== '#' && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                      >
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;