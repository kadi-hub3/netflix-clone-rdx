import styled from "styled-components";

export const SwiperStyle = styled.div`
  color: white;
  position: relative;
  background: transparent;
  h1 {
    font-size: 2.5rem;
    font-family: sans-serif;
    letter-spacing: 1.5px;
    color: rgb(229, 9, 20);
    text-align: left;
  }
  .container {
    font-family: serif;
    height: 25vh;
    width: 20vw;
  }
  .container-img {
    background: #272727;
    img {
      height: 25vh;
      width: 20vw;
      z-index: 2000;
    }
  }

  .container-card h2,
  p {
    padding: 0;
  }
`;
