<script setup>
import TheSection from "../components/layout/TheSection.vue";
import SearchBar from "../components/ui/SearchBar.vue";
import FilterOptions from "../components/ui/FilterOptions.vue";
import CountryCards from "../components/ui/CountryCards.vue";
import { onBeforeMount } from "vue";
import { getAllCountries } from "../api/countires";
import { useCountryStore } from "../stores/CountryStore";
import { storeToRefs } from "pinia";

const store = useCountryStore();
const { countries } = storeToRefs(store);
const { fill } = store;

const fetchCountries = async () => {
  try {
    const res = await getAllCountries();
    console.log(res);
    fill(res);
  } catch (err) {
    console.error(err.message);
  }
};

onBeforeMount(fetchCountries);
</script>
<template lang="">
  <the-section>
    <div class="positioner">
      <search-bar></search-bar>
      <filter-options></filter-options>
    </div>
    <template #countries>
      <ul v-if="countries.length" class="grid">
        <country-cards
          v-for="country in countries"
          :key="country.name.common"
          :country-name="country.name.common"
          :img-link="country.flags.png"
          :region="country.region"
          :capital="country.capital ? country.capital[0] : 'No capital city'"
          :population="country.population"
        ></country-cards>
      </ul>
    </template>
  </the-section>
</template>
<style lang="css">
.positioner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.grid {
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 48px;
}
</style>
