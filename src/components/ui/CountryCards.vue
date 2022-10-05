<script setup>
const props = defineProps({
  imgLink: {
    required: true,
    type: String,
  },
  population: {
    required: true,
    type: Number,
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
  <li class="card">
    <figure class="card__figure">
      <img class="card__img" alt="" :src="props.imgLink" />
    </figure>
    <div class="card__content">
      <h3 class="card__title">{{ props.countryName }}</h3>
      <ul class="card__description">
        <li>
          <span class="property-title">Population: </span> {{ props.population
          }}<span></span>
        </li>
        <li>
          <span class="property-title">Region: </span
          ><span>{{ props.region }}</span>
        </li>
        <li>
          <span class="property-title">Capital: </span
          ><span> {{ props.capital }}</span>
        </li>
      </ul>
    </div>
  </li>
</template>
<style>
.card {
  max-width: 300px;
  display: flex;
  flex-direction: column;
  background-color: var(--color-primary);
  box-shadow: 0 1px 2px 1px var(--border-color);
  border-radius: 4px;
  overflow: hidden;
}

.card__figure {
  max-width: 300px;
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
