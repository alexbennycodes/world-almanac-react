import { InfoItem } from "./InfoItem";
import { Link } from "react-router-dom";

export const CountryDetails = ({ countryData }) => {
  document.title = `${countryData?.name?.common} - World Almanac`;

  const data_imgUrl = countryData?.flags?.svg;
  const data_nativeName = countryData?.name?.nativeName
    ? Object.values(countryData?.name?.nativeName)[1]
      ? Object.values(countryData?.name?.nativeName)[1].common
      : Object.values(countryData?.name?.nativeName)[0].common
    : "N/A";

  const data_Currencies = countryData?.currencies
    ? Object.values(countryData?.currencies)
    : "N/A";

  const data_Languages = countryData.languages
    ? Object.values(countryData.languages).join(", ")
    : "N/A";
  return (
    <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center my-20 container mx-auto px-5 md:p-0">
      <div className="lg:px-16 flex items-center justify-center">
        <img
          src={data_imgUrl}
          alt={`Flag of ${countryData?.name?.common}`}
          className="md:max-h-[300px] shadow-lg border"
        />
      </div>
      <div>
        <h1 className="uppercase text-2xl md:text-3xl font-bold text-center mb-5">
          {countryData?.name?.common}
        </h1>
        <InfoItem title="Official Name" value={countryData?.name?.official} />
        <InfoItem title="Common Name" value={countryData?.name?.common} />
        <InfoItem title="Native Name" value={data_nativeName} />
        <InfoItem title="Captial" value={countryData?.capital || "N/A"} />
        <InfoItem title="Continents" value={countryData?.continents} />
        <InfoItem
          title="Map"
          value={
            <a
              href={countryData?.maps.googleMaps}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 lowercase text-sm md:text-lg"
            >
              {countryData?.maps.googleMaps}
            </a>
          }
          className="border-none"
          valueClassName="whitespace-nowrap overflow-hidden text-ellipsis w-[35vw] lg:w-[300px] text-blue-500"
        />
      </div>
      <div>
        <InfoItem title="population" value={countryData?.population} />
        <InfoItem
          title="Area"
          value={
            <p>
              {countryData?.area} km<sup>2</sup>
            </p>
          }
        />
        <InfoItem title="region" value={countryData?.region} />
        <InfoItem title="Sub region" value={countryData?.subregion || "N/A"} />
        <InfoItem
          title="cca3 country code"
          value={countryData?.cca3 || "N/A"}
          className="border-none"
        />
      </div>
      <div>
        <InfoItem title="languages" value={data_Languages} />
        <InfoItem
          title="Currencies"
          value={
            <div>
              {data_Currencies !== "N/A"
                ? data_Currencies?.map((currency) => {
                    return (
                      <p key="currency.name">{`${currency.name}  - (${currency.symbol})`}</p>
                    );
                  })
                : data_Currencies}
            </div>
          }
        />
        <InfoItem
          title="time zones"
          value={
            <div className="flex flex-wrap space-x-2">
              {countryData?.timezones?.map((timezone, i) => {
                return <p key={timezone}>{timezone} </p>;
              })}
            </div>
          }
        />
        <InfoItem
          title="borders"
          value={
            <div className="flex gap-2 flex-wrap">
              {countryData?.borders
                ? countryData?.borders?.map((border) => (
                    <Link
                      to={`/country/${border}`}
                      key={border}
                      className="px-3 py-1 bg-gray-300 rounded-md text-sm lg:text-base "
                    >
                      {border}
                    </Link>
                  ))
                : "N/A"}
            </div>
          }
        />
      </div>
    </div>
  );
};
