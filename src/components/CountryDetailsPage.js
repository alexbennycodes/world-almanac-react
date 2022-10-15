import React, { useState, useEffect } from "react";
import { getSpecificCountry } from "../services/getSpecificCountry";
import { CountryDetails } from "./CountryDetails";
import { Spinner } from "./Spinner";

export const CountryDetailsPage = () => {
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    getSpecificCountry(setCountryData, "India");
  }, []);

  return (
    <div>
      {countryData ? <CountryDetails countryData={countryData} /> : <Spinner />}
    </div>
  );
};
