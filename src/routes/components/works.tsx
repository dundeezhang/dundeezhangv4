import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { motion } from "framer-motion";

import "./css/works.css";

const CardDiv = {
    offscreen: {
        y: 150,
    },
    onscreen: {
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.4,
        },
    },
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
                    variants={CardDiv}
                >
                    <h2 className="ibm-plex-mono-regular header-name">
                        Here are some of my projects:
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
                                <Card
                                    style={{
                                        backgroundColor: "#ebebeb",
                                        color: "black",
                                        margin: "1.5vmin 0.5vmin 1.5vmin 0.5vmin",
                                        minWidth: "400px",
                                    }}
                                >
                                    <Card.Body className="ibm-plex-mono-light">
                                        <Card.Title className="project-title">dundeezhang.com</Card.Title>
                                        <Card.Subtitle
                                            className="mb-2 tools-used"
                                            style={{ color: "#9c9c9c" }}
                                        >
                                            TypeScript, HTML, CSS, React.js, Bootstrap
                                        </Card.Subtitle>
                                        <Card.Text className="about-project-desc">
                                            An introduction website to show my
                                            projects and experience.
                                        </Card.Text>
                                        <a
                                            href="https://github.com/dundeezhang/dundeezhang.github.io"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View on GitHub
                                        </a>
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
                                <Card
                                    style={{
                                        backgroundColor: "#ebebeb",
                                        color: "black",
                                        margin: "1.5vmin 0.5vmin 1.5vmin 0.5vmin",
                                        minWidth: "400px",
                                    }}
                                >
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
                                        <a
                                            href="https://github.com/dundeezhang/datingdo.single"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View on GitHub
                                        </a>
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
                                <Card
                                    style={{
                                        backgroundColor: "#ebebeb",
                                        color: "black",
                                        margin: "1.5vmin 0.5vmin 1.5vmin 0.5vmin",
                                        minWidth: "400px",
                                    }}
                                >
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
                                        <a
                                            href="https://github.com/dundeezhang/Contests"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View on GitHub
                                        </a>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={CardDiv}
                            >
                                <Card
                                    style={{
                                        backgroundColor: "#ebebeb",
                                        color: "black",
                                        margin: "1.5vmin 0.5vmin 1.5vmin 0.5vmin",
                                        minWidth: "400px",
                                    }}
                                >
                                    <Card.Body className="ibm-plex-mono-light">
                                        <Card.Title className="project-title">dzPass</Card.Title>
                                        <Card.Subtitle
                                            className="mb-2 tools-used"
                                            style={{ color: "#9c9c9c" }}
                                        >
                                            C++, Makefile
                                        </Card.Subtitle>
                                        <Card.Text className="about-project-desc">
                                            A CLI password manager written in
                                            C++ only. Used OOP principals.
                                        </Card.Text>
                                        <a
                                            href="https://github.com/dundeezhang/dzPass"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View on GitHub
                                        </a>
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
                                <Card
                                    style={{
                                        backgroundColor: "#ebebeb",
                                        color: "black",
                                        margin: "1.5vmin 0.5vmin 1.5vmin 0.5vmin",
                                        minWidth: "400px",
                                    }}
                                >
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
                                        <a
                                            href="https://github.com/dundeezhang/Better-Calculator"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View on GitHub
                                        </a>
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
                                <Card
                                    style={{
                                        backgroundColor: "#ebebeb",
                                        color: "black",
                                        margin: "1.5vmin 0.5vmin 1.5vmin 0.5vmin",
                                        minWidth: "400px",
                                    }}
                                >
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
                                            My personal blog where I talk about
                                            whatever! WIP.
                                        </Card.Text>
                                        <a
                                            href="https://github.com/dundeezhang/blog"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View on GitHub
                                        </a>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <motion.div
                                className="card-container"
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                                variants={CardDiv}
                            >
                                <Card
                                    style={{
                                        backgroundColor: "#ebebeb",
                                        color: "black",
                                        margin: "1.5vmin 0.5vmin 1.5vmin 0.5vmin",
                                        minWidth: "400px",
                                    }}
                                >
                                    <Card.Body className="ibm-plex-mono-light">
                                        <Card.Title className="project-title">Coming Soon</Card.Title>
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
                                        <a
                                            href="https://github.com/dundeezhang"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            View on GitHub
                                        </a>
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
