import Intro from "./components/home/intro";
import Works from "./components/home/works";
import BlogComp from "./components/home/blogcomp";
import Contact from "./components/home/contact";
import Footer from "./components/footer";

export default function Home() {
    return (
        <div>
            <Intro/>
            <Works />
            <BlogComp />
            <Contact />
            <Footer />
        </div>
    );
}
