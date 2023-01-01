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
@import url('https://fonts.googleapis.com/css2?family=Heebo&family=Martel:wght@400;700&family=Playfair+Display:wght@400;700&family=Roboto:wght@400;700&display=swap');
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s, filter 0.25s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
