import React from 'react';
import { motion } from 'framer-motion';
import {
  Code, Database, BarChart3, Layout,
  Cpu, Zap, Code2, FileSpreadsheet,
  Table, Palette, Network, GitBranch
} from 'lucide-react';
import styles from './Skills.module.css';

// Icon mapping for skills
const skillIcons = {
  'Python': Code,
  'R': BarChart3,
  'Excel': FileSpreadsheet,
  'Statistical Modeling': BarChart3,
  'Data Storytelling': Database,
  'Tableau': Table,
  'Data Visualization': Palette,
  'Dashboard Design': Layout,
  'Interactive Reports': BarChart3,
  'HTML': Code2,
  'CSS': Palette,
  'React (Basic)': Code2,
  'Responsive Design': Layout,
  'Process Automation': Zap,
  'Quality Systems': Cpu,
  'Data Analysis': Database,
  'Process Optimization': GitBranch
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming & Analysis',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'R', level: 80 },
        { name: 'Excel', level: 90 },
        { name: 'Statistical Modeling', level: 85 },
        { name: 'Data Storytelling', level: 88 }
      ]
    },
    {
      title: 'Data Visualization',
      skills: [
        { name: 'Tableau', level: 90 },
        { name: 'Data Visualization', level: 85 },
        { name: 'Dashboard Design', level: 88 },
        { name: 'Interactive Reports', level: 82 }
      ]
    },
    {
      title: 'Web Technologies',
      skills: [
        { name: 'HTML', level: 75 },
        { name: 'CSS', level: 70 },
        { name: 'React (Basic)', level: 60 },
        { name: 'Responsive Design', level: 75 }
      ]
    },
    {
      title: 'Cloud & Automation',
      skills: [
        { name: 'Process Automation', level: 80 },
        { name: 'Quality Systems', level: 85 },
        { name: 'Data Analysis', level: 88 },
        { name: 'Process Optimization', level: 82 }
      ]
    }
  ];

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
    <section id="skills" className={styles.skills}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Tools
        </motion.h2>

        <motion.div 
          className={styles.skillsGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className={styles.skillCategory}
              variants={fadeInUp}
            >
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = skillIcons[skill.name] || BarChart3;
                  return (
                    <motion.div
                      key={skillIndex}
                      className={styles.skillItem}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={styles.skillHeader}>
                        <div className={styles.skillIconName}>
                          <IconComponent size={18} className={styles.skillIcon} />
                          <span className={styles.skillName}>{skill.name}</span>
                        </div>
                        <span className={styles.skillPercentage}>{skill.level}%</span>
                      </div>
                      <div className={styles.progressBar}>
                        <motion.div
                          className={styles.progressFill}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.5,
                            ease: "easeOut",
                            delay: categoryIndex * 0.1 + skillIndex * 0.05
                          }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;