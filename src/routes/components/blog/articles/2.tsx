import { Outlet, Link } from "react-router-dom";

import "/src/routes/components/css/blog.css";

import Assassin from "./images/ac-gif.gif";
import Macbook from "./images/new-laptop.jpeg";
import Math from "./images/me-in-functions.jpeg";
import Lakehead from "./images/lakehead-university-campus.jpg";
import Hoodie from "./images/shad-hoodie-tb.jpeg";

export default function ArtTwo() {
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
                <p>July 5, 2024 - High School: A Retrospective</p>
                <p>
                    I recently graduated from high school. I got to say it
                    passed much quicker than I thought it would. It may be due
                    to COVID-19 taking away 2 years, or it might be other
                    factors as well. Who knows? Regardless, it's odd now being
                    older than most anime characters I grew up watching and
                    admiring!
                </p>
                <h3>Prelude</h3>
                <p>
                    When I was in grade 8, probably due to the incomprehensible
                    increase of time I had on my hands due to COVID-19, I got
                    really into anime. Through the power of my first generation
                    iPad Air at the time, I would finish around 12-24 episodes a
                    day. Now that I do the math, it amounts to roughly 8 hours
                    of binge watching a day. In hindsight, it was like my full
                    time job was watching anime. Needless to say, I got
                    acquainted with quite a few series.
                </p>
                <p>
                    Namely, there is an anime called{" "}
                    <a href="https://myanimelist.net/anime/24833/Ansatsu_Kyoushitsu">
                        Ansatsu Kyoushitsu (Assassination Classroom)
                    </a>
                    . Although it's a little edgy to my liking today, it really
                    set the tone of what high school was going to be like.
                    Ignoring all of the “omg, I need to kill my sensei or else
                    the world blows up” plot, it really was just about
                    highschool students with personal struggles trying to fit
                    into an unwelcome environment. Then throughout the story,
                    their teacher, whom they have to kill, would provide
                    solutions for the problems the students suffered throughout
                    their lives. In addition, the constant reminders of
                    graduation, exams, and field trips in the anime made me more
                    excited about what was to come in high school. I thought
                    there would be more fun field trips and more exciting school
                    topics to learn in the coming years. I'll later come to see
                    that I was wrong.
                </p>
                <img src={Assassin} alt="gif of a scene from the anime"></img>
                <p className="desc">Scene from Assassination Classroom</p>
                <p>
                    So throughout the second half of eighth grade, although I
                    was still on the anime grind, I also started to feel worried
                    about school. Most anime I watched at the time such as
                    Assassination Classroom were about students who weren't good
                    enough in their schools, so they got punished. I was
                    probably in a distorted reality realm from watching so much
                    anime, but I seriously got worried about my future. As a
                    consequence, I started a productivity grind.
                </p>
                <p>
                    Around that time as well, was when I got my first computer.
                    So during that productivity phase, I would wake up, code,
                    play a game called “osu!”, eat some food, and go back to
                    sleep. Rinse and repeat. There wasn't really anything
                    interesting in my life at the time, but this really set me
                    up for the future. I found out about my interest in computer
                    science during this time period, and that I have really poor
                    time management. Two things that usually go hand in hand…
                </p>
                <img src={Macbook} alt="my new macbook air 2020 intel"></img>
                <p className="desc">My New Laptop</p>
                <h3>The Let Down</h3>
                <p>
                    After getting hyped up about high school, the reality sunk
                    in after a few days. My first year of high school started in
                    2020, which if you didn't know, was when COVID-19 was
                    instilling fear into everyone who breathed. So my school set
                    up a system to minimize contact with people by having 1
                    class for 2 weeks, then rotate the other classes throughout
                    the semester. It was a horrid system.
                </p>
                <p>
                    All I did during that time was play video games and piano. I
                    did barely anything school related. You may also read more
                    about that on my previous blog post in 2021 where I ranted
                    about online school.
                </p>
                <p>
                    Grade 10 was basically the same experience as grade 9
                    because of the pandemic yet again.
                </p>
                <p>
                    Fast forward to grade 11, much has changed. My friends, my
                    personal life, the school system, and even the teachers.
                    Since I was doing online school in grade 9 and grade 10, I
                    had different teachers than other people who went to my home
                    (physical) school. I was not well acquainted with any of the
                    teachers at my school, which is really not what I want when
                    I start to need references for summer programs and
                    university applications.
                </p>
                <p>
                    But fear not, I knew I was an academic demon. I think the
                    highlight of that year was when I was sleeping in my math
                    class for an entire unit, and I still aced the test. I
                    remember being more shocked at getting that mark than
                    anything else I remember prior.
                </p>
                <img
                    className="vert-img"
                    src={Math}
                    alt="Me in Math Class"
                ></img>
                <p className="desc">Me in Math Class</p>
                <p>
                    In the end, no one really cares about the first three years
                    as they don't really impact your future much.
                </p>
                <h3>Revelation:</h3>
                <p>
                    If you're a stem student in Canada, you've likely heard
                    about a summer program called Shad. Basically, it's a
                    program where high school students in grade 10 and 11 go to
                    a Canadian university for a month during the summer to do
                    stem and entrepreneurship workshops. It really is more
                    exciting than it sounds.
                </p>
                <p>
                    At the camp, I met some really outstanding people. Mind you,
                    it's not a program where everyone can go as it is
                    application based, and it usually fills out with some of the
                    most outstanding students in the country.
                </p>
                <p>
                    From aspiring doctors to lawyers to finance bros, there were
                    a lot of different people at the camp. It gave me an
                    eye-opening experience that there are so many people in the
                    world better than me. I may be top of the food chain in my
                    small town, but I am nothing in the world.
                </p>
                <p>
                    After I got home from the camp, I knew exactly what I needed
                    to do. Since I was basically certain I wanted to do computer
                    science in university, I started doing leetcode, dmoj, and
                    relearning many coding languages I learned during my
                    productivity phase in grade 8. I knew that to get into my
                    dream university program (Waterloo CS), I had to improve
                    myself. So I started to market myself too.
                </p>
                <img
                    src={Lakehead}
                    alt="Lakehead University Campus UC Building"
                ></img>
                <p className="desc">Lakehead University Campus Next to Lake</p>
                <h3>Execution and Lesson</h3>
                <p>
                    As soon as school started, I snatched 2 club president
                    roles, and 1 club executive role in my school. I joined the
                    peer tutoring program (something I vowed to myself that I
                    wouldn't do), and I started to build new connections. Most
                    of that culminated into a hackathon I ran with two other
                    schools called NRGHacks. I won't go into details, but it was
                    pretty successful considering there were only three schools
                    involved but over 100 hackers.
                </p>
                <p>
                    After doing all of that, I've realized how much high school
                    is a scam. Everyone in the school environment would always
                    feel like they were running out of time to do things. Even
                    my friends, who are in grade 10 feel like they don't have
                    time to do things anymore. After building up most of my
                    extracurriculars within a single year (in the span of a few
                    months), I felt like that mindset was stupid. One year is a
                    lot of time. If you're currently a high school student and
                    feel like you have no more time, trust me on this: you have
                    a lot of time left, use it! The same friends who would
                    complain that their life is over because they don't have
                    extracurriculars or grades; I don't see them spending their
                    time doing things. Everyday, I see them in a discord server
                    on call playing League of Legends. Now something that isn't
                    very wise to do ever is play that game.
                </p>
                <p>
                    Regardless, high school may not be what you expect, but it
                    is not as bad as it seems. You'll get to meet many people in
                    school and out of school that will inspire you, and 4 years
                    is a lot of time. Anything can happen, so take every
                    opportunity that arises.
                </p>
                <img
                    src={Hoodie}
                    alt="Me wearing shad hoodie in a view of Thunder Bay"
                ></img>
                <p className="desc">Selfie with Shad Hoodie in Thunder Bay</p>
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
