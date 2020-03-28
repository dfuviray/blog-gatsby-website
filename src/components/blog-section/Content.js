import React from "react"

const Content = ({ content }) => {
  const limit = 145
  const contentArray = []
  content.split("").map(content => {
    if (contentArray.length <= limit) contentArray.push(content)
  })
  const contentSnippet = contentArray.join("")
  console.log(contentSnippet)
  return <div className="content">{`${contentSnippet} ...`}</div>
}

export default Content
