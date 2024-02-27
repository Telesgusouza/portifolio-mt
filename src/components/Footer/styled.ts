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
    }

    li {
    }
  }
`;
