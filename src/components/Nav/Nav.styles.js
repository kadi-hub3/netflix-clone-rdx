import styled from "styled-components";

export const StyledNav = styled.nav`
  height: 9vh;
  width: 100vw;
  z-index: 10;
  color: white;
  font-family: sans-serif;
  position: fixed;
  top: 0;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
  }
  .dark {
    background: #272727;
  }

  .transparent {
    background: transparent;
  }
  img {
    height: 9vh;
    width: 7vw;
    padding: 0 1rem;
  }
  .nav-items,
  ul {
    display: flex;
    // justify-content: center;
    align-items: center;
    list-style: none;

    .active {
      font-weight: bolder;
    }
    a {
      padding: 0 1rem;
      text-transform: uppercase;
      border: none;
      cursor: pointer;
      text-decoration: none;
      color: white;
      letter-spacing: 1px;
      font-size: 1.2rem;
      text-transform: capitalize;
    }
  }

  .nav-items h3 {
    display: none;

    &:hover {
    }
  }

  .search-login {
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    font-size: 1.5rem;
  }

  @media only screen and (max-width: 1024px) {
    .nav-items h3 {
      display: inline;
    }
    ul {
      display: none;
    }
    img {
      width: 100%;
    }
  }
`;
