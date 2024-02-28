import * as Styled from "./styled";

import icon from "../../assets/icons/iconM__5.png";

import iconInstagrem from "../../assets/icons/instagram.svg";
import iconWhatsapp from "../../assets/icons/whatsapp.svg";
import iconLinkedin from "../../assets/icons/linkedin.svg";

export default function Header() {
  return (
    <Styled.Container>
      <header className="box">
        <img src={icon} alt="icon" />

        <ul>
          <li>
            <img src={iconInstagrem} alt="icone ... " />
          </li>
          <li>
            <img src={iconLinkedin} alt="icone ... " />
          </li>
          <li>
            <img src={iconWhatsapp} alt="icone ... " />
          </li>
          <li>Sobre mim</li>
          <li>Trabalhos</li>
          {/* <li>Comentarios</li> */}
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
            <li>Orçamento</li>

            <li>
              <img src={iconInstagrem} alt="icone ... " />
            </li>
            <li>
              <img src={iconLinkedin} alt="icone ... " />
            </li>
            <li>
              <img src={iconWhatsapp} alt="icone ... " />
            </li>
          </ul>
        </Styled.MenuMobile>
      </header>
      <hr />
    </Styled.Container>
  );
}
