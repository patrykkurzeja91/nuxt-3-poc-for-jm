<template>
  <div>
    <div
      data-aos-duration="400"
      data-aos="fade-in"
      class="line mx-auto flex flex-col items-center border-dark-golden py-8 text-center md:w-1/3 md:border-t-0 md:pb-20"
    >
      <img
        width="80"
        height="80"
        src="@/assets/icons/success.svg"
        class="mb-10 w-20"
        alt="hands with stars"
      />
      <p class="text-lg">
        Show your company and our committee will evaluate your actions and
        perhaps you will become the leader of your category.
      </p>
    </div>

    <div class="relative py-6 font-bold">
      <div class="mx-auto flex flex-col justify-center pb-10 md:w-2/3">
        <h2 class="heading--5 text-center">
          We know that the path to success is not easy, so we invite you to
          apply to the selected category.
        </h2>
      </div>
    </div>
    <div class="mb-20 grid w-full gap-y-6 gap-x-8 md:grid-cols-2 md:gap-y-8">
      <div class="col-span-1">
        <div class="grid gap-y-6 md:gap-y-8">
          <div v-for="(category, index) in firstFourCategories" :key="index">
            <div data-aos-duration="400" data-aos="fade-right" class="card">
              <p class="text-xl font-bold uppercase text-dark-golden">
                {{ category.name }}
              </p>
              <p class="mb-0">{{ category.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1">
        <div class="grid gap-y-6 md:gap-y-8">
          <div v-for="(category, index) in lastFourCategories" :key="index">
            <div data-aos-duration="400" data-aos="fade-left" class="card">
              <p class="text-xl font-bold uppercase text-dark-golden">
                {{ category.name }}
              </p>
              <p class="mb-0">{{ category.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center">
      <nuxt-link
        to="/categories"
        class="inline-flex items-center justify-center rounded-md border border-royal-blue bg-royal-blue px-10 py-2.5 text-center text-base font-medium uppercase text-white hover:bg-yale-blue"
        type="submit"
      >
        See all categories
        <nuxt-icon name="arrow-right" filled class="arrow-icon ml-3" />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Category } from '@/types'
interface Props {
  categories: Category[]
}
const props = defineProps<Props>()
const sortedCategories = computed(() => {
  const aa = props.categories.slice()
  return aa.sort((a, b) => a.name.localeCompare(b.name))
})

const firstFourCategories = computed(() => sortedCategories.value.slice(0, 4))
const lastFourCategories = computed(() => sortedCategories.value.slice(4, 8))
</script>

<style lang="css" scoped>
.card {
  @apply relative flex h-full flex-col items-start justify-start rounded-md bg-white/95 py-14 px-12 drop-shadow-xl md:py-14 md:px-16;
}

.arrow-icon {
  stroke-width: 2px;
  width: 24px;
  height: 24px;
}
.line {
  position: relative;
}
/* .line::after {
  @screen md {
    content: '';
    background-color: var(--dark-golden);
    width: 3px;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 200%;
  }
} */
</style>
