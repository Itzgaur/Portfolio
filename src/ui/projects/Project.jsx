import { Element } from "react-scroll";
import PreHeading from "../PreHeading";
import SectionHeading from "../SectionHeading";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <Element name="Projects">
      <section className="mb-20 flex flex-col items-center justify-center text-center xl:h-[100vh]">
        <div className="mb-10">
          <PreHeading>Browse My Recent</PreHeading>
          <SectionHeading>Projects</SectionHeading>
        </div>

        <div className="mx-6 grid gap-x-10 gap-y-10 sm:mx-24 md:mx-44 2xl:grid-cols-3 ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </Element>
  );
}
