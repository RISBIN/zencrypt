import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaHospital,
  FaUniversity,
  FaShoppingCart,
  FaBuilding
} from 'react-icons/fa'
import './Solutions.css'

const Solutions = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const solutions = [
    {
      icon: FaHospital,
      title: 'Healthcare',
      description: 'HIPAA-compliant security solutions protecting patient data and medical records with advanced encryption and access controls.',
      color: '#00D9FF'
    },
    {
      icon: FaUniversity,
      title: 'Financial Services',
      description: 'PCI DSS compliant solutions safeguarding financial transactions, customer data, and banking infrastructure from cyber threats.',
      color: '#8B5CF6'
    },
    {
      icon: FaShoppingCart,
      title: 'E-Commerce',
      description: 'Comprehensive protection for online stores, payment gateways, and customer information with real-time fraud detection.',
      color: '#00FF88'
    },
    {
      icon: FaBuilding,
      title: 'Enterprise',
      description: 'Scalable security solutions for large organizations with complex infrastructure, multi-site operations, and remote workforce.',
      color: '#00D9FF'
    }
  ]

  return (
    <section className="solutions" id="solutions" ref={ref}>
      <div className="solutions-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Industry Solutions</span>
          <h2 className="section-title">
            Tailored <span className="gradient-text">Security Solutions</span>
          </h2>
          <p className="section-description">
            Industry-specific cybersecurity solutions designed to meet unique
            compliance requirements and security challenges.
          </p>
        </motion.div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="solution-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="solution-background"
                style={{ background: `${solution.color}15` }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="solution-content">
                <motion.div
                  className="solution-icon-wrapper"
                  style={{ borderColor: solution.color }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <solution.icon
                    className="solution-icon"
                    style={{ color: solution.color }}
                  />
                </motion.div>

                <h3 className="solution-title">{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>

                <motion.button
                  className="solution-button"
                  style={{ borderColor: solution.color, color: solution.color }}
                  whileHover={{ scale: 1.05, backgroundColor: `${solution.color}20` }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Solution
                </motion.button>
              </div>

              <motion.div
                className="solution-particles"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="particle"
                    style={{
                      background: solution.color,
                      animationDelay: `${i * 0.5}s`
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Solutions
