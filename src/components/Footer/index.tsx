import * as Styled from "./styled";

import iconInstagrem from '../../assets/icons/instagram.svg';
import iconWhatsapp from '../../assets/icons/whatsapp.svg';
import iconLinkedin from '../../assets/icons/linkedin.svg';

export default function Footer() {
  return (
    <Styled.Container>
      <hr />

      <Styled.ContainerContent className="box">
        <ul>
            <strong>Designer</strong>
            <span>Matheo Jecob</span>
            <li> <img src={iconInstagrem} alt="icone instagram" /> Instagram</li>
            <li> <img src={iconWhatsapp} alt="icone whatsapp" /> WhatsaApp</li>
            <li> <img src={iconLinkedin} alt="icone linkedin" /> Linkedin</li>
        </ul>
        <ul>
            <strong>Desenvolvedor</strong>
            <span>Gustavo Teles</span>
            <li> <img src={iconWhatsapp} alt="icone whatsapp" /> (11) 971108786</li>
            <li> <img src={iconLinkedin} alt="icone linkedin" /> Gustavo Teles</li>
        </ul>
      </Styled.ContainerContent>
    </Styled.Container>
  );
}
