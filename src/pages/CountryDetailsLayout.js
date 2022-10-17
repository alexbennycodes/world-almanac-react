import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getSpecificCountry } from "../services/getSpecificCountry";
import { CountryDetails, Navbar, Spinner } from "../components";
import { useParams } from "react-router-dom";

export const CountryDetailsLayout = () => {
  const { countryCode } = useParams();

  const { isLoading, data, isError, error } = useQuery(
    ["get-country", countryCode],
    () => getSpecificCountry(countryCode)
  );

  return (
    <div>
      <Navbar />
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <h2>{error.message}</h2>
      ) : (
        <CountryDetails countryData={data?.data[0]} />
      )}
    </div>
  );
};
