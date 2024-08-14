import { motion, Variants } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "/src/routes/components/css/blog.css";

const viewPost = (article: number): undefined => {
    window.open(`/blog/article/${article}`, "_self");
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
            bounce: 0.2,
            duration: 1,
        },
    },
};

interface Datas {
    title: string;
    date: string;
    desc: string;
    postNum: number;
}

const blogData: [string, string, string, number][] = [
    [
        "[TEST] High School: A Retrospective",
        "July 5, 2024",
        "Now that high school is over, I have a few thoughts I thought I'd write about.",
        2,
    ],
    [
        "[TEST] Making a Personal Website",
        "July 4, 2024",
        "For the first time in 3 years, I made a personal website to display my projects and ideas.",
        1,
    ],
    [
        "[TEST] A Year of Online School",
        "October 15, 2021",
        "After a year of doing virtual high school, here are my thoughts...",
        0,
    ],
];

function BlogCard({ title, date, desc, postNum }: Datas) {
    return (
        <Row>
            <Col>
                <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={CardDiv}
                >
                    <Card className="blog-cards">
                        <Card.Img
                            src={`/works/future.jpg`}
                            className="blog-images"
                        />
                        <Card.Body>
                            <Card.Title className="blog-title">
                                {title}
                            </Card.Title>

                            <Card.Subtitle className="mb-2 date-wrote">
                                {date}
                            </Card.Subtitle>
                            <Card.Text className="about-blog-desc">
                                {desc}
                            </Card.Text>
                            <button
                                type="button"
                                onClick={() => viewPost(postNum)}
                                className="my-button blog-buttons"
                            >
                                View Post
                            </button>
                        </Card.Body>
                    </Card>
                </motion.div>
            </Col>
        </Row>
    );
}

export default function BlogCards() {
    return blogData.map(([title, date, desc, postNum]) => (
        <BlogCard
            title={title}
            date={date}
            desc={desc}
            postNum={postNum}
            key={null}
        />
    ));
}
