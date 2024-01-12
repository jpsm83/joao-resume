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
        />
      </div>
      <div className="flex flex-col w-full space-y-2">
        <h2 className="text-lg sm:text-xl text-white font-bold">About Me</h2>
        <p className="text-sm sm:text-md text-gray-400 text-justify">
        I am eager about contributing to the dynamic field of MERN stack development. With a strong foundation, I&apos;ve gone through a rigorous training programme to become a skilled Full Stack Developer. With more than three years of programming experience under my belt, I&apos;m ready to move smoothly into full-stack web development. My experience developing IoT applications has given me a strong sense of resilience to problems and a dedication to provide solutions that meet high standards. I bring a relentless commitment to quality to every project I work on, and I&apos;m excited to use my abilities to further my career as a Full Stack Developer. I embrace the prospect of learning new programming languages and technologies with enthusiasm. My dedication to ongoing development and flexibility make me an invaluable member of any team. My main goal is to become a proficient programmer and continually add to the team&apos;s success so that I may demonstrate my ability. I recognise how critical it is to keep up with developments in technology and industry trends. My professional trajectory is propelled by my quest for knowledge, which keeps me inspired and involved. I&apos;m excited about the chance to join a progressive company and share my love of learning and technological know-how.
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
