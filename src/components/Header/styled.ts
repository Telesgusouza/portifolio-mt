import { styled } from "styled-components";

export const Container = styled.div`
  overflow: hidden;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 15px 20px;
  }

  img {
    width: 60px;
    height: fit-content;
  }

  ul {
    display: flex;

    @media (max-width: 570px) {
      display: none;
    }
  }

  hr {
    @keyframes loading {
      from {
        width: 0%;
      }

      to {
        width: 85%;
      }
    }
    animation-name: loading;
    animation-duration: 0.5s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }

  li {
    padding: 0 7px;
    margin-left: 8px;

    font-size: 1.1rem;

    position: relative;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      top: calc(100% + 5px);
      left: 50%;

      width: 0%;
      height: 2px;

      background-color: white;

      transition: all 0.15s ease;
    }

    &:hover::after {
      left: 0;
      width: 100%;
    }

    img {
      width: 20px;
    }
  }
`;

export const MenuMobile = styled.menu`
  display: none;

  ul {
    width: 100%;

    padding: 60px 20px 20px 20px;

    display: flex;
    align-items: center;

    position: absolute;
    top: calc(0% - 350px);

    right: 0;

    background-color: #191515;
    flex-direction: column;
    margin: 0;

    transition: top 0.3s ease;
  }

  li {
    width: 100%;
    max-width: 200px;

    padding: 0px 5px;
    margin-bottom: 15px;

    font-size: 1.1rem;
    text-align: center;

    &::after {
      top: calc(100% + 2px);
    }

    &:nth-child(4), &:nth-child(5), &:nth-child(6) {
      width: 100px;
    }
  }

  input {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 999;

    width: 35px;
    height: 35px;

    opacity: 0;

    cursor: pointer;
  }

  input:checked ~ nav {
    span {
      background-color: #fff;
      transition: transform 0.2s ease;
    }
    span:nth-child(1) {
      transform-origin: 0% 0%;
      transform: rotate(45deg) scale(1);
    }

    span:nth-child(2) {
      opacity: 0;
    }

    span:nth-child(3) {
      transform-origin: 0% 100%;
      transform: rotate(-45deg) scale(1);
    }
  }

  input:checked ~ ul {
    top: 0;
  }

  nav {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 900;

    width: 35px;
    height: 35px;

    span {
      display: block;
      width: 30px;
      height: 3px;
      margin-bottom: 7px;

      background-color: #cdcdcd;
      border-radius: 3px;
    }
  }

  @media (max-width: 570px) {
    display: flex;
  }
`;

export const MenuLines = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 900;

  width: 35px;
  height: 35px;

  span {
    display: block;
    width: 35px;
    height: 5px;
    margin-bottom: 10px;

    background-color: #cdcdcd;
    border-radius: 3px;
  }
`;
