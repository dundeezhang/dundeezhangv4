import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import pfp from "/src/img/cropped_image.png";

import Footer from "./components/footer";
import BlogCards from "./components/blog/cards";

const homeClick = () => {
    window.open("/", "_self");
};

export default function Blog() {
    return (
        <div className="blog-container">
            <div>
                <div className="blog-header">
                    <div className="blog-header-content">
                        <img src={pfp} className="profile-picture-blog" />
                        <div className="title-div">
                            <h1 className="blog-title ibm-plex-mono-light">
                                /blog
                            </h1>
                            <h2 className="blog-subtitle">Life Updates</h2>
                        </div>
                    </div>
                </div>
                <div className="navbar">
                    <button
                        type="button"
                        onClick={homeClick}
                        className="my-button"
                    >
                        Home
                    </button>
                </div>
                <div className="indicators-top">
                    <p className="highlight-color">Recent</p>
                </div>

                <div className="content-container">
                    <Container fluid>
                        <BlogCards />
                    </Container>
                </div>
                <div className="indicators-bottom">
                    <p className="highlight-color">Ancient</p>
                </div>
            </div>
            <div id="detail">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
