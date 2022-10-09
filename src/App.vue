<script setup>
import { useDark, useToggle } from "@vueuse/core";
import TheHeader from "./components/layout/TheHeader.vue";
import { onBeforeMount } from "vue";
import { useCountryStore } from "./stores/CountryStore";
import { getAllCountries } from "./api/countires";

const store = useCountryStore();
const { fill } = store;

const fetchCountries = async () => {
  try {
    const res = await getAllCountries();
    fill(res);
  } catch (err) {
    console.error(err.message);
  }
};

onBeforeMount(fetchCountries);

const isDark = useDark({
  slector: "html",
  attribute: "theme",
  valueDark: "custom-dark",
});
const toggleDark = useToggle(isDark);
</script>
<template>
  <the-header :theme="isDark" @change-theme="toggleDark"></the-header>
  <router-view></router-view>
</template>

<style></style>
