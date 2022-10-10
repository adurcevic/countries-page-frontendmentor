<script setup>
import { ref } from "vue";
import { useCountryStore } from "../../stores/CountryStore";
const store = useCountryStore();

const { filterByRegion } = store;

const isDropdownVisible = ref({ active: false });

const toggleDropdown = () => {
  isDropdownVisible.value.active = !isDropdownVisible.value.active;
  console.log(isDropdownVisible.value);
};

const closeDropdown = () => {
  isDropdownVisible.value.active = false;
  console.log("trigger close");
};
</script>
<template lang="">
  <div class="filter__container" @mouseleave="closeDropdown">
    <button
      class="btn-dropdown select-region"
      aria-controls="regions"
      :aria-expanded="isDropdownVisible.active"
      @click="toggleDropdown"
    >
      <span class="filter-txt"> Filter by Region </span>
      <svg
        aria-hidden="true"
        focusable="false"
        :class="['arrow', { down: isDropdownVisible.active }]"
        width="10"
        height="6"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke="#000000"
          stroke-width="1.5"
          fill="none"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
    <div aria-hidden="true" class="spacing-div"></div>
    <transition name="region">
      <ul v-if="isDropdownVisible.active" id="regions">
        <button @click="filterByRegion('Africa', isDropdownVisible)">
          <li>Africa</li>
        </button>
        <button @click="filterByRegion('Americas', isDropdownVisible)">
          <li>America</li>
        </button>
        <button @click="filterByRegion('Asia', isDropdownVisible)">
          <li>Asia</li>
        </button>
        <button @click="filterByRegion('Europe', isDropdownVisible)">
          <li>Europe</li>
        </button>
        <button @click="filterByRegion('Oceania', isDropdownVisible)">
          <li>Oceania</li>
        </button>
      </ul>
    </transition>
  </div>
</template>
<style scoped>
.filter__container {
  width: 100%;
  max-width: 300px;
}
.spacing-div {
  position: absolute;
  height: 4px;
  width: 100%;
  max-width: 300px;
}
.select-region {
  width: 100%;
  padding: 15px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background-color: var(--color-primary);
  box-shadow: 0 1px 2px 1px var(--border-color);
  border-radius: 4px;
  font-size: 1.6rem;
}

.btn-dropdown {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  color: var(--text-primary);
  width: 100%;
  padding: 15px 24px;
  background-color: var(--color-primary);
  box-shadow: 0 1px 2px 1px var(--border-color);
  border-radius: 4px;
  font-size: 1.6rem;
}

.filter-txt {
  font-size: 1.6rem;
}

#regions {
  margin-top: 4px;
  position: absolute;
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  box-shadow: 0 1px 2px 1px var(--border-color);
  border-radius: 4px;
  font-size: 1.4rem;
}

#regions button {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.6rem;
  padding: 13px 24px;
  color: var(--text-primary);
}

#regions button:hover {
  background-color: var(--background-primary);
}

.down {
  transform: scale(-1);
}

.arrow path {
  stroke: var(--text-primary);
}

.region-enter-active {
  animation: fade-list 0.3s ease-out;
}

.region-leave-active {
  animation: fade-list 0.3s ease-in reverse;
}

@keyframes fade-list {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
