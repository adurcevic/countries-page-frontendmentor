<script setup>
import CountryContent from "../components/ui/CountryContent.vue";
import { useCountryStore } from "../stores/CountryStore";
import { storeToRefs } from "pinia";
import { useRoute, useRouter } from "vue-router";
import { ref, watch } from "vue";

const route = useRoute();
const router = useRouter();
const country = ref(null);
const param = ref(route.params.countryName);

const store = useCountryStore();
const { areCountriesFetched } = storeToRefs(store);
const { findCountry, searchBorderCountries } = store;

const initCountryPage = () => {
  country.value = findCountry(route.params.countryName);
  country.value && searchBorderCountries(country.value.borders);
  param.value = route.params.countryName;
};

if (areCountriesFetched.value) {
  initCountryPage();
} else {
  watch(areCountriesFetched, () => {
    initCountryPage();
  });
}

watch(route, () => {
  initCountryPage();
});
</script>
<template lang="">
  <the-main>
    <the-section>
      <div>
        <button class="btn-return" @click="router.go(-1)">
          <svg
            aria-hidden="true"
            focusable="false"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M13.28 3.97a.75.75 0 010 1.06L6.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0zm6 0a.75.75 0 010 1.06L12.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
              clip-rule="evenodd"
            />
          </svg>
          <span>Back</span>
        </button>
      </div>
      <template #content>
        <country-content v-if="country" :country="country" />
        <div v-if="areCountriesFetched && !country" class="error-txt">
          <wrong-request text="There is no country with name" :result="param" />
        </div>
        <circle-spinner v-if="!areCountriesFetched" />
      </template>
    </the-section>
  </the-main>
</template>
<style scoped>
.error-txt {
  margin-top: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-return {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  background-color: var(--color-primary);
  min-width: 130px;
  box-shadow: 0 2px 4px 2px var(--border-color);
  padding: 6px 0;
  border-radius: 4px;
}

.btn-return svg {
  height: 24px;
  width: 24px;
}

.btn-return span {
  font-size: 1.6rem;
  margin-left: 6px;
}
</style>
