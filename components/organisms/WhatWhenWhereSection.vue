<script lang="ts" setup>
import { Category } from '~~/types'
const categories = ref()
const { data, pending } = await useFetch<{ categories: Category[] }>(
  () => import.meta.env.VITE_API_URL + `/categories/top`
)
categories.value = data.value?.categories
const event = useEvent()
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}
const eventDate = computed(() => new Date(event.value.event_date))
const formatedEventDate = computed(() =>
  eventDate.value.toLocaleDateString('en-US', options)
)
</script>

<template>
  <section class="bg-light-grayish-blue-100">
    <div class="container mx-auto max-w-screen-lg px-5 py-24">
      <div class="mb-20 text-center">
        <h2 class="mb-4 text-dark-golden">What. When. Where.</h2>
      </div>
      <div class="subheading relative py-12 font-bold">
        <h5 class="relative inline-flex">BEAUTY AWARDS KEY DATES</h5>
      </div>
      <MoleculesKeyDates class="pb-20" />
      <div
        class="card relative z-10 mb-20 flex flex-col rounded-md border-2 border-dark-golden bg-white py-8 px-12 md:flex-row"
      >
        <div class="icon-left absolute flex items-center justify-center">
          <nuxt-icon name="dress2" filled class="h-20 w-20 text-dark-golden" />
        </div>
        <div class="order-3 flex flex-col px-0 pt-28 md:px-28 md:pt-0">
          <p class="mb-6 text-center text-2xl font-semibold">
            The final gala will take place on {{ formatedEventDate }}.
          </p>
          <p class="text-center text-xl">
            Black Tie event, red carpet, 3-course dinner and some entertainment,
            as well as an award ceremony for the best companies in the beauty
            industry.
          </p>
        </div>
        <div class="icon-right absolute flex items-center justify-center">
          <nuxt-icon name="men-suit" filled class="h-20 w-20" />
        </div>
      </div>

      <!-- <MoleculesWayToSuccess
        v-if="!pending"
        class="pb-20"
        :categories="categories"
      /> -->
    </div>
  </section>
  <section class="bg-white">
    <div class="container mx-auto max-w-screen-lg px-5 py-24">
      <MoleculesWayToSuccess v-if="!pending" :categories="categories" />
    </div>
  </section>
  <section class="bg-light-grayish-blue-100">
    <div class="container mx-auto max-w-screen-lg px-5 py-24">
      <div class="relative pb-12 font-bold">
        <h5 class="relative inline-flex">TAKE PART IN LOTTERY</h5>
      </div>
      <div class="flex flex-col md:flex-row">
        <div
          class="mx-auto mb-12 w-3/4 overflow-hidden rounded-md md:mr-12 md:mb-0 md:w-1/4"
        >
          <img
            src="https://picsum.photos/300/320"
            class="object-fit h-auto w-full"
            alt=""
          />
        </div>
        <div class="md:w-3/4">
          <p class="mb-6 text-lg font-bold">
            We have been supporting charity campaigns for years, because we know
            that there are people or institutions that need our support.
          </p>
          <p>
            During the Final Gala there will be a lottery and the income will go
            to Little - Feet Charity, which helps children in Naples. (tu jakby
            co mogę więcej dodać informacji o tej fundacji, mam też logo i
            zdjęcia z nepalu jakby trzeba było)
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.icon svg {
  fill: var(--dark-golden);
}

.icon-left,
.icon-right {
  top: 26px;

  @screen md {
    top: 50%;
    transform: translate(0, -50%);
  }
}
.icon-left {
  left: 50%;

  @screen md {
    left: 36px;
  }
}
.icon-right {
  right: 50%;

  @screen md {
    right: 36px;
  }
}
.card {
  /* box-shadow: 0px 5px 0 0 var(--silver); */
}
</style>
