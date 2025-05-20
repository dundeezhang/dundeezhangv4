import { motion } from "framer-motion";

export default function Intro() {
  return (
    <div id="intro">
      <header className="App-header">
        <div className="dundee-container">
          <h1 className="dundee-name">
            <span className="glow">Hello! I'm Dundee.</span>
          </h1>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p className="website-intro-top">
            currently working swe @ airfairness and studying cs @ uwaterloo.
          </p>
        </motion.div>

        <ul className="social-cons">
          <li>
            <motion.div
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <a
                rel="noreferrer"
                href="https://www.linkedin.com/in/dundeezhang/"
                target="_blank"
              >
                <div className="circle-div">
                  <i className="fa-brands fa-linkedin-in intro-icons"></i>
                </div>
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.6,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <a
                rel="noreferrer"
                href="https://github.com/dundeezhang"
                target="_blank"
              >
                <div className="circle-div">
                  <i className="fa-brands fa-github intro-icons"></i>
                </div>
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.7,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <a
                rel="noreferrer"
                href="https://twitter.com/dundeezhang"
                target="_blank"
              >
                <div className="circle-div">
                  <i className="fa-brands fa-x-twitter intro-icons"></i>
                </div>
              </a>
            </motion.div>
          </li>
          <li>
            <motion.div
              initial={{ opacity: 0, scale: 1.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.2,
                delay: 0.8,
                ease: [0, 0.71, 0.2, 1.01],
              }}
            >
              <a rel="noreferrer" href="/resume.pdf" target="_blank">
                <div className="circle-div">
                  <i className="intro-icons fa-solid fa-file"></i>
                </div>
              </a>
            </motion.div>
          </li>
        </ul>
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p className="website-intro-top navlist" style={{ opacity: 0.75 }}>
            Move mouse for parallax effect!
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 1.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <motion.div
            initial={{ opacity: 1, scale: 1.1 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -5, 0],
            }}
            transition={{
              duration: 1,
              delay: 0,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
          >
            <i
              className="fa-solid fa-chevron-down"
              style={{ opacity: 0.75 }}
              onClick={() => {
                window.scrollBy({
                  top: window.innerHeight,
                  behavior: "smooth",
                });
              }}
            ></i>
          </motion.div>
        </motion.div>
      </header>
    </div>
  );
}
