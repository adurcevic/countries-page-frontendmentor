<script></script>
<template>
  <main class="main">
    <section class="section">
      <div class="section__inner">
        <slot></slot>
        <slot name="countries"></slot>
      </div>
    </section>
  </main>
</template>
<style lang="css">
.section {
  background-color: var(--background-primary);
  width: 100%;
  height: 500px;
  box-shadow: 0 -1px 2px 1px var(--border-color);
}
</style>
