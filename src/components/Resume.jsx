import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin, Github, FileText, FileDown } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import styles from './Resume.module.css';

const Resume = () => {
  const resumeRef = useRef(null);

  const downloadPDF = async () => {
    if (!resumeRef.current) return;

    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#FFFFFF'
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
        format: 'a4'
      });

      // Calculate PDF dimensions
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      // Calculate image dimensions to fit PDF
      const imgWidth = pdfWidth - 40; // 20px margins on each side
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let position = 0;
      
      // Add first page
      pdf.addImage(imgData, 'PNG', 20, position, imgWidth, imgHeight);
      
      // Add additional pages if content is longer than one page
      let heightLeft = imgHeight;
      while (heightLeft >= pdfHeight) {
        position -= pdfHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 20, position, imgWidth, imgHeight);
        heightLeft -= pdfHeight;
      }

      pdf.save('Vipul_Umeshkumar_Singh_Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <section id="resume" className={styles.resumeContainer}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Resume
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.resumeActions}
        >
          <button onClick={downloadPDF} className={`btn-primary ${styles.downloadBtn}`}>
            <Download size={18} />
            Generate & Download PDF
          </button>
          
          <a
            href="/resume/resume.pdf"
            download="Vipul_Umeshkumar_Singh_Resume.pdf"
            className={`btn-secondary ${styles.downloadBtn}`}
          >
            <FileDown size={18} />
            Download Pre-made Resume
          </a>
        </motion.div>

        <div ref={resumeRef} className={styles.resumeContent}>
          {/* Header Section */}
          <header className={styles.resumeHeader}>
            <h1 className={styles.name}>VIPUL UMESHKUMAR SINGH</h1>
            <h2 className={styles.title}>Insight-Focused Data Analyst</h2>
            
            <div className={styles.contactInfo}>
              <span className={styles.contactItem}>
                <MapPin size={16} />
                Kolhapur, Maharashtra, India
              </span>
              <span className={styles.contactItem}>
                <Phone size={16} />
                +91 9545575541
              </span>
              <span className={styles.contactItem}>
                <Mail size={16} />
                unhindered.passion@gmail.com
              </span>
              <span className={styles.contactItem}>
                <Linkedin size={16} />
                linkedin.com/in/mrraizada
              </span>
              <span className={styles.contactItem}>
                <Github size={16} />
                github.com/Mr-Raizada
              </span>
            </div>
          </header>

          {/* Professional Summary */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Professional Summary</h3>
            <p className={styles.summary}>
              I am a dedicated Data Analyst passionate about leveraging data to drive business decisions and performance improvements. 
              Skilled in data analysis, visualization, and statistical modeling, I bring expertise in Excel, Tableau, R, and Python. 
              My goal is to tell compelling data stories that influence strategy and create measurable impact. Currently pursuing a 
              Master's in Computer Applications to deepen my technical skills. Always exploring new tools and techniques to enhance 
              my ability to deliver clear and insightful data-driven recommendations.
            </p>
          </section>

          {/* Work Experience */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Work Experience</h3>
            
            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h4 className={styles.jobTitle}>Global Catalog Associate</h4>
                <span className={styles.date}>Jan 2025 – Present</span>
              </div>
              <p className={styles.company}>Amazon India Pvt Ltd | Bengaluru, Karnataka</p>
              <ul className={styles.responsibilities}>
                <li>Designed and implemented automated quality assessment systems to ensure high accuracy</li>
                <li>Created multi-dimensional quality scoring mechanisms to improve catalog data evaluation</li>
                <li>Developed gap analysis methodologies to identify and rectify quality metric issues</li>
                <li>Utilized Python and Excel extensively for data analysis and process optimization</li>
              </ul>
            </div>

            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h4 className={styles.jobTitle}>Virtual Assistant</h4>
                <span className={styles.date}>May 2023 – Jan 2024</span>
              </div>
              <p className={styles.company}>Amazon India Pvt Ltd</p>
              <ul className={styles.responsibilities}>
                <li>Assisted in data management and client handling to support operational workflows</li>
              </ul>
            </div>

            <div className={styles.experienceItem}>
              <div className={styles.experienceHeader}>
                <h4 className={styles.jobTitle}>Intern</h4>
                <span className={styles.date}>Aug 2021 – Jun 2022</span>
              </div>
              <p className={styles.company}>Srijan India.one</p>
              <ul className={styles.responsibilities}>
                <li>Generated competitive statistics content related to exams</li>
                <li>Monitored social media updates and analyzed web development trends</li>
                <li>Created content for competitive statistics and educational exams related topics</li>
                <li>Monitored social media updates and analyzed website development and trends</li>
              </ul>
            </div>
          </section>

          {/* Skills & Technologies */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Technical Skills</h3>
            
            <div className={styles.skillsGrid}>
              <div className={styles.skillCategory}>
                <h4 className={styles.skillCategoryTitle}>Programming & Analysis</h4>
                <div className={styles.skillTags}>
                  <span className={styles.skillTag}>Python (85%)</span>
                  <span className={styles.skillTag}>R (80%)</span>
                  <span className={styles.skillTag}>Excel (90%)</span>
                  <span className={styles.skillTag}>Statistical Modeling (85%)</span>
                  <span className={styles.skillTag}>Data Storytelling (88%)</span>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h4 className={styles.skillCategoryTitle}>Data Visualization</h4>
                <div className={styles.skillTags}>
                  <span className={styles.skillTag}>Tableau (90%)</span>
                  <span className={styles.skillTag}>Data Visualization (85%)</span>
                  <span className={styles.skillTag}>Dashboard Design (88%)</span>
                  <span className={styles.skillTag}>Interactive Reports (82%)</span>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h4 className={styles.skillCategoryTitle}>Web Technologies</h4>
                <div className={styles.skillTags}>
                  <span className={styles.skillTag}>HTML (75%)</span>
                  <span className={styles.skillTag}>CSS (70%)</span>
                  <span className={styles.skillTag}>React (60%)</span>
                  <span className={styles.skillTag}>Responsive Design (75%)</span>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <h4 className={styles.skillCategoryTitle}>Process Automation</h4>
                <div className={styles.skillTags}>
                  <span className={styles.skillTag}>Process Automation (80%)</span>
                  <span className={styles.skillTag}>Quality Systems (85%)</span>
                  <span className={styles.skillTag}>Data Analysis (88%)</span>
                  <span className={styles.skillTag}>Process Optimization (82%)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Education</h3>
            
            <div className={styles.educationItem}>
              <div className={styles.educationHeader}>
                <h4 className={styles.degree}>Master's in Computer Applications</h4>
                <span className={styles.date}>Current</span>
              </div>
              <p className={styles.institution}>Pursuing to deepen technical skills in computer applications</p>
            </div>

            <div className={styles.educationItem}>
              <div className={styles.educationHeader}>
                <h4 className={styles.degree}>Bachelor's Degree</h4>
                <span className={styles.date}>Completed</span>
              </div>
              <p className={styles.institution}>Background in relevant field with focus on data analysis</p>
            </div>
          </section>

          {/* Projects */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Projects Portfolio</h3>
            
            <div className={styles.projectItem}>
              <h4 className={styles.projectTitle}>Nutrition Chart Website</h4>
              <p className={styles.projectDescription}>
                Interactive nutrition information website built with HTML, CSS, and React integration. 
                Features responsive design and data visualization of nutritional content.
              </p>
              <div className={styles.projectTech}>
                <span className={styles.techTag}>HTML</span>
                <span className={styles.techTag}>CSS</span>
                <span className={styles.techTag}>JavaScript</span>
                <span className={styles.techTag}>React</span>
              </div>
            </div>

            <div className={styles.projectItem}>
              <h4 className={styles.projectTitle}>Quiz Application</h4>
              <p className={styles.projectDescription}>
                Interactive quiz platform with multiple question formats, scoring system, and responsive design. 
                Built with modern web technologies.
              </p>
              <div className={styles.projectTech}>
                <span className={styles.techTag}>HTML</span>
                <span className={styles.techTag}>CSS</span>
                <span className={styles.techTag}>JavaScript</span>
                <span className={styles.techTag}>React</span>
              </div>
            </div>

            <div className={styles.projectItem}>
              <h4 className={styles.projectTitle}>Data Analysis Projects</h4>
              <p className={styles.projectDescription}>
                Various data analysis projects including statistical modeling, data cleaning, 
                and visualization using Python and R.
              </p>
              <div className={styles.projectTech}>
                <span className={styles.techTag}>Python</span>
                <span className={styles.techTag}>R</span>
                <span className={styles.techTag}>Excel</span>
                <span className={styles.techTag}>Tableau</span>
              </div>
            </div>
          </section>

          {/* Volunteer Experience */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Volunteer Experience</h3>
            
            <div className={styles.volunteerItem}>
              <div className={styles.volunteerHeader}>
                <h4 className={styles.volunteerTitle}>Article 51A Volunteer (Environment)</h4>
                <span className={styles.date}>Since Jun 2019</span>
              </div>
              <p className={styles.volunteerLocation}>Pune</p>
              <p className={styles.volunteerDescription}>Weekly tree planting and sapling protection efforts</p>
            </div>

            <div className={styles.volunteerItem}>
              <div className={styles.volunteerHeader}>
                <h4 className={styles.volunteerTitle}>Chanakya Mandal Pariwar (Disaster & Humanitarian Relief)</h4>
                <span className={styles.date}>2018-2019</span>
              </div>
              <p className={styles.volunteerLocation}>Kolhapur Flood Relief</p>
              <p className={styles.volunteerDescription}>
                Kerala Flood Relief Volunteer (Aug 2018) | Head Volunteer for Kolhapur Flood Relief (Sep–Nov 2019) | 
                Led volunteer coordination, cleanup, and community assistance during severe floods
              </p>
            </div>
          </section>

          {/* Declaration */}
          <section className={styles.section}>
            <h3 className={styles.sectionTitle}>Declaration</h3>
            <p className={styles.declaration}>
              I hereby declare that all information provided is true and accurate to the best of my knowledge.
            </p>
            <p className={styles.signature}>
              Vipul Umeshkumar Singh
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Resume;