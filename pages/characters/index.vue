<script setup>
const { data } = await useFetch('https://rickandmortyapi.com/api/character?page=1')

// const results = computed(() => data.value.results)
</script>

<template>
  <div>
    <NuxtLink
      v-for="character in data.results"
      :key="character.id"
      :to="`/characters/${character.id}`"
    >
     <h3>
     {{character.name}}
     </h3>
     <p>
     {{character.status}}
     </p>
     <p>
     {{character.species}}
     </p>
    </NuxtLink>
  </div>
</template>
