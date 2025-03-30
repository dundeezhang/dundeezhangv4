export default function About() {
    return (
        <div id="about">
            <h2 className="header-name">About Me</h2>

            <p className="about-me-ptext">
                I am a first year (1B){" "}
                <span className="about-me-paragraph">CS + CO-OP</span> student
                at the University of Waterloo. I have practical experience
                developing using JavaScript, TypeScript, C, C++, Java, and
                Python with frameworks and tools such as React, Node, Next, and
                MongoDB.
            </p>
            <p className="about-me-ptext">
                I also maintain and update my blog when I have time. Check it
                out here{" "}
                <a href="https://blog.dhz.app">
                    <span className="about-me-paragraph link-hover">
                        [link]
                    </span>
                </a>
                .
            </p>
            <p className="about-me-ptext">
                Currently, I am seeking internships for{" "}
                <span className="about-me-paragraph">Summer 2025</span>.
            </p>
            <p className="about-me-ptext">
                Browse the rest of my website using the navigation bar or list
                to see my works and contact details.
            </p>
        </div>
    );
}
