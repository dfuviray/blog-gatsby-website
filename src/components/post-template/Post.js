import React from "react"

import { PostWrapper } from "./postWrapper"
import Layout from "../layout"

const Post = ({ pageContext }) => {
  console.log(pageContext)
  return (
    <Layout>
      <PostWrapper>
        <div className="col col-md-8 mx-auto post">
          <h2 className="title">{pageContext.title}</h2>
          <p className="author">{pageContext.author}</p>
          {pageContext.content.json.content.map((content, index) => (
            <p className="content" key={index}>
              {content.content[0].value}
            </p>
          ))}
        </div>
      </PostWrapper>
    </Layout>
  )
}

export default Post
