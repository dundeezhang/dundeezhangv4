import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import WorkCards from "./components/works/projectcards";
import TableOfContents from "./components/navbar/navbar";
import MainBackground from "./components/general/background";
import Footer from "./components/general/footer";

function Works() {
  return (
    <div className="projects-wrapper">
      <div className="Body" id="projects">
        <TableOfContents />
        <body className="App-content">
          <h2 className="header-name">My Projects:</h2>
          <p className="header-desc">
            My projects sorted by alphabetical order.
          </p>
          <br />
          <p className="header-desc">
            Also check out my{" "}
            <span className="glow">
              <a href="https://github.com/dundeezhang" target="_blank">
                GitHub
              </a>
            </span>{" "}
            since almost everything I do is uploaded there.
          </p>
          <div className="projects-container">
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
