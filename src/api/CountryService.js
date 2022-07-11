import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1/";

export const requestAllCountries = async () => {
  try {
    let url = BASE_URL + "all?fields=name,capital,flags,population,region";
    const response = await axios.get(url);
    console.log("requestAllCountries response: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const requestCountriesByCountry = async (name) => {
  try {
    let url = BASE_URL + "name/" + name;
    const response = await axios.get(url);
    console.log("requestCountriesByCountry response: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const requestCountriesByCodes = async (codes) => {
  try {
    let url = BASE_URL + "alpha?codes=" + codes.join(",");
    const response = await axios.get(url);
    // console.log("requestCountriesByCountry response: ", response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
