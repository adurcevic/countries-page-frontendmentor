<script setup>
import { useDark, useToggle } from "@vueuse/core";
import TheHeader from "./components/layout/TheHeader.vue";
import { onBeforeMount, onUnmounted } from "vue";
import { useCountryStore } from "./stores/CountryStore";

const store = useCountryStore();
const { fetchCountries } = store;

onBeforeMount(fetchCountries);
onUnmounted(localStorage.removeItem("search-input"));

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
