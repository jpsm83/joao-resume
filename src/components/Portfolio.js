/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [showAmazon, setShowAmazon] = useState(false);
  const [showRecipes, setShowRecipes] = useState(false);
  const [showMovieRedux, setShowMovieRedux] = useState(false);
  const [showToDo, setShowToDo] = useState(false);
  const [showNetflix, setShowNetflix] = useState(false)

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
        More projects comming soon...
      </p>

      <div className="bg-gray-200 rounded-md sm:rounded-lg sm:mt-12 mt-6 flex flex-wrap overflow-scroll scrollbar-hide p-2 justify-center">
        <div className="flex flex-col w-60 overflow-hidden sm:m-4 m-2">
          <button onClick={() => toggleShow(showAmazon, setShowAmazon)}>
            <Image
              src="/images/amazonClone.PNG"
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
              <a href="https://github.com/jpsm83/amazon-clone" target="blank">
                <div className="flex justify-center space-x-2 items-center bg-yellow-600 mt-4 text-white p-2 rounded-lg">
                  <Image src="/images/github.png" height={20} width={20} />
                  <p>Full Code</p>
                </div>
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
                    src="/images/mongodb.gif"
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
              <a
                href="https://github.com/jpsm83/my-recipes-library-client"
                target="blank"
              >
                <div className="flex justify-center space-x-2 items-center bg-yellow-600 mt-4 text-white p-2 rounded-lg">
                  <Image src="/images/github.png" height={20} width={20} />
                  <p>Frontend Code</p>
                </div>
              </a>
              <a
                href="https://github.com/jpsm83/my-recipes-library-server"
                target="blank"
              >
                <div className="flex justify-center space-x-2 items-center bg-yellow-600 mt-4 text-white p-2 rounded-lg">
                  <Image src="/images/github.png" height={20} width={20} />
                  <p>Backend Code</p>
                </div>
              </a>
              <br />
              <hr />
            </div>
          ) : null}
        </div>
        <div className="flex flex-col w-60 overflow-hidden sm:m-4 m-2">
          <button onClick={() => toggleShow(showMovieRedux, setShowMovieRedux)}>
            <Image
              src="/images/movieRedux.png"
              alt="Movie Redux Image"
              height={120}
              width={240}
              objectFit="contain"
            />
          </button>

          {showMovieRedux ? (
            <div>
              <div className="mt-2 flex justify-center flex-wrap">
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
                    src="/images/sass.png"
                    alt="Sass Image"
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
                <li>React application</li>
                <li>Responsive UI</li>
                <li>React Router Dom 6.2.1</li>
                <li>External API Imdb</li>
                <li>Redux toolkit for search</li>
                <li>Styles with Sass</li>
              </ul>
              <a
                className="flex justify-center items-center bg-green-800 mt-4 text-white shadow-md p-2 rounded-lg"
                href="https://movies-redux.vercel.app/"
                target="blank"
              >
                Movies Redux
              </a>
              <a href="https://github.com/jpsm83/movies-redux" target="blank">
                <div className="flex justify-center space-x-2 items-center bg-yellow-600 mt-4 text-white p-2 rounded-lg">
                  <Image src="/images/github.png" height={20} width={20} />
                  <p>Full Code</p>
                </div>
              </a>
              <br />
              <hr />
            </div>
          ) : null}
        </div>
        <div className="flex flex-col w-60 overflow-hidden sm:m-4 m-2">
          <button onClick={() => toggleShow(showToDo, setShowToDo)}>
            <Image
              src="/images/toDoApp.png"
              alt="To Do App Image"
              height={120}
              width={240}
              objectFit="contain"
            />
          </button>

          {showToDo ? (
            <div>
              <div className="mt-2 flex justify-center flex-wrap">
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
                    src="/images/next.png"
                    alt="Next Image"
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
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/mongodb.gif"
                    alt="MongoDB Image"
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
                <div className="flex justify-center items-center m-1 overflow-hidden shrink-0">
                  <Image
                    src="/images/tailwind.svg"
                    alt="Tailwind Image"
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
                <li>NextJS application</li>
                <li>Responsive UI</li>
                <li>Authentication NextAuth</li>
                <li>Google Signup</li>
                <li>CRUD to dos</li>
                <li>MongoDB Atlas</li>
                <li>Manage your notes</li>
                <li></li>
              </ul>
              <a
                className="flex justify-center items-center bg-green-800 mt-4 text-white shadow-md p-2 rounded-lg"
                href="https://to-do-next-beryl.vercel.app/"
                target="blank"
              >
                To Do App
              </a>
              <a href="https://github.com/jpsm83/to-do-next" target="blank">
                <div className="flex justify-center space-x-2 items-center bg-yellow-600 mt-4 text-white p-2 rounded-lg">
                  <Image src="/images/github.png" height={20} width={20} />
                  <p>Full Code</p>
                </div>
              </a>
              <br />
              <hr />
            </div>
          ) : null}
        </div>
        <div className="flex flex-col w-60 overflow-hidden sm:m-4 m-2">
          <button onClick={() => toggleShow(showNetflix, setShowNetflix)}>
            <Image
              src="/images/netflixClone.png"
              alt="Netflix Clone Image"
              height={120}
              width={240}
              objectFit="contain"
            />
          </button>

          {showNetflix ? (
            <div>
              <div className="mt-2 flex justify-center flex-wrap">
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
                <div className="flex justify-center items-center overflow-hidden shrink-0">
                  <Image
                    src="/images/css.png"
                    alt="Css Image"
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
                    src="/images/firebase.png"
                    alt="Firebase Image"
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
              </div>

              <h2 className="font-bold text-md sm:text-lg text-yellow-600 sm:mt-4 mt-2 mb-1 sm:mb-2">
                Main Features
              </h2>
              <ul className="text-sm sm:text-md">
                <li>React application</li>
                <li>Responsive UI</li>
                <li>Authentication Firebase</li>
                <li>DB Firebase</li>
                <li>Redux for users</li>
                <li>Stripe payment</li>
                <li>Webhook Firebase/Stripe</li>
              </ul>
              <a
                className="flex justify-center items-center bg-green-800 mt-4 text-white shadow-lg p-2 rounded-lg"
                href="https://netflix-clone-e6153.web.app/"
                target="blank"
              >
                Netflix Clone
              </a>
              <a
                href="https://github.com/jpsm83/netflix-clone"
                target="blank"
              >
                <div className="flex justify-center space-x-2 items-center bg-yellow-600 mt-4 text-white p-2 rounded-lg">
                  <Image src="/images/github.png" height={20} width={20} />
                  <p>Full Code</p>
                </div>
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
