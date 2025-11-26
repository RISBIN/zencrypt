import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { FaShieldAlt, FaServer, FaUsers, FaClock } from 'react-icons/fa'
import './Statistics.css'

const Statistics = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  })

  const stats = [
    {
      icon: FaShieldAlt,
      number: 10000000,
      suffix: '+',
      label: 'Threats Blocked',
      color: '#00D9FF'
    },
    {
      icon: FaUsers,
      number: 500,
      suffix: '+',
      label: 'Happy Clients',
      color: '#8B5CF6'
    },
    {
      icon: FaServer,
      number: 99.9,
      decimals: 1,
      suffix: '%',
      label: 'Uptime Guarantee',
      color: '#00FF88'
    },
    {
      icon: FaClock,
      number: 24,
      suffix: '/7',
      label: 'Support Available',
      color: '#00D9FF'
    }
  ]

  return (
    <section className="statistics" id="statistics" ref={ref}>
      <div className="statistics-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.05 }}
            >
              <div className="stat-icon-wrapper" style={{ background: `${stat.color}20` }}>
                <stat.icon className="stat-icon" style={{ color: stat.color }} />
              </div>
              <div className="stat-number">
                {inView && (
                  <CountUp
                    end={stat.number}
                    duration={2.5}
                    decimals={stat.decimals || 0}
                    separator=","
                  />
                )}
                <span className="stat-suffix">{stat.suffix}</span>
              </div>
              <div className="stat-label">{stat.label}</div>
              <motion.div
                className="stat-glow"
                style={{ background: stat.color }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
