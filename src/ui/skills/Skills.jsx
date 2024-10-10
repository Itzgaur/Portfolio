import { Element } from "react-scroll";
import PreHeading from "../PreHeading";
import SectionHeading from "../SectionHeading";
import SkillCard from "./SkillCard";

const backendSkills = ["NodeJs", "ExpressJS"];

const dataBase = ["MySql", "MongoDb"];

const frontendSKills = [
  "HTML",
  "CSS",
  "JavaScipt",
  "TailwindCSS",
  "React",
  "Redux",
];

export default function Skills() {
  return (
    <Element name="Skills">
      <section className="mb-20 flex flex-col items-center justify-center text-center sm:h-[100vh]">
        <div className="mb-10">
          <PreHeading>Explore my</PreHeading>
          <SectionHeading>Skills</SectionHeading>
        </div>
        {/* Skill cards */}
        <div className="mx-10 grid gap-5 md:mx-20 md:grid-cols-3 md:gap-x-5">
          <SkillCard
            skillArray={frontendSKills}
            category="frontend developement"
          />
          <SkillCard
            skillArray={backendSkills}
            category="Backend developement"
          />
          <SkillCard skillArray={dataBase} category="Database" />
        </div>
      </section>
    </Element>
  );
}
