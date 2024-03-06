import { Element } from "react-scroll";
import PreHeading from "../PreHeading";
import SectionHeading from "../SectionHeading";
import ContactCard from "./ContactCard";

export default function ContactMe() {
  return (
    <section className="flex h-[85vh] flex-col items-center justify-center">
      <Element name="Contact">
        <div className="mb-10 text-center">
          <PreHeading>Get In Touch</PreHeading>
          <SectionHeading>Contact Me</SectionHeading>
        </div>
        <ContactCard />
      </Element>
    </section>
  );
}
