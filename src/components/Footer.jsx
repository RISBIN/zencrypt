import { motion } from 'framer-motion'
import {
  FaShieldAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaArrowUp
} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Press', href: '#' }
    ],
    services: [
      { label: 'Threat Detection', href: '#services' },
      { label: 'Data Encryption', href: '#services' },
      { label: 'Network Security', href: '#services' },
      { label: 'Cloud Security', href: '#services' }
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Security Hub', href: '#' },
      { label: 'Case Studies', href: '#' },
      { label: 'Whitepapers', href: '#' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Compliance', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: FaFacebookF, href: '#', label: 'Facebook' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaGithub, href: '#', label: 'GitHub' }
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <FaShieldAlt className="footer-logo-icon" />
              <span className="footer-logo-text">
                ZEN<span className="gradient-text">CRYPT</span>
              </span>
            </div>
            <p className="footer-tagline">
              Protecting your digital assets with cutting-edge cybersecurity solutions.
              Your security is our priority.
            </p>
            <div className="footer-social">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="social-link"
                  aria-label={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-links-column">
              <h4 className="footer-links-title">Company</h4>
              <ul className="footer-links-list">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-title">Services</h4>
              <ul className="footer-links-list">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-title">Resources</h4>
              <ul className="footer-links-list">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-column">
              <h4 className="footer-links-title">Legal</h4>
              <ul className="footer-links-list">
                {footerLinks.legal.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Zencrypt. All rights reserved.
          </p>
          <div className="footer-badges">
            <span className="footer-badge">ISO 27001 Certified</span>
            <span className="footer-badge">SOC 2 Compliant</span>
            <span className="footer-badge">GDPR Ready</span>
          </div>
        </div>

        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer
