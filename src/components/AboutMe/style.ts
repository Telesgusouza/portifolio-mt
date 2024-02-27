import styled from "styled-components";

export const Container = styled.section`
  padding: 50px 30px;

  position: relative;

  article {
    display: flex;
    flex-direction: row;

    margin: 0;
    padding: 0;
  }

  hr {
    position: absolute;
    top: 0;
    right: 0;

    width: 85%;
  }

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 50%;
  }

  div {
    padding-top: 30px;
    margin-left: 30px;
  }

  h3 {
    margin-bottom: 18px;
    font-size: 2.4rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1.1rem;
    font-weight: 500;
    white-space: pre-wrap;
  }

  @media (max-width: 790px) {
    article {
        flex-direction: column;
    }

    div {
        margin-left: 0;
    }
  }

  @media (max-width: 530px) {
    text-align: center;

    img {
      margin: 0 auto;
    }
  }

  @media (max-width: 380px) {
    img {
      width: 200px;
      height: 200px;
    }
  }

`;
