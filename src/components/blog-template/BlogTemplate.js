import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../layout"
import Content from "../blog-section/Content"
import { BlogWrapper } from "../blog-section/blogWrapper"

const BlogTemplate = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <BlogWrapper>
        {data.allContentfulBlogContent.edges.map((post, index) => (
          <div key={index} className="col col-md-8 mx-auto post">
            <Link
              to={`post/${post.node.title
                .toLowerCase()
                .split(" ")
                .join("-")}`}
            >
              <h3 className="title">{post.node.title}</h3>
            </Link>
            <p className="author">{post.node.author}</p>
            <Content
              content={
                post.node.content.json.content[0].content[0].value || null
              }
            />

            {/* {post.node.content.json.content.map((content, index) => (
            <p className="content" key={index}>
              {content.content[0].value}
            </p>
          ))} */}
          </div>
        ))}
      </BlogWrapper>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPageTestQuery($skip: Int! = 0, $limit: Int!) {
    allContentfulBlogContent(
      skip: $skip
      limit: $limit
      sort: { order: DESC, fields: date }
    ) {
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
`
export default BlogTemplate
