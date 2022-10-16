import { Link } from "react-router-dom";

export const Navbar = ({ setQuery }) => {
  return (
    <div className="bg-base-100 shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] sticky top-0 z-10">
      <div className="navbar container mx-auto px-5 justify-center">
        <Link
          className="normal-case text-xl lg:text-2xl text-blue-600 font-semibold"
          to="/"
        >
          world<span className="text-red-600">almanac</span>
        </Link>
      </div>
    </div>
  );
};
