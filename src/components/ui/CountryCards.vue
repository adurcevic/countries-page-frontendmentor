<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  imgLink: {
    required: true,
    type: String,
  },
  population: {
    required: true,
    type: String,
  },
  capital: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    required: true,
  },
  countryName: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <router-link
    :to="'/countries/' + props.countryName.toLowerCase().replaceAll(' ', '')"
  >
    <li class="card">
      <figure class="card__figure">
        <img class="card__img" alt="" :src="imgLink" />
      </figure>
      <div class="card__content">
        <div class="card__title">{{ countryName }}</div>
        <ul class="card__description">
          <li>
            <span class="property-title">Population: </span
            ><span> {{ population }}</span>
          </li>
          <li>
            <span class="property-title">Region: </span
            ><span>{{ region }}</span>
          </li>
          <li>
            <span class="property-title">Capital: </span
            ><span> {{ capital }}</span>
          </li>
        </ul>
      </div>
    </li>
  </router-link>
</template>
<style scoped>
a {
  display: grid;
}

.card {
  max-width: 350px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  box-shadow: 0 1px 2px 1px var(--border-color);
  border-radius: 4px;
  overflow: hidden;
}

.card__figure {
  width: 100%;
  height: 200px;
  margin-bottom: 24px;
}

.card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__title {
  padding-left: 14px;
  font-size: 2.2rem;
  font-weight: 800;
}

.card__description {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  padding: 18px 12px;
}

.property-title {
  font-size: 1.6rem;
  font-weight: 600;
}

span {
  font-size: 1.6rem;
  font-weight: 300;
}
</style>
