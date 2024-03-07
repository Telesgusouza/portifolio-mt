import * as Styled from "./styled";

interface IProps {
  directionY?: boolean;
  directionX?: boolean;
  width?: number;
}

export default function Hr({
  directionX = false,
  directionY = true,
  width = 85,
}: IProps) {
  // directiony: false = bottom, true = top
  // directionx: false = left, true = right

  return (
    <>
      <Styled.Hr
        directionX={directionX}
        directionY={directionY}
        width={width}
      />
    </>
  );
}
