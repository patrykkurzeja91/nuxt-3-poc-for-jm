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
    <div class="bg-gray-200">
      <BaseLoader :color="'black'" />
    </div>

    <div v-if="pending">
      <BaseLoader :color="'white'" />
    </div>
    <MoleculesCategoryList v-else :grouped-categories="groupedCategories" />
    <!-- <MoleculesContentBlock1 />
    <MoleculesContentBlock3 /> -->
    <!-- <div>
      {{ groupedCategories }}
    </div>
    <div>
      {{ categories }}
    </div> -->
  </div>
</template>
<script setup lang="ts">
import BaseLoader from '../components/atoms/BaseLoader.vue'
// import axios from 'axios'
interface Category {
  id: string
  name: string
  updated_at: Date
  subcategory: 'award'
}
const { data, pending } = await useFetch<{ categories: Category[] }>(
  () => import.meta.env.VITE_API_URL + `/categories/all`
)
const categories = computed(() => data.value && data.value.categories)
// const { groupedCategories } = useGroupedCategories(data?.value?.categories)
// const { groupedCategories } = useGroupedCategories(aa.value)

// const array = ['Award', 'Top', 'Best', 'Award of the year']

const newCategoriesWithRandomSubcat = computed(() =>
  categories?.value?.map((i) => {
    return {
      ...i,
      subcat: i.subcategory,
    }
  })
)
const groupBy = (items, key) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {}
  )
const groupedCategories = computed(() => {
  if (newCategoriesWithRandomSubcat.value) {
    const groupedCategoriesObject = groupBy(
      newCategoriesWithRandomSubcat.value,
      'subcat'
    )
    return Object.entries(groupedCategoriesObject).map((e) => ({
      subcat: e[0],
      data: e[1] as { data: { id: string; name: string } },
    }))
  }
})
// const { data } = await useFetch<{ categories: Category[] }>(
//   import.meta.env.VITE_API_URL + `/categories/all`
// )
// console.log('cat from categories: ', data.value.categories)

// const { groupedCategories } = useGroupedCategories(categories.value)
</script>
