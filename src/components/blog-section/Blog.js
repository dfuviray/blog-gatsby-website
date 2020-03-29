import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { BlogWrapper } from "../blog-section/blogWrapper"
import Content from "./Content"

const Blog = () => {
  const {
    allContentfulBlogContent: { edges: data },
  } = useStaticQuery(graphql`
    query BlogHomepageQuery {
      allContentfulBlogContent(
        skip: 0
        limit: 2
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
  `)
  console.log(data)
  return (
    <BlogWrapper>
      {data.map((post, index) => (
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
            content={post.node.content.json.content[0].content[0].value || null}
          />

          {/* {post.node.content.json.content.map((content, index) => (
            <p className="content" key={index}>
              {content.content[0].value}
            </p>
          ))} */}
        </div>
      ))}
    </BlogWrapper>
  )
}

export default Blog
