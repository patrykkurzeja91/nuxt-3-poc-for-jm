<script lang="ts" setup>
import type { IEvent } from '@/types'
const event = useEvent()

definePageMeta({
  key: 'home',
  name: 'Home',
})

useHead({
  title: 'Home',
})

const { data } = await useAsyncData<IEvent>('event', () =>
  $fetch(import.meta.env.VITE_API_URL + `/event`),
)
if (data.value !== null) {
  event.value = data.value
}
</script>
<template>
  <div>
    <PageHero />
    <WhatWhenWhereSection />
    <LinkBlock />
    <Lottery />
    <NewsletterForm />
  </div>
</template>
