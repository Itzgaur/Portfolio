import projectImg from "../../data/cinesearch.png";
import Button from "../Button";

export default function ProjectCard() {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-gray-500 shadow-sm">
      <div className="mx-4 my-5 py-5 sm:mx-8 sm:my-9">
        <img
          src={projectImg}
          alt="project Image"
          className="h-[20rem] w-[20rem] rounded-3xl shadow-md "
        />
      </div>
      <h1 className="mb-2 text-2xl font-semibold md:text-3xl">Cinesearch</h1>
      <div className="mb-4 flex flex-col justify-between gap-x-3 gap-y-3 sm:flex-row">
        <Button>Github</Button>
        <Button>Live Demo</Button>
      </div>
    </div>
  );
}
