import Intro from "./components/intro";
import Works from "./components/works";
import BlogComp from "./components/blogcomp";

export default function Root() {
    return (
        <div>
            <Intro />
            <Works />
            <BlogComp />
        </div>
        
    );
  }