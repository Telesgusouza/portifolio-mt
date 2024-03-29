import styled, { css } from "styled-components";

interface ILiPage {
  selected?: boolean;
}

export const Container = styled.section`
  position: relative;

  padding-top: 20px;
  padding-bottom: 25px;

  h4 {
    font-size: 2rem;
    text-transform: capitalize;
  }
`;

export const Filters = styled.div`
  display: flex;
  justify-content: flex-end;

  padding-bottom: 20px;

  ul {
    display: flex;
    flex-wrap: wrap;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  li {
    margin-top: 8px;
    padding: 2px 7px;
    text-transform: capitalize;
    margin-left: 7px;

    font-size: 1.2rem;

    position: relative;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      top: calc(100% - 1px);
      left: 50%;

      width: 0%;
      height: 1px;
      background-color: white;

      transition: all 0.2s ease;
    }

    &:hover::after {
      width: 100%;
      left: 0;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;

      width: 100%;
      height: 100%;

      opacity: 0;

      cursor: pointer;
    }

    input:checked ~ & {
      background-color: red;
    }
  }
`;

export const ContainerWorks = styled.div`
  width: 100%;
  max-width: 100vw;

  margin-top: 30px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;

  ul {
    height: fit-content;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 25px;
  }

  li {
    cursor: pointer;
  }

  img {
    width: 100%;
    background-color: #343030;

    transition: scale 0.3s ease-in-out;

    &:hover {
      scale: 1.05;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 1fr;
  }
`;

export const ForwardOrBack = styled.div`
  width: 100%;
  margin-top: 20px;

  display: flex;
  justify-content: flex-end;

  ul {
    display: flex;
  }

  li {
    padding: 0 6px;
    margin-left: 10px;

    font-size: 1.1rem;
    font-weight: 600;

    border: 1px solid white;

    cursor: pointer;

    transition: all 0.12s ease;

    &:hover {
      color: black;
      background-color: white;
    }
  }
`;

export const ShowDesign = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1100;

  padding: 20px;

  padding-top: 0;

  display: flex;
  flex-direction: column;

  align-items: center;
  /* justify-content: center; */

  width: 100%;
  height: 100%;

  background-color: rgba(25, 21, 21, 0.5);
`;

export const ShowDesignContent = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  max-width: 900px;
  max-height: calc(100vh - 90px);

  padding: 15px;

  background-color: #444040;

  overflow: auto;

  img {
    width: 100%;
    max-width: 500px;
    height: 100%;

    object-fit: cover;
  }

  div {
    margin-left: 18px;
  }

  h4 {
    font-size: 2.4rem;
    margin-bottom: 10px;
  }

  p {
    line-height: 125%;
  }

  @media (max-width: 850px) {
    flex-direction: column;

    div {
      margin-left: 0px;

      margin-top: 15px;
    }
  }
`;

export const ContainerButton = styled.div`
  width: 100%;
  padding: 10px 30px 20px 30px;


  button {
    border: none;
    padding: 4px 14px;
    color: white;
    background-color: #ff6961;
  }

  @media (max-width: 850px) {
    padding-left: 0;
    padding-bottom: 8px;
  }
`;

export const LiPage = styled.li<ILiPage>`
  ${(props) =>
    props.selected &&
    css`
      background-color: #fafafa;
      color: #040404;
    `}
`;

export const LoadingContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 25px;

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

  div {
    height: 200px;
    background: transparent;

    background-image: linear-gradient(45deg, transparent, #c3c3c3, transparent);
    background-size: 400%;
    animation: loading 1s linear infinite;
  }
`;
