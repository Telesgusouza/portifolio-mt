import Hr from "../Hr";
import Reveal from "../Reveal";
import * as Styled from "./style";

export default function SectionBudget() {
  return (
    <Styled.Container>
      <Hr />
      <Styled.ContainerContent className="box">
        <Reveal>
        <h3>Orçamento</h3>
        <strong>Peça seu orçamento agora</strong>
        
        <label htmlFor="seu contato">
          Seu número
          <input type="text" placeholder="(11) 9 9999 9999" />
        </label>
        
        <label htmlFor="Descrição">
          Descreva seu projeto
          <span>e entraremos em contato com você</span>
          <textarea placeholder="Descrição do projeto" ></textarea>
        </label>

        <button>
            Enviar
        </button>
        </Reveal>
      </Styled.ContainerContent>
    </Styled.Container>
  );
}
