import { motion } from 'framer-motion'
import './Programs.css'

const PROGRAMS = [
  {
    id: 'strength',
    icon: '🏋️',
    label: 'Strength',
    tag: '4 Days / Week',
    desc: 'Compound lifts, progressive overload, and periodized training blocks designed to build raw, functional power.',
    highlights: ['Barbell & Dumbbell', 'Progressive Overload', 'Periodization', '8–12 Weeks'],
  },
  {
    id: 'hiit',
    icon: '⚡',
    label: 'HIIT',
    tag: '3 Days / Week',
    desc: 'High-intensity intervals that torch calories and spike your metabolism — in under 45 minutes.',
    highlights: ['Metabolic Conditioning', 'Circuit Training', 'Zero Equipment Option', 'Recovery Protocols'],
  },
  {
    id: 'flexibility',
    icon: '🧘',
    label: 'Flexibility & Mobility',
    tag: '5 Days / Week',
    desc: 'Restore range of motion, prevent injury, and move with fluid ease through yoga-inspired mobility flows.',
    highlights: ['Dynamic Stretching', 'Yoga Flows', 'Joint Health', 'Injury Prevention'],
  },
]

const cardAnim = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [.22,1,.36,1] } },
}

export default function Programs() {
  return (
    <section id="programs" className="programs" aria-labelledby="programs-heading">
      <div className="container">
        {/* header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [.22,1,.36,1] }}
        >
          <p className="section-tag">What We Offer</p>
          <h2 id="programs-heading">Built For <span className="accent">Every Goal</span></h2>
          <p className="section-sub">Pick the program that matches your ambition. Each plan is fully customisable by our certified coaches.</p>
        </motion.div>

        {/* cards */}
        <div className="programs__grid">
          {PROGRAMS.map((p, i) => (
            <motion.article
              key={p.id}
              className="program-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardAnim}
              transition={{ delay: i * 0.12 }}
              aria-labelledby={`program-${p.id}-title`}
            >
              <div className="program-card__icon" aria-hidden="true">{p.icon}</div>
              <p className="program-card__tag">{p.tag}</p>
              <h3 id={`program-${p.id}-title`} className="program-card__title">{p.label}</h3>
              <p className="program-card__desc">{p.desc}</p>
              <ul className="program-card__list" role="list" aria-label={`${p.label} highlights`}>
                {p.highlights.map(h => (
                  <li key={h} className="program-card__item">
                    <span className="program-card__bullet" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="btn btn--ghost program-card__cta">Learn More</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
