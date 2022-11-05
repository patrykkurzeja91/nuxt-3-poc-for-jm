<template>
  <div>
    <section class="relative overflow-x-hidden">
      <div class="container mx-auto px-5 py-24">
        <div class="flex w-full flex-col text-center">
          <h1 class="heading mb-16">See our categories</h1>
          <p class="mx-auto mb-6 lg:w-2/3">
            The Beauty industry is one of the fastest growing industries in the
            UK.
          </p>
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
    <MoleculesCategoryList
      v-if="groupedCategories"
      :grouped-categories="groupedCategories"
    />
  </div>
</template>
<script setup lang="ts">
interface Category {
  id: string
  name: string
  updated_at: Date
  subcategory: 'award'
}
const { data } = await useFetch<{ categories: Category[] }>(
  () => import.meta.env.VITE_API_URL + `/categories/all`
)
const { groupedCategories } = useGroupedCategories(data?.value?.categories)
</script>
