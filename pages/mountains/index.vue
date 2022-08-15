<script setup>
const { data, pending } = await useFetch(
  () => ('https://api.nuxtjs.dev/mountains'), {
    key: 'mountains',
  }
)
</script>

<template>
  <div>
      <div v-if="pending">loading</div>
<template v-else>
    <nuxt-link
      :to="`/mountains/${mountain.slug}`"
      v-for="mountain in data"
      :key="mountain.id"
      class="n-link-base p-2 border rounded border-pink-700 w-full flex mb-4 flex-col"
    >
     <span class="text-xl">
     {{mountain.title}}
     </span>
     <div>
     {{mountain.description}}
     <!-- {{mountain.image}} -->
     </div>
    </nuxt-link>
</template>
  </div>
</template>
