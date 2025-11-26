import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane
} from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'general',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    alert('Thank you! We\'ll get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: 'general',
      message: ''
    })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email Us',
      content: 'contact@zencrypt.com',
      link: 'mailto:contact@zencrypt.com'
    },
    {
      icon: FaPhone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Visit Us',
      content: '123 Security Blvd, Tech City, TC 12345',
      link: '#'
    },
    {
      icon: FaClock,
      title: 'Working Hours',
      content: '24/7 Support Available',
      link: '#'
    }
  ]

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Get In Touch</span>
          <h2 className="section-title">
            Let's Secure Your <span className="gradient-text">Digital Future</span>
          </h2>
          <p className="section-description">
            Ready to enhance your cybersecurity? Contact us today for a free consultation.
          </p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info-section"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="contact-info-title">Contact Information</h3>
            <p className="contact-info-text">
              Have questions? We're here to help. Reach out to our team and we'll
              respond as soon as possible.
            </p>

            <div className="contact-info-items">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="contact-info-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <div className="info-icon-wrapper">
                    <item.icon className="info-icon" />
                  </div>
                  <div className="info-content">
                    <div className="info-title">{item.title}</div>
                    <div className="info-text">{item.content}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="company">Company Name</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="service">Service Interested In</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="general">General Inquiry</option>
                <option value="threat-detection">Threat Detection</option>
                <option value="encryption">Data Encryption</option>
                <option value="network">Network Security</option>
                <option value="cloud">Cloud Security</option>
                <option value="assessment">Vulnerability Assessment</option>
                <option value="identity">Identity Management</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                aria-required="true"
                rows="5"
                placeholder="Tell us about your security needs..."
              />
            </div>

            <motion.button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  Send Message
                  <FaPaperPlane className="submit-icon" />
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
