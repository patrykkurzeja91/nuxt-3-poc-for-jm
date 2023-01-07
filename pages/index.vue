<script lang="ts" setup>
import type { IEvent } from '@/types'
const event = useEvent()

definePageMeta({
  key: 'home',
  name: 'Home',
})

const { data } = await useAsyncData<IEvent>('event', () =>
  $fetch('https://api.beautykingdomawards.co.uk' + `/event`)
)
if (data.value !== null) {
  event.value = data.value
}
</script>
<template>
  <div>
    <PageHero />
    <OrganismsWhatWhenWhereSection />
    <MoleculesLinkBlock />
    <MoleculesLottery />
    <NewsletterForm />
  </div>
</template>
