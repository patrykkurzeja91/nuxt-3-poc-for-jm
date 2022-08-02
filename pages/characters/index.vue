<script setup>
const { data } = await useFetch(()=> 'https://rickandmortyapi.com/api/character?page=1')
</script>

<template>
  <div>
  <!-- nie dziala tez z :to="`/characters/${character.id}" ani button @click=$router.push(...)-->
    <nuxt-link
      :to="{path: `/characters/${character.id}`, params: { id: character.id }}"
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
    </nuxt-link>
  </div>
</template>
