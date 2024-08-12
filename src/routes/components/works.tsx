import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import bettercalc from "/src/img/bettercalc.png";
import blog from "/src/img/blog.png";
import compcode from "/src/img/compcode.png";
import datingdo from "/src/img/datingdo.png";
import dzpass from "/src/img/dzpass.png";
import future from "/src/img/future.jpeg";
import website from "/src/img/website.png";

import { motion } from "framer-motion";

import "./css/works.css";

const CardDiv = {
    offscreen: {
        y: 10,
        opacity: 0,
        scale: 0.9,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        },
    },
};

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
            bounce: 0.2,
            duration: 1,
        },
    },
};

const websiteGithubClick = () => {
    window.open(
        "https://github.com/dundeezhang/dundeezhang.github.io",
        "_blank"
    );
};

const datingdoGithubClick = () => {
    window.open("https://github.com/dundeezhang/datingdo.single", "_blank");
};

const cpGithubClick = () => {
    window.open("https://github.com/dundeezhang/Contests", "_blank");
};

const dzPassGithubClick = () => {
    window.open("https://github.com/dundeezhang/dzPass", "_blank");
};
const betterCalcGithubClick = () => {
    window.open("https://github.com/dundeezhang/Better-Calculator", "_blank");
};
const blogGithubClick = () => {
    window.open("https://github.com/dundeezhang/blog", "_blank");
};
const profileGithubClick = () => {
    window.open("https://github.com/dundeezhang", "_blank");
};

function Works() {
    return (
        <div className="Body">
            <body className="App-content">
                <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={HeaderAnimate}
                >
                    <h2 className="ibm-plex-mono-regular header-name">
                        My Projects:
                    </h2>
                </motion.div>

                <Container fluid>
                    <Row>
                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={CardDiv}
                            >
                                <Card className="project-cards">
                                    <Card.Img
                                        variant="top"
                                        src={website}
                                        className="project-images"
                                    />
                                    <Card.Body className="ibm-plex-mono-light">
                                        <Card.Title className="project-title">
                                            dundeezhang.com
                                        </Card.Title>
                                        <Card.Subtitle
                                            className="mb-2 tools-used"
                                            style={{ color: "#9c9c9c" }}
                                        >
                                            TypeScript, React, CSS
                                        </Card.Subtitle>
                                        <Card.Text className="about-project-desc">
                                            An introduction website to show my
                                            projects and experience.
                                        </Card.Text>
                                        <button
                                            type="button"
                                            onClick={websiteGithubClick}
                                            className="github-button"
                                        >
                                            Github Repository
                                        </button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>

                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={CardDiv}
                            >
                                <Card className="project-cards">
                                    <Card.Img
                                        variant="top"
                                        src={datingdo}
                                        className="project-images"
                                    />
                                    <Card.Body className="ibm-plex-mono-light">
                                        <Card.Title className="project-title">
                                            datingdo.singles
                                        </Card.Title>
                                        <Card.Subtitle
                                            className="mb-2 tools-used"
                                            style={{ color: "#9c9c9c" }}
                                        >
                                            Bootstrap, HTML, CSS
                                        </Card.Subtitle>
                                        <Card.Text className="about-project-desc">
                                            Grade 10 business final project
                                            written under time constraints.
                                        </Card.Text>
                                        <button
                                            type="button"
                                            onClick={datingdoGithubClick}
                                            className="github-button"
                                        >
                                            Github Repository
                                        </button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>

                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={CardDiv}
                            >
                                <Card className="project-cards">
                                    <Card.Img
                                        variant="top"
                                        src={compcode}
                                        className="project-images"
                                    />
                                    <Card.Body className="ibm-plex-mono-light">
                                        <Card.Title className="project-title">
                                            Competitive Programming
                                        </Card.Title>
                                        <Card.Subtitle
                                            className="mb-2 tools-used"
                                            style={{ color: "#9c9c9c" }}
                                        >
                                            C++, Java, Python
                                        </Card.Subtitle>
                                        <Card.Text className="about-project-desc">
                                            Repository to store most of my
                                            solutions for CS problems.
                                        </Card.Text>
                                        <button
                                            type="button"
                                            onClick={cpGithubClick}
                                            className="github-button"
                                        >
                                            Github Repository
                                        </button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={CardDiv}
                            >
                                <Card className="project-cards">
                                    <Card.Img
                                        variant="top"
                                        src={dzpass}
                                        className="project-images"
                                    />
                                    <Card.Body className="ibm-plex-mono-light">
                                        <Card.Title className="project-title">
                                            dzPass
                                        </Card.Title>
                                        <Card.Subtitle
                                            className="mb-2 tools-used"
                                            style={{ color: "#9c9c9c" }}
                                        >
                                            C++, Makefile, OOP
                                        </Card.Subtitle>
                                        <Card.Text className="about-project-desc">
                                            An CLI password manager written in
                                            C++ only.
                                        </Card.Text>
                                        <button
                                            type="button"
                                            onClick={dzPassGithubClick}
                                            className="github-button"
                                        >
                                            Github Repository
                                        </button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>

                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={CardDiv}
                            >
                                <Card className="project-cards">
                                    <Card.Img
                                        variant="top"
                                        src={bettercalc}
                                        className="project-images"
                                    />
                                    <Card.Body className="ibm-plex-mono-light">
                                        <Card.Title className="project-title">
                                            Better-Calculator
                                        </Card.Title>
                                        <Card.Subtitle
                                            className="mb-2 tools-used"
                                            style={{ color: "#9c9c9c" }}
                                        >
                                            C++, C, Cmake, Makefile
                                        </Card.Subtitle>
                                        <Card.Text className="about-project-desc">
                                            A calculator I made to help me do
                                            homework, CLI.
                                        </Card.Text>
                                        <button
                                            type="button"
                                            onClick={betterCalcGithubClick}
                                            className="github-button"
                                        >
                                            Github Repository
                                        </button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>

                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={CardDiv}
                            >
                                <Card className="project-cards">
                                    <Card.Img
                                        variant="top"
                                        src={blog}
                                        className="project-images"
                                    />
                                    <Card.Body className="ibm-plex-mono-light">
                                        <Card.Title className="project-title">
                                            blog.dundeezhang.com
                                        </Card.Title>
                                        <Card.Subtitle
                                            className="mb-2 tools-used"
                                            style={{ color: "#9c9c9c" }}
                                        >
                                            HTML, CSS
                                        </Card.Subtitle>
                                        <Card.Text className="about-project-desc">
                                            My personal blog. Now has been migrated to this website.
                                        </Card.Text>
                                        <button
                                            type="button"
                                            onClick={blogGithubClick}
                                            className="github-button"
                                        >
                                            Github Repository
                                        </button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>

                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={CardDiv}
                            >
                                <Card className="project-cards">
                                    <Card.Img
                                        variant="top"
                                        src={future}
                                        className="project-images"
                                    />
                                    <Card.Body className="ibm-plex-mono-light">
                                        <Card.Title className="project-title">
                                            Coming Soon
                                        </Card.Title>
                                        <Card.Subtitle
                                            className="mb-2 tools-used"
                                            style={{ color: "#9c9c9c" }}
                                        >
                                            More Languages
                                        </Card.Subtitle>
                                        <Card.Text className="about-project-desc">
                                            More projects are WIP. Check out and
                                            follow my GitHub to stay updated!
                                        </Card.Text>
                                        <button
                                            type="button"
                                            onClick={profileGithubClick}
                                            className="github-button"
                                        >
                                            Github Profile
                                        </button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </body>
        </div>
    );
}
export default Works;
