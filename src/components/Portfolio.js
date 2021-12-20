import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [showAmazon, setShowAmazon] = useState(false);

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

      <div className="bg-white rounded-md sm:rounded-lg sm:mt-12 mt-6 sm:p-6 p-4 flex justify-center space-x-4 sm:space-x-6">
        <div className="flex justify-center border-2 w-60 h-40 overflow-hidden">
          <button onClick={() => toggleShow(showAmazon, setShowAmazon)}>
            <Image
              src="/images/amazonClone.png"
              alt="Amazon Clone Image"
              height={400}
              width={400}
              objectFit="cover"
            />
          </button>

          {showAmazon ? <p>Toggle working fine</p> : null}
        </div>
      </div>
    </section>
  );
}
