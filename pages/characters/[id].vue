<script setup>
const route = useRoute()
const { data } = await useFetch( () => `https://rickandmortyapi.com/api/character/${route.params.id}`)

// to działa
// const data = ref({})
// onMounted(async () => {
//   data.value = await $fetch(`https://rickandmortyapi.com/api/character/${route.params.id}`)
// })
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
