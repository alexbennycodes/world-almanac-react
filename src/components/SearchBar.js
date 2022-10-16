export const SearchBar = ({ setQuery }) => {
  return (
    <div className="flex items-center w-full md:w-1/2">
      <div className="border border-gray-200 rounded overflow-hidden flex w-full shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)]">
        <input
          type="text"
          className="px-5 py-3 focus:outline-none w-full"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="flex items-center justify-center px-4 border-l">
          <svg
            className="h-4 w-4 text-grey-dark"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
          </svg>
        </button>
      </div>
    </div>
  );
};
