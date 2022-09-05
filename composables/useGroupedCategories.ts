import type { Category } from '@/types'

export default function useGroupedCategories(categories: Category[]) {
  const array = ['Award', 'Top', 'Best', 'Award of the year']

  const newCategoriesWithRandomSubcat = computed(() =>
    unref(categories).map((i) => {
      const item = array[Math.floor(Math.random() * array.length)]
      return {
        ...i,
        subcat: item,
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
    const groupedCategoriesObject = groupBy(
      newCategoriesWithRandomSubcat.value,
      'subcat'
    )
    return Object.entries(groupedCategoriesObject).map((e) => ({
      subcat: e[0],
      data: e[1] as { data: { id: string; name: string } },
    }))
  })
  return {
    groupedCategories,
  }
}
