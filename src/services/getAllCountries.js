import axios from "axios";

export const getAllCountries = () => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/all`);
};
