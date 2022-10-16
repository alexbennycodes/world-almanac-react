export const RegionFilter = ({ setFilter }) => {
  return (
    <select
      className="select select-bordered border-gray-200 rounded w-full md:w-auto md:max-w-xs shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] focus:outline-none"
      onChange={(e) => setFilter(e.target.value)}
      defaultValue="all"
    >
      <option className="px-2 py-5" value="all">
        All
      </option>
      <option className="px-2 py-5" value="asia">
        Asia
      </option>
      <option className="px-2 py-5" value="africa">
        Africa
      </option>
      <option className="px-2 py-5" value="antarctic">
        Antarctic
      </option>
      <option className="px-2 py-5" value="americas">
        Americas
      </option>
      <option className="px-2 py-5" value="europe">
        Europe
      </option>
      <option className="px-2 py-5" value="oceania">
        Oceania
      </option>
    </select>
  );
};
