<script setup lang="ts">
interface Category {
  id: string
  name: string
  updated_at: Date
}

// const categories = ref([] as Category[])
const { data: categories } = await useFetch<{ categories: Category[] }>(
  () => import.meta.env.VITE_API_URL + `/categories/all`
)

// categories.value = categories.value.categories

// const allCategories = computed(() => categories.value.categories)

const { groupedCategories } = await useGroupedCategories(
  categories.value.categories
)
</script>

<template>
  <div>
    <section class="relative overflow-x-hidden">
      <div class="container mx-auto px-5 py-24">
        <div class="flex w-full flex-col text-center">
          <h1 class="heading mb-16">See our categories</h1>
          <p class="mx-auto lg:w-2/3">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
      </div>
    </section>
    <section
      class="relative overflow-x-hidden bg-light-grayish-blue-100 px-5 pb-24 pt-48"
    >
      <div class="custom-shape-divider-top-1663530694">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <div
        v-for="group in groupedCategories"
        :key="group.subcat"
        class="container relative mx-auto mb-16 max-w-4xl"
      >
        <!-- <div
          class="flex relative mb-8 h-36 w-full rounded-md bg-royal-blue p-4 text-white"
        > -->
        <div class="flex relative mb-8 w-full rounded-md">
          <h5 class="text-2xl text-dark-golden md:text-4xl">
            {{ group.subcat }}
          </h5>
          <!-- <div class="custom-shape-divider-bottom-1663533482">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M649.97 0L599.91 54.12 550.03 0 0 0 0 120 1200 120 1200 0 649.97 0z"
                class="shape-fill"
              ></path>
            </svg>
          </div> -->
        </div>
        <div class="z-10 grid gap-y-3 gap-x-8 md:grid-cols-2">
          <div v-for="category in group.data" :key="category.id" class="w-full">
            <div
              class="card flex relative h-full flex-col items-start justify-start rounded-md border border-light-grayish-blue-300 bg-light-grayish-blue-100 py-4 px-6 hover:bg-white/60"
            >
              <p class="text-lg">
                {{ category.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="css" scoped>
.custom-shape-divider-top-1663530694 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.custom-shape-divider-top-1663530694 svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 126px;
}

.custom-shape-divider-top-1663530694 .shape-fill {
  fill: #fff;
}
</style>
