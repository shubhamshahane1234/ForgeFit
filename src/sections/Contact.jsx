import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    goal: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Please enter a valid email.";
    if (!form.goal) e.goal = "Please select a fitness goal.";
    if (!form.message.trim()) e.message = "Tell us a bit about yourself.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name])
      setErrors((prev) => {
        const n = { ...prev };
        delete n[name];
        return n;
      });
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="section-tag">Get Started</p>
          <h2 id="contact-heading">
            Ready to <span className="accent">Transform?</span>
          </h2>
          <p className="section-sub">
            Fill out the form and one of our coaches will reach out within 24
            hours.
          </p>
        </motion.div>

        <motion.div
          className="contact__wrapper"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                className="contact__success"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                role="alert"
                aria-live="assertive"
              >
                <div className="contact__success-icon" aria-hidden="true">
                  ✓
                </div>
                <h3>You're In!</h3>
                <p>A coach will be in touch shortly. Get ready to level up.</p>
                <button
                  className="btn btn--primary"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", goal: "", message: "" });
                  }}
                >
                  Submit Another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {/* Name */}
                <div
                  className={`contact__field ${
                    errors.name ? "contact__field--error" : ""
                  }`}
                >
                  <label htmlFor="contact-name">Full Name</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={onChange}
                    aria-required="true"
                    aria-describedby={
                      errors.name ? "contact-name-err" : undefined
                    }
                    placeholder="Shubham Shahane"
                  />
                  {errors.name && (
                    <span
                      id="contact-name-err"
                      className="contact__error"
                      role="alert"
                    >
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div
                  className={`contact__field ${
                    errors.email ? "contact__field--error" : ""
                  }`}
                >
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={onChange}
                    aria-required="true"
                    aria-describedby={
                      errors.email ? "contact-email-err" : undefined
                    }
                    placeholder="shubham@email.com"
                  />
                  {errors.email && (
                    <span
                      id="contact-email-err"
                      className="contact__error"
                      role="alert"
                    >
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Goal */}
                <div
                  className={`contact__field ${
                    errors.goal ? "contact__field--error" : ""
                  }`}
                >
                  <label htmlFor="contact-goal">Primary Fitness Goal</label>
                  <select
                    id="contact-goal"
                    name="goal"
                    value={form.goal}
                    onChange={onChange}
                    aria-required="true"
                    aria-describedby={
                      errors.goal ? "contact-goal-err" : undefined
                    }
                  >
                    <option value="">Select a goal…</option>
                    <option value="strength">Build Strength</option>
                    <option value="fat-loss">Lose Fat</option>
                    <option value="muscle">Gain Muscle</option>
                    <option value="flexibility">Improve Flexibility</option>
                    <option value="endurance">Increase Endurance</option>
                  </select>
                  {errors.goal && (
                    <span
                      id="contact-goal-err"
                      className="contact__error"
                      role="alert"
                    >
                      {errors.goal}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div
                  className={`contact__field ${
                    errors.message ? "contact__field--error" : ""
                  }`}
                >
                  <label htmlFor="contact-message">
                    Tell Us About Yourself
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={onChange}
                    aria-required="true"
                    aria-describedby={
                      errors.message ? "contact-message-err" : undefined
                    }
                    placeholder="Your experience level, schedule, any injuries…"
                  />
                  {errors.message && (
                    <span
                      id="contact-message-err"
                      className="contact__error"
                      role="alert"
                    >
                      {errors.message}
                    </span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn--primary contact__submit"
                >
                  Start My Journey
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
