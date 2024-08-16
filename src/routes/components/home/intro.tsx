import pfp from "/src/img/cropped_image.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const resumeClick = () => {
    window.open(
        "https://drive.google.com/open?id=150CPdTDUyXjGvkwB86dvk_UDI1KoRmpM&usp=drive_fs",
        "_blank"
    );
};

export default function Intro() {
    return (
        <div>
            <header className="App-header">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <div className="profile-picture">
                        <img src={pfp} className="App-logo" alt="profile" />
                    </div>
                </motion.div>
                <TypeAnimation
                    sequence={[500, "Hello! I'm Dundee,"]}
                    className="dundee-name"
                ></TypeAnimation>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: 0.8,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <p className="website-intro-top">
                        a{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="csText"
                            href="https://uwaterloo.ca/future-students/programs/computer-science"
                        >
                            CS
                        </a>{" "}
                        student at the{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="schoolText"
                            href="https://uwaterloo.ca"
                        >
                            University of Waterloo
                        </a>
                    </p>
                </motion.div>

                <ul className="social-cons">
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 1.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.2,
                                delay: 1.1,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                        >
                            <div className="circle-div">
                                <a
                                    rel="noreferrer"
                                    href="https://www.linkedin.com/in/dundeezhang/"
                                    style={{
                                        color: "black",
                                    }}
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-linkedin-in intro-icons"></i>
                                </a>
                            </div>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 1.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.2,
                                delay: 1.4,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                        >
                            <div className="circle-div">
                                <a
                                    rel="noreferrer"
                                    href="https://github.com/dundeezhang"
                                    style={{
                                        color: "black",
                                    }}
                                    target="_blank"
                                >
                                    <i className="fa-brands fa-github intro-icons"></i>
                                </a>
                            </div>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            initial={{ opacity: 0, scale: 1.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.2,
                                delay: 1.7,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                        >
                            <div className="circle-div">
                                <a
                                    rel="noreferrer"
                                    href="mailto:dundeez124@gmail.com"
                                    style={{
                                        color: "black",
                                    }}
                                    target="_blank"
                                >
                                    <i className="fa-regular fa-envelope intro-icons"></i>
                                </a>
                            </div>
                        </motion.div>
                    </li>
                </ul>
                <motion.div
                    initial={{ opacity: 0, scale: 1.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.4,
                        delay: 2.0,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <div>
                        <button
                            type="button"
                            onClick={resumeClick}
                            className="resume-button"
                        >
                            <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                            Resume
                        </button>
                    </div>
                </motion.div>
            </header>
        </div>
    );
}
