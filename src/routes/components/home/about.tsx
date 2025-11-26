import TiltImage from "./tiltimage";

export default function About() {
  return (
    <div id="about">
      <h2 className="header-name">About Me</h2>

      <TiltImage />

      <p className="about-me-ptext">
        Currently studying CS at the{" "}
        <a href="https://uwaterloo.ca/future-students/co-op" target="_blank">
          <span className="about-me-paragraph link-hover">
            University of Waterloo
          </span>
        </a>
        . Recently shipped at{" "}
        <a href="https://airfairness.com" target="_blank">
          <span className="about-me-paragraph link-hover">airfairness</span>
        </a>
        , and led Canada's largest{" "}
        <a href="https://csclub.ca">
          <span className="about-me-paragraph link-hover">
            Computer Science Club
          </span>
        </a>
        .
      </p>
      <p className="about-me-ptext">
        Stuff I build is found on my{" "}
        <a href="https://github.com/dundeezhang">
          <span className="about-me-paragraph link-hover">Github</span>
        </a>{" "}
        or on my{" "}
        <a href="/works">
          <span className="about-me-paragraph link-hover">works page</span>
        </a>
        .
      </p>
      <p className="about-me-ptext">
        I also maintain and update my blog when I have time. Check it out{" "}
        <a href="https://blog.dhz.app">
          <span className="about-me-paragraph link-hover">here</span>
        </a>
        .
      </p>
    </div>
  );
}
