import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Code, 
  Database, 
  BarChart3, 
  Cpu, 
  FileSpreadsheet,
  Brain,
  GitBranch
} from 'lucide-react';
import styles from './Skills.module.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const skillsData = [
    {
      id: 1,
      name: 'AWS',
      category: 'cloud',
      icon: <Cloud size={32} />,
      proficiency: 90,
      description: 'Amazon Web Services including EC2, S3, Lambda, and CloudFormation'
    },
    {
      id: 2,
      name: 'Python',
      category: 'programming',
      icon: <Code size={32} />,
      proficiency: 95,
      description: 'Advanced Python programming with pandas, numpy, and scikit-learn'
    },
    {
      id: 3,
      name: 'SQL',
      category: 'programming',
      icon: <Database size={32} />,
      proficiency: 92,
      description: 'Advanced SQL queries, database design, and optimization'
    },
    {
      id: 4,
      name: 'Tableau',
      category: 'analytics',
      icon: <BarChart3 size={32} />,
      proficiency: 88,
      description: 'Data visualization and interactive dashboard creation'
    },
    {
      id: 5,
      name: 'Automation',
      category: 'tools',
      icon: <Cpu size={32} />,
      proficiency: 93,
      description: 'Custom automation frameworks and workflow optimization'
    },
    {
      id: 6,
      name: 'Excel',
      category: 'analytics',
      icon: <FileSpreadsheet size={32} />,
      proficiency: 96,
      description: 'Advanced Excel functions, pivot tables, and data analysis'
    },
    {
      id: 7,
      name: 'LLM',
      category: 'tools',
      icon: <Brain size={32} />,
      proficiency: 85,
      description: 'Large Language Model integration and AI-powered solutions'
    },
    {
      id: 8,
      name: 'Git',
      category: 'tools',
      icon: <GitBranch size={32} />,
      proficiency: 91,
      description: 'Version control and collaborative development workflows'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'programming', label: 'Programming' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'tools', label: 'Tools' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          Skills & Technologies
        </motion.h2>

        {/* Category Filter */}
        <motion.div
          className={styles.categoryFilter}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.categoryButton} ${
                activeCategory === category.id ? styles.active : ''
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className={styles.skillsGrid}
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              className={styles.skillCard}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.skillIcon}>
                {skill.icon}
              </div>
              
              <h3 className={styles.skillName}>{skill.name}</h3>
              
              <div className={styles.proficiencyBar}>
                <div 
                  className={styles.proficiencyFill}
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
              
              <div className={styles.proficiencyText}>
                {skill.proficiency}% Proficiency
              </div>
              
              <div className={styles.skillTooltip}>
                {skill.description}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;