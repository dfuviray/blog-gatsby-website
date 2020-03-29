const path = require("path")

module.exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const template = {
    blog: path.resolve(
      `${__dirname}/src/components/blog-template/BlogTemplate.js`
    ),
    post: path.resolve(`${__dirname}/src/components/post-template/Post.js`),
  }

  const { data } = await graphql(`
    query BlogTotal {
      allContentfulBlogContent {
        totalCount
        edges {
          node {
            author
            title
            content {
              json
            }
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
      component: template.blog,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
      },
    })
  })

  //Post create page
  data.allContentfulBlogContent.edges.forEach(post =>
    createPage({
      path: `post/${post.node.title
        .toLowerCase()
        .split(" ")
        .join("-")}`,
      component: template.post,
      context: post.node,
    })
  )
}
