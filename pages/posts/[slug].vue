<script setup>
const route = useRoute()
// const readKey = 'Xz0kw63T52Oyhr4zlqscL5glyFVLdAFFLe9MQHI5UZPSlp4Ssk'
// const API_URL= 'https://api.cosmicjs.com/v2/buckets/nuxt-3-test-production/objects'
// const aa = decodeURIComponent('%7B%22type%22%3A%22blog-posts%22%2C%22slug%22%3A%22awesome%22%7D')
// const { data, error, pending } = await useFetch(`${API_URL}?read_key=${readKey}&query=%7B%22type%22%3A%22blog-posts%22%2C%22slug%22%3A%22${route.params.slug}%22%7D`,{
//   key: route.params.slug
// })
// const { data, error, pending } = await useFetch(`${API_URL}?read_key=${readKey}&query=%7B%22slug%22%3A%20%22${route.params.slug}%22%7D`,{
//   key: route.params.slug
// })
// const { data, error, pending } = await useFetch(`${API_URL}/${route.params.slug}?read_key=${readKey}`,{
//   key: route.params.slug
// })

const { data } = await useFetch(`/api/posts/${route.params.slug}`, {key: route.params.slug})

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
      <h1 class="text-2xl mb-10">
       title: {{ data.title }}
      </h1>
      <div class="text-lg prose bg-slate-100 p-20" v-html="data.content"/>
    </div>
  </div>
</template>
