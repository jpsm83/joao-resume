/* eslint-disable jsx-a11y/alt-text */
import Image from "next/image";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";

export default function Footer() {
  
  return (
    <div className="bg-white flex flex-col pb-6">
      <div className="flex justify-end">
        <a href="#home">
          <ArrowCircleUpIcon className="h-10 w-10 m-4 text-black sm:scale-150" />
        </a>
      </div>
      <div className=" flex justify-center items-center">
        <div className="flex space-x-8 sm:space-x-14 mb-4">
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
      <p className="text-sm italic sm:text-md text-center text-gray-600">
        Crate by <span className="font-bold">Joao P S Machado</span>
      </p>
    </div>
  );
}
