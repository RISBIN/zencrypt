import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Testimonials.css'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  })

  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CTO, TechCorp',
      company: 'TechCorp Solutions',
      image: '👩‍💼',
      rating: 5,
      text: 'Zencrypt transformed our security infrastructure. Their proactive approach and 24/7 monitoring gave us peace of mind. The team is incredibly knowledgeable and responsive.'
    },
    {
      name: 'Michael Chen',
      position: 'CEO, DataFlow Inc',
      company: 'DataFlow Inc',
      image: '👨‍💼',
      rating: 5,
      text: 'Outstanding service! After a security audit revealed vulnerabilities, Zencrypt quickly implemented comprehensive solutions. We haven\'t had a single incident since partnering with them.'
    },
    {
      name: 'Emily Rodriguez',
      position: 'IT Director',
      company: 'HealthPlus Medical',
      image: '👩‍⚕️',
      rating: 5,
      text: 'As a healthcare provider, HIPAA compliance is critical. Zencrypt ensured our patient data is fully protected while maintaining system accessibility. Truly exceptional work.'
    },
    {
      name: 'David Park',
      position: 'Security Manager',
      company: 'FinanceSecure Bank',
      image: '👨‍💻',
      rating: 5,
      text: 'The best cybersecurity partner we\'ve worked with. Their threat detection system caught several attacks before they could impact our systems. Highly recommended!'
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="testimonials" id="testimonials" ref={ref}>
      <div className="testimonials-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Testimonials</span>
          <h2 className="section-title">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="section-description">
            Don't just take our word for it—hear from businesses we've protected.
          </p>
        </motion.div>

        <div className="testimonials-carousel">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="testimonial-card-wrapper"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <div className="testimonial-card">
                <FaQuoteLeft className="quote-icon" />

                <div className="testimonial-rating">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>

                <p className="testimonial-text">{testimonials[currentIndex].text}</p>

                <div className="testimonial-author">
                  <div className="author-image">{testimonials[currentIndex].image}</div>
                  <div className="author-info">
                    <div className="author-name">{testimonials[currentIndex].name}</div>
                    <div className="author-position">{testimonials[currentIndex].position}</div>
                    <div className="author-company">{testimonials[currentIndex].company}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="carousel-controls">
            <motion.button
              className="carousel-button prev"
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft />
            </motion.button>

            <div className="carousel-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <motion.button
              className="carousel-button next"
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
