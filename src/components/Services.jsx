import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaShieldAlt,
  FaLock,
  FaNetworkWired,
  FaCloud,
  FaBug,
  FaUserShield
} from 'react-icons/fa'
import './Services.css'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    {
      icon: FaShieldAlt,
      title: 'Threat Detection',
      description: 'Advanced AI-powered threat detection system that identifies and neutralizes cyber threats in real-time before they can harm your infrastructure.',
      features: ['Real-time Monitoring', 'AI Analysis', 'Automated Response']
    },
    {
      icon: FaLock,
      title: 'Data Encryption',
      description: 'Military-grade encryption protocols to protect your sensitive data both in transit and at rest, ensuring complete confidentiality.',
      features: ['AES-256 Encryption', 'End-to-End Security', 'Zero-Knowledge Architecture']
    },
    {
      icon: FaNetworkWired,
      title: 'Network Security',
      description: 'Comprehensive network protection with advanced firewall, intrusion detection, and prevention systems to safeguard your infrastructure.',
      features: ['Firewall Management', 'IDS/IPS', 'Traffic Analysis']
    },
    {
      icon: FaCloud,
      title: 'Cloud Security',
      description: 'Secure your cloud infrastructure with our specialized cloud security solutions, protecting multi-cloud and hybrid environments.',
      features: ['Cloud Monitoring', 'Access Control', 'Compliance Management']
    },
    {
      icon: FaBug,
      title: 'Vulnerability Assessment',
      description: 'Regular security audits and penetration testing to identify and fix vulnerabilities before they can be exploited by attackers.',
      features: ['Penetration Testing', 'Security Audits', 'Risk Assessment']
    },
    {
      icon: FaUserShield,
      title: 'Identity Management',
      description: 'Comprehensive identity and access management solutions with multi-factor authentication and single sign-on capabilities.',
      features: ['MFA', 'SSO Integration', 'Access Control']
    }
  ]

  return (
    <section className="services" id="services" ref={ref}>
      <div className="services-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Our Services</span>
          <h2 className="section-title">
            Comprehensive <span className="gradient-text">Security Solutions</span>
          </h2>
          <p className="section-description">
            Enterprise-grade cybersecurity services designed to protect your business
            from evolving threats and ensure complete digital safety.
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                y: -15,
                rotateX: 5,
                rotateY: 5,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              style={{
                transformStyle: "preserve-3d",
                perspective: 1000
              }}
            >
              {/* Animated border gradient */}
              <motion.div
                className="service-card-border"
                animate={{
                  rotate: hoveredCard === index ? 360 : 0,
                  opacity: hoveredCard === index ? 1 : 0.5
                }}
                transition={{ duration: 2, ease: "linear" }}
              />

              <motion.div
                className="service-icon-wrapper"
                animate={{
                  rotate: hoveredCard === index ? [0, 360] : 0,
                  scale: hoveredCard === index ? [1, 1.2, 1] : 1
                }}
                transition={{
                  duration: hoveredCard === index ? 0.8 : 0.3,
                  type: "spring",
                  stiffness: 200
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  <service.icon className="service-icon" />
                </motion.div>
              </motion.div>

              <motion.h3
                className="service-title"
                animate={hoveredCard === index ? { scale: 1.05 } : { scale: 1 }}
              >
                {service.title}
              </motion.h3>

              <motion.p
                className="service-description"
                animate={hoveredCard === index ? { y: -5 } : { y: 0 }}
              >
                {service.description}
              </motion.p>

              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    className="service-feature"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1 + idx * 0.15,
                      type: "spring"
                    }}
                    whileHover={{
                      x: 10,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <motion.span
                      className="feature-dot"
                      animate={{
                        scale: hoveredCard === index ? [1, 1.5, 1] : 1,
                        rotate: hoveredCard === index ? 360 : 0
                      }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.1
                      }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                className="service-button"
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0 5px 20px rgba(0, 217, 255, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={hoveredCard === index ? {
                  backgroundColor: "rgba(0, 217, 255, 0.15)"
                } : {}}
              >
                Learn More
              </motion.button>

              {/* Animated particles */}
              {hoveredCard === index && (
                <>
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="service-particle"
                      initial={{
                        x: 0,
                        y: 0,
                        opacity: 0
                      }}
                      animate={{
                        x: Math.random() * 200 - 100,
                        y: Math.random() * 200 - 100,
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </>
              )}

              <motion.div
                className="service-glow"
                animate={{
                  scale: hoveredCard === index ? [1, 1.5, 1] : [1, 1.2, 1],
                  opacity: hoveredCard === index ? [0.2, 0.4, 0.2] : [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
