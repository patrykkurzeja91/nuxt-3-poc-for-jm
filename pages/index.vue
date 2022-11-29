<script lang="ts" setup>
import type { IEvent } from '@/types'
const event = useEvent()

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
    <NewsletterForm />
  </div>
</template>
