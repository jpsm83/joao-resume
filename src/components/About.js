/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-700 flex sm:flex-nowrap flex-wrap justify-center sm:justify-between p-10 sm:p-12"
    >
      <div className="flex justify-center h-40 w-40 overflow-hidden rounded-full shrink-0 sm:mr-20 mb-10">
        <Image
          src="/images/profilepic.jpg"
          alt="Profile Image"
          height={900}
          width={567}
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col w-full space-y-2">
        <h2 className="text-lg sm:text-xl text-white font-bold">About Me</h2>
        <p className="text-sm sm:text-md text-gray-400 text-justify">
          I am excited to get involved in the programming field, I have prepared
          myself, trained intensively to become a Full Stack Developer and I am ready to
          show you what I am capable of. I am interested in a full stack web development
          position, based on MongoDB, ExpressJS, ReactJS, NextJS, TailwindCSS and
          NodeJS but also, not afraid and keen to learn new programming
          languages if requested. My main goal is to become an expert in
          programming, learning and adding to the team that give me an
          opportunity to show my best. Keeping myself up to date is a must, learn and
          learn and them learn some more. That is the main thing that keeps me
          motivated to start, programmers never get bored because they always
          have something new to learn.
        </p>
        <div className="flex flex-col w-full space-y-2">
          <h2 className="text-lg sm:text-xl text-white font-bold mt-6">
            Contact Details
          </h2>
          <p className="text-sm sm:text-md text-gray-400 text-justify">
            <span>Joao Paulo de Souza Machado</span>
            <br />
            <span>Barcelona - 08026</span>
            <br />
            <span>(+34) 615 055 703</span>
            <br />
            <span>jpsm83@hotmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
