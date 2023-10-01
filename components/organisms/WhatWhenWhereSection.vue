<script lang="ts" setup>
import { Category } from '~~/types'
const categories = ref()
const { data, pending } = await useFetch<{ categories: Category[] }>(
  () => import.meta.env.VITE_API_URL + `/categories/top`,
)
categories.value = data.value?.categories
const event = useEvent()

const { londonDate } = useDateConverter()
</script>

<template>
  <section class="relative bg-light-grayish-blue-100">
    <div class="container relative mx-auto max-w-screen-lg px-5 py-24">
      <div class="subheading relative py-12 font-bold">
        <h2 class="relative flex justify-center heading--5">
          BEAUTY AWARDS KEY DATES
        </h2>
      </div>
      <KeyDates class="pb-20" />
      <div
        class="card relative my-10 flex flex-col overflow-hidden rounded-md border-2 border-dark-golden bg-white py-8 px-12 md:flex-row"
      >
        <div class="icon-left absolute flex items-center justify-center">
          <nuxt-icon name="dress2" filled class="h-20 w-20 text-dark-golden" />
        </div>
        <div class="order-3 flex flex-col px-0 pt-28 md:px-28 md:pt-0">
          <p class="mb-6 text-center text-2xl font-semibold">
            The final gala will take place on
            {{ londonDate(event.event_date) }}.
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
    </div>
  </section>
  <section class="overflow-x-hidden bg-white">
    <div class="container mx-auto max-w-screen-lg px-5 py-24">
      <WayToSuccess v-if="!pending" :categories="categories" />
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
  transition: box-shadow 0.5s ease;
  box-shadow:
    5px 5px 0 0 rgba(179, 122, 0, 0.9),
    -5px -5px 0 0 rgba(179, 122, 0, 0.8);
}
.card:hover {
  box-shadow:
    10px 10px 0 0 rgba(179, 122, 0, 0.9),
    -10px -10px 0 0 rgba(179, 122, 0, 0.8);
}
</style>
