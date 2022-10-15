import React, { useState, useEffect } from "react";

// import { getAllCountries } from "./services/getAllCountries";
import { Navbar, CountryCard } from "./components";
import { SearchBar } from "./components/SearchBar";
import { DropDown } from "./components/DropDown";
import { CountryDetailsPage } from "./components/CountryDetailsPage";

function App() {
  // const [countriesData, setCountriesData] = useState([]);
  const [query, setQuery] = useState(null);

  // useEffect(() => {
  //   getAllCountries(setCountriesData);
  //   console.log("UseEffect");
  // }, []);

  console.log(query);
  return (
    <div className="dark">
      <Navbar setQuery={setQuery} />
      <div className="flex justify-between items-center container mx-auto mt-5 px-5">
        <SearchBar />
        <DropDown />
      </div>
      {/* <div className="container mx-auto flex flex-wrap justify-between gap-16 p-5 my-10">
        {countriesData ? (
          countriesData.map((country, i) => {
            return <CountryCard data={country} key={i} query={query} />;
          })
        ) : (
          <div>Nothing here</div>
        )}
      </div> */}
      <div className="container mx-auto p-5">
        <CountryDetailsPage />
      </div>
    </div>
  );
}

export default App;
