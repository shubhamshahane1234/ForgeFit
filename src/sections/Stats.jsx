import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Stats.css'

const STATS = [
  { value: 12000, label: 'Active Members', suffix: '+' },
  { value: 48,    label: 'Expert Trainers', suffix: '' },
  { value: 30,    label: 'Unique Programs', suffix: '+' },
  { value: 8,     label: 'Years of Excellence', suffix: '' },
]

function CountUp({ target, suffix, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const startRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        startRef.current = performance.now()
        const animate = (now) => {
          const elapsed = now - startRef.current
          const progress = Math.min(elapsed / duration, 1)
          // ease-out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * target))
          if (progress < 1) animRef.current = requestAnimationFrame(animate)
        }
        animRef.current = requestAnimationFrame(animate)
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => {
      observer.disconnect()
      if (animRef.current) cancelAnimationFrame(animRef.current)
    }
  }, [target, duration])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="stats" aria-label="Gym statistics">
      <div className="container">
        <div className="stats__grid">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="stats__item"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [.22,1,.36,1] }}
            >
              <h3 className="stats__number" aria-live="polite">
                <CountUp target={s.value} suffix={s.suffix} />
              </h3>
              <p className="stats__label">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
