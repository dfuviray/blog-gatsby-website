import styled from "styled-components"

export const PostWrapper = styled.section`
  padding-top: 3rem;

  .background {
    width: 100%;
    height: 60%;
    background: linear-gradient(
        rgba(255, 255, 255, 0.8),
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.3),
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.85),
        rgba(255, 255, 255, 1)
      ),
      url(${props => props.background});

    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
  }
  .title {
    color: #011627;
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
