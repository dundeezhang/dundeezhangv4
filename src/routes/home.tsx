import Intro from "./components/intro";
import Footer from "./components/footer";
import TableOfContents from "./components/tableofcontent";
import MainBackground from "./components/background";
import About from "./components/about";
import Badges from "./components/badges";

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
