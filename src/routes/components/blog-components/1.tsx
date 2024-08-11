import { Outlet, Link } from "react-router-dom";

import "/src/routes/components/css/blog.css";

export default function ArtOne() {
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
                <p>July 4, 2024 - Making a Personal Website</p>
                <p>
                    I haven't finished a website in almost 2 years. I have never
                    done much of react or even javascript in general in the
                    past. So needless to say, I faced quite a few challenges
                    when I decided to fully remake my website from the ground
                    up.
                </p>
                <h3>Chapter One - Motivation</h3>
                <p>
                    I always told myself that I would remake my website sometime
                    soon. I never really liked my old website designs and I
                    still don't find it quite satisfactory. But during the last
                    3 years, I would wake up everyday, tell myself "today is the
                    day I remake it," then proceed to do nothing at all. This
                    cycle went on and on and on and on. I'm sure you experienced
                    it too at some point. There is a good chance there is
                    something that you had wanted to do for quite a few years,
                    but never had gotten around to doing it. Welp, I am here to
                    share how I go over that initial hurdle.
                </p>
                <p>
                    So, I recently got into my dream program at my dream
                    university. And over the last month after I got my
                    acceptance letter, I've developed something called an
                    "imposter syndrome." If you aren't a zoomer, it basically
                    means that you don't feel like you belong in crowd you got
                    put into. From that moment on, I knew I had to change
                    something in my life to try and remedy this unsettling
                    feeling. But, it was exam season at the time, so all my
                    thoughts and actions needed to wait until the exams were
                    over.
                </p>
                <p>
                    After I finished my exams, I recalled an old Greek saying "A
                    sound mind in a sound body." If you didn't know, it was by
                    the philosopher Aristotle. In my opinion he was one of the
                    worlds best thinkers ever. So, with this knowledge, I
                    started runnning and going to the gym (again) though it was
                    my first time actually being consistant with running. When I
                    first started going on daily runs, my body would feel like
                    it was destroying itself by the end of each run. I fear
                    without my previous experience at the gym, I would've gave
                    up again due to the pain. But I pushed through. Over the
                    next week, I went from running 1 kilometre before stopping
                    to 5 kilometres before stopping. I personally think that's
                    some good improvement. But that's not the main story.
                </p>
                <img
                    src="./blog/run-night-image.jpeg"
                    alt="picture of the night sky where I run"
                ></img>
                <p className="desc">
                    A picture of the sky while I was running.
                </p>
                <p>
                    From the runs, I began to realize how little pain coding
                    really was compared to the physical strain I was putting on
                    myself. Coding is just sitting down infront of a blue screen
                    expending brain power for spaghetti. When compared to
                    running, which is expending physical power at the cost of
                    muscle pains, aches, shaking, and just more pain in general,
                    it really isn't much. So this got me the motivation to sit
                    down and code today.
                </p>
                <h3>Chapter Two - Coding</h3>
                <p>
                    Now that I am trying to do web development stuff again, I
                    can safely say, I still hate javascript. It is probably due
                    to my current lack of knowledge, but the syntax is so
                    inconsistant, and it is so stringy and awful. I hate it.
                    But, modern sites need mordern solutions, so I forced myself
                    to remake my website using a react framework. If you didn't
                    know, previous I just coded websites using html, css and
                    bootstrap. It got most of the stuff done, but I felt a
                    little limited when I wanted a bit more modulation and
                    function. So this time, I turned to react.
                </p>
                <p>
                    NGL, I thought it was going to be harder than it was going
                    to be. The default react template actually set me up for a
                    clean, basic, and simple portfolio layout. Only problem, was
                    that it was dark mode. But I fixed that issue relatively
                    quickly. The first problem I ran into today was that I
                    decided to use Cloudflare as my registrar and my website
                    host... which turned out to be more complicated that I
                    thought it would be. For obvious reasons in hindsight,
                    Cloudflare forces eslint into every js file it runs on their
                    servers. It's good for security and practice afterall: it is
                    what they're known for. But me, who is relatively
                    inexperienced in coding in javascript in general, didn't
                    know that. So I kid you not, spent 40 minutes trying to
                    debug an issue, which all I had to do was delete an unused
                    variable / import... 40 minutes of my life I will never get
                    back.
                </p>
                <p>
                    The second issue that arose was just that I didn't know how
                    to do anything in react. Mind you, this was really my first
                    actual experience using react to code something usable. So,
                    the new syntax such as 'className', 'style={"{{}}"}', and not
                    being able to link html sites within my own projects easily
                    was all a little challenging for me. Mind you, I got around
                    most of them, and this blog site is a work-around of the
                    html issue... Yeah, I'm not the greatest problem solver, but
                    I don't care enough to do a more elegant solution. I just
                    wanted to put out my websites as soon as I could.
                </p>
                <p>
                    My third issue was that Cloudflare doesn't tell me if my
                    latest push to GitHub actually deployed or not. Since I
                    still do not have eslint installed on my computer, my code
                    basically always runs as javascript is quite lenient. So, it
                    turned out that the latest version of my website that I
                    wanted to deploy, went undeployed for a few hours before I
                    noticed that my changes weren't showing up on my domain. So
                    needless to say, I will be installing eslint on my computer
                    to lower inconsistancies with Cloudflare and my own
                    workspace.
                </p>
                <p>
                    Overall, I think this website turned out fine at the moment.
                    I want to add some animations and some design elements, but
                    I need to learn more javascript and niche css in the
                    meantime so I can be able to do that in the future. My
                    prediction was also correct, coding is much more painless
                    than running and physical exercise. But, I sitll want a
                    healthier body as I am unhealthy at the moment.
                </p>
                <p>
                    Hopefully I will update soon and not go on another 3 year
                    hiatus...
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
