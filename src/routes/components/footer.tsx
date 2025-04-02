export default function Footer() {
    const currYear = new Date().getFullYear();

    return (
        <div>
            <footer className="app-footer">
                <span className="glow p-foot">
                    Dundee Zhang {currYear} - All Rights Reserved
                </span>
                <ul className="social-cons">
                    <li>
                        <a
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/dundeezhang/"
                            style={{
                                color: "black",
                            }}
                            target="_blank"
                        >
                            <div className="circle-div-footer">
                                <i className="fa-brands fa-linkedin-in footer-icons"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            href="https://github.com/dundeezhang"
                            style={{
                                color: "black",
                            }}
                            target="_blank"
                        >
                            <div className="circle-div-footer">
                                <i className="fa-brands fa-github footer-icons"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            href="https://twitter.com/dundeezhang"
                            style={{
                                color: "black",
                            }}
                            target="_blank"
                        >
                            <div className="circle-div-footer">
                                <i className="fa-brands fa-x-twitter footer-icons"></i>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            href="mailto:hello@dundeezha.ng"
                            style={{
                                color: "black",
                            }}
                            target="_blank"
                        >
                            <div className="circle-div-footer">
                                <i className="fa-regular fa-envelope footer-icons"></i>
                            </div>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
