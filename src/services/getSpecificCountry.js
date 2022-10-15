import axios from "axios";

export const getSpecificCountry = (setCountriesData, name) => {
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/name/${name}?fullText=true`)
    .then((response) => {
      const { data } = response;
      console.log(...data);
      setCountriesData(...data);
    });
};
