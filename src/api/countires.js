import { countriesUrl } from "./api";

export const getAllCountries = () => {
  return fetch(`${countriesUrl}/v3.1/all`).then((res) => {
    if (!res.ok) {
      throw res;
    }
    return res.json();
  });
};
