import type { Category } from '@/types'

export default function useGroupedCategories(categories: Category[]) {
  // const array = ['Award', 'Top', 'Best', 'Award of the year']

  const newCategoriesWithRandomSubcat = computed(() =>
    categories?.map((i) => {
      // const item = array[Math.floor(Math.random() * array.length)]
      return {
        ...i,
        subcat:
          i.subcategory === 'top' || i.subcategory === 'best'
            ? i.subcategory + ' Award'
            : i.subcategory,
      }
    })
  )

  const groupBy = (items: Category[], key: string) =>
    items.reduce(
      (result: Category, item) => ({
        ...result,
        [item[key as keyof Category]]: [
          ...(result[item[key as keyof Category] as keyof Category] || []),
          item,
        ],
      }),
      {} as Category
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
  return {
    groupedCategories,
  }
}
