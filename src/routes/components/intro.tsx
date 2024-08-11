import pfp from "/src/img/cropped_image.png";
import "./css/root.css";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Intro() {
    return (
        <div>
            <header className="App-header">
                <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <div className="profile-picture">
                        <img src={pfp} className="App-logo" alt="profile" />
                    </div>
                </motion.div>
                <TypeAnimation
                    sequence={[500, "Hello! I'm Dundee"]}
                    className="dundee-name ibm-plex-mono-regular"
                ></TypeAnimation>
                <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1.4,
                        delay: 0.8,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <p className="website-intro">
                        a{" "}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="csText"
                            href="https://uwaterloo.ca/future-students/programs/computer-science"
                        >
                            Computer Science
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
                    <p className="website-intro">
                        I am a developer who is passionate for pushing
                        technology forward!
                    </p>
                </motion.div>

                <ul className="social-cons">
                    <li>
                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 1.5,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                        >
                            <a
                                rel="noreferrer"
                                href="https://www.linkedin.com/in/dundeezhang/"
                                style={{
                                    color: "black",
                                    fontSize: "calc(10px + 2vmin)",
                                }}
                                target="_blank"
                            >
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 1.8,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                        >
                            <a
                                rel="noreferrer"
                                href="https://github.com/dundeezhang"
                                style={{
                                    color: "black",
                                    fontSize: "calc(10px + 2vmin)",
                                }}
                                target="_blank"
                            >
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </motion.div>
                    </li>
                    <li>
                        <motion.div
                            className="box"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.5,
                                delay: 2.1,
                                ease: [0, 0.71, 0.2, 1.01],
                            }}
                        >
                            <a
                                rel="noreferrer"
                                href="mailto:dundeez124@gmail.com"
                                style={{
                                    color: "black",
                                    fontSize: "calc(10px + 2vmin)",
                                }}
                                target="_blank"
                            >
                                <i className="fa-regular fa-envelope"></i>
                            </a>
                        </motion.div>
                    </li>
                </ul>
                <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.2,
                        delay: 2.4,
                        ease: [0, 0.71, 0.2, 1.01],
                    }}
                >
                    <p className="ibm-plex-mono-regular resume resume-hover">
                        <a
                            className="resume-hover"
                            href="https://drive.google.com/open?id=150CPdTDUyXjGvkwB86dvk_UDI1KoRmpM&usp=drive_fs"
                            target="_blank"
                            rel="noreferrer"
                        >
                            --{">"} Resume {"<"}--
                        </a>
                    </p>
                </motion.div>
            </header>
        </div>
    );
}
