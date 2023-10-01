<template>
  <div>
    <section class="relative overflow-x-hidden">
      <div class="container mx-auto px-5 pt-24 pb-10">
        <div class="mx-auto flex w-full flex-col text-center lg:w-2/3">
          <h1 class="heading--3 heading mb-16 text-dark-golden">
            The Beauty industry is one of the fastest growing industries in the
            UK
          </h1>
          <p class="mx-auto mb-6 lg:w-2/3">
            We want to appreciate the work, customer and employee care, high
            standards of work, development in the field of cosmetology and
            aesthetic medicine, which is why we have created 40 of the most
            popular categories in which we will award the statuette.
          </p>
          <p class="mx-auto lg:w-2/3">
            It doesn't matter if you run your business for a year or 20 years,
            you deserve to enter the competition and show your company.
          </p>
        </div>
      </div>
    </section>
    <BaseLoader v-if="pending" />
    <CategoryList v-else :grouped-categories="groupedCategories" />
    <div>{{ error }}</div>
  </div>
</template>
<script setup lang="ts">
useHead({
  title: 'Categories',
})
interface Category {
  id: string
  name: string
  updated_at: Date
  subcategory: 'award'
}
const categories = ref()
const { data, pending, error } = await useFetch<{ categories: Category[] }>(
  () => import.meta.env.VITE_API_URL + `/categories/all`,
)
categories.value = data.value?.categories
const { groupedCategories } = useGroupedCategories(categories.value)
</script>
