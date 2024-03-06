import SkillItem from "./SkillItem";

// md:h-[70vh] md:w-[30%] xl:h-[60vh]  h-[30vh] w-[80%]

export default function SkillCard({ skillArray, category }) {
  return (
    <div className="rounded-3xl border-2 border-gray-500 p-6 text-center">
      <h1 className="mb-6 text-lg font-semibold capitalize text-gray-500 md:text-xl xl:text-2xl">
        {category}
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 ">
        {skillArray.map((skill) => {
          return <SkillItem skill={skill} key={skill} />;
        })}
      </div>
    </div>
  );
}
