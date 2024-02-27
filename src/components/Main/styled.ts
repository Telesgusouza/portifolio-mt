import styled from "styled-components";

export const Container = styled.main`
    height: 100%;
    min-height: calc(100vh - 80px);
    max-height: 500px;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    div {
        cursor: default;
    }

    h1 {
        font-size: 3.8rem;
        padding: 0;
        margin: 0;
        line-height: 90%;
    }

    p {
        font-size: 1.1rem;
        font-weight: 500;
    }
`;