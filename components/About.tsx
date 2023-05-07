import Image from "next/image";
import { FC } from "react";
import myImg from "@/public/assets/joben.jpg";

interface AboutProps {}

const About: FC<AboutProps> = ({}) => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16" id="about">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2 text-justify">
          <p className="uppercase text-xl tracking-widest text-[#5651e5] ml-2">
            About
          </p>
          <h2 className="py-4 ml-2">Who I Am</h2>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto text-justify">
            I am a passionate frontend developer who is dedicated to creating
            visually stunning and engaging websites. My expertise lies in HTML,
            CSS, and JavaScript Frameworks (ReactJs, NextJs), and I am always
            eager to learn new skills and technologies.
          </p>

          <p className="py-4 text-gray-600 max-w-[70%] m-auto text-justify">
            Throughout my education and career, I have gained hands-on
            experience in creating responsive websites and web applications that
            are both functional and aesthetically pleasing. I believe that good
            design and development go hand in hand, and I am committed to
            creating seamless user experiences that are optimized for
            performance and functionality.
          </p>

          <p className="py-4 text-gray-600 max-w-[70%] m-auto text-justify">
            As a frontend developer, I am eager to take on new challenges and
            work collaboratively with teams to create innovative solutions. I am
            a quick learner, a problem solver, and a team player who is always
            willing to go the extra mile to achieve project goals.
          </p>

          <p className="py-4 text-gray-600 max-w-[70%] m-auto text-justify">
            In my free time, I enjoy experimenting with new technologies. I am
            always looking for new opportunities to grow and develop my skills,
            and I am excited about the prospect of joining a dynamic and
            innovative team of developers.
          </p>

          <p className="py-4 text-gray-600 max-w-[70%] m-auto text-justify">
            Thank you for taking the time to read my profile, and I look forward
            to hearing from you!
          </p>

          <p className="py-4 text-gray-600 max-w-[70%] m-auto text-justify">
            Check out some of my works.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 transition ">
          <Image
            src={myImg}
            alt="my picture"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
