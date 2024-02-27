import * as Styled from "./styled";

import icon from "../../assets/icons/iconM__5.png";

export default function Header() {
  return (
    <Styled.Container>
      <header className="box">
        <img src={icon} alt="icon" />

        <ul>
          <li>Sobre mim</li>
          <li>Trabalhos</li>
          <li>Comentarios</li>
          <li>Orçamento</li>
        </ul>
        <Styled.MenuMobile>
          <input type="checkbox" />
          <nav>
            <span></span>
            <span></span>
            <span></span>
          </nav>
          <ul>
            <li>Sobre mim</li>
            <li>Trabalhos</li>
            <li>Comentarios</li>
            <li>Orçamento</li>
          </ul>
        </Styled.MenuMobile>
      </header>
      <hr />
    </Styled.Container>
  );
}
