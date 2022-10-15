export const Navbar = ({ setQuery }) => {
  return (
    <div className="bg-base-100 shadow-md">
      <div className="navbar container mx-auto px-5 flex-col md:flex-row gap-5">
        <div className="flex-1">
          <a
            className="normal-case text-xl lg:text-2xl text-blue-600 font-semibold"
            href="/"
          >
            world<span className="text-red-600">almanac</span>
          </a>
        </div>
      </div>
    </div>
  );
};
