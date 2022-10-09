<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
});
</script>
<template lang="">
  <p class="not-found">{{ text }} "{{ result }}"</p>
</template>
<style scoped>
.not-found {
  font-size: 1.8rem;
  color: var(--text-primary);
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
