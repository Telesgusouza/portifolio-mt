import styled from "styled-components";

export const Container = styled.section`
  padding-top: 60px;
  padding-bottom: 60px;

  position: relative;

  hr {
    position: absolute;
    top: 0;
    right: 0;
    width: 85%;
  }
`;

export const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 18px;

  p {
    font-size: .95rem;
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
