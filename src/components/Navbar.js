export const Navbar = ({ setQuery }) => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-5 flex-col md:flex-row gap-5">
      <div className="flex-1">
        <a
          className="normal-case text-xl lg:text-2xl text-blue-600 font-semibold"
          href="/"
        >
          world<span className="text-red-600">almanac</span>
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input border-1 border-slate-200 shadow-sm focus:outline-none"
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};
