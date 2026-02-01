import { motion } from "framer-motion";
import "./Footer.css";

const LINKS = [
  { href: "#home", label: "Home" },
  { href: "#programs", label: "Programs" },
  { href: "#exercises", label: "Exercises" },
  { href: "#trainers", label: "Trainers" },
  { href: "#contact", label: "Contact" },
];

const SOCIALS = [
  {
    href: "#",
    label: "Instagram",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "X (Twitter)",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "#",
    label: "YouTube",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
        <polygon
          points="9.75,15.02 15.5,11.75 9.75,8.48"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <motion.div
          className="footer__grid"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* brand */}
          <div className="footer__brand">
            <a href="#home" className="footer__logo" aria-label="FORGE – Home">
              <span className="footer__logo-mark" aria-hidden="true">
                F
              </span>
              <span className="footer__logo-text">FORGE</span>
            </a>
            <p className="footer__tagline">
              Next-gen fitness for the relentless. Push your limits. Redefine
              possible.
            </p>

            {/* socials */}
            <div className="footer__socials">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer__social"
                  aria-label={`Follow us on ${s.label}`}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* nav */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <h4 className="footer__nav-title">Quick Links</h4>
            <ul role="list">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="footer__nav-link">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* hours */}
          <div className="footer__info">
            <h4 className="footer__nav-title">Gym Hours</h4>
            <ul role="list">
              <li>
                <span>Mon – Fri</span>
                <span>5:00 AM – 11:00 PM</span>
              </li>
              <li>
                <span>Saturday</span>
                <span>6:00 AM – 10:00 PM</span>
              </li>
              <li>
                <span>Sunday</span>
                <span>7:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>

          {/* location */}
          <div className="footer__info">
            <h4 className="footer__nav-title">Location</h4>
            <address>
              <p> 2nd Floor, Iron Plaza</p>
              <p> Badnera Road, Near Camp Area</p>
              <p>Amravati, MH 444602</p>
              <p style={{ marginTop: "12px" }}>
                <a href="tel:+15551234567" className="footer__nav-link">
                  +91-7894515478
                </a>
              </p>
              <p>
                <a
                  href="mailto:hello@forgegym.com"
                  className="footer__nav-link"
                >
                  hello@forgegym.com
                </a>
              </p>
            </address>
          </div>
        </motion.div>

        {/* bottom bar */}
        <div className="footer__bottom">
          <p>
            &copy; {new Date().getFullYear()} FORGE Gym. All rights reserved.
          </p>
          <p className="footer__bottom-links">
            <a href="#" className="footer__nav-link">
              Privacy Policy
            </a>
            <a href="#" className="footer__nav-link">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
