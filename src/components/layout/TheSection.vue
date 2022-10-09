<script></script>
<template>
  <section class="section">
    <div class="section__inner">
      <slot></slot>
      <slot name="content"></slot>
    </div>
  </section>
</template>
<style scoped>
.section {
  min-height: calc(100vh - 100px);
  background-color: var(--background-primary);
  width: 100%;
  box-shadow: 0 -1px 2px 1px var(--border-color);
  display: flex;
  justify-content: center;
}

.section__inner {
  padding-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
  width: 100%;
  max-width: 1400px;
}

@media (min-width: 481px) {
  .section__inner {
    padding-left: 42px;
    padding-right: 42px;
  }
}
</style>
