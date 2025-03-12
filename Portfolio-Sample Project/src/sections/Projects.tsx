import { FC } from "react";
import image1 from "@/assets/images/project-1.jpg";
import image2 from "@/assets/images/project-2.jpg";
import image3 from "@/assets/images/project-3.jpg";
import image4 from "@/assets/images/project-4.jpg";
import image5 from "@/assets/images/project-5.jpg";
import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    name: "Artisan Brew Co.",
    image: image1,
  },
  {
    name: "Wavelength Studios",
    image: image2,
  },
  {
    name: "Nova Fitness",
    image: image3,
  },
  {
    name: "Urban Plates",
    image: image4,
  },
  {
    name: "Bloom Botanicals",
    image: image5,
  },
];

const Projects: FC = () => {
  return <section className="py-24 md:py-32">
    <div className="container">
      <h2 className="text-4xl md:text-7xl">Selected works</h2>
      <div className="mt-10">
        {projects.map(project => (
          <a href="#" key={project.name}
            className="border-t last:border-b border-stone-400 border-dotted flex flex-col">
            <div className="py-6 md:py-8">
              <div className="aspect-video md:hidden">
                <Image className="size-full object-cover"
                  src={project.image} alt={project.name} />
              </div>
              <div className="mt-8 md:mt-0 flex justify-between items-center">
                <h3 className="text-2xl md:text-3xl">
                  {project.name}
                </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none" viewBox="0 0 24 24"
                  strokeWidth="1.5" stroke="currentColor"
                  className="size-6">
                  <path strokeLinecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
};

export default Projects;
