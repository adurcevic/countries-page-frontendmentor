import { defineStore } from "pinia";
import { ref } from "vue";
import { getAllCountries } from "../api/countires";

export const useCountryStore = defineStore("CountryStore", () => {
  const countries = ref(null);
  const searchedCountryArr = ref([]);
  const allCountries = ref([]);
  const areCountriesFetched = ref(false);
  const borderCountriesName = ref([]);

  async function fetchCountries() {
    try {
      const res = await getAllCountries();
      countries.value =
        allCountries.value =
        searchedCountryArr.value =
          [...res];
      areCountriesFetched.value = true;
    } catch (err) {
      console.error(err.message);
    }
  }

  function searchBorderCountries(borderCountries) {
    borderCountriesName.value = [];
    if (borderCountries) {
      borderCountries.forEach((borderCountry) => {
        const country = allCountries.value.find(
          (country) => country.cca3 === borderCountry
        );
        if (country) borderCountriesName.value.push(country.name.common);
      });
    }
  }

  function findCountry(name) {
    const searchedCountry = allCountries.value.find(
      (country) =>
        country.name.common.toLowerCase().replaceAll(" ", "") ===
        name.toLowerCase().replaceAll(" ", "")
    );
    return searchedCountry;
  }

  function filterByRegion(regionName, dropdown) {
    countries.value = allCountries.value.filter(
      (country) => country.region === regionName
    );
    searchedCountryArr.value = countries.value;
    dropdown.active = false;
  }

  function searchCountry(input) {
    if (!input) return (countries.value = searchedCountryArr.value);
    countries.value =
      input &&
      searchedCountryArr.value.filter((country) =>
        country.name.common.toLowerCase().includes(input.toLowerCase())
      );
  }

  return {
    countries,
    filterByRegion,
    searchCountry,
    findCountry,
    areCountriesFetched,
    borderCountriesName,
    searchBorderCountries,
    fetchCountries,
  };
});
