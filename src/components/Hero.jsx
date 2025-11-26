import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { FaArrowRight, FaShieldAlt, FaLock, FaUserSecret } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  useEffect(() => {
    console.log('Hero inView state:', inView)
  }, [inView])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const floatingIcons = [
    { Icon: FaShieldAlt, delay: 0, position: { top: '20%', left: '10%' } },
    { Icon: FaLock, delay: 0.2, position: { top: '60%', left: '15%' } },
    { Icon: FaUserSecret, delay: 0.4, position: { top: '40%', right: '10%' } },
    { Icon: FaShieldAlt, delay: 0.6, position: { top: '70%', right: '20%' } }
  ]

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="hero-container">
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className="floating-icon"
            style={item.position}
          >
            <item.Icon />
          </div>
        ))}

        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="badge-dot"></span>
            Advanced Cybersecurity Solutions
          </motion.div>

          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Secure Your
            <span className="gradient-text"> Digital Future</span>
          </motion.h1>

          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Protect your business with enterprise-grade security solutions.
            Real-time threat detection, 24/7 monitoring, and advanced encryption
            to keep your data safe from evolving cyber threats.
          </motion.p>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="hero-btn primary"
              onClick={scrollToContact}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <FaArrowRight className="btn-icon" />
            </motion.button>

            <motion.button
              className="hero-btn secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </motion.button>
          </motion.div>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Clients Protected</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">99.9%</div>
              <div className="stat-label">Uptime</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="shield-container">
            <div className="shield-outer">
              <div className="shield-ring"></div>
            </div>
            <div className="shield-middle">
              <div className="shield-ring"></div>
            </div>
            <div className="shield-inner">
              <FaShieldAlt className="shield-icon" />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="scroll-mouse"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="scroll-wheel"></div>
        </motion.div>
        <div className="scroll-text">Scroll to explore</div>
      </motion.div>
    </section>
  )
}

export default Hero
