import { Element } from "react-scroll";
import PreHeading from "../PreHeading";
import SectionHeading from "../SectionHeading";
import ProjectCard from "./ProjectCard";
import pizzamania from "../../data/pizzamania.png";

export default function Project() {
  return (
    <Element name="Projects">
      <section className="mb-20 flex flex-col items-center justify-center text-center xl:h-[100vh]">
        <div className="mb-10">
          <PreHeading>Browse My Recent</PreHeading>
          <SectionHeading>Projects</SectionHeading>
        </div>

        <div className="mx-6 grid gap-x-10 gap-y-10 sm:mx-24 md:mx-44 2xl:grid-cols-2 ">
          <ProjectCard
            projectImage={pizzamania}
            projectName={"PizzaMania"}
            gitHubLink="https://github.com/Itzgaur/PizzaMania"
          />
          <ProjectCard
            projectName={"CineSearch"}
            liveLink="https://use-popcorns.netlify.app/"
            gitHubLink="https://github.com/Itzgaur/CineSearch"
          />
        </div>
      </section>
    </Element>
  );
}
