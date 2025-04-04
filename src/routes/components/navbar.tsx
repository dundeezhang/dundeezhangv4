export default function TableOfContents() {
    return (
        <div className="table-of-content-wrapper">
            <div className="mobile-nav">
                <div className="center-list">
                    <a href="/">Home</a>
                    <a href="/works">Projects</a>
                    <a href="/contact">Contact</a>
                    <a href="/resume.pdf" target="_blank">
                        Resume
                    </a>
                </div>
            </div>
            <li className="navlist">
                <ul className="table-of-content">
                    <a
                        rel="noreferrer"
                        className="table-of-content-text"
                        href="/"
                    >
                        <span className="nav-span">Home</span>
                    </a>
                </ul>

                <ul className="table-of-content">
                    <a
                        rel="noreferrer"
                        className="table-of-content-text"
                        href="/works"
                    >
                        <span className="nav-span">Projects</span>
                    </a>
                </ul>

                <ul className="table-of-content">
                    <a
                        rel="noreferrer"
                        className="table-of-content-text"
                        href="/contact"
                    >
                        <span className="nav-span">Contact</span>
                    </a>
                </ul>

                <ul className="table-of-content">
                    <a
                        rel="noreferrer"
                        className="table-of-content-text"
                        href="https://blog.dhz.app"
                        target="_blank"
                    >
                        <span className="nav-span">
                            Blog <i className="fa fa-external-link"></i>
                        </span>
                    </a>
                </ul>

                <ul className="table-of-content">
                    <a
                        rel="noreferrer"
                        className="table-of-content-text"
                        href="/resume.pdf"
                        target="_blank"
                    >
                        <span className="nav-span">
                            Resume <i className="fa fa-external-link"></i>
                        </span>
                    </a>
                </ul>
            </li>
        </div>
    );
}
