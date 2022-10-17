import axios from "axios";

export const getSpecificCountry = (code) => {
  return axios.get(`${process.env.REACT_APP_BASE_URL}/alpha?codes=${code}`);
};
