import * as Styled from "./styled";

export default function Footer() {
  return (
    <Styled.Container>
      <hr />

      <Styled.ContainerContent className="box">
        <ul>
            <strong>Designer</strong>
            <span>Matheo Jecob</span>
            <li>Instagram</li>
            <li>WhatsaApp</li>
            <li>Linkedin</li>
        </ul>
        <ul>
            <strong>Desenvolvedor</strong>
            <span>Gustavo Teles</span>
            <li>Instagram</li>
            <li>WhatsaApp</li>
            <li>Linkedin</li>
        </ul>
      </Styled.ContainerContent>
    </Styled.Container>
  );
}
