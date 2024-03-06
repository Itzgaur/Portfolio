import image from "../../data/about.jpg";

export default function AboutDetails() {
  return (
    <div className="flex flex-col items-center  justify-center gap-x-16 gap-y-8 lg:flex-row">
      <div>
        <img
          src={image}
          alt=""
          className="h-[16rem] w-[16rem] rounded-2xl shadow-md lg:h-[25rem] lg:w-[25rem]"
        />
      </div>

      {/* about me details */}
      <div className="flex flex-col justify-center lg:w-[50%]">
        {/* about me blocks */}
        <div className="mb-3 flex flex-col items-center justify-center gap-5 md:flex-row lg:justify-around">
          {/* Box1 */}
          <div className="flex w-[50%] flex-col items-center rounded-[48px] border-2 border-gray-500 px-20 py-6 lg:px-28 lg:py-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 64 64"
              viewBox="0 0 64 64"
              id="gold-medal"
              className="mb-3 h-6 w-6 lg:h-8 lg:w-8"
            >
              <polygon
                fill="#596d7c"
                points="25.93 64 20.51 57.73 12.28 58.7 20.74 36.9 34.39 42.19"
              ></polygon>
              <polygon
                fill="#596d7c"
                points="38.07 64 43.49 57.73 51.72 58.7 43.26 36.9 29.61 42.19"
              ></polygon>
              <path
                fill="#617586"
                d="M55.04,23.04c0,1.96-2.55,3.56-3.03,5.36c-0.5,1.87,0.9,4.52-0.05,6.16c-0.96,1.66-3.97,1.77-5.31,3.12
				c-1.35,1.35-1.46,4.35-3.12,5.31c-1.64,0.95-4.29-0.45-6.16,0.05c-1.81,0.48-3.4,3.03-5.36,3.03s-3.56-2.55-5.36-3.03
				c-1.87-0.5-4.52,0.9-6.16-0.05c-1.66-0.96-1.77-3.97-3.12-5.31c-1.35-1.35-4.35-1.46-5.31-3.12c-0.95-1.64,0.45-4.29-0.05-6.16
				c-0.48-1.81-3.03-3.4-3.03-5.36c0-1.96,2.55-3.56,3.03-5.36c0.5-1.87-0.9-4.52,0.05-6.16C13,9.86,16.01,9.74,17.36,8.4
				c1.35-1.35,1.46-4.35,3.12-5.31c1.64-0.95,4.29,0.45,6.16-0.05C28.44,2.55,30.04,0,32,0s3.56,2.55,5.36,3.03
				c1.87,0.5,4.52-0.9,6.16,0.05c1.66,0.96,1.77,3.97,3.12,5.31c1.35,1.35,4.35,1.46,5.31,3.12c0.95,1.64-0.45,4.29,0.05,6.16
				C52.49,19.48,55.04,21.08,55.04,23.04z"
              ></path>
              <circle
                cx="32"
                cy="23.04"
                r="15.39"
                fill="#fff"
                transform="rotate(-76.809 31.999 23.041)"
              ></circle>
              <polygon
                fill="#ffc42e"
                points="32 12.1 34.46 19.66 42.41 19.66 35.98 24.33 38.43 31.89 32 27.22 25.57 31.89 28.02 24.33 21.59 19.66 29.54 19.66"
              ></polygon>
            </svg>
            <h1 className="text-xl font-semibold text-gray-800">Experience</h1>
            <p className="text-gray-500">2+ years</p>
            <p className="text-gray-500">Web Developer</p>
          </div>

          {/* box2 */}
          <div className="flex w-[50%] flex-col items-center rounded-[48px] border-2 border-gray-500 px-20 py-6 lg:px-28 lg:py-8 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enable-background="new 0 0 256 256"
              viewBox="0 0 256 256"
              id="graduation-hat"
              className="mb-3 h-6 w-6 lg:h-8 lg:w-8"
            >
              <path
                fill="#fcd224"
                d="M229.1,155.3c-1.6,0-2.9-1.3-2.9-2.9v-44.6c0-1.6,1.3-2.9,2.9-2.9s2.9,1.3,2.9,2.9v44.6
	C232.1,154,230.7,155.3,229.1,155.3z"
              ></path>
              <path
                fill="#454a4f"
                d="M49.9,110.2v51.8c0,14.3,35,26,78.1,26s78.1-11.6,78.1-26v-51.8H49.9z"
              ></path>
              <path
                fill="#5d6168"
                d="M242,109.9l-105,32.3c-5.9,1.8-12.1,1.8-18,0L14,109.9c-4-1.2-4-6.9,0-8.1l105-32.3c5.9-1.8,12.1-1.8,18,0
	l105,32.3C246,103,246,108.7,242,109.9z"
              ></path>
              <path
                fill="#ffe471"
                d="M238.6,158.6c0,7.4-4.3,17.3-9.5,17.3c-5.3,0-9.5-9.9-9.5-17.3s4.3-9.5,9.5-9.5
	C234.4,149,238.6,151.2,238.6,158.6z"
              ></path>
            </svg>
            <h1 className="text-xl font-semibold text-gray-800">Education</h1>
            <p className="text-gray-500">B.tech degree</p>
            <p className="text-gray-500">Computer Science</p>
          </div>
        </div>

        {/* description */}
        <div className="mb-10">
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nemo
            repudiandae ad est rerum optio voluptate molestias atque nesciunt
            quos nisi id, minus quibusdam iure quidem? Officiis autem aspernatur
            nostrum! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Odit optio magni dolore aperiam quam iusto temporibus ab, qui
            placeat rerum ipsa fuga suscipit est corporis molestias. Ipsam
            quibusdam minima eveniet?
          </p>
        </div>
      </div>
    </div>
  );
}
