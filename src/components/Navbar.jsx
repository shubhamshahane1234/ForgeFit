import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./Navbar.css";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#programs", label: "Programs" },
  { href: "#exercises", label: "Exercises" },
  { href: "#trainers", label: "Trainers" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const drawerRef = useRef(null);

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* trap focus inside mobile drawer */
  useEffect(() => {
    if (!open) return;
    const el = drawerRef.current;
    const focusables = el?.querySelectorAll(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables?.[0];
    const last = focusables?.[focusables.length - 1];
    first?.focus();

    const trap = (e) => {
      if (e.key !== "Tab") return;
      if (
        e.shiftKey
          ? document.activeElement === first
          : document.activeElement === last
      ) {
        e.preventDefault();
        (e.shiftKey ? last : first)?.focus();
      }
    };
    el?.addEventListener("keydown", trap);
    return () => el?.removeEventListener("keydown", trap);
  }, [open]);

  /* close on Escape */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      aria-label="Main navigation"
    >
      {/* skip link */}
      <a href="#home" className="skip-link">
        Skip to main content
      </a>

      <div className="navbar__inner container">
        {/* logo */}
        <a href="#home" className="navbar__logo" aria-label="FORGE – Home">
          <span className="navbar__logo-mark">F</span>
          <span className="navbar__logo-text">ForgeFit</span>
        </a>

        {/* desktop links */}
        <ul className="navbar__links" role="list">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="navbar__link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* desktop CTA */}
        <a href="#contact" className="navbar__cta">
          Join Now
        </a>

        {/* hamburger */}
        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`navbar__bar ${open ? "navbar__bar--top" : ""}`} />
          <span className={`navbar__bar ${open ? "navbar__bar--mid" : ""}`} />
          <span className={`navbar__bar ${open ? "navbar__bar--bot" : ""}`} />
        </button>
      </div>

      {/* mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="navbar__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />
            <motion.aside
              id="mobile-menu"
              ref={drawerRef}
              className="navbar__drawer"
              role="dialog"
              aria-label="Mobile menu"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                className="navbar__drawer-close"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
              <ul role="list">
                {LINKS.map((l, i) => (
                  <li key={l.href}>
                    <motion.a
                      href={l.href}
                      className="navbar__drawer-link"
                      onClick={() => setOpen(false)}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: i * 0.07,
                        duration: 0.4,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      {l.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="navbar__drawer-cta"
                onClick={() => setOpen(false)}
              >
                Join Now
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
