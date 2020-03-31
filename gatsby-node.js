const path = require("path")
const { GraphQLString } = require("gatsby/graphql")

const postPerPage = 3

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
            image {
              fluid {
                src
              }
            }
          }
        }
      }
    }
  `)

  // console.log("=============================")
  // console.log(res.data.allContentfulBlogContent.edges.length)

  const pages = Math.ceil(
    data.allContentfulBlogContent.totalCount / postPerPage
  )

  Array.from({ length: pages }).forEach((_, i) => {
    createPage({
      path: `page/${i + 1}`,
      component: template.blog,
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        currentPage: i + 1,
        totalCount: data.allContentfulBlogContent.totalCount,
        postPerPage,
        totalPages: pages,
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

exports.setFieldsOnGraphQLNodeType = ({ type }) => {
  if (type.name === `File`) {
    return {
      newField: {
        type: GraphQLString,
        args: {
          myArgument: {
            type: GraphQLString,
          },
        },
        resolve: (source, fieldArgs) => {
          return `Id of this node is ${source.id}.
                  Field was called with argument: ${fieldArgs.myArgument}`
        },
      },
    }
  }

  // by default return empty object
  return {}
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  // Data can come from anywhere, but for now create it manually
  const myData = {
    postPerPage: postPerPage,
  }

  const nodeContent = JSON.stringify(myData)

  const nodeMeta = {
    id: createNodeId(`my-data-${myData.key}`),
    parent: null,
    children: [],
    internal: {
      type: `BlogNodeData`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(myData),
    },
  }

  const node = Object.assign({}, myData, nodeMeta)
  createNode(node)
}
