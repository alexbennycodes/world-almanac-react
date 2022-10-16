import React, { useEffect, useState } from "react";
import { Navbar, SearchBar, Spinner, CountryCard } from "../components";
import { getAllCountries } from "../services/getAllCountries";

export const AllCountriesLayout = () => {
  const [countriesData, setCountriesData] = useState(null);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    getAllCountries(setCountriesData);
  }, []);
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 my-10">
        <SearchBar setQuery={setQuery} />
        <div className="flex flex-wrap justify-between gap-16 mt-10">
          {countriesData ? (
            countriesData.map((country, i) => {
              return <CountryCard data={country} key={i} query={query} />;
            })
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </>
  );
};
