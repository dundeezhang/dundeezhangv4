import { motion, Variants } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useState, useEffect } from "react";
import workData from "../../data/works.json";

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

const rawWorksData = workData
  .filter(({ title }) => title !== "More Projects")
  .map(
    ({
      title,
      tech,
      description,
      image,
      repo,
      repoLabel,
      buttonClass,
      link,
    }) => [title, tech, description, image, repo, repoLabel, buttonClass, link]
  )
  .sort((a, b) => a[0].localeCompare(b[0]));

const lastProject = workData.find(({ title }) => title === "More Projects");
if (lastProject) {
  rawWorksData.push([
    lastProject.title,
    lastProject.tech,
    lastProject.description,
    lastProject.image,
    lastProject.repo || "", // Ensure repo is a string
    lastProject.repoLabel,
    lastProject.buttonClass,
    lastProject.link,
  ]);
}

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
            <a onClick={() => openLink(repository)}>
              <Card.Img
                variant="top"
                src={`/works/${pic}`}
                className="project-images"
              />
            </a>

            <Card.Body className="ibm-plex-mono-light">
              <Card.Title className="project-title">{title}</Card.Title>
              <Card.Subtitle className="mb-2 tools-used">{langs}</Card.Subtitle>
              <Card.Text className="about-project-desc">{desc}</Card.Text>

              <button
                type="button"
                onClick={() => openLink(repository)}
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
  const [showAllTags, setShowAllTags] = useState(false);

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
      if (index === rawWorksData.length) {
        return false;
      }
      const [title, langs, desc] = item;
      const tags = searchTerm
        .toLowerCase()
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0);

      // If no tags, show all
      if (tags.length === 0) return true;

      // All tags must be present (AND)
      return tags.every((tag) => {
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
    "JavaScript",
    "TypeScript",
    "React",
    "Markdown",
    "HTML",
    "CSS",
    "Bootstrap",
    "Next.js",
    "Python",
    "C++",
    "Java8",
    "GoLang",
    "SQL",
    "Firebase",
    "GPT",
  ];

  const sortedTagList = tagList.sort((a, b) => a.localeCompare(b));
  const visibleTags = showAllTags ? sortedTagList : sortedTagList.slice(0, 9);

  const filteredLastProject = worksData.find(
    ([title]) => title === lastProject[0]
  );

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
        {visibleTags.map((tag) => (
          <button
            key={tag}
            className={`tag-button ${
              selectedTags.includes(tag) ? "selected" : ""
            }`}
            onClick={() => handleTagClick(tag)}
            style={{
              backgroundColor: selectedTags.includes(tag) // color stuff goes here
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
        {sortedTagList.length > 9 && (
          <button
            className="tag-button"
            onClick={() => setShowAllTags(!showAllTags)}
          >
            {showAllTags ? "Show Less" : "Show More"}
          </button>
        )}
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
      {!filteredLastProject && lastProject && (
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
