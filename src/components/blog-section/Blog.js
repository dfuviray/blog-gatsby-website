import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { BlogWrapper } from "../blog-section/blogWrapper"
import Content from "./Content"
import Pagination from "../pagination/Pagination"

const Blog = () => {
  const {
    allContentfulBlogContent: { edges: data, totalCount },
  } = useStaticQuery(
    graphql`
      query BlogHomepageQuery {
        allContentfulBlogContent(
          skip: 0
          limit: 3
          sort: { order: DESC, fields: date }
        ) {
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
    `
  )

  return (
    <BlogWrapper>
      <div className="col col-md-8 mx-auto">
        <Pagination totalCount={totalCount} currentPage={1} />
      </div>
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
        </div>
      ))}
    </BlogWrapper>
  )
}

export default Blog
