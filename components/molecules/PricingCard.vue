<script lang="ts" setup>
interface Props {
  bundle: string
  price: string
  popular: 'popular' | 'bestSeller' | ''
  benefitList: string[]
}

defineProps<Props>()
</script>

<template>
  <div
    :class="{
      'border-dark-golden': popular === 'bestSeller',
      'border-royal-blue': popular === 'popular',
      'border-light-grayish-blue-100': popular === '',
    }"
    class="relative flex h-full flex-col overflow-hidden rounded-lg border-2 bg-white/70 px-6 pt-10 pb-6 drop-shadow-2xl backdrop-blur-md"
  >
    <span
      v-if="popular"
      :class="{
        'bg-dark-golden': popular === 'bestSeller',
        'bg-royal-blue': popular === 'popular',
      }"
      class="absolute right-0 top-0 rounded-bl px-3 py-1 text-xs tracking-widest text-white"
    >
      {{ popular === 'popular' ? 'POPULAR' : 'BEST SELLER' }}</span
    >
    <h2 class="title-font mb-4 text-sm font-medium tracking-widest">
      {{ bundle }}
    </h2>
    <h1
      class="mb-4 flex items-center border-b border-light-grayish-blue-100 pb-8 text-5xl leading-none text-gray-900"
    >
      <span>{{ price }} </span>
    </h1>
    <div class="mb-4">
      <p
        v-for="(item, index) in benefitList"
        :key="index"
        class="mb-3 flex items-start text-gray-600"
      >
        <span
          class="mr-3 mt-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-light-grayish-blue-500 text-white"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2.5"
            class="h-3 w-3"
            viewBox="0 0 24 24"
          >
            <path d="M20 6L9 17l-5-5"></path>
          </svg> </span
        >{{ item }}
      </p>
    </div>

    <nuxt-link
      :class="{
        'bg-dark-golden hover:bg-dark-orange': popular === 'bestSeller',
        'bg-royal-blue hover:bg-yale-blue': popular === 'popular' || '',
      }"
      class="mt-auto flex w-full items-center rounded border-0 py-2 px-4 text-white focus:outline-none"
      to="/contact"
    >
      Contact us
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        class="ml-auto h-4 w-4"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </nuxt-link>
    <!-- <p class="mt-3 text-xs text-light-grayish-blue-800">
      Literally you probably haven't heard of them jean shorts.
    </p> -->
  </div>
</template>
