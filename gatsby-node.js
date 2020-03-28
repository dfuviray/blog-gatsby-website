const path = require("path")

module.exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const blog = path.resolve(
    `${__dirname}/src/components/blog-template/BlogTemplate.js`
  )

  const { data } = await graphql(`
    query BlogTotal {
      allContentfulBlogContent {
        totalCount
        edges {
          node {
            id
          }
        }
      }
    }
  `)
  // console.log("=============================")
  // console.log(res.data.allContentfulBlogContent.edges.length)
  const postsPerPage = 2
  const pages = Math.ceil(
    data.allContentfulBlogContent.totalCount / postsPerPage
  )

  Array.from({ length: pages }).forEach((_, i) => {
    createPage({
      path: `page/${i + 1}`,
      component: blog,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
      },
    })
  })
}
