import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { motion } from "framer-motion";
import { useState } from "react";

import WorkCards from "./components/projectcards";
import MoreCards from "./components/moreprojects";
import TableOfContents from "./components/tableofcontent";
import MainBackground from "./components/background";
import Footer from "./components/footer";

const HeaderAnimate = {
    offscreen: {
        y: 20,
        opacity: 0,
        scale: 0.9,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.5,
        },
    },
};

function Works() {
    const [openMore, setOpenMore] = useState(false);

    const [buttonMoreText, setButtonMoreText] = useState("Show More Projects");

    const toggleMore = () => {
        setButtonMoreText(
            buttonMoreText === "Show More Projects"
                ? "Show Less Projects"
                : "Show More Projects"
        );
        setOpenMore(!openMore);
    };

    return (
        <div className="projects-wrapper">
            <div className="Body" id="projects">
                <TableOfContents />
                <body className="App-content">
                    <motion.div
                        className="card-container"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ amount: 0.9 }}
                        variants={HeaderAnimate}
                    >
                        <h2 className="header-name">My Projects:</h2>
                    </motion.div>
                    <motion.div
                        className="card-container"
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ amount: 0.9 }}
                        variants={HeaderAnimate}
                    >
                        <p className="header-desc">
                            View most of my projects here! <br />
                            Although do check out my GitHub because almost
                            everything I do is uploaded there:{" "}
                            <span className="glow">
                                <a
                                    href="https://github.com/dundeezhang"
                                    target="_blank"
                                >
                                    GitHub
                                </a>
                            </span>
                        </p>
                    </motion.div>
                    <div>
                        <Container fluid>
                            <WorkCards />
                        </Container>

                        {openMore && (
                            <Container fluid>
                                <MoreCards />
                            </Container>
                        )}
                        <button
                            type="button"
                            onClick={toggleMore}
                            className="hide-button"
                            id="toggle-button"
                        >
                            {buttonMoreText}
                        </button>
                    </div>
                </body>

                <Footer />
            </div>
            <MainBackground />
        </div>
    );
}
export default Works;
