import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import WorkCards from "./components/projectcards";
import TableOfContents from "./components/navbar";
import MainBackground from "./components/background";
import Footer from "./components/footer";

function Works() {
    return (
        <div className="projects-wrapper">
            <div className="Body" id="projects">
                <TableOfContents />
                <body className="App-content">
                    <h2 className="header-name">My Projects:</h2>

                    <p className="header-desc">
                        View most of my projects here! <br />
                        Also check out my GitHub since almost everything I do is
                        uploaded there:{" "}
                        <span className="glow">
                            <a
                                href="https://github.com/dundeezhang"
                                target="_blank"
                            >
                                GitHub
                            </a>
                        </span>
                    </p>
                    <div>
                        <Container fluid>
                            <WorkCards />
                        </Container>
                    </div>
                </body>

                <Footer />
            </div>
            <MainBackground />
        </div>
    );
}
export default Works;
