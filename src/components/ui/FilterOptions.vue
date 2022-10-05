<script setup>
import { ref } from "vue";

const isDropdownVisible = ref(false);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

const closeDropdown = () => {
  isDropdownVisible.value = false;
};
</script>
<template lang="">
  <div @mouseleave="closeDropdown">
    <div
      class="select-region"
      aria-controls="regions"
      :aria-extended="isDropdownVisible"
    >
      <span> Filter by region </span>
      <button class="btn-dropdown" @click="toggleDropdown">
        <svg
          aria-hidden="true"
          :class="['arrow', { down: isDropdownVisible }]"
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
    </div>
    <transition name="region">
      <ul v-if="isDropdownVisible" id="regions">
        <button>
          <li value="Africa">Africa</li>
        </button>
        <button>
          <li value="America">America</li>
        </button>
        <button>
          <li value="Asia">Asia</li>
        </button>
        <button>
          <li value="Europe">Europe</li>
        </button>
        <button>
          <li value="Oceania">Oceania</li>
        </button>
      </ul>
    </transition>
  </div>
</template>
<style>
.select-region {
  width: 200px;
  padding: 13px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  background-color: var(--color-primary);
  box-shadow: 0 1px 2px 1px var(--border-color);
  border-radius: 4px;
  font-size: 1.6rem;
  margin-bottom: 4px;
}

#regions {
  position: absolute;
  width: 200px;
  padding: 13px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: var(--color-primary);
  box-shadow: 0 1px 2px 1px var(--border-color);
  border-radius: 4px;
  font-size: 1.4rem;
}

#regions button {
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.down {
  transform: scale(-1);
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
