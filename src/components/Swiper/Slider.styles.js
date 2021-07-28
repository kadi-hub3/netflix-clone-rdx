import styled from "styled-components";

export const SwiperStyle = styled.div`
  width: 100vw;
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #202020;
  color: white;

  h1 {
    font-size: 2.5rem;
    font-family: sans-serif;
    letter-spacing: 1.5px;
    color: rgb(229, 9, 20);
    text-align: left;
  }
  .container {
    font-family: serif;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding: 2rem;
  }
  .container-card {
    width: 20vw;
    background: gray;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: 10px 5px 5px #3d3d3d;
    background: rgb(0, 0, 0, 0.5);
  }
  .container-card h2,
  p {
    padding: 1rem 0;
  }
`;
