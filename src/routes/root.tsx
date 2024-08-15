import Intro from "./components/intro";
import Works from "./components/works";
import BlogComp from "./components/blogcomp";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Root() {

    return (
        <div>
            <Intro />
            <Works />
            <BlogComp />
            <Contact />
            <Footer />
        </div>
        
    );
  }