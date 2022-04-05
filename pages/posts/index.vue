<script setup>
const { data } = await useFetch(() => 'https://api.cosmicjs.com/v2/buckets/nuxt-3-test-production/objects?pretty=true&query=%7B%22type%22%3A%22blog-posts%22%7D&read_key=Xz0kw63T52Oyhr4zlqscL5glyFVLdAFFLe9MQHI5UZPSlp4Ssk&limit=20&props=slug,title,content,id')
// https://api.cosmicjs.com/v2/buckets/nuxt-3-test-production/objects/624c88bb6449640009b5d1ab?pretty=true&read_key=Xz0kw63T52Oyhr4zlqscL5glyFVLdAFFLe9MQHI5UZPSlp4Ssk&props=slug,title,content
// const results = computed(() => data.value.results)
</script>

<template>
  <div>
    <NuxtLink
      v-for="post in data.objects"
      :key="post.slug"
            :to="`/posts/${post.id}`"
      class="p-2 border rounded border-pink-700 w-full flex mb-4 flex-col"
    >
     <span class="text-xl">
     {{post.title}}
     {{post.id}}
     </span>
     <div v-html="post.content">
     </div>
    </NuxtLink>
  </div>
</template>
