<script setup>
const { data } = await useFetch(() =>'https://rickandmortyapi.com/api/character?page=1')

const results = computed(() => data.value.results)
</script>

<template>
    <div>
      <div
        v-for="character in results"
        :key="character.id"
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
      </div>
    </div>
</template>
