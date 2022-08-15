import posts from '../../../assets/data/posts.json'

export default defineEventHandler(async (event) => {
  return posts.find(i => i.slug === event.context.params.slug)
})
