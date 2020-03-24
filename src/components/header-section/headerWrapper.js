import styled from "styled-components"

export const HeaderWrapper = styled.header`
  padding-top: 1rem;

  img {
    margin: 0;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  nav ul li {
    list-style-type: none !important;
    margin: 0;
  }

  ul {
    margin: 0;
    position: absolute;
    top: 27.5px;
    right: 1rem;
  }

  a {
    margin: 0;
  }

  @media (min-width: 768px) {
    ul {
      margin-left: 92px !important;
      position: static;
    }
    nav {
      justify-content: flex-start;
    }
  }
`
