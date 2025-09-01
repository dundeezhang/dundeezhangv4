import { motion } from "framer-motion";

export default function TableOfContents() {
  return (
    <div className="table-of-content-wrapper">
      <div className="mobile-nav">
        <div className="center-list">
          <a href="/">Home</a>
          <a href="/works">Works</a>
          <a href="mailto:contact@dundeezha.ng">Contact</a>
          <a href="/resume.pdf" target="_blank">
            Resume
          </a>
        </div>
      </div>
      <li className="navlist">
        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <ul className="table-of-content">
            <a rel="noreferrer" className="table-of-content-text" href="/">
              <span className="nav-span">Home</span>
            </a>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <ul className="table-of-content">
            <a rel="noreferrer" className="table-of-content-text" href="/works">
              <span className="nav-span">Works</span>
            </a>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <ul className="table-of-content">
            <a
              rel="noreferrer"
              className="table-of-content-text"
              href="https://blog.dhz.app"
              target="_self"
            >
              <span className="nav-span">Blog</span>
            </a>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <ul className="table-of-content">
            <a
              rel="noreferrer"
              className="table-of-content-text"
              href="mailto:contact@dundeezha.ng"
            >
              <span className="nav-span">
                Contact <i className="fa fa-external-link"></i>
              </span>
            </a>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.2,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <ul className="table-of-content">
            <a
              rel="noreferrer"
              className="table-of-content-text"
              href="/resume.pdf"
              target="_blank"
            >
              <span className="nav-span">
                Resume <i className="fa fa-external-link"></i>
              </span>
            </a>
          </ul>
        </motion.div>
      </li>
    </div>
  );
}
