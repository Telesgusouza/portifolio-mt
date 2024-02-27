import Reveal from "../Reveal";
import * as Styled from "./styled";

export default function Main() {
  return (
    <Styled.Container className="box">
      <div>
        <Reveal initialY={-75} delay={.1} duration={.4}>
          <h1>Matheo Jacob</h1>
        </Reveal>
        <Reveal initialY={-50} delay={.3} >
          <p>Design Grafico</p>
        </Reveal>
      </div>
    </Styled.Container>
  );
}
