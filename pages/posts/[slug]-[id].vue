<script setup>

const route = useRoute()

const { data, pending, error } = await useFetch(`https://api.cosmicjs.com/v2/buckets/nuxt-3-test-production/objects/${route.params.id}?read_key=Xz0kw63T52Oyhr4zlqscL5glyFVLdAFFLe9MQHI5UZPSlp4Ssk&props=slug,title,content,id`)
</script>

<template>
  <div>
    <div v-if="pending">
      LOADING...
    </div>
    <div v-else-if="error">
      ERROR
    </div>
    <div v-else>
      <h1 class="text-2xl">
       title: {{ data.object.title }}
      </h1>
      <!-- <p class="text-lg" v-html="data.object"/> -->
    {{ data.object !== null && data.object.content }}
    {{data.object}}
    </div>
  </div>
</template>
