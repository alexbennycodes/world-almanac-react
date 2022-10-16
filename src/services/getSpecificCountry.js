import axios from "axios";

export const getSpecificCountry = (setCountriesData, code) => {
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/alpha?codes=${code}`)
    .then((response) => {
      const { data } = response;
      console.log(...data);
      setCountriesData(...data);
    });
};
