import styled from "styled-components";

export const Container = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;

  position: relative;
`;

export const ContainerContent = styled.form`
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.8rem;
    line-height: 100%;
  }

  strong {
    font-size: 1rem;
    font-weight: 500;

    margin-bottom: 12px;
  }

  label {
    display: flex;
    flex-direction: column;

    margin-top: 20px;
    margin-bottom: 18px;

    font-size: 1.1rem;
    line-height: 100%;
  }

  span {
    font-size: 0.9rem;
  }

  input,
  textarea {
    max-width: 400px;

    background-color: transparent;
    border: none;

    margin-top: 10px;

    color: white;
    font-size: 1rem;
    font-weight: 500;

    outline: none;
  }

  input {
    border-bottom: 1px solid #fafafa;
    padding: 0 12px 2px 12px;
  }

  textarea {
    resize: none;
    height: 100px;

    padding: 5px 8px;

    border: 1px solid #fafafa;
  }

  button {
    width: fit-content;
    padding: 4px 14px;

    border: 1px solid #fafafa;

    font-size: 1.05rem;
    font-weight: 600;
    color: white;

    background-color: transparent;

    transition: background 0.2s ease-in-out;

    &:hover {
      background-color: #fcfcfc;
      color: black;
    }
  }

  @media (max-width: 500px) {
    input,
    textarea {
      max-width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;
