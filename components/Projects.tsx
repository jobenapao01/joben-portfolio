import Image from "next/image";
import { FC } from "react";
import bnbImg from "@/public/assets/projects/bnb.png";
import twitter from "@/public/assets/projects/twitter.png";
import netflix from "@/public/assets/projects/netflix.png";

import ProjectItem from "./ProjectItem";

interface ProjectsProps {}

const Projects: FC<ProjectsProps> = ({}) => {
  return (
    <div className="w-full" id="projects">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="AirBnb Clone"
            backgroundImg={bnbImg}
            projectUrl="/hotelbnb"
            techStack="NextJs"
          />
          <ProjectItem
            title="Twitter Clone"
            backgroundImg={twitter}
            projectUrl="/tweety"
            techStack="NextJs"
          />
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={netflix}
            projectUrl="/netflix"
            techStack="NextJs"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
