import styled from "styled-components"

export const BlogTemplateWrapper = styled.section`
  padding-top: 3rem !important;

  .post {
    margin-bottom: 4rem !important;
  }

  a,
  a:link,
  a:visited {
    color: #011627 !important;
    transition: color 0.3s ease-in !important;
  }

  a:hover {
    text-decoration: none !important;
    color: #2081c3 !important;
  }

  .author {
    font-size: 16px !important;
    color: #011627 !important;
    opacity: 65% !important;
  }

  .content {
    opacity: 85% !important;
    line-height: 2 !important;
    margin-bottom: 2.5rem !important;
    text-align: justify !important;
  }
`
