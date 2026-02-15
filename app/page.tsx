
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { projects } from "@/data/projects";
import Navbar from "./components/Navbar";



const avatars = [
  "/profile/avatar1.jpg",
  "/profile/avatar2.jpg",
  "/profile/avatar3.jpg",
];

export default function Home() {
  const [currentAvatar, setCurrentAvatar] = useState(avatars[0]);

  useEffect(() => {
    const random =
      avatars[Math.floor(Math.random() * avatars.length)];
    setCurrentAvatar(random);
  }, []);

  
    return (
      <>
  <Navbar />

  <main className="min-h-screen px-6 pt-40 py-24">
    <div className="max-w-5xl mx-auto fade-up">

      {/* Hero Section */}
      <div id="home"
      className="flex flex-col md:flex-row items-center gap-10">

        {/* Avatar */}
        <div className="relative shrink-0 flex items-center justify-center">

          <div className="absolute w-60 h-60 rounded-full bg-red-600/20 blur-[80px]" />

          <Image
            src={currentAvatar}
            alt="Profile"
            width={140}
            height={140}
            className="relative rounded-full border brightness-70 border-neutral-800 transition duration-500"
            priority
          />
        </div>

        {/* Text */}
        <div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Samreen Mujtaba
          </h1>

          <p className="mt-4 text-neutral-400 max-w-xl leading-relaxed">
            Full-Stack Developer building clean, production-ready web and Web3 systems.
            Focused on React, Next.js, and blockchain architecture.
          </p>

          <div className="mt-6 flex gap-6 text-sm text-neutral-400">
            <a href="#" className="hover:text-white transition">
              GitHub
            </a>
            <a href="#" className="hover:text-white transition">
              LinkedIn
            </a>
            <a href="#" className="hover:text-white transition">
              Resume
            </a>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section id="projects" className="mt-32">
        <h2 className="text-2xl font-semibold tracking-tight">
          Selected Work
        </h2>

<div className="mt-10 space-y-12">
  {projects.map((project, index) => (
    <a
      key={index}
      href={project.link}
      target="_blank"
      className="group block border-b border-neutral-800 pb-10 transition duration-300 hover:border-neutral-600"
    >
      <h3 className="text-xl font-medium group-hover:translate-x-2 transition duration-300">
        {project.title}
      </h3>

      <p className="mt-3 text-neutral-400 max-w-2xl group-hover:text-neutral-300 transition duration-300">
        {project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-3 text-sm text-neutral-500">
        {project.tech.map((tech, i) => (
          <span key={i}>{tech}</span>
        ))}
      </div>
    </a>
  ))}
</div>

        {/* <div className="mt-10 space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-neutral-800 pb-10">

              <h3 className="text-xl font-medium">
                {project.title}
              </h3>

              <p className="mt-3 text-neutral-400 max-w-2xl">
                {project.description}
              </p>


            </div>
          ))}
        </div> */}
      </section>

    </div>
  </main></>
);

   
}
