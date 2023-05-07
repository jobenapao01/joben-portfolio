import Image from "next/image";
import { FC } from "react";

interface SkillsProps {}

const Skills: FC<SkillsProps> = ({}) => {
  return (
    <div className="w-full lg:h-screen p-2" id="skills">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 transition">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/nextjs.png"
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>NextJs</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 transition">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/react.png"
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>ReactJs</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 transition">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/node.png"
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>NodeJs</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 transition">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/mongo.png"
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 transition">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/tailwind.png"
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>TailwindCSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 transition">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/../public/assets/skills/github1.png"
                  alt="/"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex flex-col justify-center items-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
