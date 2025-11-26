import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCheckCircle, FaAward, FaUsers, FaChartLine } from 'react-icons/fa'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const values = [
    {
      icon: FaCheckCircle,
      title: 'Trust & Transparency',
      description: 'Building lasting relationships through honest communication and reliable service.'
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality cybersecurity solutions.'
    },
    {
      icon: FaUsers,
      title: 'Client-Focused',
      description: 'Your security is our priority. We tailor solutions to your unique needs.'
    },
    {
      icon: FaChartLine,
      title: 'Innovation',
      description: 'Staying ahead of threats with cutting-edge technology and research.'
    }
  ]

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-container">
        <div className="about-grid">
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-badge">About Zencrypt</span>
            <h2 className="section-title">
              Protecting <span className="gradient-text">Digital Assets</span>
              <br />Since 2015
            </h2>
            <p className="about-text">
              At Zencrypt, we believe that robust cybersecurity shouldn't be a luxury—it
              should be accessible to every organization. With over 8 years of experience,
              we've protected countless businesses from cyber threats, data breaches, and
              security vulnerabilities.
            </p>
            <p className="about-text">
              Our team of certified security experts combines cutting-edge technology with
              deep industry knowledge to deliver comprehensive security solutions. We don't
              just protect systems; we empower businesses to operate confidently in the
              digital age.
            </p>

            <div className="about-stats">
              <div className="about-stat">
                <div className="stat-value">8+</div>
                <div className="stat-text">Years Experience</div>
              </div>
              <div className="about-stat">
                <div className="stat-value">50+</div>
                <div className="stat-text">Security Experts</div>
              </div>
              <div className="about-stat">
                <div className="stat-value">15+</div>
                <div className="stat-text">Certifications</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="about-values"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="values-title">Our Core Values</h3>
            <div className="values-grid">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="value-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="value-icon-wrapper">
                    <value.icon className="value-icon" />
                  </div>
                  <h4 className="value-title">{value.title}</h4>
                  <p className="value-description">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
