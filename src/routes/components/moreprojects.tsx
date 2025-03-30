import { motion, Variants } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const viewProject = (repo: string): undefined => {
    window.open(`https://github.com/dundeezhang/${repo}`, "_blank");
};

const openLink = (link: string): undefined => {
    window.open(link, "_blank");
};

const CardDiv: Variants = {
    offscreen: {
        y: 10,
        opacity: 0.1,
        scale: 0.9,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.5,
        },
    },
};

interface Datas {
    title: string;
    langs: string;
    desc: string;
    repository: string;
    buttontext: string;
    hideclass: string;
    externallink: string;
}

const moreData: [string, string, string, string, string, string, string][] = [
    [
        "Eco Elo",
        "React, JavaScript, PostgreSQL, Resend, Regex",
        "Earn elo and compete to be the most eco friendly consumer! Uses computer vision to scan receipts and recognize the most eco-friendly items to rank users against each other.",
        "ecoelo",
        "Github Repository",
        "hide-button-class",
        "",
    ],
    [
        "Contest Solutions",
        "C++, Java, Python",
        "Repository to store most of my solutions for CS problems. Most solutions are only for CCC, but includes some other contests on DMOJ.",
        "Contests",
        "Github Repository",
        "hide-button-class",
        "",
    ],
    [
        "PicToPDF",
        "JavaScript, React, CSS",
        "Easily convert your pictures to a singular PDF file online.",
        "pictopdf",
        "Github Repository",
        "",
        "https://pictopdf.dhz.app/",
    ],
    [
        "ReadMd",
        "JavaScript, Markdown, React",
        "View markdown files in a more readable format online.",
        "readmd",
        "Github Repository",
        "",
        "https://readmd.dhz.app/",
    ],
    [
        "NHSCSC Website",
        "TypeScript, React, CSS",
        "Website for NHS CS Club. Shows events and announcements. No longer maintained.",
        "website-nhscc",
        "Github Repository",
        "",
        "https://nhscc.vercel.app/",
    ],
    [
        "dzPass",
        "C++, Makefile, OOP",
        "An CLI password and user manager tool written in C++ only.",
        "dzPass",
        "Github Repository",
        "hide-button-class",
        "",
    ],
    [
        "Submarine Intercept Sim",
        "Java, Java-Swing, OOP",
        "World War II Battleship (Haida) versus submarine simulator",
        "Submarine-Intercept-Simulator",
        "Github Repository",
        "hide-button-class",
        "",
    ],
];

function MoreCard({
    title,
    langs,
    desc,
    repository,
    buttontext,
    hideclass,
    externallink,
}: Datas) {
    return (
        <Row className="card-container-works">
            <Col>
                <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ amount: 0.5 }}
                    variants={CardDiv}
                >
                    <Card className="project-cards">
                        <Card.Body className="ibm-plex-mono-light">
                            <a onClick={() => viewProject(repository)}>
                                <Card.Title className="project-title">
                                    {title}
                                </Card.Title>
                                <Card.Subtitle className="mb-2 tools-used">
                                    {langs}
                                </Card.Subtitle>
                                <Card.Text className="about-project-desc">
                                    {desc}
                                </Card.Text>
                            </a>

                            <button
                                type="button"
                                onClick={() => viewProject(repository)}
                                className="github-button"
                            >
                                <i className="fa-brands fa-github github-button-icon"></i>
                                {buttontext}
                            </button>
                            <button
                                type="button"
                                onClick={() => openLink(externallink)}
                                className={hideclass}
                                id="external-link-button"
                            >
                                <i className="fa fa-external-link"></i>
                            </button>
                        </Card.Body>
                    </Card>
                </motion.div>
            </Col>
        </Row>
    );
}

export default function MoreCards() {
    return moreData.map(
        ([
            title,
            langs,
            desc,
            repository,
            buttontext,
            hideclass,
            externallink,
        ]) => (
            <MoreCard
                title={title}
                langs={langs}
                desc={desc}
                repository={repository}
                buttontext={buttontext}
                hideclass={hideclass}
                externallink={externallink}
                key={null}
            />
        )
    );
}
