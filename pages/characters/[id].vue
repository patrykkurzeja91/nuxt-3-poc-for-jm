<script setup>
const route = useRoute()
console.log(route.params.id)
const { data, pending } = await useFetch(() => `https://rickandmortyapi.com/api/character/${route.params.id}`)
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
