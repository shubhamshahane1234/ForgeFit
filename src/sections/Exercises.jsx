import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Exercises.css'

const CATEGORIES = ['All', 'Upper', 'Lower', 'Core', 'Cardio']

const EXERCISES = [
  { id: 1, name: 'Bench Press',        cat: 'Upper',   muscles: ['Chest','Triceps','Shoulders'], diff: 3, duration: '4×8' },
  { id: 2, name: 'Barbell Squat',      cat: 'Lower',   muscles: ['Quads','Glutes','Hamstrings'], diff: 4, duration: '4×6' },
  { id: 3, name: 'Plank Hold',         cat: 'Core',    muscles: ['Abs','Obliques','Lumbars'],    diff: 2, duration: '3×60s' },
  { id: 4, name: 'Pull-Ups',           cat: 'Upper',   muscles: ['Lats','Biceps','Rear Delt'],   diff: 3, duration: '3×10' },
  { id: 5, name: 'Romanian Deadlift',  cat: 'Lower',   muscles: ['Hamstrings','Glutes','Back'], diff: 4, duration: '4×8' },
  { id: 6, name: 'Russian Twist',      cat: 'Core',    muscles: ['Obliques','Abs','Hip Flex'],   diff: 2, duration: '3×20' },
  { id: 7, name: 'Box Jumps',          cat: 'Cardio',  muscles: ['Quads','Glutes','Calves'],     diff: 3, duration: '4×10' },
  { id: 8, name: 'Shoulder Press',     cat: 'Upper',   muscles: ['Shoulders','Triceps','Traps'], diff: 3, duration: '3×10' },
  { id: 9, name: 'Bulgarian Split Squat', cat: 'Lower', muscles: ['Quads','Glutes','Balance'],   diff: 4, duration: '3×12' },
  { id:10, name: 'Dead Bug',           cat: 'Core',    muscles: ['Abs','Spine','Hip Flex'],      diff: 1, duration: '3×10' },
  { id:11, name: 'Burpees',            cat: 'Cardio',  muscles: ['Full Body','Cardio','Agility'], diff: 4, duration: '4×12' },
  { id:12, name: 'Lat Pulldown',       cat: 'Upper',   muscles: ['Lats','Biceps','Shoulders'],   diff: 2, duration: '3×12' },
]

function StarDiff({ level }) {
  return (
    <div className="star-diff" aria-label={`Difficulty: ${level} out of 4`}>
      {[1,2,3,4].map(n => (
        <span key={n} className={`star-diff__star ${n <= level ? 'star-diff__star--on' : ''}`} aria-hidden="true">★</span>
      ))}
    </div>
  )
}

export default function Exercises() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? EXERCISES : EXERCISES.filter(e => e.cat === active)

  return (
    <section id="exercises" className="exercises" aria-labelledby="exercises-heading">
      <div className="container">
        {/* header */}
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [.22,1,.36,1] }}
        >
          <p className="section-tag">Exercise Library</p>
          <h2 id="exercises-heading">Master Every <span className="accent">Movement</span></h2>
          <p className="section-sub">Filter by muscle group and build your ideal routine from our curated library.</p>
        </motion.div>

        {/* tabs – role="tablist" for a11y */}
        <div className="exercises__tabs" role="tablist" aria-label="Exercise categories">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={active === cat}
              aria-controls={`exercises-panel`}
              className={`exercises__tab ${active === cat ? 'exercises__tab--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* grid */}
        <div
          id="exercises-panel"
          role="tabpanel"
          className="exercises__grid"
          aria-label={`Showing ${active === 'All' ? 'all' : active} exercises`}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((ex, i) => (
              <motion.article
                key={ex.id}
                className="ex-card"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: [.22,1,.36,1] }}
                aria-labelledby={`ex-${ex.id}-name`}
              >
                <div className="ex-card__header">
                  <span className="ex-card__cat">{ex.cat}</span>
                  <span className="ex-card__dur">{ex.duration}</span>
                </div>

                <h3 id={`ex-${ex.id}-name`} className="ex-card__name">{ex.name}</h3>

                <StarDiff level={ex.diff} />

                <div className="ex-card__muscles">
                  {ex.muscles.map(m => (
                    <span key={m} className="ex-card__badge">{m}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
