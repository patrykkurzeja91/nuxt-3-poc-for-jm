<script lang="ts" setup>
import type { IEvent } from '@/types'
const event = useEvent()

const { data } = await useAsyncData<IEvent>('event', () =>
  $fetch(import.meta.env.VITE_API_URL + `/event`)
)
if (data.value !== null) {
  event.value = data.value
}
useHead({
  title: 'Become a sponsor',
})
</script>

<template>
  <section class="overflow-hidden">
    <div class="container mx-auto px-5 py-24">
      <div class="mb-20 flex w-full flex-col text-center">
        <h1 class="heading mb-16 text-dark-golden">Become a Sponsor</h1>
        <p class="mx-auto mb-4 leading-relaxed lg:w-2/3">
          Show your company and product to the best in the industry!
        </p>
        <p class="mx-auto mb-10 leading-relaxed lg:w-2/3">
          Beauty Kingdom Awards wants to support outstanding achievements and
          talents in the beauty sector. Event sponsorship ensures prestige,
          increases brand visibility, and allows you to reach new customers and
          business partners.
        </p>
        <p class="mx-auto mb-10 text-lg font-bold leading-relaxed lg:w-2/3">
          Be a part of {{ event.name }}
        </p>
        <p class="mx-auto mb-4 leading-relaxed lg:w-2/3">
          Take advantage of the packages prepared by the experienced marketing
          agency E&T Marketing Solutions, which will ensure the highest
          standards of advertising and presenting your product for the beauty
          industry.
        </p>
      </div>
      <MoleculesPricingTable />
    </div>
  </section>
</template>
