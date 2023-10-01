<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import 'vue-multiselect/dist/vue-multiselect.css'
import './assets/css/tailwind.css'
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition:
    opacity 0.25s,
    filter 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
