<script setup>
const { data } = await useFetch(()=> 'https://rickandmortyapi.com/api/character?page=1')

// const results = computed(() => data.value.results)
</script>

<template>
  <div>
    <button
      @click="$router.push(`/characters/${character.id}`)"
      v-for="character in data.results"
      :key="character.id"
      class="n-link-base p-2 border rounded border-pink-700 w-full flex mb-4 flex-col"
    >
     <span class="text-xl">
     {{character.name}}
     </span>
     <div>
     {{character.status}}
     {{character.species}}
     </div>
    </button>
  </div>
</template>
