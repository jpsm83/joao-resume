/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray-700 flex sm:flex-nowrap flex-wrap justify-center sm:justify-between p-10 sm:p-20"
    >
      <div className="flex justify-center h-40 w-40 overflow-hidden rounded-full shrink-0 mr-10 sm:mr-20">
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
          I am exited to get involved in the programming field, I had prepared
          myself, trained lots to become Full Stack Developer and I am ready to
          show what I am capable of. I am interest in full stack web development
          position, based on MongoDB, ExpressJS, ReactJS, Next, TailwindCSS and
          NodeJS but also, not afraid and ready to learn new programming
          languages if requested. My main goal is become an expert in
          programming, learning and adding to the Company that give me an
          opportunity to show my best. Keep myself update is a must, learn and
          learn and them learn some more. That is the main thing that keep me
          motivate to start, programmers never get bored because will always
          have something new to learn
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
            <span>+34 615055703</span>
            <br />
            <span>jpsm83@hotmail.com</span>
          </p>
        </div>
      </div>
    </section>
  );
}
