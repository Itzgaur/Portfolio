import image from "../../data/profile.jpeg";

export default function Intro() {
  return (
    <div>
      <div>
        <img
          src={image}
          alt="harsh gaur"
          className="h-[16rem] w-[16-rem] overflow-clip rounded-[50%] shadow-lg lg:h-[25rem] lg:w-[25rem]"
        />
      </div>
    </div>
  );
}
