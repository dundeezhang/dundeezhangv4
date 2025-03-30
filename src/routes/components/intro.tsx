import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

import uwcsWrBlack from "/icons/blackuwcswebring.svg";
import uwcsWrWhite from "/icons/uwcscwebring.svg";

export default function Intro() {
    const isDarkMode = useMediaQuery({ query: "(prefers-color-scheme: dark)" });

    return (
        <div id="intro">
            <header className="App-header">
                <div className="dundee-container">
                    <h1 className="dundee-name">
                        <span className="glow">Hello! I'm Dundee.</span>
                    </h1>
                </div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <p className="website-intro-top">
                        Welcome to my website! I'm a software developer studying{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="csText"
                            href="https://uwaterloo.ca/future-students/programs/computer-science"
                        >
                            <span className="glow">CS</span>
                        </a>{" "}
                        @{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="schoolText"
                            href="https://uwaterloo.ca"
                        >
                            <span className="glow">University of Waterloo</span>
                        </a>
                        .
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
                                    <i className="fa-brands fa-twitter intro-icons"></i>
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
                            <a
                                rel="noreferrer"
                                href="/resume.pdf"
                                target="_blank"
                            >
                                <div className="circle-div">
                                    <i className="intro-icons fa-solid fa-file"></i>
                                </div>
                            </a>
                        </motion.div>
                    </li>
                </ul>
                <motion.div
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.2,
                        delay: 0.9,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <div className="webring-div">
                        <a
                            className="cs-webring-links"
                            href="https://cs.uwatering.com/#https://dundeezhang.com?nav=prev"
                        >
                            <i className="fa-solid fa-arrow-left"></i>
                        </a>
                        <a
                            href="https://cs.uwatering.com/#https://dundeezhang.com"
                            target="_blank"
                        >
                            <img
                                src={isDarkMode ? uwcsWrWhite : uwcsWrBlack}
                                alt="UWaterloo CS Web Ring"
                                className="cs-webring"
                            />
                        </a>
                        <a
                            className="cs-webring-links"
                            href="https://cs.uwatering.com/#https://dundeezhang.com?nav=next"
                        >
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </motion.div>
            </header>
        </div>
    );
}
