<script setup>
const route = useRoute()
console.log(route.params.id)
const { data } = await useFetch(`https://rickandmortyapi.com/api/character/${route.params.id}`)
</script>

<template>
  <div>
    <div>
     {{ data.name }}
     {{ data.status }}
     {{ $route.params.id }}
    </div>
  </div>
</template>
