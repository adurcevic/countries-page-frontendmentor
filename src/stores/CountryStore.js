import { defineStore } from "pinia";
import { ref } from "vue";

export const useCountryStore = defineStore("CountryStore", () => {
  const countries = ref([]);
  const allCountries = ref([]);

  function fill(arr) {
    countries.value = [...arr];
    allCountries.value = [...arr];
  }

  function filterByRegion(regionName) {
    countries.value = allCountries.value.filter(
      (country) => country.region === regionName
    );
  }

  return { countries, fill, filterByRegion };
});
