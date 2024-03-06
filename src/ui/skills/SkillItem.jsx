import skillIcon from "../../data/skillsIcon.png";

export default function SkillItem({ skill }) {
  return (
    <div className="flex items-center">
      <img
        src={skillIcon}
        alt="skills verified mark"
        className="h-3 w-3 md:h-4 md:w-4 xl:h-6 xl:w-6"
      />
      <h1 className="text-md px-2 py-1 font-semibold text-gray-800 xl:px-4 xl:py-3 xl:text-xl">
        {skill}
      </h1>
    </div>
  );
}
