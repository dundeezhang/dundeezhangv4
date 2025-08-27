export default function About() {
  return (
    <div id="about">
      <h2 className="header-name">About Me</h2>

      <p className="about-me-ptext">
        I am a second year (2A){" "}
        <a href="https://uwaterloo.ca/future-students/co-op" target="_blank">
          <span className="about-me-paragraph link-hover">CS</span>
        </a>{" "}
        student at the University of Waterloo. I mainly develop using
        TypeScript, C, and Python with frameworks and tools such as Next.js,
        PostgreSQL, and AWS.
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
          <span className="about-me-paragraph link-hover">Winter 2026</span>
        </a>
        .
      </p>
    </div>
  );
}
