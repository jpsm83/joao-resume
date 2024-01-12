/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <header
      id="home"
      className="w-full flex justify-center items-center flex-col"
    >
      <div className="flex flex-grow relative overflow-hidden h-screen object-bottom bottom-0">
        <Image
          src="/images/background.jpg"
          alt="Background Image"
          height={1033}
          width={1838}
        />
      </div>

      <div className="absolute flex flex-col justify-center items-center">
        <h1 className="text-5xl sm:text-7xl sm:mb-10 text-white font-bold mb-8">
          {
            <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString("Hello, I'm João...").start();
              }}
            />
          }
        </h1>
        <h3 className="text-md sm:text-lg text-white text-center">
          Based in Barcelona. With more tham 3 years working as developer. Looking for oportunities as{" "}
          <span className="text-lg sm:text-xl font-bold text-white">
            MERN Full Stack Developer.
          </span>
        </h3>
        <div className="flex space-x-5 sm:space-x-8 sm:mt-6 mt-4">
          <a href="https://www.linkedin.com/in/joaopsmachado/" target="blank">
            <div className="sm:scale-150">
              <Image src="/images/linkedin.jpg" height={30} width={30} />
            </div>
          </a>
          <a href="https://github.com/jpsm83" target="blank">
            <div className="sm:scale-150">
              <Image src="/images/github.png" height={30} width={30} />
            </div>
          </a>
        </div>
      </div>

      <p className="">
        <a href="#about">
          <i className=""></i>
        </a>
      </p>
    </header>
  );
}
