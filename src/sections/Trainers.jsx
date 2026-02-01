import { motion } from "framer-motion";
import "./Trainers.css";

const TRAINERS = [
  {
    id: "alex",
    name: "Amit Sharam",
    role: "Head Strength Coach",
    specialty: ["Olympic Lifting", "Powerlifting", "Programming"],
    bio: "Former national-level powerlifter with 12 years of coaching experience. Specialises in periodized strength blocks.",
    avatar: "AS", // initials fallback
    color: "#e8ff00",
  },
  {
    id: "maya",
    name: "Mayur Chaudhary",
    role: "HIIT & Cardio Specialist",
    specialty: ["MetCon", "Boxing", "Nutrition"],
    bio: "Certified exercise physiologist who builds high-intensity protocols that deliver results without burning you out.",
    avatar: "MC",
    color: "#a8a8a8",
  },
  {
    id: "jordan",
    name: "Jayesh Wadhwani",
    role: "Mobility & Recovery Coach",
    specialty: ["Yoga", "Prehab", "Biomechanics"],
    bio: "Doctor of Physical Therapy turned movement coach. Helps athletes move better, recover faster, and stay injury-free.",
    avatar: "JW",
    color: "#6e6e6e",
  },
];

export default function Trainers() {
  return (
    <section
      id="trainers"
      className="trainers"
      aria-labelledby="trainers-heading"
    >
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-tag">The Team</p>
          <h2 id="trainers-heading">
            Meet Your <span className="accent">Coaches</span>
          </h2>
          <p className="section-sub">
            Certified experts who live and breathe fitness — and genuinely care
            about your results.
          </p>
        </motion.div>

        <div className="trainers__grid">
          {TRAINERS.map((t, i) => (
            <motion.article
              key={t.id}
              className="trainer-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                delay: i * 0.14,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              aria-labelledby={`trainer-${t.id}-name`}
            >
              {/* avatar */}
              <div className="trainer-card__avatar-wrap">
                <div
                  className="trainer-card__avatar"
                  style={{ "--avatar-accent": t.color }}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div className="trainer-card__status" aria-label="Online">
                  <span className="trainer-card__dot" aria-hidden="true" />
                  Online
                </div>
              </div>

              <h3 id={`trainer-${t.id}-name`} className="trainer-card__name">
                {t.name}
              </h3>
              <p className="trainer-card__role">{t.role}</p>
              <p className="trainer-card__bio">{t.bio}</p>

              <div className="trainer-card__tags">
                {t.specialty.map((s) => (
                  <span key={s} className="trainer-card__tag">
                    {s}
                  </span>
                ))}
              </div>

              <a href="#contact" className="btn btn--ghost trainer-card__btn">
                Book Session
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
