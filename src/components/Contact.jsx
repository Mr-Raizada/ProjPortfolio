import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Github, FileText } from 'lucide-react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration - you'll need to set up an account at https://www.emailjs.com/
      // and replace these with your actual service ID, template ID, and public key
      const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
      const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
      const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
      
      // Send email using EmailJS
      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'unhindered.passion@gmail.com'
        },
        publicKey
      );
      
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
      
      console.log('Email sent successfully:', result);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      console.error('Error sending email:', error);
      
      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
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
    <section id="contact" className={styles.contact}>
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact
        </motion.h2>

        <motion.div 
          className={styles.contactContent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerChildren}
        >
          <motion.div variants={fadeInUp} className={styles.contactInfo}>
            <h3 className={styles.infoTitle}>Get in Touch</h3>
            <p className={styles.infoDescription}>
              I'm always interested in new opportunities and collaborations. 
              Feel free to reach out if you'd like to discuss data analysis projects, 
              web development, or just say hello!
            </p>

            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <Mail size={20} className={styles.contactIcon} />
                <div>
                  <h4>Email</h4>
                  <a href="mailto:unhindered.passion@gmail.com">unhindered.passion@gmail.com</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <Phone size={20} className={styles.contactIcon} />
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+919545575541">+91 9545575541</a>
                </div>
              </div>

              <div className={styles.contactItem}>
                <MapPin size={20} className={styles.contactIcon} />
                <div>
                  <h4>Location</h4>
                  <p>Kolhapur, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <h4>Connect With Me</h4>
              <div className={styles.socialIcons}>
                <a
                  href="https://linkedin.com/in/mrraizada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://github.com/Mr-Raizada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <Link
                  to="/resume"
                  className={styles.socialLink}
                  aria-label="View Resume"
                >
                  <FileText size={24} />
                </Link>
              </div>
            </div>

            <div className={styles.declaration}>
              <h4>Declaration</h4>
              <p>
                I hereby declare that all information provided is true and accurate 
                to the best of my knowledge.
              </p>
              <p className={styles.signature}>Vipul Umeshkumar Singh</p>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className={styles.contactForm}>
            <h3 className={styles.formTitle}>Send a Message</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  inputMode="text"
                  autoComplete="name"
                  autoCapitalize="words"
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  inputMode="email"
                  autoComplete="email"
                  autoCapitalize="none"
                />
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className={styles.formInput}
                  inputMode="text"
                  autoComplete="off"
                />
              </div>

              <div className={styles.formGroup}>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className={styles.formTextarea}
                  inputMode="text"
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn-primary ${styles.submitButton}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.successMessage}
                >
                  Thank you! Your message has been sent successfully.
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={styles.errorMessage}
                >
                  Sorry, there was an error sending your message. Please try again or contact me directly at unhindered.passion@gmail.com.
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;