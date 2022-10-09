<script setup>
import SearchBar from "../components/ui/SearchBar.vue";
import FilterOptions from "../components/ui/FilterOptions.vue";
import CountryCards from "../components/ui/CountryCards.vue";
import { ref } from "vue";
import { useCountryStore } from "../stores/CountryStore";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const router = useRouter();
const store = useCountryStore();
const { countries } = storeToRefs(store);
const { searchCountry } = store;
const searchResult = ref("");

const handleSearch = (input) => {
  searchResult.value = input;
  searchCountry(input);
};

const goToResult = () => {
  if (countries.value.length === 1) {
    const country = countries.value[0];
    router.push(`/countries/${country.name.common}`);
  }
};

const handleClear = () => {
  searchCountry("");
};
</script>
<template>
  <the-main>
    <the-section>
      <div class="positioner">
        <search-bar
          @clear-search-result="handleClear"
          @search-item="handleSearch"
          @go-to-result="goToResult"
        ></search-bar>
        <filter-options></filter-options>
      </div>
      <template #content>
        <circle-spinner v-if="!countries" />
        <ul v-if="countries" class="grid">
          <country-cards
            v-for="country in countries"
            :key="country.name.common"
            :country-name="country.name.common"
            :img-link="country.flags.png"
            :region="country.region"
            :capital="country.capital ? country.capital[0] : 'No capital city'"
            :population="country.population.toLocaleString('en-US')"
          ></country-cards>
        </ul>
        <wrong-request
          v-if="countries && !countries.length"
          text="No result found for"
          :result="searchResult"
        ></wrong-request>
      </template>
    </the-section>
  </the-main>
</template>
<style>
.positioner {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.not-found {
  font-size: 1.8rem;
  color: var(--text-primary);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid {
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 48px;
}

@media (min-width: 581px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 900px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .positioner {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }
}

@media (min-width: 1300px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
    gap: 48px;
  }
}
</style>
