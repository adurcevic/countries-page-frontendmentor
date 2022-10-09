<script setup></script>
<template lang="">
  <div>
    <the-section>
      <div class="error__section">
        <h2>Page Not Found :(</h2>
        <router-link to="/countries">Return To Home</router-link>
      </div>
    </the-section>
  </div>
</template>
<style scoped>
.error__section {
  margin-top: 64px;
  display: grid;
  place-items: center;
  gap: 24px;
}
h2 {
  font-size: 3.2rem;
  color: var(--text-primary);
}

a {
  font-size: 1.8rem;
  color: var(--text-primary);
  padding: 8px 16px;
  border-radius: 4px;
  box-shadow: 0 2px 4px 2px var(--border-color);
  background-color: var(--color-primary);
}
</style>
