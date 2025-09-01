import Intro from "./components/home/intro";
import TableOfContents from "./components/navbar/animated-nav";
import About from "./components/home/about";
import Badges from "./components/home/badges";
import Footer from "./components/general/footer";
import MainBackground from "./components/general/background";

export default function Home() {
  return (
    <div>
      <MainBackground />
      <TableOfContents />
      <Intro />
      <About />
      <Badges />
      <Footer />
    </div>
  );
}
