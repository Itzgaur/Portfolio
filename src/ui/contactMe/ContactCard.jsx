import emailIcon from "../../data/email.png";
import linkedInIcon from "../../data/linkedin.png";

export default function ContactCard() {
  return (
    <div className="mx-2 rounded-3xl border-2 border-gray-500 sm:mx-0">
      <div className="flex flex-col gap-x-5 gap-y-5 px-4 py-2 sm:px-10 sm:py-8 md:flex-row">
        <div className="flex items-center gap-2">
          <img
            src={emailIcon}
            alt="email Icon"
            className="h-7 w-7 md:h-9 md:w-9 "
          />
          <a href="mailto:harshgaur838@gmail.com" rel="noopener noreferrer">
            <h1 className="text-lg text-gray-800 md:text-xl">
              harshgaur838@gmail.com
            </h1>
          </a>
        </div>
        <div className="flex items-center gap-2 ">
          <img
            src={linkedInIcon}
            alt="linkedIn Icon"
            className="h-7 w-7 md:h-9 md:w-9"
          />
          <a
            href="https://www.linkedin.com/in/harsh-gaur-15ba72203/"
            target="_blank"
          >
            <h1 className="text:lg text-gray-800  md:text-xl">LinkedIn</h1>
          </a>
        </div>
      </div>
    </div>
  );
}
