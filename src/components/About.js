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
          I am enthusiastic about contributing to the dynamic field of MERN
          stack development. Equipped with a robust foundation, I have undergone
          intensive training to emerge as a proficient Full Stack Developer.
          Drawing from over 2 years of experience as an IoT developer, I am
          poised to transition seamlessly into the realm of full-stack web
          development. My tenure in IoT development has instilled in me a
          resilience to challenges and a commitment to delivering high-quality
          solutions. I approach each project with an unwavering dedication to
          excellence, and I am now eager to channel my skills towards advancing
          my career as a Full Stack Developer. I embrace the prospect of
          learning new programming languages and technologies with enthusiasm.
          My commitment to continuous improvement and adaptability positions me
          as a valuable asset to any team. My primary objective is to evolve
          into an expert programmer, consistently contributing to the success of
          the team that affords me the opportunity to showcase my capabilities.
          I understand the importance of staying abreast of industry trends and
          technological advancements. The pursuit of knowledge is a driving
          force in my professional journey, ensuring that I remain motivated and
          engaged. I look forward to the opportunity to bring my passion for
          learning and my technical expertise to a forward-thinking team.
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
