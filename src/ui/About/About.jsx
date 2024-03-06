import { Element } from "react-scroll";
import PreHeading from "../PreHeading";
import SectionHeading from "../SectionHeading";
import AboutDetails from "./AboutDetails";

export default function About() {
  return (
    <Element name="About">
      <section className="item-center mb-20 flex flex-col justify-center text-center md:h-[100vh]">
        <div className="mb-10">
          <PreHeading>Get to Know More</PreHeading>
          <SectionHeading>About Me</SectionHeading>
        </div>
        <AboutDetails />
      </section>
    </Element>
  );
}
