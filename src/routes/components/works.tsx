import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { motion } from "framer-motion";

import "./css/works.css";

import WorkCards from "./projectcards";

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
                        <WorkCards />
                    </Row>
                </Container>
            </body>
        </div>
    );
}
export default Works;
