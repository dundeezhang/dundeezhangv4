import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/Works.css";

function Works() {
    return (
        <div className="Body">
            <body className="App-content">
                <h2 className="ibm-plex-mono-regular">
                    Here are some of my projects:
                </h2>
                <Container fluid>
                    <Row>
                        <Col>
                            <Card
                                style={{
                                    backgroundColor: "#414754",
                                    color: "white",
                                    margin: "1vmin",
                                    minWidth: "400px"
                                }}
                            >
                                <Card.Body className="ibm-plex-mono-light">
                                    <Card.Title>This Website</Card.Title>
                                    <Card.Subtitle
                                        className="mb-2"
                                        style={{ color: "#bdbdbd" }}
                                    >
                                        React, Bootstrap, HTML, CSS
                                    </Card.Subtitle>
                                    <Card.Text>
                                        An introduction website to show my projects and experience.
                                    </Card.Text>
                                    <a href="https://github.com/dundeezhang/dundeezhang.github.io">View on GitHub</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                style={{
                                    backgroundColor: "#414754",
                                    color: "white",
                                    margin: "1vmin",
                                    minWidth: "400px"
                                }}
                            >
                                <Card.Body className="ibm-plex-mono-light">
                                    <Card.Title>datingdo.singles</Card.Title>
                                    <Card.Subtitle
                                        className="mb-2"
                                        style={{ color: "#bdbdbd" }}
                                    >
                                        Bootstrap, HTML, CSS
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Grade 10 business final project written under time constraints. Front-end.
                                    </Card.Text>
                                    <a href="https://github.com/dundeezhang/datingdo.single">View on GitHub</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                style={{
                                    backgroundColor: "#414754",
                                    color: "white",
                                    margin: "1vmin",
                                    minWidth: "400px"
                                }}
                            >
                                <Card.Body className="ibm-plex-mono-light">
                                    <Card.Title>Competitive Programming</Card.Title>
                                    <Card.Subtitle
                                        className="mb-2"
                                        style={{ color: "#bdbdbd" }}
                                    >
                                        C++, Java, Python
                                    </Card.Subtitle>
                                    <Card.Text>
                                        Repository to store most of my solutions for CS problems.
                                    </Card.Text>
                                    <a href="https://github.com/dundeezhang/Contests">View on GitHub</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card
                                style={{
                                    backgroundColor: "#414754",
                                    color: "white",
                                    margin: "1vmin",
                                    minWidth: "400px"
                                }}
                            >
                                <Card.Body className="ibm-plex-mono-light">
                                    <Card.Title>dzPass</Card.Title>
                                    <Card.Subtitle
                                        className="mb-2"
                                        style={{ color: "#bdbdbd" }}
                                    >
                                        C++, Makefile
                                    </Card.Subtitle>
                                    <Card.Text>
                                        A CLI password manager written in C++ only. Used OOP principals.
                                    </Card.Text>
                                    <a href="https://github.com/dundeezhang/dzPass">View on GitHub</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                style={{
                                    backgroundColor: "#414754",
                                    color: "white",
                                    margin: "1vmin",
                                    minWidth: "400px"
                                }}
                            >
                                <Card.Body className="ibm-plex-mono-light">
                                    <Card.Title>Better-Calculator</Card.Title>
                                    <Card.Subtitle
                                        className="mb-2"
                                        style={{ color: "#bdbdbd" }}
                                    >
                                        C++, C, Cmake, Makefile
                                    </Card.Subtitle>
                                    <Card.Text>
                                        A calculator I made to help me do homework, CLI.
                                    </Card.Text>
                                    <a href="https://github.com/dundeezhang/Better-Calculator">View on GitHub</a>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card
                                style={{
                                    backgroundColor: "#414754",
                                    color: "white",
                                    margin: "1vmin",
                                    minWidth: "400px",
                                }}
                            >
                                <Card.Body className="ibm-plex-mono-light">
                                    <Card.Title>Coming Soon</Card.Title>
                                    <Card.Subtitle
                                        className="mb-2"
                                        style={{ color: "#bdbdbd" }}
                                    >
                                        More Languages
                                    </Card.Subtitle>
                                    <Card.Text>
                                        More projects are WIP. Check out and follow my GitHub to stay updated!
                                    </Card.Text>
                                    <a href="https://github.com/dundeezhang">View on GitHub</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <p  className="ibm-plex-mono-light resume">
                    <a href="https://drive.google.com/file/d/1bEVO4IF-KCmf9nbOUBesm1kiag_9tWOq/view?usp=sharing" target="_blank">Still interested? Check out my resume here</a>
                </p>
            </body>
        </div>
    );
}
export default Works;
