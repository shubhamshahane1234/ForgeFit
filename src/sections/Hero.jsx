import { motion } from "framer-motion";
import ThreeScene from "../components/ThreeScene";
import "./Hero.css";

const stagger = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading">
      {/* 3D background – decorative, hidden from screen readers */}
      <div className="hero__canvas" aria-hidden="true">
        <ThreeScene />
      </div>

      {/* gradient vignette overlay */}
      <div className="hero__vignette" aria-hidden="true" />

      {/* content */}
      <div className="hero__content container">
        <motion.p
          className="hero__tag"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <span className="hero__tag-dot" aria-hidden="true" />
          Modern Fitness
        </motion.p>

        <motion.h1
          id="hero-heading"
          className="hero__heading"
          custom={1}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          Train Harder.
          <br />
          <span className="hero__heading-accent">Rise Higher.</span>
        </motion.h1>

        <motion.p
          className="hero__sub"
          custom={2}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          World-class equipment, expert coaches, and programs engineered to push
          your limits and redefine what's possible.
        </motion.p>

        <motion.div
          className="hero__actions"
          custom={3}
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <a href="#programs" className="btn btn--primary">
            Explore Programs
          </a>
          <a href="#exercises" className="btn btn--ghost">
            View Exercises
          </a>
        </motion.div>

        {/* scroll hint */}
        <motion.div
          className="hero__scroll"
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="hero__scroll-line" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
}
