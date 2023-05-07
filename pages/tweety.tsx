import Image from "next/image";
import tweetyImg from "@/public/assets/projects/twitter.png";
import nextJsImg from "@/public/assets/skills/nextjs.png";
import tailwindImg from "@/public/assets/skills/tailwind.png";
import mongoImg from "@/public/assets/skills/mongo.png";
import Link from "next/link";
import { BiLeftArrowAlt } from "react-icons/bi";

const tweety = ({}) => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          src={tweetyImg}
          alt="bnb"
          className="absolute z-1 object-cover"
          fill
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Twitter clone</h2>
          <h3>NextJs / TailwindCSS / MongoDB</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            This app is a twitter clone that I built using NextJs, TailwindCSS
            and MongoDB. Post, edit post, delete post, add friends with like and
            unlike functionalities.
          </p>
          <div className=" mt-6 ">
            <a
              href="https://tweety-gamma.vercel.app/"
              className="shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white hover:scale-105 duration-300 transition ease-linear px-8 py-2 mr-8"
            >
              Demo
            </a>
            <a
              href="https://github.com/jobenapao01/tweety"
              className="shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#5651e5] to-[#709dff] text-white hover:scale-105 duration-300 transition ease-linear px-8 py-2"
            >
              Code
            </a>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="flex text-gray-600 py-2 items-center gap-4">
                <Image
                  src={nextJsImg}
                  alt="next"
                  width={30}
                  height={30}
                  className="object-cover"
                />
                NextJs
              </p>
              <p className="flex text-gray-600 py-2 items-center gap-4">
                <Image
                  src={tailwindImg}
                  alt="tailwind"
                  width={30}
                  height={30}
                  className="object-cover"
                />
                TailwindCSS
              </p>
              <p className="flex text-gray-600 py-2 items-center gap-4">
                <Image
                  src={mongoImg}
                  alt="mongodb"
                  width={30}
                  height={30}
                  className="object-cover"
                />
                MongoDB
              </p>
            </div>
          </div>
        </div>
        <Link
          href="/#projects"
          className="w-[30px] h-[30px] bg-gray-200 rounded-full hover:scale-125 duration-300 transition"
        >
          <BiLeftArrowAlt size={30} />
        </Link>
      </div>
    </div>
  );
};

export default tweety;
