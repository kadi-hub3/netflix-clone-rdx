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
    height: 85vh;
    width: 100vw;
  }
  .container-img {
    img {
      height: 85vh;
      width: 100vw;
      z-index: 2000;
    }
  }

  .title h5 {
    position: absolute;
    bottom: 5%;
    right: 5%;
    z-index: 20;
    background: #303030;
    border: solid 2px green;
    font-size: 2rem;
    border-radius: 50%;
    width: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container-card h2,
  p {
    padding: 0;
  }
`;
