import { motion, Variants } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";

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
    pic: string;
    repository: string;
    buttontext: string;
    hideclass: string;
    externallink: string;
}

const rawWorksData: [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string
][] = [
    [
        "Portfolio",
        "TypeScript, React, CSS",
        "Website to show my projects, ideas, and experience. Continue browsing this site to see the fruits of my labour.",
        "website.png",
        "dundeezhangv4",
        "Github Repository",
        "",
        "https://dundeezhang.com",
    ],
    [
        "Blog",
        "TypeScript, React, Markdown",
        "Blog site to share my notes, ideas and life updates. Uses Markdown to write posts and uses Giscus to allow user commenting.",
        "blog.png",
        "blogv2",
        "Github Repository",
        "",
        "https://blog.dhz.app",
    ],
    [
        "Auranate",
        "Flask, Python, JavaScript, Firebase-Auth, GPT-4o",
        "AI toolset to prepare and help people in the workforce. Uses text and image generative AI to help users create resumes, cover letters, and portfolios.",
        "aura.png",
        "aura",
        "Github Repository",
        "",
        "https://aura.dhz.app",
    ],
    [
        "yourDoList",
        "Python, Flask, SQLAlchemy, GPT-4o",
        "To do list that generates subtasks for your main tasks. Uses AI to help you break down your tasks into smaller, more manageable pieces so that you spend more time working; less time planning.",
        "todo.png",
        "todo",
        "Github Repository",
        "",
        "/works/todo.mov",
    ],
    [
        "Eco Elo",
        "React, JavaScript, PostgreSQL, Resend, Regex",
        "Earn elo and compete to be the most eco friendly consumer! Uses computer vision to scan receipts and recognize the most eco-friendly items to rank users against each other.",
        "ecoelo.png",
        "ecoelo",
        "Github Repository",
        "hide-button-class",
        "",
    ],
    [
        "GoTerpret",
        "GoLang, Bash",
        "Bash interpreter written in Go. Uses Go's built-in libraries to parse and execute bash commands. User is able to customize the interpreter to their liking with config files.",
        "goterpret.png",
        "goterpret",
        "Github Repository",
        "hide-button-class",
        "",
    ],
    [
        "Contest Solutions",
        "C++, Java, Python",
        "Repository to store most of my solutions for CS problems. Most solutions are only for CCC, but includes some other contests on DMOJ.",
        "compcode.png",
        "Contests",
        "Github Repository",
        "hide-button-class",
        "",
    ],
    [
        "PicToPDF",
        "JavaScript, React, CSS",
        "Easily convert your pictures to a singular PDF file online.",
        "pictopdf.png",
        "pictopdf",
        "Github Repository",
        "",
        "https://pictopdf.dhz.app/",
    ],
    [
        "ReadMd",
        "JavaScript, Markdown, React",
        "View markdown files in a more readable format online.",
        "readmd.png",
        "readmd",
        "Github Repository",
        "",
        "https://readmd.dhz.app/",
    ],
    [
        "Skibidention",
        "JavaScript, Chrome Extension",
        "View webpages in a more readable format by brain rotting words into skibidi.",
        "skibidention.png",
        "Skibidention",
        "Github Repository",
        "hide-button-class",
        "https://readmd.dhz.app/",
    ],
    [
        "NHSCSC Website",
        "TypeScript, Next, CSS",
        "Website for NHS CS Club. Shows events and announcements. No longer maintained.",
        "nhscsc.png",
        "website-nhscc",
        "Github Repository",
        "",
        "https://nhscc.vercel.app/",
    ],
    [
        "dzPass",
        "C++, Makefile, OOP",
        "An CLI password and user manager tool written in C++ only.",
        "dzpass.png",
        "dzPass",
        "Github Repository",
        "hide-button-class",
        "",
    ],
    [
        "Submarine Intercept Sim",
        "Java, Java-Swing, OOP",
        "World War II Battleship (Haida) versus submarine simulator",
        "haida.jpg",
        "Submarine-Intercept-Simulator",
        "Github Repository",
        "hide-button-class",
        "",
    ],
    [
        "More Projects",
        "More Languages",
        "Most of my projects are found on my GitHub profile or dhz.app.",
        "future.jpg",
        "",
        "Github Profile",
        "",
        "https://dhz.app",
    ],
];

