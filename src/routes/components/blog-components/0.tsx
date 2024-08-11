import { Outlet, Link } from "react-router-dom";

import "/src/routes/components/css/blog.css";

export default function ArtZero() {
    return (
        <div>
            <div>
                <h1 className="blog-title ibm-plex-mono-light">
                    dundeezhang.com/blog
                </h1>
                <Link to={`/blog`}>
                    --{">"} Blog Home {"<"}--
                </Link>
            </div>
            <p className="green-colour">/* begin post */</p>
            <div>
                <p>October 15, 2021 - A Year of Online School</p>
                <p>
                    Online school, or online learning is all about self
                    regulation, and self independence.
                </p>
                <p>
                    Personally for me, I suck at self regulation, so it was a
                    pain doing it. For example, during second semester, I had
                    instrumental music as one of my courses. Honestly, since I
                    play piano, there wasn't really much to learn in that
                    class... Subsequently, much of my time was spent playing a
                    certain game called [osu!], rather than spending time doing
                    my classwork. However, as weird as it may seem, there wasn't
                    really a penalty for my lack of effort.
                </p>
                <p>
                    I don't know if it is all high school courses or what, but
                    my courses this semester were all super easy. I even had
                    science this semester. I just found the curriculum really
                    underwhemling and I found myself feeling really dissapointed
                    when the teachers finished their lessons. It's likely not
                    the teachers faults, but barely anything was even taught.
                    Even with my lack of attention in my classes, I would do
                    well on the tests and assignments due to the lack of content
                    in the courses. Although it is obvious in hindsight I
                    would've done better if I was doing the classwork...
                </p>
                <p>
                    Looking forwards, I hope the pandemic (COVID-19) will be
                    gone soon and regular school can recommence. The quality of
                    online courses just feels lackluster and leaves much more to
                    be desired.
                </p>
            </div>
            <p className="green-colour">/* end post */</p>

            <Link to={`/blog`}>
                --{">"} Blog Home {"<"}--
            </Link>
            <div id="detail">
                <Outlet />
            </div>
            <div>
                <p>Dundee Zhang - 2024 - All Rights Reserved</p>
            </div>
        </div>
    );
}
