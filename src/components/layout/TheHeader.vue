<script setup>
import { useRoute } from "vue-router";
import { computed, toRefs, ref, watch } from "vue";

const props = defineProps({
  theme: {
    type: Boolean,
    required: true,
  },
});
const route = useRoute();
const isCountryPage = ref(false);
const emits = defineEmits(["change-theme"]);
const { theme } = toRefs(props);
const themeTxt = computed(() => {
  if (!theme.value) return "light";
  return "dark";
});

watch(route, () => {
  if (route.params.countryName) {
    isCountryPage.value = true;
  } else {
    isCountryPage.value = false;
  }
});
</script>
<template lang="">
  <header class="header">
    <div class="header__inner">
      <h1 v-if="!isCountryPage" class="header__title">Where in the world?</h1>
      <p v-else class="header__title">Where in the world?</p>
      <button
        title="Toggles light and dark theme"
        class="btn__theme"
        :aria-label="themeTxt"
        aria-live="polite"
        @click="emits('change-theme')"
      >
        <span class="icon-wrapper">
          <transition name="theme" mode="out-in">
            <svg
              v-if="theme"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="moon-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
            <svg
              v-else
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="sun-icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          </transition>
        </span>
        <transition name="theme" mode="out-in">
          <span v-if="theme" class="txt__theme">Light Mode</span>
          <span v-else class="txt__theme">Dark Mode</span>
        </transition>
      </button>
    </div>
  </header>
</template>
<style scoped>
.header {
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary);
}
.header__inner {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
}

.header__title {
  font-size: 2.2rem;
  font-weight: 800;
}

.btn__theme {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
  gap: 12px;
  transition: transform 0.2s ease-in;
  color: var(--text-primary);
}

.btn__theme:hover {
  transform: scale(1.05);
}

.icon-wrapper {
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.moon-icon,
.sun-icon {
  stroke: var(--text-primary);
}

.txt__theme {
  font-size: 1.6rem;
  font-family: var(--font-primary);
}

.theme-enter-active {
  animation: fade 0.2s ease-out;
}

.theme-leave-active {
  animation: fade 0.2s ease-in reverse;
}

@media (min-width: 481px) {
  .header__inner {
    flex-direction: row;
    gap: 0;
    justify-content: space-between;
    padding: 0 42px;
  }
}
</style>
