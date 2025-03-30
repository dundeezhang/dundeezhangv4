import { motion } from "framer-motion";

export default function TableOfContents() {
    const resumeClick = () => {
        window.open("/resume.pdf", "_blank");
    };

    const blogClick = () => {
        window.open("https://blog.dhz.app", "_blank");
    };

    return (
        <div className="table-of-content-wrapper">
            <div className="mobile-nav">
                <div className="center-list">
                    <a href="/">Home</a>
                    <a onClick={resumeClick}>Resume</a>
                    <a href="/works">Projects</a>
                    <a href="/contact">Contact</a>
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
                        <a
                            rel="noreferrer"
                            className="table-of-content-text"
                            href="/"
                        >
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
                        <a
                            rel="noreferrer"
                            className="table-of-content-text"
                            href="/works"
                        >
                            <span className="nav-span">Projects</span>
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
                            href="/contact"
                        >
                            <span className="nav-span">Contact</span>
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
                            onClick={blogClick}
                            className="table-of-content-text"
                        >
                            <span className="nav-span">
                                Blog <i className="fa fa-external-link"></i>
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
                            onClick={resumeClick}
                            className="table-of-content-text"
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
