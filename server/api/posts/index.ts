// export default defineEventHandler(async() => {

//   const posts = [{
//     "slug": "awesome",
//     "title": "awesome post",
//     "content": "<p>super awesome post number 1</p>"
//   }, {
//     "slug": "other-post",
//     "title": "other post",
//     "content": "<p>other post content and some data</p><p><br></p><p><strong>test bold</strong></p><p><br></p><p><u>underscore</u></p>"
//   }, {
//     "slug": "aaa",
//     "title": "new post",
//     "content": "<p>first blog postd asdasd&nbsp;</p>"
//   }]
//   await useStorage().setItem('posts:foo', posts)
//   return posts
// })
import posts from '../../../assets/data/posts.json'
export default () => {
  return posts
}
