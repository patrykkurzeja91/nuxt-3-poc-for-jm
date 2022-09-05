<script setup lang="ts">
interface Category {
  id: string
  name: string
  updated_at: Date
}

const categories = ref([] as Category[])
const { data } = await useFetch<{ categories: Category[] }>(
  () => import.meta.env.VITE_API_URL + `/categories/all`
)

categories.value = data.value.categories

const allCategories = computed(() => data.value.categories)

const { groupedCategories } = useGroupedCategories(allCategories.value)
</script>

<template>
  <section class="relative overflow-x-hidden">
    <div class="container mx-auto px-5 py-24">
      <div class="mb-20 flex w-full flex-col text-center">
        <h1 class="heading mb-16">See our categories</h1>
        <p class="mx-auto lg:w-2/3">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them.
        </p>
      </div>
      <div
        v-for="group in groupedCategories"
        :key="group.subcat"
        class="mx-auto mb-16 max-w-4xl"
      >
        <div
          class="mb-8 flex h-36 w-full rounded-md bg-royal-blue p-4 text-white"
        >
          <h5>{{ group.subcat }}</h5>
        </div>
        <div class="z-10 flex w-3/4 flex-wrap">
          <div
            v-for="category in group.data"
            :key="category.id"
            class="mb-4 w-full md:w-1/2"
          >
            <div
              class="card relative flex h-full flex-col items-start justify-start border-l-2 border-dark-golden bg-white/80 p-2"
            >
              <p class="z-10 text-xl text-gray-500">{{ category.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
