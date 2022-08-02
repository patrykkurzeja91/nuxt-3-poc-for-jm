<script setup>
const route = useRoute()
const readKey = 'Xz0kw63T52Oyhr4zlqscL5glyFVLdAFFLe9MQHI5UZPSlp4Ssk'
const API_URL= 'https://api.cosmicjs.com/v2/buckets/nuxt-3-test-production/objects'
const aa = decodeURIComponent('%7B%22type%22%3A%22blog-posts%22%2C%22slug%22%3A%22awesome%22%7D')
console.log(route.params.slug)
const { data, error, pending } = await useFetch(`${API_URL}?read_key=${readKey}&query=%7B%22type%22%3A%22blog-posts%22%2C%22slug%22%3A%22${route.params.slug}%22%7D`)

console.log(data.value);
</script>

<template>
  <div>
    <div v-if="pending">
      LOADING...
    </div>
    <div v-else-if="error">
      ERROR {{error}}
    </div>
    <div v-else>
    {{data}}
      <!-- <h1 class="text-2xl">
       title: {{ data.object.title }}
      </h1>
      <div class="text-lg" v-html="data.object.content"/> -->
    </div>
  </div>
</template>
