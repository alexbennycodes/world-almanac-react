import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Navbar, SearchBar, CountryCard, Spinner } from "../components";
import { RegionFilter } from "../components/RegionFilter";
import { getAllCountries } from "../services/getAllCountries";

export const AllCountriesLayout = () => {
  document.title = "World Almanac";

  const { isLoading, data, isError, error } = useQuery(
    ["all-countries"],
    getAllCountries
  );
  const [query, setQuery] = useState(null);
  const [filter, setFilter] = useState("all");

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-5 my-5 md:my-10">
        <div className="flex flex-col md:flex-row gap-5 md:justify-between items-center">
          <SearchBar setQuery={setQuery} />
          <RegionFilter setFilter={setFilter} />
        </div>
        <div className="flex flex-wrap justify-between gap-16 mt-10">
          {isLoading ? (
            <Spinner />
          ) : isError ? (
            <h2>{error.message}</h2>
          ) : (
            data?.data?.map((country, i) => (
              <CountryCard
                data={country}
                key={i}
                query={query}
                filter={filter}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};
