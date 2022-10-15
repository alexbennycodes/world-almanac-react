import axios from "axios";

export const getAllCountries = (setCountriesData) => {
  axios.get(`${process.env.REACT_APP_BASE_URL}/all`).then((response) => {
    const { data } = response;
    console.log(data);
    setCountriesData(data);
  });
};
