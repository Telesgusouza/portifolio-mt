import styled, { css } from "styled-components";

interface IProps {
  directionY?: boolean;
  directionX: boolean;
  width: number;
}

export const Hr = styled.hr<IProps>`
  width: 85%;
  @keyframes loading {
    from {
      width:  0%;
    }
   
    to {
      width: ${(props) => `${props.width}%`};
    }
  }
  animation-name: loading;
  animation-duration: .5s;
  animation-delay: .5s;
  animation-fill-mode: forwards; // Garante que o elemento mantenha a última keyframe após a animação terminar


  position: absolute;

  ${(props) =>
    props.directionY
      ? css`
          top: 0;
        `
      : css`
          bottom: 0;
        `}
  ${(props) =>
    props.directionX
      ? css`
          right: 0;
        `
      : css`
          left: 0;
        `}
`;
