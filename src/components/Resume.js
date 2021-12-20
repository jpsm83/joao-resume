import Image from "next/image";

export default function Resume() {
  return (
    <section
      id="resume"
      className="bg-gray-100 flex-col justify-center sm:space-y-12 space-y-6 sm:justify-between p-10 sm:p-20"
    >
      <div className="flex sm:space-x-6 sm:space-y-12 space-y-6 flex-wrap">
        <h1 className="text-lg sm:text-xl text-blue-900 underline font-bold">
          EDUCATION
        </h1>
        <div>
          <h2 className="font-bold text-lg sm:text-xl text-yellow-600 mb-2 sm:mb-4">
            IronHack Barcelona
          </h2>
          <h3 className="text-md sm:text-lg italic">
            Full Stack Web Developer MERN
          </h3>
          <p className="text-sm sm:text-md italic mb-2 sm:mb-4">
            Accomplished on June 2021
          </p>
          <p className="text-md sm:text-lg">
            Able to build full stack applications with the latest tecnology.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-lg sm:text-xl text-blue-900 underline font-bold mb-4 sm:mb-6">
          SKILLS
        </h1>

        <div className="sm:rounded-xl rounded-md w-full shadow-md sm:shadow-xl flex justify-between flex-wrap sm:p-4 bg-gray-200">
          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/auth0.png"
                alt="Auth0 Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Auth0</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/bootstrap.png"
                alt="Bootstrap Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Bootstrap</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/css.png"
                alt="Css Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Css</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/express.png"
                alt="Express Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Express</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/firebase.png"
                alt="Firebase Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Firebase</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/github.png"
                alt="Github Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Github</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/heroku.jpg"
                alt="Heroku Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Heroku</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/hooks.png"
                alt="Hooks Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Hooks</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/html.png"
                alt="Html Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Html</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/javascript.png"
                alt="Javascript Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Javascript</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/linkedin.jpg"
                alt="Linkedin Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Linkedin</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/mongodb.gif"
                alt="MongoDB Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">MongoDB</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/next.png"
                alt="Next Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Next</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/node.png"
                alt="Node Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Node</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/postman.png"
                alt="Postman Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Postman</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/react.png"
                alt="React Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">React</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/redux.jpg"
                alt="Redux Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Redux</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/tailwind.svg"
                alt="Tailwind Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Tailwind</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/ubuntu.png"
                alt="Ubuntu Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Ubuntu</p>
          </div>

          <div className="flex space-x-2 m-4 items-center">
            <div className="flex justify-center items-center h-30 overflow-hidden shrink-0">
              <Image
                src="/images/vercel.svg"
                alt="Vercel Image"
                height={40}
                width={40}
                objectFit="cover"
              />
            </div>
            <p className="text-md sm:text-lg">Vercel</p>
          </div>
        </div>
      </div>
    </section>
  );
}
