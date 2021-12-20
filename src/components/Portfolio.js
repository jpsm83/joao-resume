import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [showAmazon, setShowAmazon] = useState(false);
  const [showRecipes, setShowRecipes] = useState(false);

  const toggleShow = (project, setProject) => {
    setProject(!project);
  };

  return (
    <section
      id="portfolio"
      className="bg-yellow-600 flex-col text-center justify-center sm:py-12 py-6 p-10 sm:p-20"
    >
      <h1 className="font-bold text-lg sm:text-xl text-white">
        Check Out Some of My Works
      </h1>
      <p className="text-sm sm:text-md italic text-blue-900">
        This section is ALWAYS under construction
      </p>
      <p className="text-sm sm:text-md italic text-blue-900">
        More projects comming soon
      </p>

      <div className="bg-gray-200 rounded-md sm:rounded-lg sm:mt-12 mt-6 flex flex-wrap overflow-scroll scrollbar-hide p-2 justify-center">
        <div className="flex flex-col w-60 overflow-hidden sm:m-4 m-2">
          <button onClick={() => toggleShow(showAmazon, setShowAmazon)}>
            <Image
              src="/images/amazonClone.png"
              alt="Amazon Clone Image"
              height={120}
              width={240}
              objectFit="contain"
            />
          </button>

          {showAmazon ? (
            <div>
              <div className="mt-2 flex justify-center flex-wrap">
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/firebase.png"
                    alt="Firebase Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/github.png"
                    alt="github Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/hooks.png"
                    alt="Hooks Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center overflow-hidden shrink-0">
                  <Image
                    src="/images/html.png"
                    alt="Html Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/javascript.png"
                    alt="Javascript Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/next.png"
                    alt="Next Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center overflow-hidden shrink-0">
                  <Image
                    src="/images/node.png"
                    alt="Node Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/react.png"
                    alt="React Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/redux.jpg"
                    alt="Redux Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center overflow-hidden shrink-0">
                  <Image
                    src="/images/tailwind.svg"
                    alt="Tailwind Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/ubuntu.png"
                    alt="Ubuntu Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/vercel.svg"
                    alt="Vercel Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
              </div>

              <h2 className="font-bold text-md sm:text-lg text-yellow-600 sm:mt-4 mt-2 mb-1 sm:mb-2">
                Main Features
              </h2>
              <ul className="text-sm sm:text-md">
                <li>NextJs application</li>
                <li>Responsive UI</li>
                <li>Authentication NextAuth</li>
                <li>Google Signup</li>
                <li>Redux for shopping basket</li>
                <li>Checkout payment with Stripe</li>
                <li>Firebase Store & Auth</li>
                <li>Webhook between Firebase & Stripe</li>
              </ul>
              <a
                className="flex justify-center items-center bg-green-800 mt-4 text-white shadow-md p-2 rounded-lg"
                href="https://amazon-clone-2-lake.vercel.app/"
                target="blank"
              >
                Amazon Clone
              </a>
              <br />
              <hr />
            </div>
          ) : null}
        </div>
        <div className="flex flex-col w-60 overflow-hidden sm:m-4 m-2">
          <button onClick={() => toggleShow(showRecipes, setShowRecipes)}>
            <Image
              src="/images/myRecipesLibrary.png"
              alt="Recipes Library Image"
              height={120}
              width={240}
              objectFit="contain"
            />
          </button>

          {showRecipes ? (
            <div>
              <div className="mt-2 flex justify-center flex-wrap">
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/passportjs.png"
                    alt="PassportJs Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/express.png"
                    alt="Express Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/github.png"
                    alt="Github Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/heroku.jpg"
                    alt="Heroku Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/hooks.png"
                    alt="Hooks Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center overflow-hidden shrink-0">
                  <Image
                    src="/images/html.png"
                    alt="Html Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/javascript.png"
                    alt="Javascript Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/mongodb.png"
                    alt="MongoDb Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center overflow-hidden shrink-0">
                  <Image
                    src="/images/node.png"
                    alt="Node Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/react.png"
                    alt="React Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/postman.png"
                    alt="Postman Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center overflow-hidden shrink-0">
                  <Image
                    src="/images/tailwind.svg"
                    alt="Tailwind Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/ubuntu.png"
                    alt="Ubuntu Image"
                    height={20}
                    width={20}
                    objectFit="contain"
                  />
                </div>
              </div>

              <h2 className="font-bold text-md sm:text-lg text-yellow-600 sm:mt-4 mt-2 mb-1 sm:mb-2">
                Main Features
              </h2>
              <ul className="text-sm sm:text-md">
                <li>React application</li>
                <li>Responsive UI</li>
                <li>Authentication Passport</li>
                <li>CRUD recipes</li>
                <li>CRUD users</li>
                <li>MongoDB Atlas</li>
                <li>Create and share recipes</li>
              </ul>
              <a
                className="flex justify-center items-center bg-green-800 mt-4 text-white shadow-lg p-2 rounded-lg"
                href="https://my-recipes-library-app.herokuapp.com/"
                target="blank"
              >
                My Recipes Library
              </a>
              <br />
              <hr />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
