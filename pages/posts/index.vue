<script setup>
const readKey = 'Xz0kw63T52Oyhr4zlqscL5glyFVLdAFFLe9MQHI5UZPSlp4Ssk'
const API_URL= 'https://api.cosmicjs.com/v2/buckets/nuxt-3-test-production/objects'
// const { data } = await useFetch(`${API_URL}?read_key=${readKey}&limit=20&props=slug,title,content`, {
//    query: {
//       type: 'blog-posts',
//     },
// })
const { data } = await useFetch(`/api/posts`)
// const results = computed(() => data.value.results)
</script>

<template>
  <div>
  {{data.objects}}
    <nuxt-link
      v-for="post in data"
      :key="post.slug"
      :to="`/posts/${post.slug}`"
      class="p-2 border rounded border-pink-700 w-full flex mb-4 flex-col"
    >
     <span class="text-xl">
     {{post.title}}
     </span>
    </nuxt-link>
  </div>
</template>
