import { Outlet, Link } from "react-router-dom";

import "./components/css/blog.css";

export default function Blog() {
    return (
        <div>
            <div>
                <div>
                    <h1 className="blog-title ibm-plex-mono-light">
                        dundeezhang.com/blog
                    </h1>
                    <Link to={`/`}>
                        --{">"} Home Site {"<"}--
                    </Link>
                </div>
                <p className="green-colour">/* end blog */</p>
                <div className="content-list">
                    <div>
                        <p className="blog-name">
                            <Link to={`article/2`}>
                                [TEST] 2024.07.05 - High School: A Retrospective
                            </Link>
                        </p>
                        <p className="blog-preview">
                            Now that high school is over, I have a few thoughts
                            I thought I'd write about.
                        </p>
                        <p className="blog-name">
                            <Link to={`article/1`}>
                                [TEST] 2024.07.04 - Making a Personal Website
                            </Link>
                        </p>
                        <p className="blog-preview">
                            For the first time in 3 years, I made a personal
                            website to display my projects and ideas.
                        </p>
                        <p className="blog-name">
                            <Link to={`article/0`}>
                                [TEST] 2021.10.15 - A Year of Online School
                            </Link>
                        </p>
                        <p className="blog-preview">
                            After a year of doing virtual high school, here are
                            my thoughts...
                        </p>
                    </div>
                </div>
                <p className="green-colour">/* begin blog */</p>
            </div>
            <div id="detail"></div>
            <Link to={`/`}>
                --{">"} Home Site {"<"}--
            </Link>
            <div id="detail">
                <Outlet />
            </div>
        </div>
    );
}
