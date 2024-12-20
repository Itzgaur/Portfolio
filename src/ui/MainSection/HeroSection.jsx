import { useState } from "react";
import Intro from "./Intro";
import { useEffect } from "react";
import SectionHeading from "../SectionHeading";
import PreHeading from "../PreHeading";
import resume from "../../data/Harsh_gaur.pdf";
import { Element } from "react-scroll";
import Button from "../Button";

const titles = ["Web Developer", "Frontend developer", "Backend Developer"];

// building the hero section

export default function HeroSection() {
  const [displayTitle, setDisplayTitle] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsdeleting] = useState(false);

  useEffect(
    function showTitle() {
      const timer = setTimeout(
        () => {
          const fullTitle = titles[index];

          const updatedTitle = isDeleting
            ? fullTitle.substring(0, displayTitle.length - 1)
            : fullTitle.substring(0, displayTitle.length + 1);

          setDisplayTitle(updatedTitle);

          if (displayTitle === fullTitle) {
            setTimeout(() => setIsdeleting(true), 600);
          } else if (isDeleting && displayTitle.length === 1) {
            setIndex((prev) => (prev + 1) % 3);
            setIsdeleting(false);
          }
        },
        isDeleting ? 50 : 150,
      );

      return function () {
        clearTimeout(timer);
      };
    },
    [index, displayTitle, isDeleting],
  );

  return (
    <main className="mb-20 flex flex-col items-center justify-center gap-y-16  sm:mb-20 lg:h-[85vh] lg:flex-row lg:gap-x-24">
      <>
        <Intro />
        <div className=" w-[25rem] text-center">
          <PreHeading className="font-medium">Hello I,m</PreHeading>
          <SectionHeading>Harsh Gaur</SectionHeading>
          <h2 className="mb-4 h-[3rem] text-3xl font-semibold text-gray-600 lg:text-4xl">
            {displayTitle}
          </h2>

          {/* Buttons for download cv and contact info */}
          <div className="mb-4 flex flex-col items-center justify-center gap-y-5 sm:flex-row sm:gap-x-5">
            <a href={resume} download rel="noopener noreferrer">
              <Button>Resume</Button>
            </a>
            <a
              href={`mailto:harshgaur838@gmail.com`}
              target="_parent"
              rel="noopener noreferrer"
            >
              <Button
                color="bg-gray-700"
                border=" border-2 border-gray-700"
                hoverColor="bg-gray-800"
                textColor="text-gray-50"
              >
                Contact Me
              </Button>
            </a>
          </div>

          {/* Social  icons */}
          <div className="flex items-center justify-center gap-x-5">
            <a href="https://github.com/Itzgaur" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                id="github"
                className="h-9 w-9 lg:h-12 lg:w-12"
              >
                <g fill="#181616">
                  <path d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path>
                  <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm-.743-.55M28.93 94.535c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zm-.575-.618M31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm0 0M34.573 101.373c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm0 0M39.073 103.324c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm0 0M44.016 103.685c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm0 0M48.614 102.903c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                </g>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/harsh-gaur-15ba72203/"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 100 100"
                id="linkedin"
                className="h-9 w-9 lg:h-12 lg:w-12"
              >
                <path d="M55.35,44.17h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11ZM50.8,3.77A45.67,45.67,0,1,0,96.47,49.44,45.72,45.72,0,0,0,50.8,3.77ZM39.38,70a.77.77,0,0,1-.77.76h-8.8a.76.76,0,0,1-.76-.76V40.43a.76.76,0,0,1,.76-.77h8.8a.77.77,0,0,1,.77.77ZM33.9,35.71a5.53,5.53,0,1,1,5.53-5.53A5.52,5.52,0,0,1,33.9,35.71ZM76.62,70a.77.77,0,0,1-.77.76h-8.8a.76.76,0,0,1-.76-.76V54.11c0-4.18-1.49-7-5.23-7a5.65,5.65,0,0,0-5.3,3.78,7.12,7.12,0,0,0-.34,2.52V70a.77.77,0,0,1-.77.77h-8.8a.76.76,0,0,1-.76-.77c0-4.22.11-24.71,0-29.53a.76.76,0,0,1,.76-.77h8.78a.76.76,0,0,1,.77.77v3.63a10.26,10.26,0,0,1,9.31-5.13c6.79,0,11.89,4.44,11.89,14Zm-21.2-25.8v-.11l-.07.11Zm-.07,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Zm0,0h.07v-.11Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </>
    </main>
  );
}
