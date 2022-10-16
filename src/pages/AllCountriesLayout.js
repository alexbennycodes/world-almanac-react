import React, { useEffect, useState } from "react";
import { Navbar, SearchBar, Spinner, CountryCard } from "../components";
import { RegionFilter } from "../components/RegionFilter";
import { getAllCountries } from "../services/getAllCountries";

export const AllCountriesLayout = () => {
  const [countriesData, setCountriesData] = useState(null);
  const [query, setQuery] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getAllCountries(setCountriesData);
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 my-5 md:my-10">
        <div className="flex flex-col md:flex-row gap-5 md:justify-between items-center">
          <SearchBar setQuery={setQuery} />
          <RegionFilter setFilter={setFilter} />
        </div>
        <div className="flex flex-wrap justify-between gap-16 mt-10">
          {countriesData ? (
            countriesData.map((country, i) => {
              return (
                <CountryCard
                  data={country}
                  key={i}
                  query={query}
                  filter={filter}
                />
              );
            })
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
};
