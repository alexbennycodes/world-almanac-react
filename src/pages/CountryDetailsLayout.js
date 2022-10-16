import React, { useState, useEffect } from "react";
import { getSpecificCountry } from "../services/getSpecificCountry";
import { CountryDetails, Navbar, Spinner } from "../components";
import { useParams } from "react-router-dom";

export const CountryDetailsLayout = () => {
  const { countryCode } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    getSpecificCountry(setCountryData, countryCode);
  }, [countryCode]);

  return (
    <div>
      <Navbar />
      {countryData ? <CountryDetails countryData={countryData} /> : <Spinner />}
    </div>
  );
};
