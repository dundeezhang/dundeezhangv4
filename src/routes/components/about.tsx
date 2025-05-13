import TiltImage from "./tiltimage";

export default function About() {
  return (
    <div id="about">
      <h2 className="header-name">About Me</h2>
      <TiltImage />
      <p className="about-me-ptext">
        I am a first year (1B Co-op){" "}
        <a href="https://uwaterloo.ca/future-students/co-op" target="_blank">
          <span className="about-me-paragraph link-hover">CS + CO-OP</span>
        </a>{" "}
        student at the University of Waterloo. I have practical experience
        developing using TypeScript, C, Java, and Python with frameworks and
        tools such as React, Node, Next, and SQL.
      </p>
      <p className="about-me-ptext">
        I also maintain and update my blog when I have time. Check it out{" "}
        <a href="https://blog.dhz.app">
          <span className="about-me-paragraph link-hover">here</span>
        </a>
        .
      </p>
      <p className="about-me-ptext">
        Currently, I am seeking internships for{" "}
        <a href="/resume.pdf" target="_blank">
          <span className="about-me-paragraph link-hover">
            Fall 2025 or Winter 2026
          </span>
        </a>
        .
      </p>
      <p className="about-me-ptext">
        Browse the rest of my website using the navigation bar or list to see my
        works and contact details.
      </p>
    </div>
  );
}
