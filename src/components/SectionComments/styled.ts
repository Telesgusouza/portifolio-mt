import styled from "styled-components";

export const Container = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;

  position: relative;
`;

export const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 18px;

  p {
    font-size: 0.95rem;
    line-height: 127%;
  }

  article {
    padding: 15px 18px;
    border-radius: 5px;

    background-color: #343030;
    box-shadow: 0 0 35px rgba(52, 48, 48, 0.5);

    cursor: default;
  }

  div {
    display: flex;

    margin-top: 18px;
  }

  strong {
    padding-top: 4px;
    margin-left: 10px;

    white-space: pre-wrap;
  }

  img {
    width: 53px;
    height: 53px;
    object-fit: cover;
    border-radius: 50%;
  }

  @media (max-width: 870px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 570px) {
    grid-template-columns: 1fr;
  }
`;

export const LoadingCommentsContainer = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
  position: relative;

  @keyframes loading {
    0% {
      background-position: 0%;
    }

    50% {
      background-position: 100%;
    }

    100% {
      background-position: 0%;
    }
  }

  section {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 18px;

    div {
      height: 160px;

      border-radius: 5px;
      /* background-color: red; */
      background: transparent;

      background-image: linear-gradient(
        45deg,
        transparent,
        #c3c3c3,
        transparent
      );
      background-size: 400%;
      animation: loading 1s linear infinite;
    }
  }

  @media (max-width: 870px) {
    section {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 570px) {
    section {
      grid-template-columns: 1fr;
    }
  }
`;
