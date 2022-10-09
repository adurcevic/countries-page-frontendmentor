<script setup>
import { storeToRefs } from "pinia";
import { useCountryStore } from "../../stores/CountryStore";
import { computed } from "vue";
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  country: {
    type: Object,
    required: true,
  },
});

const store = useCountryStore();
const { borderCountriesName } = storeToRefs(store);

const arrOfCurrencies = computed(
  () => props.country.currencies && Object.values(props.country.currencies)
);
const arrOfLang = computed(
  () => props.country.languages && Object.values(props.country.languages)
);
const countryCapital = computed(() =>
  props.country.capital ? props.country.capital[0] : "No capital city"
);
</script>
<template>
  <div class="country__section">
    <figure>
      <img :src="country.flags.png" />
    </figure>
    <div class="country__content">
      <div class="country__content-inner">
        <h2 class="content__title">{{ country.name.common }}</h2>
        <div class="content__positioner">
          <div class="content__block-primary">
            <p v-if="country.name.nativeName" class="content__property">
              Native Name:
              <span class="content__text">{{
                country.name.nativeName[Object.keys(country.name.nativeName)[0]]
                  .official
              }}</span>
            </p>
            <p class="content__property">
              Population:
              <span class="content__text">{{
                country.population.toLocaleString()
              }}</span>
            </p>
            <p class="content__property">
              Region: <span class="content__text">{{ country.region }}</span>
            </p>
            <p v-if="country.subregion" class="content__property">
              Sub Region:
              <span class="content__text">{{ country.subregion }}</span>
            </p>
            <p class="content__property">
              Capital:
              <span class="content__text">{{ countryCapital }}</span>
            </p>
          </div>
          <div class="content__block-secondary">
            <p v-if="country.tld" class="content__property">
              Top Level Domain:
              <span class="content__text">{{ country.tld[0] }}</span>
            </p>
            <p v-if="country.currencies" class="content__property">
              Currencies:
              <span
                v-for="curr in arrOfCurrencies"
                :key="curr.name"
                class="content__text"
              >
                {{ curr.name }}
              </span>
            </p>
            <p v-if="country.languages" class="content__property lang-items">
              Languages:
              <span v-for="lang in arrOfLang" :key="lang" class="content__text">
                {{ lang }}
              </span>
            </p>
          </div>
        </div>
        <div v-if="borderCountriesName.length" class="content__footer">
          <p class="content__property border">Border Countries:</p>
          <span
            v-for="borderCountry in borderCountriesName"
            :key="borderCountry"
          >
            <router-link
              :to="
                '/countries/' + borderCountry.toLowerCase().replaceAll(' ', '')
              "
            >
              {{ borderCountry }}
            </router-link>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.country__section {
  margin-top: 32px;
  width: 100%;
  max-width: 725px;
  margin: 32px auto;
}

figure {
  margin-bottom: 32px;
  width: 100%;
  max-height: 380px;
}

img {
  width: 100%;
  height: 100%;
  max-height: 380px;
  object-fit: cover;
}

.country__content-inner {
  display: grid;
  gap: 42px;
}

.content__title {
  font-size: 3.2rem;
  font-weight: 800;
}

.content__positioner {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 24px;
}

.content__block-primary,
.content__block-secondary {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.content__property {
  font-size: 1.8rem;
  font-weight: 600;
}

.content__text {
  font-size: 1.6rem;
  font-weight: 300;
}

.lang-items {
  display: flex;
  align-items: center;
  gap: 4px;
  flex-wrap: wrap;
}

.content__footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 14px;
  margin-bottom: 48px;
}

.content__footer span a {
  font-size: 1.6rem;
  padding: 4px 16px;
  box-shadow: 0 2px 4px 2px var(--border-color);
  border-radius: 4px;
  background-color: var(--color-primary);
}

@media (min-width: 725px) {
  .content__positioner {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (min-width: 1200px) {
  .country__section {
    margin: 0;
    margin-top: 64px;
    display: flex;
    gap: 64px;
    max-width: none;
  }

  figure {
    max-width: 500px;
    margin-bottom: 0;
  }

  .country__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .content__footer {
    margin-bottom: 0;
  }
}
</style>
