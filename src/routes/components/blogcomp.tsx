import "./css/blogcomp.css";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const blogClick = () => {
    window.open("https://dundeezhang.com/blog/", "_blank");
};

const HeaderAnimate = {
    offscreen: {
        y: 0,
        opacity: 0,
        scale: 0.9,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.5,
        },
    },
};

const BlogButtonAnimate = {
    offscreen: {
        y: 0,
        opacity: 0,
        scale: 1.5,
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

export default function BlogComp() {
    return (
        <div className="Blog">
            <body className="blog-intro ibm-plex-mono-light">
                <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={HeaderAnimate}
                >
                    <h2 className="header-name-blog">My Blog</h2>
                </motion.div>

                <motion.div
                    className="card-container"
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true, amount: 0.8 }}
                    variants={BlogButtonAnimate}
                >
                    <div>
                        <button
                            type="button"
                            onClick={blogClick}
                            className="blog-button"
                        >
                            Link to Blog
                        </button>
                    </div>
                </motion.div>

                <p>Dundee Zhang - 2024 - All Rights Reserved</p>
            </body>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    );
}
