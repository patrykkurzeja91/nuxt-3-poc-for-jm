<script setup>
const route = useRoute()

// const { data, pending, error } = await useFetch(
//   () => (`https://api.nuxtjs.dev/mountains/${route.params.slug}`)
// )

const { data, pending } = await useAsyncData(
  `mountain-${route.params.slug}`,
  () => $fetch(`https://api.nuxtjs.dev/mountains/${route.params.slug}`)
)
</script>

<template>
  <div>
  {{route.params}}
    <div v-if="pending">loading</div>
    <div v-else>
    {{data}}
    </div>
    <!-- <div v-else>
     {{ data.name }}
     {{ data.status }}
    </div> -->
  </div>
</template>
