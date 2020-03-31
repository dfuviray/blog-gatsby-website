import styled from "styled-components"

export const BlogTemplateWrapper = styled.section`
  padding-top: 3rem;

  .post {
    margin-bottom: 4rem;
  }

  a,
  a:link,
  a:visited {
    color: #011627;
    transition: color 0.3s ease-in;
  }

  a:hover {
    text-decoration: none !important;
    color: #2081c3;
  }

  .author {
    font-size: 16px;
    color: #011627;
    opacity: 65%;
  }

  .content {
    opacity: 85%;
    line-height: 2;
    margin-bottom: 2.5rem;
    text-align: justify;
  }
`
