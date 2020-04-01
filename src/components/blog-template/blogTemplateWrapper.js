import styled from "styled-components"

export const BlogTemplateWrapper = styled.section`
  padding-top: 3rem !important;

  .post {
    margin-bottom: 4rem;
  }

  .post a,
  .post a:link,
  .post a:visited {
    color: #011627;
    transition: color 0.3s ease-in;
  }

  .post a:hover {
    text-decoration: none;
    color: #2081c3;
  }

  .post .author {
    font-size: 16px;
    color: #011627;
    opacity: 65%;
  }

  .post .content {
    opacity: 85%;
    line-height: 2;
    margin-bottom: 2.5rem;
    text-align: justify;
  }
`
