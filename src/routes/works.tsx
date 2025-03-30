import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { useState } from "react";

import WorkCards from "./components/projectcards";
import MoreCards from "./components/moreprojects";
import TableOfContents from "./components/navbar";
import MainBackground from "./components/background";
import Footer from "./components/footer";

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
                    <h2 className="header-name">My Projects:</h2>

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
