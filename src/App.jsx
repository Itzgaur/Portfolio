import About from "./ui/About/About";
import Footer from "./ui/MainSection/Footer";
import Header from "./ui/MainSection/Header";
import HeroSection from "./ui/MainSection/HeroSection";
import ContactMe from "./ui/contactMe/ContactMe";
import Project from "./ui/projects/Project";
import Skills from "./ui/skills/Skills";

export default function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <About />
      <Skills />
      <Project />
      <ContactMe />
      <Footer />
    </div>
  );
}
