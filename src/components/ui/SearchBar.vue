<script setup>
import { ref, computed } from "vue";

const refInput = ref(null);
const inputValue = ref("");

const focusInput = () => {
  refInput.value.focus();
};

const clearInput = () => {
  inputValue.value = "";
};

const ariaText = computed(() => {
  if (inputValue.value.length) return "clear input";
  return "focus input";
});
</script>
<template lang="">
  <div class="search-bar">
    <button
      class="icon__btn"
      :aria-label="ariaText"
      @click="!inputValue.length ? focusInput() : clearInput()"
    >
      <svg
        v-if="!inputValue.length"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <svg
        v-else
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <input
      ref="refInput"
      v-model="inputValue"
      class="search__input"
      type="text"
      placeholder="Search for a country..."
    />
  </div>
</template>
<style>
.search-bar {
  max-width: 350px;
  padding: 12px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background-color: var(--color-primary);
  box-shadow: 0 1px 2px 1px var(--border-color);
  border-radius: 4px;
}

.icon__btn {
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  cursor: pointer;
}

.search__input {
  border: none;
  width: 100%;
  font-size: 1.6rem;
}
</style>
