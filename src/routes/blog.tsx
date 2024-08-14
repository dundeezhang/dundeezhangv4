import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import pfp from "/src/img/cropped_image.png";

import Footer from "./components/footer";

import "./components/css/blog.css";

const homeClick = () => {
    window.open("/", "_self");
};

const viewPost0 = () => {
    window.open("/blog/article/0", "_self");
};

const viewPost1 = () => {
    window.open("/blog/article/1", "_self");
};

const viewPost2 = () => {
    window.open("/blog/article/2", "_self");
};

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

export default function Blog() {
    return (
        <div className="blog-container">
            <div>
                <div className="blog-header">
                    <div className="blog-header-content">
                        <img src={pfp} className="profile-picture-blog" />
                        <div className="title-div">
                            <h1 className="blog-title ibm-plex-mono-light">
                                dundeezhang.com/blog
                            </h1>
                            <h2 className="blog-subtitle">Life Updates</h2>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <button
                        type="button"
                        onClick={homeClick}
                        className="my-button"
                    >
                        Home
                    </button>
                </div>
                <div className="indicators-top">
                    <p className="highlight-color">Recent</p>
                </div>

                <div className="content-container">
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
                                    <Card className="blog-cards">
                                        <Card.Body className="ibm-plex-mono-light">
                                            <Card.Title className="blog-title">
                                                [TEST] High School: A
                                                Retrospective
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-2 date-wrote"
                                                style={{ color: "#9c9c9c" }}
                                            >
                                                July 5, 2024
                                            </Card.Subtitle>
                                            <Card.Text className="about-blog-desc">
                                                Now that high school is over, I
                                                have a few thoughts I thought
                                                I'd write about.
                                            </Card.Text>
                                            <button
                                                type="button"
                                                onClick={viewPost2}
                                                className="my-button"
                                            >
                                                View Post
                                            </button>
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
                                    <Card className="blog-cards">
                                        <Card.Body className="ibm-plex-mono-light">
                                            <Card.Title className="blog-title">
                                                [TEST] Making a Personal Website
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-2 date-wrote"
                                                style={{ color: "#9c9c9c" }}
                                            >
                                                July 4, 2024
                                            </Card.Subtitle>
                                            <Card.Text className="about-blog-desc">
                                                For the first time in 3 years, I
                                                made a personal website to
                                                display my projects and ideas.
                                            </Card.Text>
                                            <button
                                                type="button"
                                                onClick={viewPost1}
                                                className="my-button"
                                            >
                                                View Post
                                            </button>
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
                                    <Card className="blog-cards">
                                        <Card.Body className="ibm-plex-mono-light">
                                            <Card.Title className="blog-title">
                                                [TEST] A Year of Online School
                                            </Card.Title>
                                            <Card.Subtitle
                                                className="mb-2 date-wrote"
                                                style={{ color: "#9c9c9c" }}
                                            >
                                                October 15, 2021
                                            </Card.Subtitle>
                                            <Card.Text className="about-blog-desc">
                                                After a year of doing virtual
                                                high school, here are my
                                                thoughts...
                                            </Card.Text>
                                            <button
                                                type="button"
                                                onClick={viewPost0}
                                                className="my-button"
                                            >
                                                View Post
                                            </button>
                                        </Card.Body>
                                    </Card>
                                </motion.div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="indicators-bottom">
                    <p className="highlight-color">Ancient</p>
                </div>
            </div>
            <div id="detail">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
