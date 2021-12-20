export default function Navbar() {
  return (
    <div className="sticky top-0 z-10">
      <ul className="flex sm:justify-center px-2 w-full items-center overflow-scroll scrollbar-hide flex-nowrap text-md sm-text-lg font-bold text-gray-400 bg-gray-800 h-10 sm:h-12 space-x-6">
        <li className=" hover:text-white hover:scale-110 active:scale-95">
          <a href="#home">Home</a>
        </li>
        <li className=" hover:text-white hover:scale-110 active:scale-95">
          <a href="#about">About</a>
        </li>
        <li className=" hover:text-white hover:scale-110 active:scale-95">
          <a href="#resume">Resume</a>
        </li>
        <li className=" hover:text-white hover:scale-110 active:scale-95">
          <a href="#portfolio">Works</a>
        </li>
      </ul>
    </div>
  );
}
