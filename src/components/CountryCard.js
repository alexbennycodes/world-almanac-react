import { Link } from "react-router-dom";

export const CountryCard = ({ data, query, filter }) => {
  const data_imgUrl = data?.flags?.svg;
  const data_countryName = data.name.common;
  const data_region = data.region ? data.region : "N/A";
  const data_capital = data.capital ? data.capital[0] : "N/A";
  const data_languages = data.languages
    ? Object.values(data.languages).slice(0, 2).join(", ")
    : ["N/A"];
  const data_population =
    data.population > 100000
      ? (+data.population / 100000).toFixed(1) + "M"
      : data.population > 1000
      ? (+data.population / 1000).toFixed(1) + "K"
      : data.population;
  const data_currencies = data.currencies
    ? Object.values(data.currencies)[0].name
    : ["No Currency"];

  const region_visibility =
    filter === "all" || filter === data_region.toLowerCase() ? "" : "hidden";

  const visibility =
    query &&
    (data_countryName.toLowerCase().includes(query.toLowerCase())
      ? ""
      : "hidden");

  return (
    <Link
      to={`/country/${data?.cca3}`}
      className={`card w-full md:w-1/3 lg:w-1/5 bg-base-100 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-200 ease-in-out cursor-pointer ${visibility} ${region_visibility}`}
    >
      <figure>
        <img
          src={data_imgUrl}
          alt="Shoes"
          className={`w-full max-h-52 ${
            data_countryName !== "Nepal" ? "object-cover" : ""
          }`}
        />
      </figure>
      <div className="card-body py-3 px-7">
        <h1 className="card-title text-2xl font-bold">{data_countryName}</h1>
        <div className="uppercase badge rounded-none text-base py-3 bg-slate-600 border-none">
          {data_region}
        </div>
        <div className="pt-2 text-md">
          <p>
            Capital{" - "}
            <span className="font-semibold uppercase">{data_capital}</span>
          </p>
          <p>
            Language{" - "}
            <span className="font-semibold uppercase">{data_languages}</span>
          </p>
          <p>
            Population{" - "}
            <span className="font-semibold uppercase">{data_population}</span>
          </p>
          <p>
            Currency{" - "}
            <span className="font-semibold uppercase">{data_currencies}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};
