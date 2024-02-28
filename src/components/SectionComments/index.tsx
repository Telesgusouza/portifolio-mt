import * as Styled from "./styled";

import noUser from "../../assets/imagens/24.jpg";
import Reveal from "../Reveal";
import Hr from "../Hr";

export default function SectionComments() {
  return (
    <Styled.Container>
      <Hr directionX={true} />

      <Styled.ContainerContent className="box">
        <Reveal delay={.05} > 
          <article>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea
              culpa architecto qui obcaecati labore ipsum debitis quaerat, vero
              deleniti aut, aliquam hic quasi impedit praesentium. Totam illo id
              culpa?"
            </p>

            <div>
              <img src={noUser} alt="foto de usuário" />
              <strong>Leticia Andrade Almeida</strong>
            </div>
          </article>
        </Reveal>

        <Reveal delay={.10} >
          <article>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea
              culpa architecto qui obcaecati labore ipsum debitis quaerat, vero
              deleniti aut, aliquam hic quasi impedit praesentium. Totam illo id
              culpa?"
            </p>

            <div>
              <img src={noUser} alt="foto de usuário" />
              <strong>Leticia Andrade Almeida</strong>
            </div>
          </article>
        </Reveal>

        <Reveal delay={.15} >
          <article>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ea
              culpa architecto qui obcaecati labore ipsum debitis quaerat, vero
              deleniti aut, aliquam hic quasi impedit praesentium. Totam illo id
              culpa?"
            </p>

            <div>
              <img src={noUser} alt="foto de usuário" />
              <strong>Leticia Andrade Almeida</strong>
            </div>
          </article>
        </Reveal>
      </Styled.ContainerContent>
    </Styled.Container>
  );
}
