import "./css/blogcomp.css";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const blogClick = () => {
    window.open("/blog", "_self");
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
                            <i className="fa-solid fa-arrow-up-right-from-square external-icon"></i>
                            Blog Page
                        </button>
                    </div>
                </motion.div>
            </body>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    );
}
