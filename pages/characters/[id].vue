<script setup lang="ts">
const route = useRoute()
interface Character {
  id: number
  name: string
  status: string
  species: string
}
// const { data, pending } = await useFetch<Character>(() => `https://rickandmortyapi.com/api/character/${route.params.id}`, {
//   key: `character-${route.params.id}`,
// })
// to NIE działa
// const { data, pending } = await useFetch<Character>(() => `https://rickandmortyapi.com/api/character/${route.params.id}`)

// to też działa
const { data, pending } = await useAsyncData<Character>(
  `character-${route.params.id}`,
  () => $fetch(`https://rickandmortyapi.com/api/character/${route.params.id}`)
)
</script>

<template>
  <div>
    <div v-if="pending">loading</div>

    <div v-else>
     {{ data.name }}
     {{ data.status }}
    </div>
  </div>
</template>
