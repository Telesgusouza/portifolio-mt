import styled from "styled-components";

export const Container = styled.footer`
  padding-top: 40px;
  padding-bottom: 40px;

  position: relative;
  hr {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
  }
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: space-evenly;

  ul {
    display: flex;
    flex-direction: column;

    cursor: default;
  }

  li {
    display: flex;
    align-items: center;

    margin-bottom: 8px;

    cursor: pointer;

    &:nth-child(5) {
      margin-bottom: 0;
    }
  }

  img {
    width: 16px;
    margin-right: 7px;
  }

  strong {
    font-size: 1.18rem;
    line-height: 95%;
  }

  span {
    margin-bottom: 6px;
  }

  @media (max-width: 630px) {
    justify-content: space-around;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    text-align: center;

    ul {
      margin-bottom: 24px;
      justify-content: center;
    }

    li {
      width: fit-content;

      margin: 0 auto 8px auto;
    }
  }
`;
