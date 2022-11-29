<template>
  <div class="py-12">
    <div class="flex flex-col md:flex-row">
      <div class="flex flex-col justify-center pb-10 md:w-2/3 md:pr-20">
        <h5 class="relative mb-10 inline-flex">
          CELEBRATE YOUR SUCCESS WITH US!
        </h5>
        <p class="mb-10">
          After many years of running salons and an academy that gives British
          qualifications to work in the beauty industry, we want to appreciate
          other businesses in the industry that stand out on the market.
        </p>
        <p>
          We know that the path to success is not easy, so we invite you to
          apply to the selected category.
        </p>
      </div>
      <div
        class="line flex flex-col items-center border-dark-golden py-8 text-center md:w-1/3 md:border-t-0 md:pb-20 md:pl-10"
      >
        <img src="@/assets/icons/success.svg" class="mb-10 w-20" alt="" />
        <h6>
          Show your company and our committee will evaluate your actions and
          perhaps you will become the leader of your category.
        </h6>
      </div>
    </div>
    <div class="rounded-md border-2 border-dark-golden py-6 px-10">
      <div class="relative py-6 font-bold">
        <h6 class="relative inline-flex">
          Check out our chosen top categories
        </h6>
      </div>
      <div class="mb-10 grid gap-y-3 gap-x-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="w-full"
        >
          <div
            class="card relative flex h-full flex-col items-start justify-start rounded-md border border-light-grayish-blue-300 py-4 px-6"
          >
            <p class="text-lg font-bold">{{ category.name }}</p>
            <p class="">{{ category.description }}</p>
          </div>
        </div>
      </div>
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
defineProps<Props>()
</script>

<style lang="css" scoped>
.arrow-icon {
  stroke-width: 2px;
  width: 24px;
  height: 24px;
}
.line {
  position: relative;
}
.line::after {
  @screen md {
    content: '';
    background-color: var(--dark-golden);
    width: 3px;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 200%;
  }
}
</style>