function WorksCard({
    title,
    langs,
    desc,
    pic,
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
                        <a onClick={() => viewProject(repository)}>
                            <Card.Img
                                variant="top"
                                src={`/works/${pic}`}
                                className="project-images"
                            />
                        </a>

                        <Card.Body className="ibm-plex-mono-light">
                            <Card.Title className="project-title">
                                {title}
                            </Card.Title>
                            <Card.Subtitle className="mb-2 tools-used">
                                {langs}
                            </Card.Subtitle>
                            <Card.Text className="about-project-desc">
                                {desc}
                            </Card.Text>

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

export default function WorkCards() {
    const [searchTerm, setSearchTerm] = useState("");
    const [worksData, setWorksData] = useState(rawWorksData);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        setIsDarkMode(mediaQuery.matches);

        const handleChange = (event: MediaQueryListEvent) => {
            setIsDarkMode(event.matches);
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    const handleTagClick = (tag: string) => {
        setSelectedTags((prevTags) => {
            if (prevTags.includes(tag)) {
                return prevTags.filter((t) => t !== tag);
            } else {
                return [...prevTags, tag];
            }
        });
    };

    useEffect(() => {
        let searchString = "";
        if (selectedTags.length > 0 && !selectedTags.includes("All")) {
            searchString = selectedTags.join(", ");
        }

        setSearchTerm(searchString);
    }, [selectedTags]);

    useEffect(() => {
        const filteredData = rawWorksData.filter((item, index) => {
            if (index === rawWorksData.length - 1) {
                return false;
            }
            const [title, langs, desc] = item;
            const tags = searchTerm
                .toLowerCase()
                .split(",")
                .map((tag) => tag.trim());
            return tags.some((tag) => {
                if (tag.startsWith("!")) {
                    return false;
                }
                return (
                    title.toLowerCase().includes(tag) ||
                    langs.toLowerCase().includes(tag) ||
                    desc.toLowerCase().includes(tag)
                );
            });
        });
        setWorksData(filteredData);
    }, [searchTerm]);

    const lastProject = rawWorksData[rawWorksData.length - 1];

    const tagList = [
        "All",
        "Web",
        "JavaScript",
        "Python",
        "C++",
        "GoLang",
        "SQL",
        "Firebase",
        "GPT",
    ];

    return (
        <>
            <input
                type="text"
                placeholder="Search projects"
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-bar contact-input-box"
                style={{ maxWidth: "600px", margin: "20px 0" }}
            />
            <div className="tag-container">
                {tagList.map((tag) => (
                    <button
                        key={tag}
                        className={`tag-button ${
                            selectedTags.includes(tag) ? "selected" : ""
                        }`}
                        onClick={() => handleTagClick(tag)}
                        style={{
                            backgroundColor: selectedTags.includes(tag)
                                ? isDarkMode
                                    ? "white"
                                    : "black"
                                : "",
                            color: selectedTags.includes(tag)
                                ? isDarkMode
                                    ? "black"
                                    : "white"
                                : "",
                        }}
                    >
                        {tag}
                    </button>
                ))}
            </div>
            {worksData.map(
                ([
                    title,
                    langs,
                    desc,
                    pic,
                    repository,
                    buttontext,
                    hideclass,
                    externallink,
                ]) => (
                    <WorksCard
                        title={title}
                        langs={langs}
                        desc={desc}
                        pic={pic}
                        repository={repository}
                        buttontext={buttontext}
                        hideclass={hideclass}
                        externallink={externallink}
                        key={title}
                    />
                )
            )}
            {lastProject && (
                <WorksCard
                    title={lastProject[0]}
                    langs={lastProject[1]}
                    desc={lastProject[2]}
                    pic={lastProject[3]}
                    repository={lastProject[4]}
                    buttontext={lastProject[5]}
                    hideclass={lastProject[6]}
                    externallink={lastProject[7]}
                    key={lastProject[0]}
                />
            )}
        </>
    );
}
