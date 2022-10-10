import React, { useState, useEffect } from "react";

import { getAllCountries } from "./services/getAllCountries";
import { Navbar, CountryCard } from "./components";

function App() {
  const [countriesData, setCountriesData] = useState([]);
  const [query, setQuery] = useState(null);

  useEffect(() => {
    getAllCountries(setCountriesData);
    console.log("UseEffect");
  }, []);

  console.log(query);
  return (
    <div className="container mx-auto">
      <Navbar setQuery={setQuery} />
      <div className="flex flex-wrap justify-between gap-16 p-5 my-10">
        {countriesData ? (
          countriesData.map((country, i) => {
            return <CountryCard data={country} key={i} query={query} />;
          })
        ) : (
          <div>Nothing here</div>
        )}
      </div>
    </div>
  );
}

export default App;
