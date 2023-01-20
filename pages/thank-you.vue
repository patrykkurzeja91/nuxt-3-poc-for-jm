<script lang="ts" setup>
import type { IEvent } from '@/types'
const event = useEvent()

definePageMeta({
  key: 'thank-you',
  name: 'Thank You',
})

useHead({
  title: 'Thank You for Payment',
})

const { data } = await useAsyncData<IEvent>('event', () =>
  $fetch(import.meta.env.VITE_API_URL + `/event`)
)
if (data.value !== null) {
  event.value = data.value
}
const options = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
}
const eventDate = computed(() => new Date(event.value.ticket_sales_from))
const formatedEventDate = computed(() =>
  eventDate.value.toLocaleDateString(undefined, options)
)
const eventPlace = computed(() => event.value.city + ', ' + event.value.street)
const options1 = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  timeZone: 'UTC',
}
const dateTimeFormat2 = new Intl.DateTimeFormat('en-GB', options1)
console.log(dateTimeFormat2.format(eventDate.value))
</script>
<template>
  <section
    class="thank-you-page relative flex items-center justify-center overflow-x-hidden"
  >
    <div class="container mx-auto px-5 py-48">
      <div class="mb-20 flex w-full flex-col text-center">
        <h1 class="mb-16 text-4xl">
          Thank you for registering your business at the Beauty Kingdom Awards.
        </h1>
        <p class="mx-auto max-w-3xl text-2xl">
          Your business will be assessed by our committee, and if you become a
          FINALIST, we will invite you to the Gala Dinner on
          <span class="text-dark-golden">{{ formatedEventDate }}</span> in
          <span class="text-dark-golden">{{ eventPlace }}</span
          >. Please feel free to contact us if you have any questions. We wish
          you good luck. Beauty Kingdom Awards team
          {{ event.ticket_sales_from }}
        </p>
      </div>
      <div class="flex justify-center">
        <nuxt-link
          class="mx-auto rounded border-0 bg-royal-blue py-2 px-8 text-lg text-white hover:bg-yale-blue focus:outline-none"
          to="/"
        >
          Go back to homepage
        </nuxt-link>
      </div>
    </div>
  </section>
</template>
